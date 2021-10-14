import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import clsx from 'clsx';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme, useTranslation, } from '@apisuite/fe-base';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import { convertDateAndTime } from '../../util/convertDateAndTime';
import { currencyConverter } from '../../util/currencyConverter';
import useStyles from './styles';
const TransactionsTable = ({ transactions, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const { palette, spacing } = useTheme();
    const t = (str) => {
        return trans.t(`extensions.billing.${str}`);
    };
    const generateTableBody = (transactions) => {
        const tableBodyRows = transactions.length ? (transactions.map((transaction) => (React.createElement(TableRow, { key: transaction.id },
            React.createElement(TableCell, { style: { paddingLeft: spacing(5) } },
                React.createElement(Typography, { variant: "body2" }, transaction.description)),
            React.createElement(TableCell, null,
                React.createElement(Box, { display: "flex" },
                    React.createElement(Box, { mr: 1.5 },
                        React.createElement(Typography, { variant: "body2" }, transaction.id)),
                    React.createElement(CopyToClipboard, { text: transaction.id },
                        React.createElement(FileCopyRoundedIcon, { className: classes.transactionIDIcon })))),
            React.createElement(TableCell, null,
                React.createElement(Typography, { variant: "body2" }, convertDateAndTime(trans.i18n.language, transaction.date))),
            React.createElement(TableCell, null,
                React.createElement(Typography, { variant: "body2", className: clsx({
                        [classes.completeTransactionStatus]: transaction.status === 'authorized' ||
                            transaction.status === 'paid',
                        [classes.failedTransactionStatus]: transaction.status === 'failed',
                        [classes.incompleteTransactionStatus]: transaction.status === 'canceled' ||
                            transaction.status === 'expired',
                        [classes.openTransactionStatus]: transaction.status === 'open',
                        [classes.pendingTransactionStatus]: transaction.status === 'pending',
                    }) }, transaction.status)),
            React.createElement(TableCell, null,
                React.createElement(Typography, { variant: "body2" }, currencyConverter(trans.i18n.language, transaction.amount.value, transaction.amount.currency))))))) : (React.createElement(TableRow, null,
            React.createElement(TableCell, { align: "center", colSpan: 5, style: { backgroundColor: palette.background.default } },
                React.createElement(Typography, { variant: "subtitle2" },
                    React.createElement("i", null, t('transactionsTable.noEntriesAvailable'))))));
        return React.createElement(TableBody, null, tableBodyRows);
    };
    return (React.createElement(TableContainer, { component: Paper, variant: "outlined" },
        React.createElement(Table, null,
            React.createElement(TableHead, null,
                React.createElement(TableRow, { style: { borderBottom: '3px solid #ECEDEF' } },
                    React.createElement(TableCell, { style: { paddingLeft: spacing(5) } },
                        React.createElement(Typography, { variant: "body1" },
                            React.createElement("b", null, t('transactionsTable.description')))),
                    React.createElement(TableCell, null,
                        React.createElement(Typography, { variant: "body1" },
                            React.createElement("b", null, t('transactionsTable.reference')))),
                    React.createElement(TableCell, null,
                        React.createElement(Typography, { variant: "body1" },
                            React.createElement("b", null, t('transactionsTable.dateOfPurchase')))),
                    React.createElement(TableCell, null,
                        React.createElement(Typography, { variant: "body1" },
                            React.createElement("b", null, t('transactionsTable.status')))),
                    React.createElement(TableCell, null,
                        React.createElement(Typography, { variant: "body1" },
                            React.createElement("b", null, t('transactionsTable.price')))))),
            generateTableBody(transactions))));
};
export default TransactionsTable;
