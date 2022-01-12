import React from 'react';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import clsx from 'clsx';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
const SubscriptionsCatalog = ({ activeSubscriptionID, subscriptions, selectedSubscription, handleSubscriptionSelection, }) => {
    const classes = useStyles();
    const generateCatalogEntries = () => {
        return subscriptions.map((sub, index) => {
            return (React.createElement("div", { className: clsx({
                    [classes.selectedSubscriptionContainer]: sub.id === selectedSubscription.id,
                    [classes.notSelectedSubscriptionContainer]: sub.id !== selectedSubscription.id,
                }), key: `subscriptionsCatalogEntry${index}`, onClick: () => handleSubscriptionSelection(sub.id) },
                sub.id === selectedSubscription.id ||
                    sub.id === activeSubscriptionID ? (React.createElement(RadioButtonCheckedRoundedIcon, { className: clsx(classes.selectedSubscriptionIcon, {
                        [classes.disabledSubscriptionIcon]: sub.id === activeSubscriptionID,
                    }) })) : (React.createElement(RadioButtonUncheckedRoundedIcon, { className: classes.notSelectedSubscriptionIcon })),
                React.createElement("div", { className: classes.subscriptionDetailsContainer },
                    React.createElement("div", null,
                        React.createElement(Typography, { variant: "body2" }, sub.name),
                        React.createElement(Typography, { variant: "body1" },
                            React.createElement("b", null,
                                sub.credits,
                                " credits"))),
                    React.createElement("div", null,
                        React.createElement(Typography, { variant: "body1" },
                            React.createElement("b", null,
                                "\u20AC ",
                                sub.price.toFixed(2))),
                        React.createElement(Typography, { variant: "body2" }, sub.periodicity))),
                sub.id === activeSubscriptionID && (React.createElement("div", { className: classes.disabledSubscriptionContainer, onClick: (event) => {
                        event.stopPropagation();
                    } }))));
        });
    };
    return (React.createElement("div", { className: classes.subscriptionCatalogEntriesContainer }, generateCatalogEntries()));
};
export default SubscriptionsCatalog;
