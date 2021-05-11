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
    return trans.t(`extensions.billing.${str}`)
  }

  useEffect(() => {
    const urlParameters = new URLSearchParams(window.location.search)
    const idOfTransaction = urlParameters.get('id')

    getTransactionDetailsAction(idOfTransaction)
  }, [])

  const convertDate = (dateString: string) => {
    const dateFormat = new Intl.DateTimeFormat(trans.i18n.language, {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    })

    return dateFormat.format(new Date(dateString))
  }

  // TODO: Convert 'EUR' references to '€'

  return (
    <main className={`page-container ${classes.pageContentContainer}`}>
      <p className={classes.title}>{t('transactionComplete.title')}</p>

      <p className={classes.subtitle}>
        <span>{t('transactionComplete.subtitlePartOne')}</span>
        {t('transactionComplete.subtitlePartTwo')}
      </p>

      <div className={classes.buttonsContainer}>
        <Link className={classes.goToMarketplaceButton} href="/marketplace">
          {t('transactionComplete.goToMarketplaceButtonLabel')}
        </Link>

        <Link className={classes.goToBillingButton} href="/billing">
          {t('transactionComplete.goToBillingButtonLabel')}
        </Link>
      </div>

      <hr className={classes.separator} />

      <p className={classes.transactionDetailsTitle}>
        {t('transactionComplete.transactionDetails.title')}
      </p>

      <div className={classes.allTransactionDetailsContainer}>
        <p className={classes.transactionTitle}>
          {transactionDetails.transactionType === 'topup'
            ? t(
                'transactionComplete.transactionDetails.creditTopUpTransactionType'
              )
            : t(
                'transactionComplete.transactionDetails.subscriptionTransactionType'
              )}

          <span>({transactionDetails.transactionDescription})</span>
        </p>

        <div className={classes.transactionDetailContainer}>
          <p>{t('transactionComplete.transactionDetails.reference')}</p>

          <p>{transactionDetails.transactionID}</p>
        </div>

        <div className={classes.transactionDetailContainer}>
          <p>{t('transactionComplete.transactionDetails.price')}</p>

          <p>
            {`${transactionDetails.transactionAmount.transactionCurrency}
${transactionDetails.transactionAmount.transactionValue}`}
          </p>
        </div>

        <div className={classes.transactionDetailContainer}>
          <p>{t('transactionComplete.transactionDetails.creditAmount')}</p>

          <p>{transactionDetails.transactionCredits} Cr</p>
        </div>

        <div className={classes.transactionDetailContainer}>
          <p>{t('transactionComplete.transactionDetails.transactionDate')}</p>

          <p>{convertDate(transactionDetails.transactionDate)}</p>
        </div>
      </div>
    </main>
  )
}

export default TransactionComplete
