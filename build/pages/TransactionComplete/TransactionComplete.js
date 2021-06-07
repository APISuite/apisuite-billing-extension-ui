import React, { useEffect } from 'react';
import { Box, Button, Divider, Typography, useTheme, useTranslation, } from '@apisuite/fe-base';
import { BASE_URI } from '../../helpers/constants';
import { convertDate } from '../../util/convertDate';
import { currencyConverter } from '../../util/currencyConverter';
import useStyles from './styles';
const TransactionComplete = ({ getTransactionDetailsAction, transactionDetails, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const { palette } = useTheme();
    const t = (str) => {
        return trans.t(`extensions.billing.${str}`);
    };
    useEffect(() => {
        const urlParameters = new URLSearchParams(window.location.search);
        const idOfTransaction = urlParameters.get('id');
        getTransactionDetailsAction(idOfTransaction);
    }, []);
    return (React.createElement("main", { className: `page-container ${classes.pageContentContainer}` },
        React.createElement(Typography, { variant: "h1" }, t('transactionComplete.title')),
        React.createElement(Box, { my: 3 },
            React.createElement(Typography, { variant: "h5" }, t('transactionComplete.subtitle'))),
        React.createElement(Box, { display: "flex" },
            React.createElement(Button, { variant: "contained", color: "primary", size: "large", href: "/marketplace" }, t('transactionComplete.goToMarketplaceButtonLabel')),
            React.createElement(Box, { ml: 1.5 },
                React.createElement(Button, { variant: "outlined", color: "primary", size: "large", href: BASE_URI }, t('transactionComplete.goToBillingButtonLabel')))),
        React.createElement(Box, { my: 5 },
            React.createElement(Divider, { style: { backgroundColor: palette.primary.main } })),
        React.createElement(Box, { mb: 3 },
            React.createElement(Typography, { variant: "h3" }, t('transactionComplete.transactionDetails.title'))),
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
