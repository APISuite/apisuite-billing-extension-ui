import { BillingActions, BillingStore, CreditPackDetails, TransactionDetails, UserDetails } from './types';
/** Action types */
export declare const GET_ALL_USER_DETAILS_ACTION = "Billing/GET_ALL_USER_DETAILS_ACTION";
export declare const GET_ALL_USER_DETAILS_ACTION_SUCCESS = "Billing/GET_ALL_USER_DETAILS_ACTION_SUCCESS";
export declare const GET_ALL_CREDIT_PACKS_ACTION = "Billing/GET_ALL_CREDIT_PACKS_ACTION";
export declare const GET_ALL_CREDIT_PACKS_ACTION_SUCCESS = "Billing/GET_ALL_CREDIT_PACKS_ACTION_SUCCESS";
export declare const GET_ALL_SUBSCRIPTION_PLANS_ACTION = "Billing/GET_ALL_SUBSCRIPTION_PLANS_ACTION";
export declare const GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS = "Billing/GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS";
export declare const GET_ALL_USER_TRANSACTIONS_ACTION = "Billing/GET_ALL_USER_TRANSACTIONS_ACTION";
export declare const GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS = "Billing/GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS";
export declare const GET_TRANSACTION_DETAILS_ACTION = "Billing/GET_TRANSACTION_DETAILS_ACTION";
export declare const GET_TRANSACTION_DETAILS_ACTION_SUCCESS = "Billing/GET_TRANSACTION_DETAILS_ACTION_SUCCESS";
export declare const PURCHASE_CREDITS_ACTION = "Billing/PURCHASE_CREDITS_ACTION";
export declare const PURCHASE_CREDITS_ACTION_SUCCESS = "Billing/PURCHASE_CREDITS_ACTION_SUCCESS";
export declare const PURCHASE_CREDITS_ACTION_ERROR = "Billing/PURCHASE_CREDITS_ACTION_ERROR";
export declare const START_SUBSCRIPTION_ACTION = "Billing/START_SUBSCRIPTION_ACTION";
export declare const START_SUBSCRIPTION_ACTION_SUCCESS = "Billing/START_SUBSCRIPTION_ACTION_SUCCESS";
export declare const START_SUBSCRIPTION_ACTION_ERROR = "Billing/START_SUBSCRIPTION_ACTION_ERROR";
export declare const CANCEL_SUBSCRIPTION = "Billing/CANCEL_SUBSCRIPTION";
export declare const CANCEL_SUBSCRIPTION_SUCCESS = "Billing/CANCEL_SUBSCRIPTION_SUCCESS";
export declare const CANCEL_SUBSCRIPTION_ERROR = "Billing/CANCEL_SUBSCRIPTION_ERROR";
export declare const CLEAR_SUBSCRIPTION_INFO = "Billing/CLEAR_SUBSCRIPTION_INFO";
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
export declare function getAllUserTransactionsActionSuccess(allUserTransactions: TransactionDetails[]): {
    type: string;
    allUserTransactions: TransactionDetails[];
};
export declare function getTransactionDetailsAction(transactionID: string): {
    type: string;
    transactionID: string;
};
export declare function getTransactionDetailsActionSuccess(transactionDetails: TransactionDetails): {
    type: string;
    transactionDetails: TransactionDetails;
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
export declare function startSubscriptionAction(subscriptionPlanID: number): {
    type: string;
    subscriptionPlanID: number;
};
export declare function startSubscriptionActionError(error: string): {
    type: string;
    error: string;
};
export declare function startSubscriptionActionSuccess(): {
    type: string;
};
export declare function cancelSubscriptionAction(): {
    type: string;
};
export declare function cancelSubscriptionActionError(error: string): {
    type: string;
    error: string;
};
export declare function cancelSubscriptionActionSuccess(): {
    type: string;
};
export declare function clearSubscriptionInfoAction(): {
    type: string;
};
