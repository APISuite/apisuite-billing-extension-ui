import React, { useEffect, useState } from 'react';
import { Box, Button, Trans, Typography, useTheme, useTranslation, } from '@apisuite/fe-base';
import { CustomizableDialog } from '../../components/CustomizableDialog/CustomizableDialog';
import CreditPacksCatalog from '../../components/CreditPacksCatalog/CreditPacksCatalog';
import SubscriptionPlansCatalog from '../../components/SubscriptionPlansCatalog';
import SubscriptionsTable from '../../components/SubscriptionsTable';
import TransactionsTable from '../../components/TransactionsTable';
import useStyles from './styles';
import Link from '../../components/Link';
const Billing = ({ allCreditPacks, allSubscriptionPlans, allUserDetails, allUserTransactions, cancelSubscriptionAction, clearSubscriptionInfoAction, dialogInfo, getAllCreditPacksAction, getAllSubscriptionPlansAction, getAllUserDetailsAction, getAllUserTransactionsAction, hasRetrievedAllCreditPacks, hasRetrievedAllSubscriptionPlans, purchaseCreditsAction, startSubscriptionAction, successfullySubscribedToPlan, user, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const { palette, spacing } = useTheme();
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
    /* Credits logic */
    const showAllCreditPacks = () => {
        if (!hasRetrievedAllCreditPacks) {
            return (React.createElement(Box, { clone: true, mb: 3 },
                React.createElement(Typography, { variant: "body2" }, t('retrievingCreditPacks'))));
        }
        if (allCreditPacks.length) {
            return (React.createElement(React.Fragment, null,
                React.createElement(Typography, { variant: "body2", color: "inherit", gutterBottom: true }, t('creditPacksTitle')),
                React.createElement(CreditPacksCatalog, { arrayOfCreditPacks: allCreditPacks, currentlySelectedCreditPack: currentlySelectedCreditPack, handleCreditPackSelection: handleCreditPackSelection })));
        }
        else {
            return (React.createElement(Box, { clone: true, mb: 3 },
                React.createElement(Typography, { gutterBottom: true, variant: "body2" }, t('noCreditPacksAvailable'))));
        }
    };
    // Controls the visibility of all credit top-up packs
    const [wantsToTopUpCredits, setWantsToTopUpCredits] = useState(false);
    const handleWantsToTopUpCredits = () => {
        setWantsToTopUpCredits(!wantsToTopUpCredits);
    };
    // Controls the selection of credit top-up packs
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
    // Controls the visibility of the 'Confirm credit top-up' dialog
    const [openTopUpDialog, setOpenTopUpDialog] = useState(false);
    const handleOpenTopUpDialog = () => {
        setOpenTopUpDialog(!openTopUpDialog);
    };
    /* Subscriptions logic */
    const showAllSubscriptionPlans = () => {
        if (!hasRetrievedAllSubscriptionPlans) {
            return (React.createElement(Box, { clone: true, mb: 3 },
                React.createElement(Typography, { gutterBottom: true, variant: "body2" }, t('retrievingSubscriptionPlans'))));
        }
        if (allSubscriptionPlans.length) {
            return (React.createElement(React.Fragment, null,
                React.createElement(SubscriptionPlansCatalog, { activeSubscriptionPlanID: parseInt(allUserDetails.subscriptionID, 10), arrayOfSubscriptionPlans: allSubscriptionPlans, currentlySelectedSubscriptionPlan: currentlySelectedSubscriptionPlan, handleSubscriptionPlanSelection: handleSubscriptionPlanSelection })));
        }
        else {
            return (React.createElement(Box, { clone: true, mb: 3 },
                React.createElement(Typography, { gutterBottom: true, variant: "body2" }, t('noSubscriptionPlansAvailable'))));
        }
    };
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
    const [wantsToStartSubscriptionPlan, setWantsToStartSubscriptionPlan,] = useState(false);
    const handleWantsToStartSubscriptionPlan = () => {
        setWantsToStartSubscriptionPlan(!wantsToStartSubscriptionPlan);
    };
    const [wantsToCheckAllSubPlans, setWantsToCheckAllSubPlans] = useState(false);
    const handleWantsToCheckAllSubPlans = () => {
        setWantsToCheckAllSubPlans(!wantsToCheckAllSubPlans);
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
    /* Dialog-related logic */
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleDialogClose = () => {
        setDialogOpen(false);
        // defer clear
        setTimeout(() => {
            clearSubscriptionInfoAction();
        }, 500);
    };
    useEffect(() => {
        if (dialogInfo.transKeys.title.length) {
            setDialogOpen(true);
        }
    }, [dialogInfo.transKeys.title]);
    const generateWarning = () => {
        const replacementTagsArray = [];
        /* The 'dialogToSWarning.text' translation includes a replacement tag (<0></0>).
        If a 'dialogToSWarning.url' translation exists and is not empty, thisg will be
        replaced by a <Link> tag, otherwise, no replacement takes place and the translation is rendered normally. */
        if (t('dialogToSWarning.url')) {
            replacementTagsArray.push(React.createElement(Link, { style: {
                    color: palette.info.main,
                    fontWeight: 400,
                }, key: "warningUrl", rel: "noopener noreferrer", target: "_blank", to: t('dialogToSWarning.url') }));
        }
        return (React.createElement(Typography, { style: { color: palette.text.primary, fontWeight: 300 }, variant: "body2" },
            React.createElement(Trans, { i18nKey: "dialogToSWarning.text", t: t }, replacementTagsArray)));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("main", { className: `page-container ${classes.billingContentContainer}` },
            React.createElement(Typography, { variant: "h2" }, t('title')),
            React.createElement(Box, { clone: true, mb: 5 },
                React.createElement(Typography, { variant: "body1", color: "textSecondary" }, t('subtitle'))),
            React.createElement(Box, { mt: 1.5, mb: 3 },
                React.createElement(Typography, { variant: "h3" }, t('yourBalance'))),
            React.createElement("div", { className: wantsToTopUpCredits
                    ? classes.yourCreditBalanceContainerWithCreditPacks
                    : classes.yourCreditBalanceContainerWithoutCreditPacks },
                React.createElement(Box, { color: palette.common.white },
                    React.createElement(Typography, { variant: "body1", color: "inherit" }, t('availableCredits')),
                    React.createElement(Typography, { variant: "h1", color: "inherit" }, allUserDetails.userCredits)),
                wantsToTopUpCredits ? (React.createElement(Box, { color: palette.common.white },
                    React.createElement("hr", { className: classes.separator }),
                    showAllCreditPacks(),
                    React.createElement("div", null,
                        React.createElement(Button, { variant: "contained", size: "large", color: "primary", disableElevation: true, disabled: !currentlySelectedCreditPack.idOfCreditPack, onClick: handleOpenTopUpDialog }, t('purchaseCreditsButtonLabel')),
                        React.createElement(Box, { clone: true, ml: 1, style: { backgroundColor: palette.common.white } },
                            React.createElement(Button, { variant: "outlined", size: "large", color: "primary", disableElevation: true, onClick: handleWantsToTopUpCredits }, t('cancelCreditsPurchaseButtonLabel')))))) : (React.createElement(Button, { variant: "contained", size: "large", color: "primary", disableElevation: true, onClick: handleWantsToTopUpCredits }, t('addCreditsButtonLabel')))),
            React.createElement(Box, { clone: true, mb: 3 },
                React.createElement(Typography, { variant: "h3" }, t('yourSubscriptionsTitle'))),
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
                !wantsToCheckAllSubPlans && (React.createElement(Button, { variant: "contained", color: "primary", size: "large", disableElevation: true, onClick: handleWantsToCheckAllSubPlans }, t('checkSubPlansButtonLabel'))),
                wantsToCheckAllSubPlans && (React.createElement(React.Fragment, null,
                    React.createElement(Box, { clone: true, mb: 3 },
                        React.createElement(Typography, { variant: "h6" }, t('chooseNewSubPlan'))),
                    showAllSubscriptionPlans(),
                    React.createElement(Box, { mt: 2 },
                        React.createElement(Button, { variant: "contained", color: "primary", size: "large", disableElevation: true, disabled: !hasSelectedSubscriptionPlan, onClick: handleWantsToChangeSubscriptionPlan, style: { marginRight: spacing(1.5) } }, t('startNewSubPlanButtonLabel')),
                        React.createElement(Button, { variant: "outlined", color: "secondary", size: "large", disableElevation: true, onClick: handleWantsToCheckAllSubPlans }, t('cancelSubPlansCheckingButtonLabel'))))))) : (React.createElement(React.Fragment, null,
                React.createElement(Box, { clone: true, mb: 3 },
                    React.createElement(Typography, { variant: "body1" }, t('noActiveSubscriptions'))),
                React.createElement(Box, { clone: true, mb: 3 },
                    React.createElement(Typography, { variant: "h3" }, t('chooseSubscription'))),
                showAllSubscriptionPlans(),
                React.createElement(Button, { variant: "contained", color: "primary", size: "large", disableElevation: true, disabled: !hasSelectedSubscriptionPlan, onClick: handleWantsToStartSubscriptionPlan }, t('startSubscriptionButtonLabel')))),
            allUserTransactions.length !== 0 && (React.createElement(React.Fragment, null,
                React.createElement(Box, { clone: true, mt: 5, mb: 1.5 },
                    React.createElement(Typography, { variant: "h3" }, t('transactionHistoryTitle'))),
                React.createElement(Box, { clone: true, mb: 3 },
                    React.createElement(Typography, { variant: "body1", color: "textSecondary" }, t('transactionHistorySubtitle'))),
                React.createElement(TransactionsTable, { transactions: allUserTransactions })))),
        React.createElement(CustomizableDialog, { actions: [
                React.createElement(Button, { className: classes.dialogCancelButton, key: "cancelCreditTopUp", onClick: handleOpenTopUpDialog, variant: "outlined" }, t('confirmCreditTopUpDialog.cancelButtonLabel')),
                React.createElement(Button, { className: classes.dialogConfirmButton, key: "openTopUpDialog", onClick: () => {
                        purchaseCreditsAction(currentlySelectedCreditPack.idOfCreditPack);
                    } }, t('confirmCreditTopUpDialog.confirmButtonLabel')),
            ], icon: "warning", onClose: handleOpenTopUpDialog, open: openTopUpDialog, subText: t('confirmCreditTopUpDialog.subText'), text: t('confirmCreditTopUpDialog.text', {
                creditAmount: currentlySelectedCreditPack.creditsInCreditPack,
            }), title: t('confirmCreditTopUpDialog.title') }, generateWarning()),
        React.createElement(CustomizableDialog, { actions: [
                React.createElement(Button, { key: "cancelSubscriptionPlanStart", onClick: handleWantsToStartSubscriptionPlan, variant: "outlined" }, t('startSubscriptionDialog.cancelButtonLabel')),
                React.createElement(Button, { className: classes.dialogConfirmButton, key: "confirmSubscriptionPlanStart", onClick: () => {
                        startSubscriptionAction(currentlySelectedSubscriptionPlan.idOfSubscriptionPlan);
                    } }, t('startSubscriptionDialog.confirmButtonLabel')),
            ], icon: "warning", onClose: handleWantsToStartSubscriptionPlan, open: wantsToStartSubscriptionPlan, subText: t('startSubscriptionDialog.subText'), text: t('startSubscriptionDialog.text', {
                selectedSubscriptionPlan: currentlySelectedSubscriptionPlan.nameOfSubscriptionPlan,
            }), title: t('startSubscriptionDialog.title') }, generateWarning()),
        React.createElement(CustomizableDialog, { actions: [
                React.createElement(Button, { key: "cancel-sub-confirm", onClick: handleDialogClose, variant: "outlined" }, t('closeCTA')),
            ], icon: dialogInfo.type, onClose: handleDialogClose, open: dialogOpen, subText: t(dialogInfo.transKeys.subText), text: t(dialogInfo.transKeys.text), title: t(dialogInfo.transKeys.title) }),
        React.createElement(CustomizableDialog, { actions: [
                React.createElement(Button, { className: classes.dialogCancelButton, key: "cancelSubscriptionPlanChange", onClick: handleWantsToChangeSubscriptionPlan, variant: "outlined" }, t('changeSubscriptionDialog.cancelButtonLabel')),
                React.createElement(Button, { className: classes.dialogConfirmButton, key: "confirmSubscriptionPlanChange", onClick: () => {
                        startSubscriptionAction(currentlySelectedSubscriptionPlan.idOfSubscriptionPlan);
                    } }, t('changeSubscriptionDialog.confirmButtonLabel')),
            ], icon: "warning", onClose: handleWantsToChangeSubscriptionPlan, open: wantsToChangeSubscriptionPlan, subText: t('changeSubscriptionDialog.subText'), text: t('changeSubscriptionDialog.text', {
                newlySelectedSubscriptionPlan: currentlySelectedSubscriptionPlan.nameOfSubscriptionPlan,
            }), title: t('changeSubscriptionDialog.title') }, generateWarning())));
};
export default Billing;
