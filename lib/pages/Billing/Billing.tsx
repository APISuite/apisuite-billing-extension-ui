import React, { useEffect, useState } from 'react'
import { Button, useTranslation } from '@apisuite/fe-base'

import { BillingProps } from './types'
import CreditPacksCatalog from '../../components/CreditPacksCatalog/CreditPacksCatalog'
import SubscriptionPlansCatalog from '../../components/SubscriptionPlansCatalog'
import SubscriptionsTable from '../../components/SubscriptionsTable'
import TransactionsTable from '../../components/TransactionsTable'
import useStyles from './styles'
import { CustomizableDialog } from '../../components/CustomizableDialog/CustomizableDialog'

const Billing: React.FC<BillingProps> = ({
  allCreditPacks,
  allSubscriptionPlans,
  allUserDetails,
  allUserTransactions,
  dialogInfo,
  getAllCreditPacksAction,
  getAllSubscriptionPlansAction,
  getAllUserDetailsAction,
  getAllUserTransactionsAction,
  purchaseCreditsAction,
  startSubscriptionAction,
  cancelSubscriptionAction,
  clearSubscriptionInfoAction,
  successfullySubscribedToPlan,
  user,
}) => {
  const classes = useStyles()
  const trans = useTranslation()
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

  return (
    <>
      <main className={`page-container ${classes.billingContentContainer}`}>
        <p className={classes.title}>{t('title')}</p>

        <p className={classes.subtitle}>{t('subtitle')}</p>

        {/* 'Your balance' section */}

        <p className={classes.sectionTitle}>{t('yourBalance')}</p>

        <div
          className={
            wantsToTopUpCredits
              ? classes.yourCreditBalanceContainerWithCreditPacks
              : classes.yourCreditBalanceContainerWithoutCreditPacks
          }
        >
          <div className={classes.creditBalanceContainer}>
            <p>{t('availableCredits')}</p>

            <p>{allUserDetails.userCredits}</p>
          </div>

          {wantsToTopUpCredits ? (
            <div>
              <hr className={classes.separator} />

              {allCreditPacks.length !== 0 ? (
                <>
                  <p className={classes.creditPacksTitle}>
                    {t('creditPacksTitle')}
                  </p>

                  <CreditPacksCatalog
                    arrayOfCreditPacks={allCreditPacks}
                    currentlySelectedCreditPack={currentlySelectedCreditPack}
                    handleCreditPackSelection={handleCreditPackSelection}
                  />
                </>
              ) : (
                <p className={classes.retrievingAllAvailableCreditPacks}>
                  {t('retrievingCreditPacks')}
                </p>
              )}

              <div>
                <Button
                  className={
                    currentlySelectedCreditPack.idOfCreditPack
                      ? classes.enabledPurchaseCreditsButton
                      : classes.disabledPurchaseCreditsButton
                  }
                  onClick={() => {
                    purchaseCreditsAction(
                      currentlySelectedCreditPack.idOfCreditPack
                    )
                  }}
                >
                  {t('purchaseCreditsButtonLabel')}
                </Button>

                <Button
                  className={classes.cancelCreditsPurchaseButton}
                  onClick={handleWantsToTopUpCredits}
                >
                  {t('cancelCreditsPurchaseButtonLabel')}
                </Button>
              </div>
            </div>
          ) : (
            <Button
              className={classes.addCreditsButton}
              onClick={handleWantsToTopUpCredits}
            >
              {t('addCreditsButtonLabel')}
            </Button>
          )}
        </div>

        {/* 'Your subscription' section */}

        <p className={classes.sectionTitle}>{t('yourSubscriptionsTitle')}</p>

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

            <p className={classes.subscriptionSelectionTitle}>
              {t('chooseNewSubscription')}
            </p>

            <SubscriptionPlansCatalog
              activeSubscriptionPlanID={parseInt(allUserDetails.subscriptionID)}
              arrayOfSubscriptionPlans={allSubscriptionPlans}
              currentlySelectedSubscriptionPlan={
                currentlySelectedSubscriptionPlan
              }
              handleSubscriptionPlanSelection={handleSubscriptionPlanSelection}
            />

            <Button
              className={
                hasSelectedSubscriptionPlan
                  ? classes.enabledStartSubscriptionButton
                  : classes.disabledStartSubscriptionButton
              }
              onClick={handleWantsToChangeSubscriptionPlan}
            >
              {t('startNewSubscriptionButtonLabel')}
            </Button>
          </>
        ) : (
          <>
            <p className={classes.noActiveSubscriptionText}>
              {t('noActiveSubscriptions')}
            </p>

            {allSubscriptionPlans.length !== 0 ? (
              <>
                <p className={classes.subscriptionSelectionTitle}>
                  {t('chooseSubscription')}
                </p>

                <SubscriptionPlansCatalog
                  arrayOfSubscriptionPlans={allSubscriptionPlans}
                  currentlySelectedSubscriptionPlan={
                    currentlySelectedSubscriptionPlan
                  }
                  handleSubscriptionPlanSelection={
                    handleSubscriptionPlanSelection
                  }
                />
              </>
            ) : (
              <p className={classes.retrievingAllAvailableSubscriptionPlans}>
                {t('retrievingSubscriptionPlans')}
              </p>
            )}

            <Button
              className={
                hasSelectedSubscriptionPlan
                  ? classes.enabledStartSubscriptionButton
                  : classes.disabledStartSubscriptionButton
              }
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
            <p className={classes.sectionTitle}>
              {t('transactionHistoryTitle')}
            </p>

            <p className={classes.sectionSubtitle}>
              {t('transactionHistorySubtitle')}
            </p>

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
      />
    </>
  )
}

export default Billing
