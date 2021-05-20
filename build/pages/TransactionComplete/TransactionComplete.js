import React, { useEffect } from 'react';
import { useTranslation } from '@apisuite/fe-base';
import { BASE_URI } from '../../helpers/constants';
import { convertDate } from '../../util/convertDate';
import { currencyConverter } from '../../util/currencyConverter';
import Link from '../../components/Link';
import useStyles from './styles';
const TransactionComplete = ({ getTransactionDetailsAction, transactionDetails, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const t = (str) => {
        return trans.t(`extensions.billing.${str}`);
    };
    useEffect(() => {
        const urlParameters = new URLSearchParams(window.location.search);
        const idOfTransaction = urlParameters.get('id');
        getTransactionDetailsAction(idOfTransaction);
    }, []);
    return (React.createElement("main", { className: `page-container ${classes.pageContentContainer}` },
        React.createElement("p", { className: classes.title }, t('transactionComplete.title')),
        React.createElement("p", { className: classes.subtitle },
            React.createElement("span", null, t('transactionComplete.subtitlePartOne')),
            t('transactionComplete.subtitlePartTwo')),
        React.createElement("div", { className: classes.buttonsContainer },
            React.createElement(Link, { className: classes.goToMarketplaceButton, href: "/marketplace" }, t('transactionComplete.goToMarketplaceButtonLabel')),
            React.createElement(Link, { className: classes.goToBillingButton, href: BASE_URI }, t('transactionComplete.goToBillingButtonLabel'))),
        React.createElement("hr", { className: classes.separator }),
        React.createElement("p", { className: classes.transactionDetailsTitle }, t('transactionComplete.transactionDetails.title')),
        React.createElement("div", { className: classes.allTransactionDetailsContainer },
            React.createElement("p", { className: classes.transactionTitle },
                transactionDetails.transactionType === 'topup'
                    ? t('transactionComplete.transactionDetails.creditTopUpTransactionType')
                    : t('transactionComplete.transactionDetails.subscriptionTransactionType'),
                React.createElement("span", null,
                    "(",
                    transactionDetails.transactionDescription,
                    ")")),
            React.createElement("div", { className: classes.transactionDetailContainer },
                React.createElement("p", null, t('transactionComplete.transactionDetails.reference')),
                React.createElement("p", null, transactionDetails.transactionID)),
            React.createElement("div", { className: classes.transactionDetailContainer },
                React.createElement("p", null, t('transactionComplete.transactionDetails.price')),
                React.createElement("p", null, transactionDetails.transactionAmount.transactionValue &&
                    transactionDetails.transactionAmount.transactionCurrency &&
                    currencyConverter(trans.i18n.language, transactionDetails.transactionAmount.transactionValue, transactionDetails.transactionAmount.transactionCurrency))),
            React.createElement("div", { className: classes.transactionDetailContainer },
                React.createElement("p", null, t('transactionComplete.transactionDetails.creditAmount')),
                React.createElement("p", null,
                    transactionDetails.transactionCredits,
                    " Cr")),
            React.createElement("div", { className: classes.transactionDetailContainer },
                React.createElement("p", null, t('transactionComplete.transactionDetails.transactionDate')),
                React.createElement("p", null, transactionDetails.transactionDate &&
                    convertDate(trans.i18n.language, transactionDetails.transactionDate))))));
};
export default TransactionComplete;
