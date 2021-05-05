import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import clsx from 'clsx'
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded'

import { TransactionsTableProps } from './types'
import { useTranslation } from '@apisuite/fe-base'
import useStyles from './styles'

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  arrayOfTransactions,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  function t(str: string) {
    return trans.t(`extensions.${str}`)
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
            <p className={classes.transactionDescription}>
              {transaction.transactionDescription}
            </p>

            <div className={classes.transactionID}>
              <p className={classes.transactionIDText}>
                {transaction.transactionID}
              </p>

              <CopyToClipboard text={transaction.transactionID}>
                <FileCopyRoundedIcon className={classes.transactionIDIcon} />
              </CopyToClipboard>
            </div>

            <p className={classes.transactionDate}>{transaction.createdAt}</p>

            <p
              className={clsx({
                [classes.completeTransactionStatus]:
                  transaction.transactionsStatus === 'authorized' ||
                  transaction.transactionsStatus === 'paid',
                [classes.failedTransactionStatus]:
                  transaction.transactionsStatus === 'failed',
                [classes.incompleteTransactionStatus]:
                  transaction.transactionsStatus === 'canceled' ||
                  transaction.transactionsStatus === 'expired',
                [classes.openTransactionStatus]:
                  transaction.transactionsStatus === 'open',
                [classes.pendingTransactionStatus]:
                  transaction.transactionsStatus === 'pending',
              })}
            >
              {transaction.transactionsStatus}
            </p>

            <p className={classes.transactionAmount}>
              {`${transaction.transactionAmount.transactionCurrency}${transaction.transactionAmount.transactionValue}`}
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
        <p className={classes.transactionDescription}>
          {t('billing.transactionsTable.description')}
        </p>

        <p className={classes.transactionID}>
          {t('billing.transactionsTable.reference')}
        </p>

        <p className={classes.transactionDate}>
          {t('billing.transactionsTable.dateOfPurchase')}
        </p>

        <p className={classes.transactionStatus}>
          {t('billing.transactionsTable.status')}
        </p>

        <p className={classes.transactionAmount}>
          {t('billing.transactionsTable.price')}
        </p>
      </div>

      {generateTransactionsTableEntries()}
    </div>
  )
}

export default TransactionsTable
