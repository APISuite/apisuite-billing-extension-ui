import React from 'react';
import useStyles from './styles';
import { useTranslation } from '@apisuite/fe-base';
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
                React.createElement("p", { className: classes.transactionName }, transaction.transactionName),
                React.createElement("p", { className: classes.transactionReference }, transaction.transactionReference),
                React.createElement("p", { className: classes.transactionDate }, transaction.transactionDate),
                React.createElement("p", { className: transaction.transactionCompleted
                        ? classes.completedTransactionStatus
                        : classes.pendingTransactionStatus }, transaction.transactionCompleted
                    ? t('billing.transactionsTable.transactionAuthorized')
                    : t('billing.transactionsTable.transactionPending')),
                React.createElement("p", { className: classes.transactionAmount }, transaction.transactionAmount)));
        });
        return arrayOfTableEntries;
    };
    return (React.createElement("div", { className: classes.transactionsTable },
        React.createElement("div", { className: classes.transactionsTableHeader },
            React.createElement("p", { className: classes.transactionName }, t('billing.transactionsTable.descriptionTitle')),
            React.createElement("p", { className: classes.transactionReference }, t('billing.transactionsTable.referenceTitle')),
            React.createElement("p", { className: classes.transactionDate }, t('billing.transactionsTable.dateOfPurchaseTitle')),
            React.createElement("p", { className: classes.transactionStatus }, t('billing.transactionsTable.statusTitle')),
            React.createElement("p", { className: classes.transactionAmount }, t('billing.transactionsTable.priceTitle'))),
        generateTransactionsTableEntries()));
};
export default TransactionsTable;
