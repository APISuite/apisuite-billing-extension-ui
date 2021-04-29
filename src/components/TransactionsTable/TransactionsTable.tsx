import React from 'react'

import { TransactionsTableProps } from './types'
import useStyles from './styles'
import { useTranslation } from '@apisuite/fe-base'

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  arrayOfTransactions,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  function t(str: string) {
    return trans.t(`extensions.Marketplace.${str}`)
  }

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
              {transaction.transactionCompleted
                ? t('billing.transactionsTable.transactionAuthorized')
                : t('billing.transactionsTable.transactionPending')}
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
        <p className={classes.transactionName}>
          {t('billing.transactionsTable.descriptionTitle')}
        </p>

        <p className={classes.transactionReference}>
          {t('billing.transactionsTable.referenceTitle')}
        </p>

        <p className={classes.transactionDate}>
          {t('billing.transactionsTable.dateOfPurchaseTitle')}
        </p>

        <p className={classes.transactionStatus}>
          {t('billing.transactionsTable.statusTitle')}
        </p>

        <p className={classes.transactionAmount}>
          {t('billing.transactionsTable.priceTitle')}
        </p>
      </div>

      {generateTransactionsTableEntries()}
    </div>
  )
}

export default TransactionsTable
