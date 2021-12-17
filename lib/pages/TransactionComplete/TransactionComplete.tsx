import React, { useEffect } from 'react'
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
  useTheme,
  useTranslation,
} from '@apisuite/fe-base'

import { BASE_URI } from '../../helpers/constants'
import { convertDate } from '../../util/convertDate'
import { currencyConverter } from '../../util/currencyConverter'
import { TransactionCompleteProps } from './types'
import useStyles from './styles'

const TransactionComplete: React.FC<TransactionCompleteProps> = ({
  getTransactionDetailsAction,
  orgId,
  transactionDetails,
}) => {
  const classes = useStyles()
  const trans = useTranslation()
  const { palette } = useTheme()

  const t = (str: string) => {
    return trans.t(`extensions.billing.${str}`)
  }

  useEffect(() => {
    if (orgId) {
      const urlParameters = new URLSearchParams(window.location.search)
      const idOfTransaction = urlParameters.get('id')

      getTransactionDetailsAction(orgId, idOfTransaction)
    }
  }, [orgId])

  return (
    <main className={`page-container ${classes.pageContentContainer}`}>
      {!orgId && (
        <Box
          alignItems="center"
          display="flex"
          height="100vh"
          justifyContent="center"
        >
          <CircularProgress color="secondary" />
        </Box>
      )}
      {!!orgId && (
        <Box>
          <Typography variant="h1">{t('transactionComplete.title')}</Typography>

          <Box my={3}>
            <Typography variant="h5">
              {t('transactionComplete.subtitle')}
            </Typography>
          </Box>

          <Box display="flex">
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/marketplace"
            >
              {t('transactionComplete.goToMarketplaceButtonLabel')}
            </Button>

            <Box ml={1.5}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                href={BASE_URI}
              >
                {t('transactionComplete.goToBillingButtonLabel')}
              </Button>
            </Box>
          </Box>

          <Box my={5}>
            <Divider style={{ backgroundColor: palette.primary.main }} />
          </Box>

          <Box mb={3}>
            <Typography variant="h3">
              {t('transactionComplete.transactionDetails.title')}
            </Typography>
          </Box>

          <div className={classes.allTransactionDetailsContainer}>
            <p className={classes.transactionTitle}>
              {transactionDetails.type === 'topup'
                ? t(
                    'transactionComplete.transactionDetails.creditTopUpTransactionType'
                  )
                : t(
                    'transactionComplete.transactionDetails.subscriptionTransactionType'
                  )}

              <span>({transactionDetails.description})</span>
            </p>

            <div className={classes.transactionDetailContainer}>
              <p>{t('transactionComplete.transactionDetails.reference')}</p>

              <p>{transactionDetails.id}</p>
            </div>

            <div className={classes.transactionDetailContainer}>
              <p>{t('transactionComplete.transactionDetails.price')}</p>

              <p>
                {transactionDetails.amount.value &&
                  transactionDetails.amount.currency &&
                  currencyConverter(
                    trans.i18n.language,
                    transactionDetails.amount.value,
                    transactionDetails.amount.currency
                  )}
              </p>
            </div>

            <div className={classes.transactionDetailContainer}>
              <p>{t('transactionComplete.transactionDetails.creditAmount')}</p>

              <p>{transactionDetails.credits} Cr</p>
            </div>

            <div className={classes.transactionDetailContainer}>
              <p>
                {t('transactionComplete.transactionDetails.transactionDate')}
              </p>

              <p>
                {transactionDetails.date &&
                  convertDate(trans.i18n.language, transactionDetails.date)}
              </p>
            </div>
          </div>
        </Box>
      )}
    </main>
  )
}

export default TransactionComplete
