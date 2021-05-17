import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import clsx from 'clsx'
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded'

import { convertDateAndTime } from '../../util/convertDateAndTime'
import { currencyConverter } from '../../util/currencyConverter'
import { TransactionsTableProps } from './types'
import { useTranslation } from '@apisuite/fe-base'
import useStyles from './styles'

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  const t = (str: string) => {
    return trans.t(`extensions.billing.${str}`)
  }

  const generateTransactionsTableEntries = () => {
    const arrayOfTableEntries = transactions.map((transaction, index) => {
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

          <p className={classes.transactionDate}>
            {convertDateAndTime(
              trans.i18n.language,
              transaction.transactionDate
            )}
          </p>

          <p
            className={clsx({
              [classes.completeTransactionStatus]:
                transaction.transactionStatus === 'authorized' ||
                transaction.transactionStatus === 'paid',
              [classes.failedTransactionStatus]:
                transaction.transactionStatus === 'failed',
              [classes.incompleteTransactionStatus]:
                transaction.transactionStatus === 'canceled' ||
                transaction.transactionStatus === 'expired',
              [classes.openTransactionStatus]:
                transaction.transactionStatus === 'open',
              [classes.pendingTransactionStatus]:
                transaction.transactionStatus === 'pending',
            })}
          >
            {transaction.transactionStatus}
          </p>

          <p className={classes.transactionAmount}>
            {currencyConverter(
              trans.i18n.language,
              transaction.transactionAmount.transactionValue,
              transaction.transactionAmount.transactionCurrency
            )}
          </p>
        </div>
      )
    })

    return arrayOfTableEntries
  }

  return (
    <div className={classes.transactionsTable}>
      <div className={classes.transactionsTableHeader}>
        <p className={classes.transactionDescription}>
          {t('transactionsTable.description')}
        </p>

        <p className={classes.transactionID}>
          {t('transactionsTable.reference')}
        </p>

        <p className={classes.transactionDate}>
          {t('transactionsTable.dateOfPurchase')}
        </p>

        <p className={classes.transactionStatus}>
          {t('transactionsTable.status')}
        </p>

        <p className={classes.transactionAmount}>
          {t('transactionsTable.price')}
        </p>
      </div>

      {generateTransactionsTableEntries()}
    </div>
  )
}

export default TransactionsTable
