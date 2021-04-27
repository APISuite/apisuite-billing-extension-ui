import { BillingActions, BillingStore, CreditPackDetails } from './types';
/** Action types */
export declare const GET_ALL_CREDIT_PACKS_ACTION = "Billing/GET_ALL_CREDIT_PACKS_ACTION";
export declare const GET_ALL_CREDIT_PACKS_ACTION_SUCCESS = "Billing/GET_ALL_CREDIT_PACKS_ACTION_SUCCESS";
export declare const GET_ALL_SUBSCRIPTION_PLANS_ACTION = "Billing/GET_ALL_SUBSCRIPTION_PLANS_ACTION";
export declare const GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS = "Billing/GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS";
/** Reducer */
export default function billingReducer(state: BillingStore, action: BillingActions): BillingStore;
/** Action builders */
export declare function getAllCreditPacksAction(): {
    type: string;
};
export declare function getAllCreditPacksActionSuccess(allCreditPacks: CreditPackDetails[]): {
    type: string;
    allCreditPacks: CreditPackDetails[];
};
export declare function getAllSubscriptionPlansAction(): {
    type: string;
};
export declare function getAllSubscriptionPlansActionSuccess(allSubscriptionPlans: CreditPackDetails[]): {
    type: string;
    allSubscriptionPlans: CreditPackDetails[];
};
