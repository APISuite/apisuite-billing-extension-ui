import React, { useEffect, useState } from 'react'
import { Button, useTranslation } from '@apisuite/fe-base'

import { BillingProps } from './types'
import CreditPacksCatalog from 'components/CreditPacksCatalog/CreditPacksCatalog'
import Link from 'components/Link'
import SubscriptionPlansCatalog from 'components/SubscriptionPlansCatalog'
import SubscriptionsTable from 'components/SubscriptionsTable'
import TransactionsTable from 'components/TransactionsTable'
import useStyles from './styles'

const Billing: React.FC<BillingProps> = ({
  allCreditPacks,
  allSubscriptionPlans,
  allUserDetails,
  allUserTransactions,
  getAllCreditPacksAction,
  getAllSubscriptionPlansAction,
  getAllUserDetailsAction,
  getAllUserTransactionsAction,
  user,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  function t(str: string) {
    return trans.t(`extensions.${str}`)
  }

  /* Triggers the retrieval and storage (on the app's Store, under 'billing')
  of all credit packs and subscription plans we presently offer, as well as
  all information we have on a user and his transactions. */
  useEffect(() => {
    getAllCreditPacksAction()
    getAllSubscriptionPlansAction()
    getAllUserDetailsAction(user.id)
    getAllUserTransactionsAction()
  }, [])

  /* Credits logic */

  const [wantsToTopUpCredits, setWantsToTopUpCredits] = React.useState(false)

  const handleWantsToTopUpCredits = () => {
    setWantsToTopUpCredits(!wantsToTopUpCredits)
  }

  const [hasSelectedCreditPack, setHasSelectedCreditPack] = React.useState(
    false
  )
  const [
    currentlySelectedCreditPack,
    setCurrentlySelectedCreditPack,
  ] = React.useState({
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
  ] = React.useState({
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

  return (
    <main className={`page-container ${classes.billingContentContainer}`}>
      <p className={classes.title}>{t('billing.title')}</p>

      <p className={classes.subtitle}>{t('billing.subtitle')}</p>

      {/* 'Your balance' section */}

      <p className={classes.sectionTitle}>{t('billing.yourBalance')}</p>

      <div
        className={
          wantsToTopUpCredits
            ? classes.yourCreditBalanceContainerWithCreditPacks
            : classes.yourCreditBalanceContainerWithoutCreditPacks
        }
      >
        <div className={classes.creditBalanceContainer}>
          <p>{t('billing.availableCredits')}</p>

          <p>{allUserDetails.userCredits}</p>
        </div>

        {wantsToTopUpCredits ? (
          <div>
            <hr className={classes.separator} />

            {allCreditPacks.length ? (
              <>
                <p className={classes.creditPacksTitle}>
                  {t('billing.creditPacksTitle')}
                </p>

                <CreditPacksCatalog
                  arrayOfCreditPacks={allCreditPacks}
                  currentlySelectedCreditPack={currentlySelectedCreditPack}
                  handleCreditPackSelection={handleCreditPackSelection}
                />
              </>
            ) : (
              <p className={classes.retrievingAllAvailableCreditPacks}>
                {t('billing.retrievingCreditPacks')}
              </p>
            )}

            <div>
              <Link
                className={
                  currentlySelectedCreditPack.idOfCreditPack
                    ? classes.enabledPurchaseCreditsButton
                    : classes.disabledPurchaseCreditsButton
                }
                href="/billing/creditpayment"
              >
                {t('billing.purchaseCreditsButtonLabel')}
              </Link>

              <Button
                className={classes.cancelCreditsPurchaseButton}
                onClick={handleWantsToTopUpCredits}
              >
                {t('billing.cancelCreditsPurchaseButtonLabel')}
              </Button>
            </div>
          </div>
        ) : (
          <Button
            className={classes.addCreditsButton}
            onClick={handleWantsToTopUpCredits}
          >
            {t('billing.addCreditsButtonLabel')}
          </Button>
        )}
      </div>

      {/* 'Your subscription' section */}

      <p className={classes.sectionTitle}>
        {t('billing.yourSubscriptionsTitle')}
      </p>

      {allUserDetails.subscriptionID ? (
        <>
          <SubscriptionsTable
            arrayOfSubs={[
              {
                subName: 'Basic plan',
                subNextBillingDate: '13 August 2021',
              },
            ]}
          />

          <Button className={classes.editPaymentDetailsButton}>
            {t('billing.editPaymentInfoButtonLabel')}
          </Button>
        </>
      ) : (
        <>
          <p className={classes.noActiveSubscriptionText}>
            {t('billing.noActiveSubscriptions')}
          </p>

          {allSubscriptionPlans.length ? (
            <>
              <p className={classes.subscriptionSelectionTitle}>
                {t('billing.chooseSubscription')}
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
              {t('billing.retrievingSubscriptionPlans')}
            </p>
          )}

          <Link
            className={
              hasSelectedSubscriptionPlan
                ? classes.enabledStartSubscriptionButton
                : classes.disabledStartSubscriptionButton
            }
            href="/billing/subscriptionpayment"
          >
            {t('billing.startSubscriptionButtonLabel')}
          </Link>
        </>
      )}

      {/* 'Transaction history' section */}

      {allUserTransactions.length && (
        <>
          <p className={classes.sectionTitle}>
            {t('billing.transactionHistoryTitle')}
          </p>

          <p className={classes.sectionSubtitle}>
            {t('billing.transactionHistorySubtitle')}
          </p>

          <TransactionsTable arrayOfTransactions={allUserTransactions} />
        </>
      )}
    </main>
  )
}

export default Billing
