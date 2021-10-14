import { SubscriptionPlanDetails } from '../../pages/Billing/types';
export declare type SubscriptionsCatalogProps = {
    activeSubscriptionID?: SubscriptionPlanDetails['id'];
    subscriptions: SubscriptionPlanDetails[];
    selectedSubscription: SubscriptionPlanDetails;
    handleSubscriptionSelection: (id: number) => void;
};
