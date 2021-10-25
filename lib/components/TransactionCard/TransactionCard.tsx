import React from 'react'
import {
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
  useTranslation,
} from '@apisuite/fe-base'
import { TransactionCardProps } from './types'
import useStyles from './styles'
import { currencyConverter } from '../../util/currencyConverter'
import { convertDateAndTime } from '../../util/convertDateAndTime'

export const TransactionCard: React.FC<TransactionCardProps> = ({
  transaction,
}) => {
  const classes = useStyles()
  const { spacing } = useTheme()
  const trans = useTranslation()

  const t = (str: string) => {
    return trans.t(`extensions.billing.${str}`)
  }

  return (
    <Card className={classes.container}>
      <CardContent style={{ padding: spacing(3) }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1">
              {transaction.description || '-'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" className={classes.leftTxt}>
              {t('transactioncard.reference') || '-'}:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" className={classes.rightTxt}>
              {transaction.id}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" className={classes.leftTxt}>
              {t('transactioncard.price')}:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" className={classes.rightTxt}>
              {currencyConverter(
                trans.i18n.language,
                transaction.amount.value,
                transaction.amount.currency
              ) || '0'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" className={classes.leftTxt}>
              {t('transactioncard.creditAmount')}:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" className={classes.rightTxt}>
              {`${transaction.credits} Cr` || '-'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" className={classes.leftTxt}>
              {t('transactioncard.purchaseDate')}:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" className={classes.rightTxt}>
              {convertDateAndTime(
                trans.i18n.language,
                transaction.date,
                false
              ) || '-'}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
