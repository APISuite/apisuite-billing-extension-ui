import React, { useEffect } from 'react';
import { Box, Button, CircularProgress, Divider, Typography, useTheme, useTranslation, } from '@apisuite/fe-base';
import { BASE_URI } from '../../helpers/constants';
import { convertDate } from '../../util/convertDate';
import { currencyConverter } from '../../util/currencyConverter';
import useStyles from './styles';
const TransactionComplete = ({ getTransactionDetailsAction, orgId, transactionDetails, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const { palette } = useTheme();
    const t = (str) => {
        return trans.t(`extensions.billing.${str}`);
    };
    useEffect(() => {
        if (orgId) {
            const urlParameters = new URLSearchParams(window.location.search);
            const idOfTransaction = urlParameters.get('id');
            getTransactionDetailsAction(orgId, idOfTransaction);
        }
    }, [orgId]);
    return (React.createElement("main", { className: `page-container ${classes.pageContentContainer}` },
        !orgId && (React.createElement(Box, { alignItems: "center", display: "flex", height: "100vh", justifyContent: "center" },
            React.createElement(CircularProgress, { color: "secondary" }))),
        !!orgId && (React.createElement(Box, null,
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
                    transactionDetails.type === 'topup'
                        ? t('transactionComplete.transactionDetails.creditTopUpTransactionType')
                        : t('transactionComplete.transactionDetails.subscriptionTransactionType'),
                    React.createElement("span", null,
                        "(",
                        transactionDetails.description,
                        ")")),
                React.createElement("div", { className: classes.transactionDetailContainer },
                    React.createElement("p", null, t('transactionComplete.transactionDetails.reference')),
                    React.createElement("p", null, transactionDetails.id)),
                React.createElement("div", { className: classes.transactionDetailContainer },
                    React.createElement("p", null, t('transactionComplete.transactionDetails.price')),
                    React.createElement("p", null, transactionDetails.amount.value &&
                        transactionDetails.amount.currency &&
                        currencyConverter(trans.i18n.language, transactionDetails.amount.value, transactionDetails.amount.currency))),
                React.createElement("div", { className: classes.transactionDetailContainer },
                    React.createElement("p", null, t('transactionComplete.transactionDetails.creditAmount')),
                    React.createElement("p", null,
                        transactionDetails.credits,
                        " Cr")),
                React.createElement("div", { className: classes.transactionDetailContainer },
                    React.createElement("p", null, t('transactionComplete.transactionDetails.transactionDate')),
                    React.createElement("p", null, transactionDetails.date &&
                        convertDate(trans.i18n.language, transactionDetails.date))))))));
};
export default TransactionComplete;
