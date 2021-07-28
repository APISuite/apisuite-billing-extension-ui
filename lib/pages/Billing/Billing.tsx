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

  // Controls the visibility of all credit top-up packs
  const [wantsToTopUpCredits, setWantsToTopUpCredits] = useState(false)

  const handleWantsToTopUpCredits = () => {
    setWantsToTopUpCredits(!wantsToTopUpCredits)
  }

  // Controls the selection of credit top-up packs
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

  // Controls the visibility of the 'Confirm credit top-up' dialog
  const [openTopUpDialog, setOpenTopUpDialog] = useState(false)

  const handleOpenTopUpDialog = () => {
    setOpenTopUpDialog(!openTopUpDialog)
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

  const [
    wantsToStartSubscriptionPlan,
    setWantsToStartSubscriptionPlan,
  ] = useState(false)

  const handleWantsToStartSubscriptionPlan = () => {
    setWantsToStartSubscriptionPlan(!wantsToStartSubscriptionPlan)
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

  /* Dialog-related logic */

  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDialogClose = () => {
    setDialogOpen(false)

    // defer clear
    setTimeout(() => {
      clearSubscriptionInfoAction()
    }, 500)
  }

  useEffect(() => {
    if (dialogInfo.transKeys.title.length) {
      setDialogOpen(true)
    }
  }, [dialogInfo.transKeys.title])

  const generateWarning = () => {
    const replacementTagsArray = []

    /* The 'dialogToSWarning.text' translation includes a replacement tag (<0></0>).
    If a 'dialogToSWarning.url' translation exists and is not empty, thisg will be
    replaced by a <Link> tag, otherwise, no replacement takes place and the translation is rendered normally. */
    if (t('dialogToSWarning.url')) {
      replacementTagsArray.push(
        <Link
          style={{
            color: palette.info.main,
            fontWeight: 400,
          }}
          key="warningUrl"
          rel="noopener noreferrer"
          target="_blank"
          to={t('dialogToSWarning.url')}
        />
      )
    }

    return (
      <Typography
        style={{ color: palette.text.primary, fontWeight: 300 }}
        variant="body2"
      >
        <Trans i18nKey="dialogToSWarning.text" t={t}>
          {replacementTagsArray}
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
                  onClick={handleOpenTopUpDialog}
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
              onClick={handleWantsToStartSubscriptionPlan}
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

      {/* Credit top-up dialog */}
      <CustomizableDialog
        actions={[
          <Button
            className={classes.dialogCancelButton}
            key="cancelCreditTopUp"
            onClick={handleOpenTopUpDialog}
            variant="outlined"
          >
            {t('confirmCreditTopUpDialog.cancelButtonLabel')}
          </Button>,
          <Button
            className={classes.dialogConfirmButton}
            key="openTopUpDialog"
            onClick={() => {
              purchaseCreditsAction(currentlySelectedCreditPack.idOfCreditPack)
            }}
          >
            {t('confirmCreditTopUpDialog.confirmButtonLabel')}
          </Button>,
        ]}
        icon="warning"
        onClose={handleOpenTopUpDialog}
        open={openTopUpDialog}
        subText={t('confirmCreditTopUpDialog.subText')}
        text={t('confirmCreditTopUpDialog.text', {
          creditAmount: currentlySelectedCreditPack.creditsInCreditPack,
        })}
        title={t('confirmCreditTopUpDialog.title')}
      >
        {generateWarning()}
      </CustomizableDialog>

      {/* Subscription-related dialogs */}
      <CustomizableDialog
        actions={[
          <Button
            key="cancelSubscriptionPlanStart"
            onClick={handleWantsToStartSubscriptionPlan}
            variant="outlined"
          >
            {t('startSubscriptionDialog.cancelButtonLabel')}
          </Button>,
          <Button
            className={classes.dialogConfirmButton}
            key="confirmSubscriptionPlanStart"
            onClick={() => {
              startSubscriptionAction(
                currentlySelectedSubscriptionPlan.idOfSubscriptionPlan
              )
            }}
          >
            {t('startSubscriptionDialog.confirmButtonLabel')}
          </Button>,
        ]}
        icon="warning"
        onClose={handleWantsToStartSubscriptionPlan}
        open={wantsToStartSubscriptionPlan}
        subText={t('startSubscriptionDialog.subText')}
        text={t('startSubscriptionDialog.text', {
          selectedSubscriptionPlan:
            currentlySelectedSubscriptionPlan.nameOfSubscriptionPlan,
        })}
        title={t('startSubscriptionDialog.title')}
      >
        {generateWarning()}
      </CustomizableDialog>

      <CustomizableDialog
        actions={[
          <Button
            key="cancel-sub-confirm"
            onClick={handleDialogClose}
            variant="outlined"
          >
            {t('closeCTA')}
          </Button>,
        ]}
        icon={dialogInfo.type}
        onClose={handleDialogClose}
        open={dialogOpen}
        subText={t(dialogInfo.transKeys.subText)}
        text={t(dialogInfo.transKeys.text)}
        title={t(dialogInfo.transKeys.title)}
      />

      <CustomizableDialog
        actions={[
          <Button
            className={classes.dialogCancelButton}
            key="cancelSubscriptionPlanChange"
            onClick={handleWantsToChangeSubscriptionPlan}
            variant="outlined"
          >
            {t('changeSubscriptionDialog.cancelButtonLabel')}
          </Button>,
          <Button
            className={classes.dialogConfirmButton}
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
        icon="warning"
        onClose={handleWantsToChangeSubscriptionPlan}
        open={wantsToChangeSubscriptionPlan}
        subText={t('changeSubscriptionDialog.subText')}
        text={t('changeSubscriptionDialog.text', {
          newlySelectedSubscriptionPlan:
            currentlySelectedSubscriptionPlan.nameOfSubscriptionPlan,
        })}
        title={t('changeSubscriptionDialog.title')}
      >
        {generateWarning()}
      </CustomizableDialog>
    </>
  )
}

export default Billing
