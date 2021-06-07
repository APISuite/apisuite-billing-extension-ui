import React from 'react';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import clsx from 'clsx';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
const SubscriptionPlansCatalog = ({ activeSubscriptionPlanID, arrayOfSubscriptionPlans, currentlySelectedSubscriptionPlan, handleSubscriptionPlanSelection, }) => {
    const classes = useStyles();
    const generateCatalogEntries = () => {
        const arrayOfCatalogEntries = arrayOfSubscriptionPlans.map((subscriptionPlan, index) => {
            return (React.createElement("div", { className: clsx({
                    [classes.selectedSubscriptionPlanContainer]: subscriptionPlan.idOfSubscriptionPlan ===
                        currentlySelectedSubscriptionPlan.idOfSubscriptionPlan,
                    [classes.notSelectedSubscriptionPlanContainer]: subscriptionPlan.idOfSubscriptionPlan !==
                        currentlySelectedSubscriptionPlan.idOfSubscriptionPlan,
                }), key: `subscriptionPlansCatalogEntry${index}`, onClick: () => handleSubscriptionPlanSelection(subscriptionPlan.idOfSubscriptionPlan) },
                subscriptionPlan.idOfSubscriptionPlan ===
                    currentlySelectedSubscriptionPlan.idOfSubscriptionPlan ||
                    subscriptionPlan.idOfSubscriptionPlan ===
                        activeSubscriptionPlanID ? (React.createElement(RadioButtonCheckedRoundedIcon, { className: clsx(classes.selectedSubscriptionPlanIcon, {
                        [classes.disabledSubscriptionPlanIcon]: subscriptionPlan.idOfSubscriptionPlan ===
                            activeSubscriptionPlanID,
                    }) })) : (React.createElement(RadioButtonUncheckedRoundedIcon, { className: classes.notSelectedSubscriptionPlanIcon })),
                React.createElement("div", { className: classes.subscriptionPlanDetailsContainer },
                    React.createElement("div", null,
                        React.createElement(Typography, { variant: "body2" }, subscriptionPlan.nameOfSubscriptionPlan),
                        React.createElement(Typography, { variant: "body1" },
                            React.createElement("b", null,
                                subscriptionPlan.creditsInSubscriptionPlan,
                                " credits"))),
                    React.createElement("div", null,
                        React.createElement(Typography, { variant: "body1" },
                            React.createElement("b", null,
                                "\u20AC ",
                                subscriptionPlan.priceOfSubscriptionPlan)),
                        React.createElement(Typography, { variant: "body2" }, subscriptionPlan.periodicityOfSubscriptionPlan))),
                subscriptionPlan.idOfSubscriptionPlan ===
                    activeSubscriptionPlanID && (React.createElement("div", { className: classes.disabledSubscriptionPlanContainer, onClick: (event) => {
                        event.stopPropagation();
                    } }))));
        });
        return arrayOfCatalogEntries;
    };
    return (React.createElement("div", { className: classes.subscriptionPlansCatalogEntriesContainer }, generateCatalogEntries()));
};
export default SubscriptionPlansCatalog;
