import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Trans, Typography, useTheme, useTranslation, } from '@apisuite/fe-base';
import { CustomizableDialog } from '../../components/CustomizableDialog/CustomizableDialog';
import CreditPacksCatalog from '../../components/CreditPacksCatalog/CreditPacksCatalog';
import SubscriptionsCatalog from '../../components/SubscriptionsCatalog';
import SubscriptionsTable from '../../components/SubscriptionsTable';
import TransactionsTable from '../../components/TransactionsTable';
import useStyles from './styles';
import Link from '../../components/Link';
const Billing = ({ allUserDetails, cancelSubscriptionAction, clearSubscriptionInfoAction, creditPacks, dialogInfo, getCreditPacksAction, getSubscriptionPlansAction, getUserDetailsAction, getUserInvoiceNoteAction, getUserTransactionsAction, hasRetrievedAllCreditPacks, hasRetrievedAllSubscriptions, invoiceNote, purchaseCreditsAction, setUserInvoiceNoteAction, startSubscriptionAction, subscriptions, successfullySubscribedToPlan, transactions, user, }) => {
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
        getCreditPacksAction('price', 'asc');
        getSubscriptionPlansAction('price', 'asc');
        getUserInvoiceNoteAction(user.id);
        getUserDetailsAction(user.id);
        getUserTransactionsAction();
    }, []);
    /* Credits logic */
    const showCreditPacks = () => {
        if (!hasRetrievedAllCreditPacks) {
            return (React.createElement(Box, { clone: true, mb: 3 },
                React.createElement(Typography, { variant: "body2" }, t('retrievingCreditPacks'))));
        }
        if (creditPacks.length) {
            return (React.createElement(React.Fragment, null,
                React.createElement(Typography, { variant: "body2", color: "inherit", gutterBottom: true }, t('creditPacksTitle')),
                React.createElement(CreditPacksCatalog, { creditPacks: creditPacks, selectedCreditPack: selectedCreditPack, handleCreditPackSelection: handleCreditPackSelection })));
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
    const [selectedCreditPack, setSelectedCreditPack] = useState({
        credits: 0,
        id: 0,
        name: '',
        price: 0,
    });
    const handleCreditPackSelection = (id) => {
        if (hasSelectedCreditPack && selectedCreditPack.id === id) {
            setHasSelectedCreditPack(false);
            setSelectedCreditPack({
                credits: 0,
                id: 0,
                name: '',
                price: 0,
            });
        }
        else {
            const selected = creditPacks.find((creditPack) => {
                return creditPack.id === id;
            });
            setHasSelectedCreditPack(true);
            setSelectedCreditPack(selected);
        }
    };
    // Controls the visibility of the 'Confirm credit top-up' dialog
    const [openTopUpDialog, setOpenTopUpDialog] = useState(false);
    const handleOpenTopUpDialog = () => {
        setOpenTopUpDialog(!openTopUpDialog);
    };
    /* Subscriptions logic */
    const showSubscriptions = () => {
        if (!hasRetrievedAllSubscriptions) {
            return (React.createElement(Box, { clone: true, mb: 3 },
                React.createElement(Typography, { gutterBottom: true, variant: "body2" }, t('retrievingSubscriptionPlans'))));
        }
        if (subscriptions.length) {
            return (React.createElement(React.Fragment, null,
                React.createElement(SubscriptionsCatalog, { activeSubscriptionID: parseInt(allUserDetails.subscriptionID, 10), subscriptions: subscriptions, selectedSubscription: selectedSubscriptionPlan, handleSubscriptionSelection: handleSubscriptionPlanSelection })));
        }
        else {
            return (React.createElement(Box, { clone: true, mb: 3 },
                React.createElement(Typography, { gutterBottom: true, variant: "body2" }, t('noSubscriptionPlansAvailable'))));
        }
    };
    const [hasSelectedSubscriptionPlan, setHasSelectedSubscriptionPlan,] = useState(false);
    const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] = useState({
        credits: 0,
        id: 0,
        name: '',
        periodicity: '',
        price: 0,
    });
    const handleSubscriptionPlanSelection = (subscriptionID) => {
        if (hasSelectedSubscriptionPlan &&
            selectedSubscriptionPlan.id === subscriptionID) {
            setHasSelectedSubscriptionPlan(false);
            setSelectedSubscriptionPlan({
                credits: 0,
                id: 0,
                name: '',
                periodicity: '',
                price: 0,
            });
        }
        else {
            const selectedSubscription = subscriptions.find((sub) => sub.id === subscriptionID);
            setHasSelectedSubscriptionPlan(true);
            setSelectedSubscriptionPlan(selectedSubscription);
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
            setSelectedSubscriptionPlan({
                credits: 0,
                id: 0,
                name: '',
                periodicity: '',
                price: 0,
            });
            setHasSelectedSubscriptionPlan(false);
            setWantsToChangeSubscriptionPlan(false);
        }
    }, [successfullySubscribedToPlan]);
    /* Triggers the retrieval and storage (on the app's Store, under 'billing')
    of all information we have on a user and his transactions AFTER the user
    starts or changes his subscription plan. */
    useEffect(() => {
        if (successfullySubscribedToPlan) {
            getUserDetailsAction(user.id);
            getUserTransactionsAction();
        }
    }, [successfullySubscribedToPlan]);
    /* Invoice-related logic */
    const [userInvoiceNote, setUserInvoiceNote] = useState('');
    const handleUserInvoiceNote = (invoiceNoteText) => {
        setUserInvoiceNote(invoiceNoteText);
    };
    useEffect(() => {
        setUserInvoiceNote(invoiceNote);
    }, [invoiceNote, setUserInvoiceNoteAction]);
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
        If a 'dialogToSWarning.url' translation exists and is not empty, this will be
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
                    showCreditPacks(),
                    React.createElement("div", null,
                        React.createElement(Button, { variant: "contained", size: "large", color: "primary", disableElevation: true, disabled: !selectedCreditPack.id, onClick: handleOpenTopUpDialog }, t('purchaseCreditsButtonLabel')),
                        React.createElement(Box, { clone: true, ml: 1, style: { backgroundColor: palette.common.white } },
                            React.createElement(Button, { variant: "outlined", size: "large", color: "primary", disableElevation: true, onClick: handleWantsToTopUpCredits }, t('cancelCreditsPurchaseButtonLabel')))))) : (React.createElement(Button, { variant: "contained", size: "large", color: "primary", disableElevation: true, onClick: handleWantsToTopUpCredits }, t('addCreditsButtonLabel')))),
            React.createElement(Box, { clone: true, mb: 3 },
                React.createElement(Typography, { variant: "h3" }, t('yourSubscriptionsTitle'))),
            allUserDetails.subscriptionID ? (React.createElement(React.Fragment, null,
                React.createElement(SubscriptionsTable, { subscriptions: [
                        {
                            name: subscriptions.find((subscriptionPlan) => {
                                return (subscriptionPlan.id ===
                                    parseInt(allUserDetails.subscriptionID));
                            })?.name,
                            nextBillingDate: allUserDetails.nextPaymentDate,
                        },
                    ], onCancelSubscription: cancelSubscriptionAction }),
                !wantsToCheckAllSubPlans && (React.createElement(Button, { variant: "contained", color: "primary", size: "large", disableElevation: true, onClick: handleWantsToCheckAllSubPlans }, t('checkSubPlansButtonLabel'))),
                wantsToCheckAllSubPlans && (React.createElement(React.Fragment, null,
                    React.createElement(Box, { clone: true, mb: 3 },
                        React.createElement(Typography, { variant: "h6" }, t('chooseNewSubPlan'))),
                    showSubscriptions(),
                    React.createElement(Box, { mt: 2 },
                        React.createElement(Button, { variant: "contained", color: "primary", size: "large", disableElevation: true, disabled: !hasSelectedSubscriptionPlan, onClick: handleWantsToChangeSubscriptionPlan, style: { marginRight: spacing(1.5) } }, t('startNewSubPlanButtonLabel')),
                        React.createElement(Button, { variant: "outlined", color: "secondary", size: "large", disableElevation: true, onClick: handleWantsToCheckAllSubPlans }, t('cancelSubPlansCheckingButtonLabel'))))))) : (React.createElement(React.Fragment, null,
                React.createElement(Box, { clone: true, mb: 3 },
                    React.createElement(Typography, { variant: "body1" }, t('noActiveSubscriptions'))),
                React.createElement(Box, { clone: true, mb: 3 },
                    React.createElement(Typography, { variant: "h3" }, t('chooseSubscription'))),
                showSubscriptions(),
                React.createElement(Button, { variant: "contained", color: "primary", size: "large", disableElevation: true, disabled: !hasSelectedSubscriptionPlan, onClick: handleWantsToStartSubscriptionPlan }, t('startSubscriptionButtonLabel')))),
            React.createElement(Box, { clone: true, mb: 1.5, mt: 5 },
                React.createElement(Typography, { variant: "h3" }, t('invoiceNote.title'))),
            React.createElement(Box, { clone: true, mb: 3 },
                React.createElement(Typography, { variant: "body1", color: "textSecondary" }, t('invoiceNote.subtitle'))),
            React.createElement(Box, { clone: true, style: {
                    display: 'block',
                    maxWidth: 450,
                    width: '100%',
                } },
                React.createElement(TextField, { className: classes.invoiceNoteTextField, fullWidth: true, InputLabelProps: {
                        shrink: true,
                    }, label: t('invoiceNote.textFieldLabel'), margin: "dense", multiline: true, onChange: (event) => handleUserInvoiceNote(event.target.value), rows: 4, type: "text", value: userInvoiceNote, variant: "outlined" })),
            React.createElement(Box, { clone: true, mt: 3 },
                React.createElement(Button, { color: "primary", disabled: userInvoiceNote === invoiceNote, disableElevation: true, onClick: () => setUserInvoiceNoteAction(user.id, userInvoiceNote), size: "large", variant: "contained" }, t('invoiceNote.saveInvoiceNoteButtonLabel'))),
            React.createElement(Box, { clone: true, mt: 5, mb: 1.5 },
                React.createElement(Typography, { variant: "h3" }, t('transactionHistoryTitle'))),
            React.createElement(Box, { clone: true, mb: 3 },
                React.createElement(Typography, { variant: "body1", color: "textSecondary" }, t('transactionHistorySubtitle'))),
            React.createElement(TransactionsTable, { transactions: transactions })),
        React.createElement(CustomizableDialog, { actions: [
                React.createElement(Button, { className: classes.dialogCancelButton, key: "cancelCreditTopUp", onClick: handleOpenTopUpDialog, variant: "outlined" }, t('confirmCreditTopUpDialog.cancelButtonLabel')),
                React.createElement(Button, { className: classes.dialogConfirmButton, key: "openTopUpDialog", onClick: () => {
                        purchaseCreditsAction(selectedCreditPack.id);
                    } }, t('confirmCreditTopUpDialog.confirmButtonLabel')),
            ], icon: "warning", onClose: handleOpenTopUpDialog, open: openTopUpDialog, subText: t('confirmCreditTopUpDialog.subText'), text: t('confirmCreditTopUpDialog.text', {
                creditAmount: selectedCreditPack.credits,
            }), title: t('confirmCreditTopUpDialog.title') }, generateWarning()),
        React.createElement(CustomizableDialog, { actions: [
                React.createElement(Button, { key: "cancelSubscriptionPlanStart", onClick: handleWantsToStartSubscriptionPlan, variant: "outlined" }, t('startSubscriptionDialog.cancelButtonLabel')),
                React.createElement(Button, { className: classes.dialogConfirmButton, key: "confirmSubscriptionPlanStart", onClick: () => {
                        startSubscriptionAction(selectedSubscriptionPlan.id);
                    } }, t('startSubscriptionDialog.confirmButtonLabel')),
            ], icon: "warning", onClose: handleWantsToStartSubscriptionPlan, open: wantsToStartSubscriptionPlan, subText: t('startSubscriptionDialog.subText'), text: t('startSubscriptionDialog.text', {
                selectedSubscriptionPlan: selectedSubscriptionPlan.name,
            }), title: t('startSubscriptionDialog.title') }, generateWarning()),
        React.createElement(CustomizableDialog, { actions: [
                React.createElement(Button, { key: "cancel-sub-confirm", onClick: handleDialogClose, variant: "outlined" }, t('closeCTA')),
            ], icon: dialogInfo.type, onClose: handleDialogClose, open: dialogOpen, subText: t(dialogInfo.transKeys.subText), text: t(dialogInfo.transKeys.text), title: t(dialogInfo.transKeys.title) }),
        React.createElement(CustomizableDialog, { actions: [
                React.createElement(Button, { className: classes.dialogCancelButton, key: "cancelSubscriptionPlanChange", onClick: handleWantsToChangeSubscriptionPlan, variant: "outlined" }, t('changeSubscriptionDialog.cancelButtonLabel')),
                React.createElement(Button, { className: classes.dialogConfirmButton, key: "confirmSubscriptionPlanChange", onClick: () => {
                        startSubscriptionAction(selectedSubscriptionPlan.id);
                    } }, t('changeSubscriptionDialog.confirmButtonLabel')),
            ], icon: "warning", onClose: handleWantsToChangeSubscriptionPlan, open: wantsToChangeSubscriptionPlan, subText: t('changeSubscriptionDialog.subText'), text: t('changeSubscriptionDialog.text', {
                newlySelectedSubscriptionPlan: selectedSubscriptionPlan.name,
            }), title: t('changeSubscriptionDialog.title') }, generateWarning())));
};
export default Billing;
