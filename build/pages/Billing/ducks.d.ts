import { BillingActions, BillingStore, CreditPackDetails, UserDetails } from './types';
/** Action types */
export declare const GET_ALL_USER_DETAILS_ACTION = "Billing/GET_ALL_USER_DETAILS_ACTION";
export declare const GET_ALL_USER_DETAILS_ACTION_SUCCESS = "Billing/GET_ALL_USER_DETAILS_ACTION_SUCCESS";
export declare const GET_ALL_CREDIT_PACKS_ACTION = "Billing/GET_ALL_CREDIT_PACKS_ACTION";
export declare const GET_ALL_CREDIT_PACKS_ACTION_SUCCESS = "Billing/GET_ALL_CREDIT_PACKS_ACTION_SUCCESS";
export declare const GET_ALL_SUBSCRIPTION_PLANS_ACTION = "Billing/GET_ALL_SUBSCRIPTION_PLANS_ACTION";
export declare const GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS = "Billing/GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS";
export declare const GET_ALL_USER_TRANSACTIONS_ACTION = "Billing/GET_ALL_USER_TRANSACTIONS_ACTION";
export declare const GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS = "Billing/GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS";
export declare const PURCHASE_CREDITS_ACTION = "Billing/PURCHASE_CREDITS_ACTION";
export declare const PURCHASE_CREDITS_ACTION_SUCCESS = "Billing/PURCHASE_CREDITS_ACTION_SUCCESS";
export declare const PURCHASE_CREDITS_ACTION_ERROR = "Billing/PURCHASE_CREDITS_ACTION_ERROR";
/** Reducer */
export default function billingReducer(state: BillingStore, action: BillingActions): BillingStore;
/** Action builders */
export declare function getAllUserDetailsAction(userID: number): {
    type: string;
    userID: number;
};
export declare function getAllUserDetailsActionSuccess(allUserDetails: UserDetails): {
    type: string;
    allUserDetails: UserDetails;
};
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
export declare function getAllUserTransactionsAction(): {
    type: string;
};
export declare function getAllUserTransactionsActionSuccess(allUserTransactions: CreditPackDetails[]): {
    type: string;
    allUserTransactions: CreditPackDetails[];
};
export declare function purchaseCreditsAction(creditPackID: number): {
    type: string;
    creditPackID: number;
};
export declare function purchaseCreditsActionSuccess(): {
    type: string;
};
export declare function purchaseCreditsActionError(error: string): {
    type: string;
    error: string;
};
