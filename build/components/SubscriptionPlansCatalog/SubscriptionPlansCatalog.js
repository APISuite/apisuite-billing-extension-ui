import React from 'react';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import useStyles from './styles';
const SubscriptionPlansCatalog = ({ arrayOfSubscriptionPlans, currentlySelectedSubscriptionPlan, handleSubscriptionPlanSelection, }) => {
    const classes = useStyles();
    const generateCatalogEntries = () => {
        const arrayOfCatalogEntries = arrayOfSubscriptionPlans.map((subscriptionPlan, index) => {
            return (React.createElement("div", { className: subscriptionPlan.idOfSubscriptionPlan ===
                    currentlySelectedSubscriptionPlan.idOfSubscriptionPlan
                    ? classes.selectedSubscriptionPlanContainer
                    : classes.notSelectedSubscriptionPlanContainer, key: `subscriptionPlansCatalogEntry${index}`, onClick: () => handleSubscriptionPlanSelection(subscriptionPlan.idOfSubscriptionPlan) },
                subscriptionPlan.idOfSubscriptionPlan ===
                    currentlySelectedSubscriptionPlan.idOfSubscriptionPlan ? (React.createElement(RadioButtonCheckedRoundedIcon, { className: classes.selectedSubscriptionPlanIcon })) : (React.createElement(RadioButtonUncheckedRoundedIcon, { className: classes.notSelectedSubscriptionPlanIcon })),
                React.createElement("div", { className: classes.subscriptionPlanDetailsContainer },
                    React.createElement("div", { className: classes.leftDetailsContainer },
                        React.createElement("p", null, subscriptionPlan.nameOfSubscriptionPlan),
                        React.createElement("p", null,
                            subscriptionPlan.creditsInSubscriptionPlan,
                            " credits")),
                    React.createElement("div", { className: classes.rightDetailsContainer },
                        React.createElement("p", null,
                            "\u20AC ",
                            subscriptionPlan.priceOfSubscriptionPlan),
                        React.createElement("p", null, subscriptionPlan.periodicityOfSubscriptionPlan)))));
        });
        return arrayOfCatalogEntries;
    };
    return (React.createElement("div", { className: classes.subscriptionPlansCatalogEntriesContainer }, generateCatalogEntries()));
};
export default SubscriptionPlansCatalog;
