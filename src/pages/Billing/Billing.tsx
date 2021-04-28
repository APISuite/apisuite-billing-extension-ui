import React, { useEffect, useState } from 'react'
import { Button } from '@apisuite/fe-base'

import { BillingProps } from './types'
import CreditPacksCatalog from 'components/CreditPacksCatalog/CreditPacksCatalog'
import Link from 'components/Link'
import SubscriptionPlansCatalog from 'components/SubscriptionPlansCatalog'
import SubscriptionsTable from 'components/SubscriptionsTable'
import TransactionsTable from 'components/TransactionsTable'
import useStyles from './styles'
import { hasPurchasedCreditsAction } from './ducks'

const Billing: React.FC<BillingProps> = ({
  allCreditPacks,
  allSubscriptionPlans,
  allUserTransactions,

  hasPurchasedCredits,

  getAllCreditPacksAction,
  getAllSubscriptionPlansAction,
  getAllUserTransactionsAction,
}) => {
  const classes = useStyles()

  /* Triggers the retrieval and storage (on the app's Store, under 'billing')
  of all credit packs and subscription plans we presently offer, as well as
  all information we have on user transactions. */
  useEffect(() => {
    getAllCreditPacksAction()
    getAllSubscriptionPlansAction()
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

  /* Temporary */

  const [hasStartedSubscription, setHasStartedSubscription] = useState(false)

  const handleSubscriptionStart = () => {
    setHasStartedSubscription(true)
  }

  return (
    <main className={`page-container ${classes.billingContentContainer}`}>
      <p className={classes.title}>Billing</p>

      <p className={classes.subtitle}>
        Manage your subcription, top-up your credit balance, and edit your
        payment information.
      </p>

      {/* 'Your balance' section */}

      <p className={classes.sectionTitle}>Your balance</p>

      <div
        className={
          wantsToTopUpCredits
            ? classes.yourCreditBalanceContainerWithCreditPacks
            : classes.yourCreditBalanceContainerWithoutCreditPacks
        }
      >
        <div className={classes.creditBalanceContainer}>
          <p>Available credits</p>

          <p>{hasPurchasedCredits ? '10000' : '0'}</p>
        </div>

        {wantsToTopUpCredits ? (
          <div>
            <hr className={classes.separator} />

            {allCreditPacks.length !== 0 ? (
              <>
                <p className={classes.creditPacksTitle}>Select a credit pack</p>

                <CreditPacksCatalog
                  arrayOfCreditPacks={allCreditPacks}
                  currentlySelectedCreditPack={currentlySelectedCreditPack}
                  handleCreditPackSelection={handleCreditPackSelection}
                />
              </>
            ) : (
              <p className={classes.retrievingAllAvailableCreditPacks}>
                Retrieving all available credit packs...
              </p>
            )}

            <div>
              <Link
                className={
                  currentlySelectedCreditPack.idOfCreditPack !== 0
                    ? classes.enabledPurchaseCreditsButton
                    : classes.disabledPurchaseCreditsButton
                }
                href="/billing/creditpayment"
              >
                Purchase credits
              </Link>

              <Button
                className={classes.cancelCreditsPurchaseButton}
                onClick={handleWantsToTopUpCredits}
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <Button
            className={classes.addCreditsButton}
            onClick={handleWantsToTopUpCredits}
          >
            Add credits
          </Button>
        )}
      </div>

      {/* 'Your subscription' section */}

      <p className={classes.sectionTitle}>Your subscription</p>

      {hasStartedSubscription ? (
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
            Edit payment information
          </Button>
        </>
      ) : (
        <>
          <p className={classes.noActiveSubscriptionText}>
            You don't have any active subscriptions.
          </p>

          {allSubscriptionPlans.length !== 0 ? (
            <>
              <p className={classes.subscriptionSelectionTitle}>
                Choose subscription
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
              Retrieving all available subscription plans...
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
            Start subscription
          </Link>
        </>
      )}

      {/* 'Transaction history' section */}

      {(hasPurchasedCredits || hasStartedSubscription) && (
        <>
          <p className={classes.sectionTitle}>Transaction history</p>

          <p className={classes.sectionSubtitle}>
            See your last transaction movements in your account.
          </p>

          <TransactionsTable
            arrayOfTransactions={[
              {
                transactionAmount: '€ 100',
                transactionCompleted: true,
                transactionReference: 'b4605542-cad0-4ca3-83e1-1d9177a92438',
                transactionDate: '30th April 2021, 09:30',
                transactionName: 'Credit pack: 10000 credits',
              },
            ]}
          />
        </>
      )}
    </main>
  )
}

export default Billing
