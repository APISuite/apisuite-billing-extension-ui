import { BillingActions, BillingSettings, BillingStore, CreditPackDetails, OrgDetails, PackageOrderMode, PackageSortMode, SubscriptionPlanDetails, TransactionDetails, UserDetails } from './types';
/** Action types */
export declare const GET_USER_DETAILS_ACTION = "Billing/GET_USER_DETAILS_ACTION";
export declare const GET_USER_DETAILS_ACTION_SUCCESS = "Billing/GET_USER_DETAILS_ACTION_SUCCESS";
export declare const GET_CREDIT_PACKS_ACTION = "Billing/GET_CREDIT_PACKS_ACTION";
export declare const GET_CREDIT_PACKS_ACTION_SUCCESS = "Billing/GET_CREDIT_PACKS_ACTION_SUCCESS";
export declare const GET_SUBSCRIPTION_PLANS_ACTION = "Billing/GET_SUBSCRIPTION_PLANS_ACTION";
export declare const GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS = "Billing/GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS";
export declare const GET_USER_ORGANIZATION_ACTION = "Billing/GET_USER_ORGANIZATION_ACTION";
export declare const GET_USER_ORGANIZATION_ACTION_SUCCESS = "Billing/GET_USER_ORGANIZATION_ACTION_SUCCESS";
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
export declare const EDIT_PAYMENT_INFORMATION = "Billing/EDIT_PAYMENT_INFORMATION";
export declare const GET_BILLING_SETTINGS = "Billing/GET_BILLING_SETTINGS";
export declare const GET_BILLING_SETTINGS_SUCCESS = "Billing/GET_BILLING_SETTINGS_SUCCESS";
export declare const GET_BILLING_SETTINGS_ERROR = "Billing/GET_BILLING_SETTINGS_ERROR";
export declare const SET_BILLING_ORGANIZATION = "Billing/SET_BILLING_ORGANIZATION";
export declare const SET_BILLING_ORGANIZATION_SUCCESS = "Billing/SET_BILLING_ORGANIZATIONS_SUCCESS";
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
export declare function getOrganizationAction(orgId: string): {
    type: string;
    orgId: string;
};
export declare function getOrganizationActionSuccess(orgData: OrgDetails): {
    type: string;
    orgData: OrgDetails;
};
export declare function setUserInvoiceNoteAction(orgId: number, invoiceNote: string): {
    type: string;
    orgId: number;
    invoiceNote: string;
};
export declare function setUserInvoiceNoteActionSuccess(invoiceNote: string): {
    type: string;
    invoiceNote: string;
};
export declare function getUserTransactionsAction(orgId: string): {
    type: string;
    orgId: string;
};
export declare function getUserTransactionsActionSuccess(transactions: TransactionDetails[]): {
    type: string;
    transactions: TransactionDetails[];
};
export declare function getTransactionDetailsAction(orgId: string, transactionID: string): {
    type: string;
    orgId: string;
    transactionID: string;
};
export declare function getTransactionDetailsActionSuccess(transactionDetails: TransactionDetails): {
    type: string;
    transactionDetails: TransactionDetails;
};
export declare function purchaseCreditsAction(orgId: string, creditPackID: number): {
    type: string;
    creditPackID: number;
    orgId: string;
};
export declare function purchaseCreditsActionSuccess(): {
    type: string;
};
export declare function purchaseCreditsActionError(error: string): {
    type: string;
    error: string;
};
export declare function startSubscriptionAction(orgId: string, subscriptionPlanID: number): {
    type: string;
    orgId: string;
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
export declare function editPaymentInfoAction(orgId: string): {
    type: string;
    orgId: string;
};
export declare function getBillingSettingsAction(): {
    type: string;
};
export declare function getBillingSettingsActionError(error: string): {
    type: string;
    error: string;
};
export declare function getBillingSettingsActionSuccess(payload: BillingSettings): {
    type: string;
    payload: BillingSettings;
};
export declare function setUserBillingOrgAction(userID: number, orgID: number): {
    type: string;
    userID: number;
    orgID: number;
};
export declare function setUserBillingOrgActionSuccess(allUserDetails: UserDetails): {
    type: string;
    allUserDetails: UserDetails;
};
