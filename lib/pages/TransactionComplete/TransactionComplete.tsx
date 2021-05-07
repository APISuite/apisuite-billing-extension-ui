import React from 'react'

import { TransactionCompleteProps } from './types'
import useStyles from './styles'
import Link from '../../components/Link'

const TransactionComplete: React.FC<TransactionCompleteProps> = () => {
  const classes = useStyles()

  const paymentType = window.location.pathname.split('/')[2]

  return (
    <main className={`page-container ${classes.pageContentContainer}`}>
      <p className={classes.title}>Thank you for your payment!</p>

      <p className={classes.subtitle}>
        <span>Your payment is currently being proccessed.</span>
        Once it is approved, your credit balance will be updated.
      </p>

      <div className={classes.buttonsContainer}>
        <Link className={classes.goToMarketplaceButton} href="/marketplace">
          Go to the Marketplace
        </Link>

        <Link className={classes.goToBillingButton} href="/billing">
          Go back to Billing
        </Link>
      </div>

      <hr className={classes.separator} />

      <p className={classes.transactionDetailsTitle}>Transaction details</p>

      <div className={classes.allTransactionDetailsContainer}>
        <p className={classes.transactionTitle}>
          {paymentType === 'creditpayment'
            ? 'Credit pack'
            : 'Subscription plan'}
        </p>

        <div className={classes.transactionDetailContainer}>
          <p>Reference:</p>

          <p>b4605542-cad0-4ca3-83e1-1d9177a92438</p>
        </div>

        <div className={classes.transactionDetailContainer}>
          <p>Price:</p>

          <p>€ 100</p>
        </div>

        <div className={classes.transactionDetailContainer}>
          <p>Credit amount:</p>

          <p>10000 Cr</p>
        </div>

        <div className={classes.transactionDetailContainer}>
          <p>Transaction date:</p>

          <p>30th April 2021, 09:30</p>
        </div>
      </div>
    </main>
  )
}

export default TransactionComplete
