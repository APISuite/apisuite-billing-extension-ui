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
import { TransactionDetails } from '../../pages/Billing/types'
import useStyles from './styles'

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
}) => {
  const classes = useStyles()
  const trans = useTranslation()
  const { palette, spacing } = useTheme()

  const t = (str: string) => {
    return trans.t(`extensions.billing.${str}`)
  }

  const generateTableBody = (transactions: TransactionDetails[]) => {
    if (!transactions.length) {
      return (
        <TableBody>
          <TableRow>
            <TableCell
              align="center"
              colSpan={5}
              style={{ backgroundColor: palette.background.default }}
            >
              <Typography variant="subtitle2">
                <i>{t('transactionsTable.noEntriesAvailable')}</i>
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      )
    }

    const tableBodyRows = transactions.map((txn) => (
      <TableRow key={txn.id}>
        <TableCell style={{ paddingLeft: spacing(5) }}>
          <Typography variant="body2">{txn.description}</Typography>
        </TableCell>

        <TableCell>
          <Box display="flex">
            <Box mr={1.5}>
              <Typography variant="body2">{txn.id}</Typography>
            </Box>

            <CopyToClipboard text={txn.id}>
              <FileCopyRoundedIcon className={classes.transactionIDIcon} />
            </CopyToClipboard>
          </Box>
        </TableCell>

        <TableCell>
          <Typography variant="body2">
            {convertDateAndTime(trans.i18n.language, txn.date)}
          </Typography>
        </TableCell>

        <TableCell>
          <Typography
            variant="body2"
            className={clsx({
              [classes.completeTransactionStatus]:
                txn.status === 'authorized' ||
                txn.status === 'paid',
              [classes.failedTransactionStatus]:
                txn.status === 'failed',
              [classes.incompleteTransactionStatus]:
                txn.status === 'canceled' ||
                txn.status === 'expired',
              [classes.openTransactionStatus]: txn.status === 'open',
              [classes.pendingTransactionStatus]:
                txn.status === 'pending',
            })}
          >
            {txn.status}
          </Typography>
        </TableCell>

        <TableCell>
          <Typography variant="body2">
            {currencyConverter(
              trans.i18n.language,
              txn.amount.value,
              txn.amount.currency
            )}
          </Typography>
        </TableCell>
      </TableRow>
    ))

    return <TableBody>{tableBodyRows}</TableBody>
  }

  return (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow style={{ borderBottom: '3px solid #ECEDEF' }}>
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

        {generateTableBody(transactions)}
      </Table>
    </TableContainer>
  )
}

export default TransactionsTable
