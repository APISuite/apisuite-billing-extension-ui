import React, { useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button, IconButton, Menu, MenuItem, Typography, useTranslation, } from '@apisuite/fe-base';
import { convertDate } from '../../util/convertDate';
import { CustomizableDialog } from '../CustomizableDialog/CustomizableDialog';
import useStyles from './styles';
const SubscriptionsTable = ({ subscriptions, onCancelSubscription, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const [cancelSubDialogOpen, setCancelSubDialogOpen] = useState(false);
    const t = (str) => {
        return trans.t(`extensions.billing.${str}`);
    };
    const [anchorElement, setAnchorElement] = React.useState(null);
    const open = Boolean(anchorElement);
    const handleMenuClick = (event) => {
        setAnchorElement(event.currentTarget);
    };
    const handleMenuClose = (idx) => () => {
        setAnchorElement(null);
        if (idx === 1) {
            setCancelSubDialogOpen(true);
        }
    };
    const menuOptions = ['Edit payment information', 'Cancel subscription plan'];
    const handleConfirmCancelSubscription = () => {
        setCancelSubDialogOpen(false);
        onCancelSubscription();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.subsTableWrapper },
            React.createElement("table", { className: classes.subsTable },
                React.createElement("tr", { className: classes.subsTableHeader },
                    React.createElement(Typography, { component: "th", variant: "body1" },
                        React.createElement("b", null, t('subscriptionsTable.title'))),
                    React.createElement(Typography, { component: "th", variant: "body1" },
                        React.createElement("b", null, t('subscriptionsTable.subtitle'))),
                    React.createElement("th", null)),
                subscriptions.map((sub, index) => {
                    return (React.createElement("tr", { className: classes.subsTableEntry, key: `subTableEntry${index}` },
                        React.createElement(Typography, { component: "td", variant: "body2" }, sub.name),
                        React.createElement(Typography, { component: "td", variant: "body2" }, sub.nextBillingDate
                            ? convertDate(trans.i18n.language, sub.nextBillingDate)
                            : t('subscriptionsTable.awaitingConfirmation')),
                        React.createElement("td", null,
                            React.createElement(IconButton, { onClick: handleMenuClick },
                                React.createElement(MoreVertIcon, null)),
                            React.createElement(Menu, { anchorEl: anchorElement, keepMounted: true, open: open, onClose: handleMenuClose(-1) }, menuOptions.map((menuOption, ix) => (React.createElement(MenuItem
                            // We want to disable the first option as well (because we have yet to implement it).
                            , { 
                                // We want to disable the first option as well (because we have yet to implement it).
                                disabled: !ix, key: menuOption, onClick: handleMenuClose(ix) }, menuOption)))))));
                }))),
        React.createElement(CustomizableDialog, { icon: "warning", open: cancelSubDialogOpen, onClose: () => setCancelSubDialogOpen(false), title: t('subscriptionsTable.cancel.title'), text: t('subscriptionsTable.cancel.text'), subText: t('subscriptionsTable.cancel.subText'), actions: [
                React.createElement(Button, { variant: "outlined", key: "cancel-sub-cancel", onClick: () => setCancelSubDialogOpen(false) }, t('subscriptionsTable.cancel.cta')),
                React.createElement(Button, { className: classes.confirmCancelCTA, key: "cancel-sub-confirm", onClick: handleConfirmCancelSubscription }, t('subscriptionsTable.cancel.confirmCTA')),
            ] })));
};
export default SubscriptionsTable;
