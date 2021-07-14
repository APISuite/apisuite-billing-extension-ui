import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Trans,
  Typography,
  useTheme,
  useTranslation,
} from '@apisuite/fe-base'

import { CustomizableDialog } from '../../components/CustomizableDialog/CustomizableDialog'
import CreditPacksCatalog from '../../components/CreditPacksCatalog/CreditPacksCatalog'
import SubscriptionPlansCatalog from '../../components/SubscriptionPlansCatalog'
import SubscriptionsTable from '../../components/SubscriptionsTable'
import TransactionsTable from '../../components/TransactionsTable'
import { BillingProps } from './types'
import useStyles from './styles'
import config from '../../helpers/config'
import Link from '../../components/Link'

const Billing: React.FC<BillingProps> = ({
  allCreditPacks,
  allSubscriptionPlans,
  allUserDetails,
  allUserTransactions,
  cancelSubscriptionAction,
  clearSubscriptionInfoAction,
  dialogInfo,
  getAllCreditPacksAction,
  getAllSubscriptionPlansAction,
  getAllUserDetailsAction,
  getAllUserTransactionsAction,
  hasRetrievedAllCreditPacks,
  hasRetrievedAllSubscriptionPlans,
  purchaseCreditsAction,
  startSubscriptionAction,
  successfullySubscribedToPlan,
  user,
}) => {
  const classes = useStyles()
  const trans = useTranslation()
  const { palette } = useTheme()
  const [dialogOpen, setDialogOpen] = useState(false)

  const t = (str: string, ...args) => {
    return trans.t(`extensions.billing.${str}`, ...args)
  }

  /* Triggers the retrieval and storage (on the app's Store, under 'billing')
  of all credit packs and subscription plans we presently offer, as well as
  all information we have on a user and his transactions. */
  useEffect(() => {
    getAllCreditPacksAction('price', 'asc')
    getAllSubscriptionPlansAction('price', 'asc')
    getAllUserDetailsAction(user.id)
    getAllUserTransactionsAction()
  }, [successfullySubscribedToPlan])

  useEffect(() => {
    if (dialogInfo.transKeys.title.length) {
      setDialogOpen(true)
    }
  }, [dialogInfo.transKeys.title])

  /* Credits logic */

  const showAllCreditPacks = () => {
    if (!hasRetrievedAllCreditPacks) {
      return (
        <Box clone mb={3}>
          <Typography variant="body2">{t('retrievingCreditPacks')}</Typography>
        </Box>
      )
    }

    if (allCreditPacks.length) {
      return (
        <>
          <Typography variant="body2" color="inherit" gutterBottom>
            {t('creditPacksTitle')}
          </Typography>

          <CreditPacksCatalog
            arrayOfCreditPacks={allCreditPacks}
            currentlySelectedCreditPack={currentlySelectedCreditPack}
            handleCreditPackSelection={handleCreditPackSelection}
          />
        </>
      )
    } else {
      return (
        <Box clone mb={3}>
          <Typography gutterBottom variant="body2">
            {t('noCreditPacksAvailable')}
          </Typography>
        </Box>
      )
    }
  }

  const [wantsToTopUpCredits, setWantsToTopUpCredits] = useState(false)

  const handleWantsToTopUpCredits = () => {
    setWantsToTopUpCredits(!wantsToTopUpCredits)
  }

  const [hasSelectedCreditPack, setHasSelectedCreditPack] = useState(false)

  const [
    currentlySelectedCreditPack,
    setCurrentlySelectedCreditPack,
  ] = useState({
    creditsInCreditPack: 0,
    idOfCreditPack: 0,
    nameOfCreditPack: '',
    priceOfCreditPack: 0,
  })

  const handleCreditPackSelection = (idOfSelectedCreditPack: number) => {
    if (
      hasSelectedCreditPack &&
      currentlySelectedCreditPack.idOfCreditPack === idOfSelectedCreditPack
    ) {
      setHasSelectedCreditPack(false)

      setCurrentlySelectedCreditPack({
        creditsInCreditPack: 0,
        idOfCreditPack: 0,
        nameOfCreditPack: '',
        priceOfCreditPack: 0,
      })
    } else {
      const selectedCreditPack = allCreditPacks.find((creditPack) => {
        return creditPack.idOfCreditPack === idOfSelectedCreditPack
      })

      setHasSelectedCreditPack(true)

      setCurrentlySelectedCreditPack(selectedCreditPack)
    }
  }

  /* Subscriptions logic */

  const showAllSubscriptionPlans = () => {
    if (!hasRetrievedAllSubscriptionPlans) {
      return (
        <Box clone mb={3}>
          <Typography gutterBottom variant="body2">
            {t('retrievingSubscriptionPlans')}
          </Typography>
        </Box>
      )
    }

    if (allSubscriptionPlans.length) {
      return (
        <>
          <SubscriptionPlansCatalog
            activeSubscriptionPlanID={parseInt(
              allUserDetails.subscriptionID,
              10
            )}
            arrayOfSubscriptionPlans={allSubscriptionPlans}
            currentlySelectedSubscriptionPlan={
              currentlySelectedSubscriptionPlan
            }
            handleSubscriptionPlanSelection={handleSubscriptionPlanSelection}
          />
        </>
      )
    } else {
      return (
        <Box clone mb={3}>
          <Typography gutterBottom variant="body2">
            {t('noSubscriptionPlansAvailable')}
          </Typography>
        </Box>
      )
    }
  }

  const [
    hasSelectedSubscriptionPlan,
    setHasSelectedSubscriptionPlan,
  ] = useState(false)

  const [
    currentlySelectedSubscriptionPlan,
    setCurrentlySelectedSubscriptionPlan,
  ] = useState({
    creditsInSubscriptionPlan: 0,
    idOfSubscriptionPlan: 0,
    nameOfSubscriptionPlan: '',
    periodicityOfSubscriptionPlan: '',
    priceOfSubscriptionPlan: 0,
  })

  const handleSubscriptionPlanSelection = (
    idOfSelectedSubscriptionPlan: number
  ) => {
    if (
      hasSelectedSubscriptionPlan &&
      currentlySelectedSubscriptionPlan.idOfSubscriptionPlan ===
        idOfSelectedSubscriptionPlan
    ) {
      setHasSelectedSubscriptionPlan(false)

      setCurrentlySelectedSubscriptionPlan({
        creditsInSubscriptionPlan: 0,
        idOfSubscriptionPlan: 0,
        nameOfSubscriptionPlan: '',
        periodicityOfSubscriptionPlan: '',
        priceOfSubscriptionPlan: 0,
      })
    } else {
      const selectedSubscriptionPlan = allSubscriptionPlans.find(
        (subscriptionPlan) => {
          return (
            subscriptionPlan.idOfSubscriptionPlan ===
            idOfSelectedSubscriptionPlan
          )
        }
      )

      setHasSelectedSubscriptionPlan(true)

      setCurrentlySelectedSubscriptionPlan(selectedSubscriptionPlan)
    }
  }

  const handleDialogClose = () => {
    setDialogOpen(false)

    // defer clear
    setTimeout(() => {
      clearSubscriptionInfoAction()
    }, 500)
  }

  const [
    wantsToChangeSubscriptionPlan,
    setWantsToChangeSubscriptionPlan,
  ] = useState(false)

  const handleWantsToChangeSubscriptionPlan = () => {
    setWantsToChangeSubscriptionPlan(!wantsToChangeSubscriptionPlan)
  }

  useEffect(() => {
    if (successfullySubscribedToPlan) {
      setCurrentlySelectedSubscriptionPlan({
        creditsInSubscriptionPlan: 0,
        idOfSubscriptionPlan: 0,
        nameOfSubscriptionPlan: '',
        periodicityOfSubscriptionPlan: '',
        priceOfSubscriptionPlan: 0,
      })
      setHasSelectedSubscriptionPlan(false)
      setWantsToChangeSubscriptionPlan(false)
    }
  }, [successfullySubscribedToPlan])

  const generateWarning = () => {
    return (
      <Typography
        style={{ color: palette.text.primary, fontWeight: 300 }}
        variant="body2"
      >
        {/* The following translation includes a replacement tag (<0>...</0>).
            This tag will be replaced by a <Link> tag if a URL for our warning is provided,
            or by an empty tag otherwise.
        */}
        <Trans i18nKey="changeSubscriptionDialog.warning.text" t={t}>
          {[
            t('changeSubscriptionDialog.warning.url') ? (
              <Link
                style={{
                  color: palette.info.main,
                  fontWeight: 400,
                }}
                key="warningUrl"
                rel="noopener noreferrer"
                target="_blank"
                to={t('changeSubscriptionDialog.warning.url')}
              />
            ) : (
              <></>
            ),
          ]}
        </Trans>
      </Typography>
    )
  }

  return (
    <>
      <main className={`page-container ${classes.billingContentContainer}`}>
        <Typography variant="h2">{t('title')}</Typography>

        <Box clone mb={5}>
          <Typography variant="body1" color="textSecondary">
            {t('subtitle')}
          </Typography>
        </Box>

        {/* 'Your balance' section */}

        <Box mt={1.5} mb={3}>
          <Typography variant="h3">{t('yourBalance')}</Typography>
        </Box>

        <div
          className={
            wantsToTopUpCredits
              ? classes.yourCreditBalanceContainerWithCreditPacks
              : classes.yourCreditBalanceContainerWithoutCreditPacks
          }
        >
          <Box color={palette.common.white}>
            <Typography variant="body1" color="inherit">
              {t('availableCredits')}
            </Typography>

            <Typography variant="h1" color="inherit">
              {allUserDetails.userCredits}
            </Typography>
          </Box>

          {wantsToTopUpCredits ? (
            <Box color={palette.common.white}>
              <hr className={classes.separator} />

              {showAllCreditPacks()}

              <div>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  disableElevation
                  disabled={!currentlySelectedCreditPack.idOfCreditPack}
                  onClick={() => {
                    purchaseCreditsAction(
                      currentlySelectedCreditPack.idOfCreditPack
                    )
                  }}
                >
                  {t('purchaseCreditsButtonLabel')}
                </Button>

                <Box
                  clone
                  ml={1}
                  style={{ backgroundColor: palette.common.white }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    disableElevation
                    onClick={handleWantsToTopUpCredits}
                  >
                    {t('cancelCreditsPurchaseButtonLabel')}
                  </Button>
                </Box>
              </div>
            </Box>
          ) : (
            <Button
              variant="contained"
              size="large"
              color="primary"
              disableElevation
              onClick={handleWantsToTopUpCredits}
            >
              {t('addCreditsButtonLabel')}
            </Button>
          )}
        </div>

        {/* 'Your subscription' section */}
        <Box clone mb={3}>
          <Typography variant="h3">{t('yourSubscriptionsTitle')}</Typography>
        </Box>

        {allUserDetails.subscriptionID ? (
          <>
            <SubscriptionsTable
              arrayOfSubs={[
                {
                  subName: allSubscriptionPlans.find((subscriptionPlan) => {
                    return (
                      subscriptionPlan.idOfSubscriptionPlan ===
                      parseInt(allUserDetails.subscriptionID)
                    )
                  })?.nameOfSubscriptionPlan,
                  subNextBillingDate: allUserDetails.nextPaymentDate,
                },
              ]}
              onCancelSubscription={cancelSubscriptionAction}
            />

            <Box clone mb={5}>
              <Typography variant="h6">{t('chooseNewSubscription')}</Typography>
            </Box>

            {showAllSubscriptionPlans()}

            <Button
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              disabled={!hasSelectedSubscriptionPlan}
              onClick={handleWantsToChangeSubscriptionPlan}
            >
              {t('startNewSubscriptionButtonLabel')}
            </Button>
          </>
        ) : (
          <>
            <Box clone mb={3}>
              <Typography variant="body1">
                {t('noActiveSubscriptions')}
              </Typography>
            </Box>

            <Box clone mb={3}>
              <Typography variant="h3">{t('chooseSubscription')}</Typography>
            </Box>

            {showAllSubscriptionPlans()}

            {/* FIXME */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              disabled={!hasSelectedSubscriptionPlan}
              onClick={() => {
                startSubscriptionAction(
                  currentlySelectedSubscriptionPlan.idOfSubscriptionPlan
                )
              }}
            >
              {t('startSubscriptionButtonLabel')}
            </Button>
          </>
        )}

        {/* 'Transaction history' section */}

        {allUserTransactions.length !== 0 && (
          <>
            <Box clone mt={5} mb={1.5}>
              <Typography variant="h3">
                {t('transactionHistoryTitle')}
              </Typography>
            </Box>

            <Box clone mb={3}>
              <Typography variant="body1" color="textSecondary">
                {t('transactionHistorySubtitle')}
              </Typography>
            </Box>

            <TransactionsTable transactions={allUserTransactions} />
          </>
        )}
      </main>

      <CustomizableDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        icon={dialogInfo.type}
        title={t(dialogInfo.transKeys.title)}
        text={t(dialogInfo.transKeys.text)}
        subText={t(dialogInfo.transKeys.subText)}
        actions={[
          <Button
            key="cancel-sub-confirm"
            variant="outlined"
            onClick={handleDialogClose}
          >
            {t('closeCTA')}
          </Button>,
        ]}
      />

      <CustomizableDialog
        icon="warning"
        open={wantsToChangeSubscriptionPlan}
        onClose={handleWantsToChangeSubscriptionPlan}
        title={t('changeSubscriptionDialog.title')}
        text={t('changeSubscriptionDialog.text', {
          newlySelectedSubscriptionPlan:
            currentlySelectedSubscriptionPlan.nameOfSubscriptionPlan,
        })}
        subText={t('changeSubscriptionDialog.subText')}
        actions={[
          <Button
            variant="outlined"
            className={classes.cancelSubscriptionPlanChangeButton}
            key="cancelSubscriptionPlanChange"
            onClick={handleWantsToChangeSubscriptionPlan}
          >
            {t('changeSubscriptionDialog.cancelButtonLabel')}
          </Button>,
          <Button
            className={classes.confirmSubscriptionPlanChangeButton}
            key="confirmSubscriptionPlanChange"
            onClick={() => {
              startSubscriptionAction(
                currentlySelectedSubscriptionPlan.idOfSubscriptionPlan
              )
            }}
          >
            {t('changeSubscriptionDialog.confirmButtonLabel')}
          </Button>,
        ]}
      >
        {generateWarning()}
      </CustomizableDialog>
    </>
  )
}

export default Billing
