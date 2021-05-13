import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import clsx from 'clsx';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import { useTranslation } from '@apisuite/fe-base';
import useStyles from './styles';
import { convertDate } from '../../util/convertDate';
import { currencyConverter } from '../../util/currencyConverter';
const TransactionsTable = ({ transactions, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const t = (str) => {
        return trans.t(`extensions.billing.${str}`);
    };
    const generateTransactionsTableEntries = () => {
        const arrayOfTableEntries = transactions.map((transaction, index) => {
            return (React.createElement("div", { className: index % 2 === 0
                    ? classes.regularTransactionsTableEntry
                    : classes.alternativeTransactionsTableEntry, key: `transactionsTableEntry${index}` },
                React.createElement("p", { className: classes.transactionDescription }, transaction.transactionDescription),
                React.createElement("div", { className: classes.transactionID },
                    React.createElement("p", { className: classes.transactionIDText }, transaction.transactionID),
                    React.createElement(CopyToClipboard, { text: transaction.transactionID },
                        React.createElement(FileCopyRoundedIcon, { className: classes.transactionIDIcon }))),
                React.createElement("p", { className: classes.transactionDate }, convertDate(trans.i18n.language, transaction.transactionDate)),
                React.createElement("p", { className: clsx({
                        [classes.completeTransactionStatus]: transaction.transactionStatus === 'authorized' ||
                            transaction.transactionStatus === 'paid',
                        [classes.failedTransactionStatus]: transaction.transactionStatus === 'failed',
                        [classes.incompleteTransactionStatus]: transaction.transactionStatus === 'canceled' ||
                            transaction.transactionStatus === 'expired',
                        [classes.openTransactionStatus]: transaction.transactionStatus === 'open',
                        [classes.pendingTransactionStatus]: transaction.transactionStatus === 'pending',
                    }) }, transaction.transactionStatus),
                React.createElement("p", { className: classes.transactionAmount }, currencyConverter(trans.i18n.language, transaction.transactionAmount.transactionValue, transaction.transactionAmount.transactionCurrency))));
        });
        return arrayOfTableEntries;
    };
    return (React.createElement("div", { className: classes.transactionsTable },
        React.createElement("div", { className: classes.transactionsTableHeader },
            React.createElement("p", { className: classes.transactionDescription }, t('transactionsTable.description')),
            React.createElement("p", { className: classes.transactionID }, t('transactionsTable.reference')),
            React.createElement("p", { className: classes.transactionDate }, t('transactionsTable.dateOfPurchase')),
            React.createElement("p", { className: classes.transactionStatus }, t('transactionsTable.status')),
            React.createElement("p", { className: classes.transactionAmount }, t('transactionsTable.price'))),
        generateTransactionsTableEntries()));
};
export default TransactionsTable;
