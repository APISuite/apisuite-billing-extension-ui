export declare type SubscriptionsTableProps = {
    arrayOfSubs: SubDetails[];
    onCancelSubscription: () => void;
};
export declare type SubDetails = {
    subName: string;
    subNextBillingDate: string;
};
