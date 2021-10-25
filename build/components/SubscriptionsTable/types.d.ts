export declare type SubscriptionsTableProps = {
    subscriptions: SubscriptionDetails[];
    onCancelSubscription: () => void;
    onEditPaymentClick: () => void;
};
export declare type SubscriptionDetails = {
    name: string;
    nextBillingDate: string;
};
