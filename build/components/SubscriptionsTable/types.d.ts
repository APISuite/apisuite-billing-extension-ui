export declare type SubscriptionsTableProps = {
    subscriptions: SubscriptionDetails[];
    onCancelSubscription: () => void;
};
export declare type SubscriptionDetails = {
    name: string;
    nextBillingDate: string;
};
