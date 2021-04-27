import { SubscriptionPlanDetails } from 'pages/Billing/types';
export declare type SubscriptionPlansCatalogProps = {
    arrayOfSubscriptionPlans: SubscriptionPlanDetails[];
    currentlySelectedSubscriptionPlan: SubscriptionPlanDetails;
    handleSubscriptionPlanSelection: (idOfSelectedSubscriptionPlan: number) => void;
};
