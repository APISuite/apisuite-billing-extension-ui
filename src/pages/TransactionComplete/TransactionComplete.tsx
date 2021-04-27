import React from 'react'
import { Button } from '@apisuite/fe-base'

import useStyles from './styles'

const TransactionComplete: React.FC = () => {
  const classes = useStyles()

  return (
    <main className={`page-container ${classes.pageContentContainer}`}>
      <p className={classes.title}>Thank you for your payment!</p>

      <p className={classes.subtitle}>
        <span>Your payment is currently being proccessed.</span>
        Once it is approved, your credit balance will be updated.
      </p>

      <div className={classes.buttonsContainer}>
        <Button className={classes.goToMarketplaceButton} href="/marketplace">
          Go to the Marketplace
        </Button>

        <Button className={classes.goToBillingButton} href="/billing">
          Go back to Billing
        </Button>
      </div>

      <hr className={classes.separator} />

      <p className={classes.transactionDetailsTitle}>Transaction details</p>

      <div className={classes.allTransactionDetailsContainer}>
        <p className={classes.transactionTitle}>
          Credit pack or Subscription plan
        </p>

        <div className={classes.transactionDetailContainer}>
          <p>Reference:</p>

          <p>Transaction's ID</p>
        </div>

        <div className={classes.transactionDetailContainer}>
          <p>Price:</p>

          <p>€ Transaction's price</p>
        </div>

        <div className={classes.transactionDetailContainer}>
          <p>Credit amount:</p>

          <p>Transaction's credit amount</p>
        </div>

        <div className={classes.transactionDetailContainer}>
          <p>Transaction date:</p>

          <p>Some date</p>
        </div>
      </div>
    </main>
  )
}

export default TransactionComplete
