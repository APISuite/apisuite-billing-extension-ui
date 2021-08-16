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
    const generateTableBody = (transactionsArray) => {
        const tableBodyRows = transactionsArray.length ? (transactionsArray.map((transaction) => (React.createElement(TableRow, { key: transaction.transactionID },
            React.createElement(TableCell, { style: { paddingLeft: spacing(5) } },
                React.createElement(Typography, { variant: "body2" }, transaction.transactionDescription)),
            React.createElement(TableCell, null,
                React.createElement(Box, { display: "flex" },
                    React.createElement(Box, { mr: 1.5 },
                        React.createElement(Typography, { variant: "body2" }, transaction.transactionID)),
                    React.createElement(CopyToClipboard, { text: transaction.transactionID },
                        React.createElement(FileCopyRoundedIcon, { className: classes.transactionIDIcon })))),
            React.createElement(TableCell, null,
                React.createElement(Typography, { variant: "body2" }, convertDateAndTime(trans.i18n.language, transaction.transactionDate))),
            React.createElement(TableCell, null,
                React.createElement(Typography, { variant: "body2", className: clsx({
                        [classes.completeTransactionStatus]: transaction.transactionStatus === 'authorized' ||
                            transaction.transactionStatus === 'paid',
                        [classes.failedTransactionStatus]: transaction.transactionStatus === 'failed',
                        [classes.incompleteTransactionStatus]: transaction.transactionStatus === 'canceled' ||
                            transaction.transactionStatus === 'expired',
                        [classes.openTransactionStatus]: transaction.transactionStatus === 'open',
                        [classes.pendingTransactionStatus]: transaction.transactionStatus === 'pending',
                    }) }, transaction.transactionStatus)),
            React.createElement(TableCell, null,
                React.createElement(Typography, { variant: "body2" }, currencyConverter(trans.i18n.language, transaction.transactionAmount.transactionValue, transaction.transactionAmount.transactionCurrency))))))) : (React.createElement(TableRow, null,
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
