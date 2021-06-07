import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import clsx from 'clsx'
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
  useTranslation,
} from '@apisuite/fe-base'
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded'

import { convertDateAndTime } from '../../util/convertDateAndTime'
import { currencyConverter } from '../../util/currencyConverter'
import { TransactionsTableProps } from './types'
import useStyles from './styles'

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
}) => {
  const classes = useStyles()
  const trans = useTranslation()
  const { spacing } = useTheme()

  const t = (str: string) => {
    return trans.t(`extensions.billing.${str}`)
  }

  return (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ paddingLeft: spacing(5) }}>
              <Typography variant="body1">
                <b>{t('transactionsTable.description')}</b>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">
                <b>{t('transactionsTable.reference')}</b>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">
                <b>{t('transactionsTable.dateOfPurchase')}</b>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">
                <b>{t('transactionsTable.status')}</b>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">
                <b>{t('transactionsTable.price')}</b>
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.transactionID}>
              <TableCell style={{ paddingLeft: spacing(5) }}>
                <Typography variant="body2">
                  {transaction.transactionDescription}
                </Typography>
              </TableCell>
              <TableCell>
                <Box display="flex">
                  <Box mr={1.5}>
                    <Typography variant="body2">
                      {transaction.transactionID}
                    </Typography>
                  </Box>

                  <CopyToClipboard text={transaction.transactionID}>
                    <FileCopyRoundedIcon
                      className={classes.transactionIDIcon}
                    />
                  </CopyToClipboard>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="body2">
                  {convertDateAndTime(
                    trans.i18n.language,
                    transaction.transactionDate
                  )}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="body2"
                  // TODO: revise this
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
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">
                  {currencyConverter(
                    trans.i18n.language,
                    transaction.transactionAmount.transactionValue,
                    transaction.transactionAmount.transactionCurrency
                  )}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TransactionsTable
