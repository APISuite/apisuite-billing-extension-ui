import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import clsx from 'clsx';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import { useTranslation } from '@apisuite/fe-base';
import useStyles from './styles';
const TransactionsTable = ({ arrayOfTransactions, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    function t(str) {
        return trans.t(`extensions.${str}`);
    }
    const generateTransactionsTableEntries = () => {
        const arrayOfTableEntries = arrayOfTransactions.map((transaction, index) => {
            return (React.createElement("div", { className: index % 2 === 0
                    ? classes.regularTransactionsTableEntry
                    : classes.alternativeTransactionsTableEntry, key: `transactionsTableEntry${index}` },
                React.createElement("p", { className: classes.transactionDescription }, transaction.transactionDescription),
                React.createElement("div", { className: classes.transactionID },
                    React.createElement("p", { className: classes.transactionIDText }, transaction.transactionID),
                    React.createElement(CopyToClipboard, { text: transaction.transactionID },
                        React.createElement(FileCopyRoundedIcon, { className: classes.transactionIDIcon }))),
                React.createElement("p", { className: classes.transactionDate }, transaction.createdAt),
                React.createElement("p", { className: clsx({
                        [classes.completeTransactionStatus]: transaction.transactionsStatus === 'authorized' ||
                            transaction.transactionsStatus === 'paid',
                        [classes.failedTransactionStatus]: transaction.transactionsStatus === 'failed',
                        [classes.incompleteTransactionStatus]: transaction.transactionsStatus === 'canceled' ||
                            transaction.transactionsStatus === 'expired',
                        [classes.openTransactionStatus]: transaction.transactionsStatus === 'open',
                        [classes.pendingTransactionStatus]: transaction.transactionsStatus === 'pending',
                    }) }, transaction.transactionsStatus),
                React.createElement("p", { className: classes.transactionAmount }, `${transaction.transactionAmount.transactionCurrency}${transaction.transactionAmount.transactionValue}`)));
        });
        return arrayOfTableEntries;
    };
    return (React.createElement("div", { className: classes.transactionsTable },
        React.createElement("div", { className: classes.transactionsTableHeader },
            React.createElement("p", { className: classes.transactionDescription }, t('billing.transactionsTable.description')),
            React.createElement("p", { className: classes.transactionID }, t('billing.transactionsTable.reference')),
            React.createElement("p", { className: classes.transactionDate }, t('billing.transactionsTable.dateOfPurchase')),
            React.createElement("p", { className: classes.transactionStatus }, t('billing.transactionsTable.status')),
            React.createElement("p", { className: classes.transactionAmount }, t('billing.transactionsTable.price'))),
        generateTransactionsTableEntries()));
};
export default TransactionsTable;
