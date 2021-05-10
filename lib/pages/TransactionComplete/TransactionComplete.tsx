import React, { useEffect } from 'react'
import { useTranslation } from '@apisuite/fe-base'

import { TransactionCompleteProps } from './types'
import Link from '../../components/Link'
import useStyles from './styles'

const TransactionComplete: React.FC<TransactionCompleteProps> = ({
  getTransactionDetailsAction,
  transactionDetails,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  const t = (str: string) => {
    return trans.t(`extensions.${str}`)
  }

  useEffect(() => {
    const urlParameters = new URLSearchParams(window.location.search)
    const idOfTransaction = urlParameters.get('id')

    getTransactionDetailsAction(idOfTransaction)
  }, [])

  const convertDate = (dateString: string) => {
    const convertedDate = new Date(dateString)

    return convertedDate.toLocaleString()
  }

  // TODO: Convert 'EUR' references to '€'

  return (
    <main className={`page-container ${classes.pageContentContainer}`}>
      <p className={classes.title}>{t('billing.transactionComplete.title')}</p>

      <p className={classes.subtitle}>
        <span>{t('billing.transactionComplete.subtitlePartOne')}</span>
        {t('billing.transactionComplete.subtitlePartTwo')}
      </p>

      <div className={classes.buttonsContainer}>
        <Link className={classes.goToMarketplaceButton} href="/marketplace">
          {t('billing.transactionComplete.goToMarketplaceButtonLabel')}
        </Link>

        <Link className={classes.goToBillingButton} href="/billing">
          {t('billing.transactionComplete.goToBillingButtonLabel')}
        </Link>
      </div>

      <hr className={classes.separator} />

      <p className={classes.transactionDetailsTitle}>
        {t('billing.transactionComplete.transactionDetails.title')}
      </p>

      <div className={classes.allTransactionDetailsContainer}>
        <p className={classes.transactionTitle}>
          {transactionDetails.transactionType === 'topup'
            ? t(
                'billing.transactionComplete.transactionDetails.creditTopUpTransactionType'
              )
            : t(
                'billing.transactionComplete.transactionDetails.subscriptionTransactionType'
              )}

          <span>({transactionDetails.transactionDescription})</span>
        </p>

        <div className={classes.transactionDetailContainer}>
          <p>{t('billing.transactionComplete.transactionDetails.reference')}</p>

          <p>{transactionDetails.transactionID}</p>
        </div>

        <div className={classes.transactionDetailContainer}>
          <p>{t('billing.transactionComplete.transactionDetails.price')}</p>

          <p>
            {`${transactionDetails.transactionAmount.transactionCurrency}
${transactionDetails.transactionAmount.transactionValue}`}
          </p>
        </div>

        <div className={classes.transactionDetailContainer}>
          <p>
            {t('billing.transactionComplete.transactionDetails.creditAmount')}
          </p>

          <p>{transactionDetails.transactionCredits} Cr</p>
        </div>

        <div className={classes.transactionDetailContainer}>
          <p>
            {t(
              'billing.transactionComplete.transactionDetails.transactionDate'
            )}
          </p>

          <p>{convertDate(transactionDetails.transactionDate)}</p>
        </div>
      </div>
    </main>
  )
}

export default TransactionComplete
