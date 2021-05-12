import { SubscriptionPlanDetails } from '../../pages/Billing/types';
export declare type SubscriptionPlansCatalogProps = {
    activeSubscriptionPlanID?: SubscriptionPlanDetails['idOfSubscriptionPlan'];
    arrayOfSubscriptionPlans: SubscriptionPlanDetails[];
    currentlySelectedSubscriptionPlan: SubscriptionPlanDetails;
    handleSubscriptionPlanSelection: (idOfSelectedSubscriptionPlan: number) => void;
};
