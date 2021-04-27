import React from 'react'
import GetAppIcon from '@material-ui/icons/GetApp'

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
              {transaction.transactionCompleted ? 'Completed' : 'Pending'}
            </p>

            <p className={classes.transactionCredits}>
              {transaction.transactionCredits}
            </p>

            <p className={classes.transactionAmount}>
              {transaction.transactionAmount}
            </p>

            <GetAppIcon className={classes.transactionInvoiceDownloadIcon} />
          </div>
        )
      }
    )

    return arrayOfTableEntries
  }

  return (
    <div className={classes.transactionsTable}>
      <div className={classes.transactionsTableHeader}>
        <p className={classes.transactionName}>Transactions</p>

        <p className={classes.transactionDate}>Transaction dates</p>

        <p className={classes.transactionStatus}>Status</p>

        <p className={classes.transactionCredits}>Credits</p>

        <p className={classes.transactionAmount}>Amount</p>

        <p className={classes.transactionInvoiceDownloadIcon}>{null}</p>
      </div>

      {generateTransactionsTableEntries()}
    </div>
  )
}

export default TransactionsTable
