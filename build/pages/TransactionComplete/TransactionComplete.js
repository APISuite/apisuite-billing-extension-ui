import React from 'react';
import useStyles from './styles';
import Link from '../../components/Link';
const TransactionComplete = ({ 
// Keep this for demo purposes, remove once demo is complete, and implement this behaviour
hasPurchasedCreditsAction, }) => {
    const classes = useStyles();
    const paymentType = window.location.pathname.split('/')[2];
    // Keep this for demo purposes, remove once demo is complete, and implement this behaviour
    hasPurchasedCreditsAction();
    return (React.createElement("main", { className: `page-container ${classes.pageContentContainer}` },
        React.createElement("p", { className: classes.title }, "Thank you for your payment!"),
        React.createElement("p", { className: classes.subtitle },
            React.createElement("span", null, "Your payment is currently being proccessed."),
            "Once it is approved, your credit balance will be updated."),
        React.createElement("div", { className: classes.buttonsContainer },
            React.createElement(Link, { className: classes.goToMarketplaceButton, href: "/marketplace" }, "Go to the Marketplace"),
            React.createElement(Link, { className: classes.goToBillingButton, href: "/billing" }, "Go back to Billing")),
        React.createElement("hr", { className: classes.separator }),
        React.createElement("p", { className: classes.transactionDetailsTitle }, "Transaction details"),
        React.createElement("div", { className: classes.allTransactionDetailsContainer },
            React.createElement("p", { className: classes.transactionTitle }, paymentType === 'creditpayment'
                ? 'Credit pack'
                : 'Subscription plan'),
            React.createElement("div", { className: classes.transactionDetailContainer },
                React.createElement("p", null, "Reference:"),
                React.createElement("p", null, "b4605542-cad0-4ca3-83e1-1d9177a92438")),
            React.createElement("div", { className: classes.transactionDetailContainer },
                React.createElement("p", null, "Price:"),
                React.createElement("p", null, "\u20AC 100")),
            React.createElement("div", { className: classes.transactionDetailContainer },
                React.createElement("p", null, "Credit amount:"),
                React.createElement("p", null, "10000 Cr")),
            React.createElement("div", { className: classes.transactionDetailContainer },
                React.createElement("p", null, "Transaction date:"),
                React.createElement("p", null, "30th April 2021, 09:30")))));
};
export default TransactionComplete;
