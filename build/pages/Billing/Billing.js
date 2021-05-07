import React, { useEffect, useState } from 'react';
import { Button, useTranslation } from '@apisuite/fe-base';
import CreditPacksCatalog from '../../components/CreditPacksCatalog/CreditPacksCatalog';
import Link from '../../components/Link';
import SubscriptionPlansCatalog from '../../components/SubscriptionPlansCatalog';
import SubscriptionsTable from '../../components/SubscriptionsTable';
import TransactionsTable from '../../components/TransactionsTable';
import useStyles from './styles';
const Billing = ({ allCreditPacks, allSubscriptionPlans, allUserDetails, allUserTransactions, getAllCreditPacksAction, getAllSubscriptionPlansAction, getAllUserDetailsAction, getAllUserTransactionsAction, hasPurchasedCredits, user, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    function t(str) {
        return trans.t(`extensions.${str}`);
    }
    /* Triggers the retrieval and storage (on the app's Store, under 'billing')
    of all credit packs and subscription plans we presently offer, as well as
    all information we have on a user and his transactions. */
    useEffect(() => {
        getAllCreditPacksAction();
        getAllSubscriptionPlansAction();
        getAllUserDetailsAction(user.id);
        getAllUserTransactionsAction();
    }, []);
    /* Credits logic */
    const [wantsToTopUpCredits, setWantsToTopUpCredits] = React.useState(false);
    const handleWantsToTopUpCredits = () => {
        setWantsToTopUpCredits(!wantsToTopUpCredits);
    };
    const [hasSelectedCreditPack, setHasSelectedCreditPack] = React.useState(false);
    const [currentlySelectedCreditPack, setCurrentlySelectedCreditPack,] = React.useState({
        creditsInCreditPack: 0,
        idOfCreditPack: 0,
        nameOfCreditPack: '',
        priceOfCreditPack: 0,
    });
    const handleCreditPackSelection = (idOfSelectedCreditPack) => {
        if (hasSelectedCreditPack &&
            currentlySelectedCreditPack.idOfCreditPack === idOfSelectedCreditPack) {
            setHasSelectedCreditPack(false);
            setCurrentlySelectedCreditPack({
                creditsInCreditPack: 0,
                idOfCreditPack: 0,
                nameOfCreditPack: '',
                priceOfCreditPack: 0,
            });
        }
        else {
            const selectedCreditPack = allCreditPacks.find((creditPack) => {
                return creditPack.idOfCreditPack === idOfSelectedCreditPack;
            });
            setHasSelectedCreditPack(true);
            setCurrentlySelectedCreditPack(selectedCreditPack);
        }
    };
    /* Subscriptions logic */
    const [hasSelectedSubscriptionPlan, setHasSelectedSubscriptionPlan,] = useState(false);
    const [currentlySelectedSubscriptionPlan, setCurrentlySelectedSubscriptionPlan,] = React.useState({
        creditsInSubscriptionPlan: 0,
        idOfSubscriptionPlan: 0,
        nameOfSubscriptionPlan: '',
        periodicityOfSubscriptionPlan: '',
        priceOfSubscriptionPlan: 0,
    });
    const handleSubscriptionPlanSelection = (idOfSelectedSubscriptionPlan) => {
        if (hasSelectedSubscriptionPlan &&
            currentlySelectedSubscriptionPlan.idOfSubscriptionPlan ===
                idOfSelectedSubscriptionPlan) {
            setHasSelectedSubscriptionPlan(false);
            setCurrentlySelectedSubscriptionPlan({
                creditsInSubscriptionPlan: 0,
                idOfSubscriptionPlan: 0,
                nameOfSubscriptionPlan: '',
                periodicityOfSubscriptionPlan: '',
                priceOfSubscriptionPlan: 0,
            });
        }
        else {
            const selectedSubscriptionPlan = allSubscriptionPlans.find((subscriptionPlan) => {
                return (subscriptionPlan.idOfSubscriptionPlan ===
                    idOfSelectedSubscriptionPlan);
            });
            setHasSelectedSubscriptionPlan(true);
            setCurrentlySelectedSubscriptionPlan(selectedSubscriptionPlan);
        }
    };
    /* Temporary */
    const [hasStartedSubscription, setHasStartedSubscription] = useState(false);
    const handleSubscriptionStart = () => {
        setHasStartedSubscription(true);
    };
    return (React.createElement("main", { className: `page-container ${classes.billingContentContainer}` },
        React.createElement("p", { className: classes.title }, t('billing.title')),
        React.createElement("p", { className: classes.subtitle }, t('billing.subtitle')),
        React.createElement("p", { className: classes.sectionTitle }, t('billing.yourBalance')),
        React.createElement("div", { className: wantsToTopUpCredits
                ? classes.yourCreditBalanceContainerWithCreditPacks
                : classes.yourCreditBalanceContainerWithoutCreditPacks },
            React.createElement("div", { className: classes.creditBalanceContainer },
                React.createElement("p", null, t('billing.availableCredits')),
                React.createElement("p", null, allUserDetails.userCredits)),
            wantsToTopUpCredits ? (React.createElement("div", null,
                React.createElement("hr", { className: classes.separator }),
                allCreditPacks.length !== 0 ? (React.createElement(React.Fragment, null,
                    React.createElement("p", { className: classes.creditPacksTitle }, t('billing.creditPacksTitle')),
                    React.createElement(CreditPacksCatalog, { arrayOfCreditPacks: allCreditPacks, currentlySelectedCreditPack: currentlySelectedCreditPack, handleCreditPackSelection: handleCreditPackSelection }))) : (React.createElement("p", { className: classes.retrievingAllAvailableCreditPacks }, t('billing.retrievingCreditPacks'))),
                React.createElement("div", null,
                    React.createElement(Link, { className: currentlySelectedCreditPack.idOfCreditPack !== 0
                            ? classes.enabledPurchaseCreditsButton
                            : classes.disabledPurchaseCreditsButton, href: "/billing/creditpayment" }, t('billing.purchaseCreditsButtonLabel')),
                    React.createElement(Button, { className: classes.cancelCreditsPurchaseButton, onClick: handleWantsToTopUpCredits }, t('billing.cancelCreditsPurchaseButtonLabel'))))) : (React.createElement(Button, { className: classes.addCreditsButton, onClick: handleWantsToTopUpCredits }, t('billing.addCreditsButtonLabel')))),
        React.createElement("p", { className: classes.sectionTitle }, t('billing.yourSubscriptionsTitle')),
        allUserDetails.subscriptionID ? (React.createElement(React.Fragment, null,
            React.createElement(SubscriptionsTable, { arrayOfSubs: [
                    {
                        subName: 'Basic plan',
                        subNextBillingDate: '13 August 2021',
                    },
                ] }),
            React.createElement(Button, { className: classes.editPaymentDetailsButton }, t('billing.editPaymentInfoButtonLabel')))) : (React.createElement(React.Fragment, null,
            React.createElement("p", { className: classes.noActiveSubscriptionText }, t('billing.noActiveSubscriptions')),
            allSubscriptionPlans.length !== 0 ? (React.createElement(React.Fragment, null,
                React.createElement("p", { className: classes.subscriptionSelectionTitle }, t('billing.chooseSubscription')),
                React.createElement(SubscriptionPlansCatalog, { arrayOfSubscriptionPlans: allSubscriptionPlans, currentlySelectedSubscriptionPlan: currentlySelectedSubscriptionPlan, handleSubscriptionPlanSelection: handleSubscriptionPlanSelection }))) : (React.createElement("p", { className: classes.retrievingAllAvailableSubscriptionPlans }, t('billing.retrievingSubscriptionPlans'))),
            React.createElement(Link, { className: hasSelectedSubscriptionPlan
                    ? classes.enabledStartSubscriptionButton
                    : classes.disabledStartSubscriptionButton, href: "/billing/subscriptionpayment" }, t('billing.startSubscriptionButtonLabel')))),
        (hasPurchasedCredits || hasStartedSubscription) && (React.createElement(React.Fragment, null,
            React.createElement("p", { className: classes.sectionTitle }, t('billing.transactionHistoryTitle')),
            React.createElement("p", { className: classes.sectionSubtitle }, t('billing.transactionHistorySubtitle')),
            React.createElement(TransactionsTable, { arrayOfTransactions: [
                    {
                        transactionAmount: '€ 100',
                        transactionCompleted: true,
                        transactionReference: 'b4605542-cad0-4ca3-83e1-1d9177a92438',
                        transactionDate: '30th April 2021, 09:30',
                        transactionName: 'Credit pack: 10000 credits',
                    },
                ] })))));
};
export default Billing;
