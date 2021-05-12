import React, { useState } from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Button, IconButton, Menu, MenuItem, useTranslation } from '@apisuite/fe-base';
import { CustomizableDialog } from '../CustomizableDialog/CustomizableDialog';
import useStyles from './styles';
const SubscriptionsTable = ({ arrayOfSubs, onCancelSubscription, }) => {
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
        if (idx === 2) {
            setCancelSubDialogOpen(true);
        }
    };
    const menuOptions = [
        'Subscription options',
        'Edit payment information',
        'Cancel subscription plan',
    ];
    const convertDate = (dateString) => {
        const dateFormat = new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        });
        return dateFormat.format(new Date(dateString));
    };
    const handleConfirmCancelSubscription = () => {
        setCancelSubDialogOpen(false);
        onCancelSubscription();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.subsTableWrapper },
            React.createElement("table", { className: classes.subsTable },
                React.createElement("tr", { className: classes.subsTableHeader },
                    React.createElement("th", null, t('subscriptionsTable.title')),
                    React.createElement("th", null, t('subscriptionsTable.subtitle')),
                    React.createElement("th", null)),
                arrayOfSubs.map((sub, index) => {
                    return (React.createElement("tr", { className: classes.subsTableEntry, key: `subTableEntry${index}` },
                        React.createElement("td", null, sub.subName),
                        React.createElement("td", null, convertDate(sub.subNextBillingDate)),
                        React.createElement("td", null,
                            React.createElement(IconButton, { onClick: handleMenuClick },
                                React.createElement(MoreVertIcon, null)),
                            React.createElement(Menu, { anchorEl: anchorElement, keepMounted: true, open: open, onClose: handleMenuClose(-1) }, menuOptions.map((menuOption, index) => (React.createElement(MenuItem
                            // We want to disable the first option (because we're using it as a title),
                            // and the second option as well (because we have yet to implement it).
                            , { 
                                // We want to disable the first option (because we're using it as a title),
                                // and the second option as well (because we have yet to implement it).
                                disabled: !index || index === 1, key: menuOption, onClick: handleMenuClose(index) }, menuOption)))))));
                }))),
        React.createElement(CustomizableDialog, { icon: "warning", open: cancelSubDialogOpen, onClose: () => setCancelSubDialogOpen(false), title: t('subscriptionsTable.cancel.title'), text: t('subscriptionsTable.cancel.text'), subText: t('subscriptionsTable.cancel.subText'), actions: [
                React.createElement(Button, { variant: "outlined", key: "cancel-sub-cancel", onClick: () => setCancelSubDialogOpen(false) }, t('subscriptionsTable.cancel.cta')),
                React.createElement(Button, { className: classes.confirmCancelCTA, key: "cancel-sub-confirm", onClick: handleConfirmCancelSubscription }, t('subscriptionsTable.cancel.confirmCTA')),
            ] })));
};
export default SubscriptionsTable;
