import React from 'react'

import { TransactionsTableProps } from './types'
import useStyles from './styles'

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  arrayOfTransactions,
}) => {
  const classes = useStyles()

  const generateTransactionsTableEntries = () => {
    const arrayOfTableEntries = arrayOfTransactions.map(
      (transaction, index) => {
        return (
          <div
            className={
              index % 2 === 0
                ? classes.regularTransactionsTableEntry
                : classes.alternativeTransactionsTableEntry
            }
            key={`transactionsTableEntry${index}`}
          >
            <p className={classes.transactionName}>
              {transaction.transactionName}
            </p>

            <p className={classes.transactionReference}>
              {transaction.transactionReference}
            </p>

            <p className={classes.transactionDate}>
              {transaction.transactionDate}
            </p>

            <p
              className={
                transaction.transactionCompleted
                  ? classes.completedTransactionStatus
                  : classes.pendingTransactionStatus
              }
            >
              {transaction.transactionCompleted ? 'Authorized' : 'Pending'}
            </p>

            <p className={classes.transactionAmount}>
              {transaction.transactionAmount}
            </p>
          </div>
        )
      }
    )

    return arrayOfTableEntries
  }

  return (
    <div className={classes.transactionsTable}>
      <div className={classes.transactionsTableHeader}>
        <p className={classes.transactionName}>Description</p>

        <p className={classes.transactionReference}>Reference</p>

        <p className={classes.transactionDate}>Date of purchase</p>

        <p className={classes.transactionStatus}>Payment status</p>

        <p className={classes.transactionAmount}>Price</p>
      </div>

      {generateTransactionsTableEntries()}
    </div>
  )
}

export default TransactionsTable
