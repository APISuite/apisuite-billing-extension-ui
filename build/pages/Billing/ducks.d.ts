import { BillingActions, BillingStore, CreditPackDetails, PackageOrderMode, PackageSortMode, SubscriptionPlanDetails, TransactionDetails, UserDetails } from './types';
/** Action types */
export declare const GET_USER_DETAILS_ACTION = "Billing/GET_USER_DETAILS_ACTION";
export declare const GET_USER_DETAILS_ACTION_SUCCESS = "Billing/GET_USER_DETAILS_ACTION_SUCCESS";
export declare const GET_CREDIT_PACKS_ACTION = "Billing/GET_CREDIT_PACKS_ACTION";
export declare const GET_CREDIT_PACKS_ACTION_SUCCESS = "Billing/GET_CREDIT_PACKS_ACTION_SUCCESS";
export declare const GET_SUBSCRIPTION_PLANS_ACTION = "Billing/GET_SUBSCRIPTION_PLANS_ACTION";
export declare const GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS = "Billing/GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS";
export declare const GET_USER_INVOICE_NOTES_ACTION = "Billing/GET_USER_INVOICE_NOTES_ACTION";
export declare const GET_USER_INVOICE_NOTES_ACTION_SUCCESS = "Billing/GET_USER_INVOICE_NOTES_ACTION_SUCCESS";
export declare const SET_USER_INVOICE_NOTES_ACTION = "Billing/SET_USER_INVOICE_NOTES_ACTION";
export declare const SET_USER_INVOICE_NOTES_ACTION_SUCCESS = "Billing/SET_USER_INVOICE_NOTES_ACTION_SUCCESS";
export declare const GET_USER_TRANSACTIONS_ACTION = "Billing/GET_USER_TRANSACTIONS_ACTION";
export declare const GET_USER_TRANSACTIONS_ACTION_SUCCESS = "Billing/GET_USER_TRANSACTIONS_ACTION_SUCCESS";
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
export declare function getUserDetailsAction(userID: number): {
    type: string;
    userID: number;
};
export declare function getUserDetailsActionSuccess(allUserDetails: UserDetails): {
    type: string;
    allUserDetails: UserDetails;
};
export declare function getCreditPacksAction(sortBy: PackageSortMode, orderBy: PackageOrderMode): {
    type: string;
    sortBy: PackageSortMode;
    orderBy: "desc" | "asc";
};
export declare function getCreditPacksActionSuccess(creditPacks: CreditPackDetails[]): {
    type: string;
    creditPacks: CreditPackDetails[];
};
export declare function getSubscriptionPlansAction(sortBy: PackageSortMode, orderBy: PackageOrderMode): {
    type: string;
    sortBy: PackageSortMode;
    orderBy: "desc" | "asc";
};
export declare function getSubscriptionPlansActionSuccess(subscriptions: SubscriptionPlanDetails[]): {
    type: string;
    subscriptions: SubscriptionPlanDetails[];
};
export declare function getUserInvoiceNoteAction(userID: number): {
    type: string;
    userID: number;
};
export declare function getUserInvoiceNoteActionSuccess(invoiceNote: string): {
    type: string;
    invoiceNote: string;
};
export declare function setUserInvoiceNoteAction(userID: number, invoiceNote: string): {
    type: string;
    userID: number;
    invoiceNote: string;
};
export declare function setUserInvoiceNoteActionSuccess(invoiceNote: string): {
    type: string;
    invoiceNote: string;
};
export declare function getUserTransactionsAction(): {
    type: string;
};
export declare function getUserTransactionsActionSuccess(transactions: TransactionDetails[]): {
    type: string;
    transactions: TransactionDetails[];
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
