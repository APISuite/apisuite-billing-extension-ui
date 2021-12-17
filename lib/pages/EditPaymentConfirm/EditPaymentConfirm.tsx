import React, { useEffect } from 'react'
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  useTranslation,
} from '@apisuite/fe-base'

import { BASE_URI } from '../../helpers/constants'
import { EditPaymentConfirmProps } from './types'
import useStyles from './styles'
import { TransactionCard } from '../../components/TransactionCard'

const EditPaymentConfirm: React.FC<EditPaymentConfirmProps> = ({
  getTransactionDetailsAction,
  orgId,
  transactionDetails,
}) => {
  const classes = useStyles()
  const trans = useTranslation()

  const t = (str: string) => {
    return trans.t(`extensions.billing.${str}`)
  }

  useEffect(() => {
    if (orgId) {
      const urlParameters = new URLSearchParams(window.location.search)
      const transactionID = urlParameters.get('id')

      getTransactionDetailsAction(orgId, transactionID)
    }
  }, [orgId])

  // const handlePrint = () => {
  //   window.print()
  // }

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
          <Box mb={3}>
            <Typography variant="h2">
              {t('editPaymentConfirm.title')}
            </Typography>
          </Box>

          <Box mb={5}>
            <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
              {t('editPaymentConfirm.message')}
            </Typography>
          </Box>

          <Box mb={3}>
            <Typography variant="h4">
              {t('editPaymentConfirm.subtitle')}
            </Typography>
          </Box>

          <Box mb={5}>
            <TransactionCard transaction={transactionDetails} />
          </Box>

          <Box display="flex" justifyContent="flex-end" mb={3}>
            {/* <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={handlePrint}
            >
              {t('editPaymentConfirm.buttons.printLabel')}
            </Button> */}

            <Box alignSelf="flex-end">
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                href={BASE_URI}
              >
                {t('editPaymentConfirm.buttons.billingLabel')}
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </main>
  )
}

export default EditPaymentConfirm
