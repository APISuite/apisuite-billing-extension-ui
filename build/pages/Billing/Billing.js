import React, { useEffect, useState } from 'react';
import { Button, useTranslation } from '@apisuite/fe-base';
import CreditPacksCatalog from '../../components/CreditPacksCatalog/CreditPacksCatalog';
import SubscriptionPlansCatalog from '../../components/SubscriptionPlansCatalog';
import SubscriptionsTable from '../../components/SubscriptionsTable';
import TransactionsTable from '../../components/TransactionsTable';
import useStyles from './styles';
import { CustomizableDialog } from '../../components/CustomizableDialog/CustomizableDialog';
const Billing = ({ allCreditPacks, allSubscriptionPlans, allUserDetails, allUserTransactions, dialogInfo, getAllCreditPacksAction, getAllSubscriptionPlansAction, getAllUserDetailsAction, getAllUserTransactionsAction, purchaseCreditsAction, startSubscriptionAction, cancelSubscriptionAction, clearSubscriptionInfoAction, successfullySubscribedToPlan, user, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const [dialogOpen, setDialogOpen] = useState(false);
    const t = (str, ...args) => {
        return trans.t(`extensions.billing.${str}`, ...args);
    };
    /* Triggers the retrieval and storage (on the app's Store, under 'billing')
    of all credit packs and subscription plans we presently offer, as well as
    all information we have on a user and his transactions. */
    useEffect(() => {
        getAllCreditPacksAction('price', 'asc');
        getAllSubscriptionPlansAction('price', 'asc');
        getAllUserDetailsAction(user.id);
        getAllUserTransactionsAction();
    }, [successfullySubscribedToPlan]);
    useEffect(() => {
        if (dialogInfo.transKeys.title.length) {
            setDialogOpen(true);
        }
    }, [dialogInfo.transKeys.title]);
    /* Credits logic */
    const [wantsToTopUpCredits, setWantsToTopUpCredits] = useState(false);
    const handleWantsToTopUpCredits = () => {
        setWantsToTopUpCredits(!wantsToTopUpCredits);
    };
    const [hasSelectedCreditPack, setHasSelectedCreditPack] = useState(false);
    const [currentlySelectedCreditPack, setCurrentlySelectedCreditPack,] = useState({
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
    const [currentlySelectedSubscriptionPlan, setCurrentlySelectedSubscriptionPlan,] = useState({
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
    const handleDialogClose = () => {
        setDialogOpen(false);
        // defer clear
        setTimeout(() => {
            clearSubscriptionInfoAction();
        }, 500);
    };
    const [wantsToChangeSubscriptionPlan, setWantsToChangeSubscriptionPlan,] = useState(false);
    const handleWantsToChangeSubscriptionPlan = () => {
        setWantsToChangeSubscriptionPlan(!wantsToChangeSubscriptionPlan);
    };
    useEffect(() => {
        if (successfullySubscribedToPlan) {
            setCurrentlySelectedSubscriptionPlan({
                creditsInSubscriptionPlan: 0,
                idOfSubscriptionPlan: 0,
                nameOfSubscriptionPlan: '',
                periodicityOfSubscriptionPlan: '',
                priceOfSubscriptionPlan: 0,
            });
            setHasSelectedSubscriptionPlan(false);
            setWantsToChangeSubscriptionPlan(false);
        }
    }, [successfullySubscribedToPlan]);
    return (React.createElement(React.Fragment, null,
        React.createElement("main", { className: `page-container ${classes.billingContentContainer}` },
            React.createElement("p", { className: classes.title }, t('title')),
            React.createElement("p", { className: classes.subtitle }, t('subtitle')),
            React.createElement("p", { className: classes.sectionTitle }, t('yourBalance')),
            React.createElement("div", { className: wantsToTopUpCredits
                    ? classes.yourCreditBalanceContainerWithCreditPacks
                    : classes.yourCreditBalanceContainerWithoutCreditPacks },
                React.createElement("div", { className: classes.creditBalanceContainer },
                    React.createElement("p", null, t('availableCredits')),
                    React.createElement("p", null, allUserDetails.userCredits)),
                wantsToTopUpCredits ? (React.createElement("div", null,
                    React.createElement("hr", { className: classes.separator }),
                    allCreditPacks.length !== 0 ? (React.createElement(React.Fragment, null,
                        React.createElement("p", { className: classes.creditPacksTitle }, t('creditPacksTitle')),
                        React.createElement(CreditPacksCatalog, { arrayOfCreditPacks: allCreditPacks, currentlySelectedCreditPack: currentlySelectedCreditPack, handleCreditPackSelection: handleCreditPackSelection }))) : (React.createElement("p", { className: classes.retrievingAllAvailableCreditPacks }, t('retrievingCreditPacks'))),
                    React.createElement("div", null,
                        React.createElement(Button, { className: currentlySelectedCreditPack.idOfCreditPack
                                ? classes.enabledPurchaseCreditsButton
                                : classes.disabledPurchaseCreditsButton, onClick: () => {
                                purchaseCreditsAction(currentlySelectedCreditPack.idOfCreditPack);
                            } }, t('purchaseCreditsButtonLabel')),
                        React.createElement(Button, { className: classes.cancelCreditsPurchaseButton, onClick: handleWantsToTopUpCredits }, t('cancelCreditsPurchaseButtonLabel'))))) : (React.createElement(Button, { className: classes.addCreditsButton, onClick: handleWantsToTopUpCredits }, t('addCreditsButtonLabel')))),
            React.createElement("p", { className: classes.sectionTitle }, t('yourSubscriptionsTitle')),
            allUserDetails.subscriptionID ? (React.createElement(React.Fragment, null,
                React.createElement(SubscriptionsTable, { arrayOfSubs: [
                        {
                            subName: allSubscriptionPlans.find((subscriptionPlan) => {
                                return (subscriptionPlan.idOfSubscriptionPlan ===
                                    parseInt(allUserDetails.subscriptionID));
                            })?.nameOfSubscriptionPlan,
                            subNextBillingDate: allUserDetails.nextPaymentDate,
                        },
                    ], onCancelSubscription: cancelSubscriptionAction }),
                React.createElement("p", { className: classes.subscriptionSelectionTitle }, t('chooseNewSubscription')),
                React.createElement(SubscriptionPlansCatalog, { activeSubscriptionPlanID: parseInt(allUserDetails.subscriptionID), arrayOfSubscriptionPlans: allSubscriptionPlans, currentlySelectedSubscriptionPlan: currentlySelectedSubscriptionPlan, handleSubscriptionPlanSelection: handleSubscriptionPlanSelection }),
                React.createElement(Button, { className: hasSelectedSubscriptionPlan
                        ? classes.enabledStartSubscriptionButton
                        : classes.disabledStartSubscriptionButton, onClick: handleWantsToChangeSubscriptionPlan }, t('startNewSubscriptionButtonLabel')))) : (React.createElement(React.Fragment, null,
                React.createElement("p", { className: classes.noActiveSubscriptionText }, t('noActiveSubscriptions')),
                allSubscriptionPlans.length !== 0 ? (React.createElement(React.Fragment, null,
                    React.createElement("p", { className: classes.subscriptionSelectionTitle }, t('chooseSubscription')),
                    React.createElement(SubscriptionPlansCatalog, { arrayOfSubscriptionPlans: allSubscriptionPlans, currentlySelectedSubscriptionPlan: currentlySelectedSubscriptionPlan, handleSubscriptionPlanSelection: handleSubscriptionPlanSelection }))) : (React.createElement("p", { className: classes.retrievingAllAvailableSubscriptionPlans }, t('retrievingSubscriptionPlans'))),
                React.createElement(Button, { className: hasSelectedSubscriptionPlan
                        ? classes.enabledStartSubscriptionButton
                        : classes.disabledStartSubscriptionButton, onClick: () => {
                        startSubscriptionAction(currentlySelectedSubscriptionPlan.idOfSubscriptionPlan);
                    } }, t('startSubscriptionButtonLabel')))),
            allUserTransactions.length !== 0 && (React.createElement(React.Fragment, null,
                React.createElement("p", { className: classes.sectionTitle }, t('transactionHistoryTitle')),
                React.createElement("p", { className: classes.sectionSubtitle }, t('transactionHistorySubtitle')),
                React.createElement(TransactionsTable, { transactions: allUserTransactions })))),
        React.createElement(CustomizableDialog, { open: dialogOpen, onClose: handleDialogClose, icon: dialogInfo.type, title: t(dialogInfo.transKeys.title), text: t(dialogInfo.transKeys.text), subText: t(dialogInfo.transKeys.subText), actions: [
                React.createElement(Button, { key: "cancel-sub-confirm", variant: "outlined", onClick: handleDialogClose }, t('closeCTA')),
            ] }),
        React.createElement(CustomizableDialog, { icon: "warning", open: wantsToChangeSubscriptionPlan, onClose: handleWantsToChangeSubscriptionPlan, title: t('changeSubscriptionDialog.title'), text: t('changeSubscriptionDialog.text', {
                newlySelectedSubscriptionPlan: currentlySelectedSubscriptionPlan.nameOfSubscriptionPlan,
            }), subText: t('changeSubscriptionDialog.subText'), actions: [
                React.createElement(Button, { variant: "outlined", className: classes.cancelSubscriptionPlanChangeButton, key: "cancelSubscriptionPlanChange", onClick: handleWantsToChangeSubscriptionPlan }, t('changeSubscriptionDialog.cancelButtonLabel')),
                React.createElement(Button, { className: classes.confirmSubscriptionPlanChangeButton, key: "confirmSubscriptionPlanChange", onClick: () => {
                        startSubscriptionAction(currentlySelectedSubscriptionPlan.idOfSubscriptionPlan);
                    } }, t('changeSubscriptionDialog.confirmButtonLabel')),
            ] })));
};
export default Billing;
