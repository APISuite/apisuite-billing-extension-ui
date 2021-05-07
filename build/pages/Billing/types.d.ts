import { Action } from 'redux';
import { GET_ALL_CREDIT_PACKS_ACTION_SUCCESS, GET_ALL_CREDIT_PACKS_ACTION, GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS, GET_ALL_SUBSCRIPTION_PLANS_ACTION, GET_ALL_USER_DETAILS_ACTION_SUCCESS, GET_ALL_USER_DETAILS_ACTION, GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS, GET_ALL_USER_TRANSACTIONS_ACTION, HAS_PURCHASED_CREDITS_ACTION } from './ducks';
export interface User {
    fName: string;
    id: number;
    lName: string;
    role: {
        id: number;
        name: string;
    };
}
export interface UserDetails {
    subscriptionID: string | null;
    userCredits: number;
    userID: number;
}
export interface CreditPackDetails {
    creditsInCreditPack: number;
    idOfCreditPack: number;
    nameOfCreditPack: string;
    priceOfCreditPack: number;
}
export interface SubscriptionPlanDetails {
    creditsInSubscriptionPlan: number;
    idOfSubscriptionPlan: number;
    nameOfSubscriptionPlan: string;
    periodicityOfSubscriptionPlan: string;
    priceOfSubscriptionPlan: number;
}
export interface TransactionDetails {
    createdAt: string;
    creditsReceived: number;
    paymentID: number;
    transactionCost: number;
    transactionStatus: boolean;
    transactionType: 'topup' | 'consent' | 'subscription';
    updatedAt: string;
    userID: string;
}
export interface BillingStore {
    allCreditPacks: CreditPackDetails[];
    allSubscriptionPlans: SubscriptionPlanDetails[];
    allUserDetails: UserDetails;
    allUserTransactions: TransactionDetails[];
    hasPurchasedCredits: boolean;
}
export interface BillingProps {
    user: User;
    allCreditPacks: CreditPackDetails[];
    allSubscriptionPlans: SubscriptionPlanDetails[];
    allUserDetails: UserDetails;
    allUserTransactions: TransactionDetails[];
    hasPurchasedCredits: boolean;
    getAllCreditPacksAction: () => void;
    getAllSubscriptionPlansAction: () => void;
    getAllUserDetailsAction: (userID: number) => void;
    getAllUserTransactionsAction: () => void;
}
export interface GetAllUserDetailsAction extends Action {
    type: typeof GET_ALL_USER_DETAILS_ACTION;
    userID: number;
}
export interface GetAllUserDetailsActionSuccess extends Action {
    type: typeof GET_ALL_USER_DETAILS_ACTION_SUCCESS;
    allUserDetails: UserDetails;
}
export interface GetAllCreditPacksAction extends Action {
    type: typeof GET_ALL_CREDIT_PACKS_ACTION;
}
export interface GetAllCreditPacksActionSuccess extends Action {
    type: typeof GET_ALL_CREDIT_PACKS_ACTION_SUCCESS;
    allCreditPacks: CreditPackDetails[];
}
export interface GetAllSubscriptionPlansAction extends Action {
    type: typeof GET_ALL_SUBSCRIPTION_PLANS_ACTION;
}
export interface GetAllSubscriptionPlansActionSuccess extends Action {
    type: typeof GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS;
    allSubscriptionPlans: SubscriptionPlanDetails[];
}
export interface GetAllUserTransactionsAction extends Action {
    type: typeof GET_ALL_USER_TRANSACTIONS_ACTION;
}
export interface GetAllUserTransactionsActionSuccess extends Action {
    type: typeof GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS;
    allUserTransactions: TransactionDetails[];
}
export interface HasPurchasedCreditsAction extends Action {
    type: typeof HAS_PURCHASED_CREDITS_ACTION;
}
export declare type BillingActions = GetAllCreditPacksAction | GetAllCreditPacksActionSuccess | GetAllSubscriptionPlansAction | GetAllSubscriptionPlansActionSuccess | GetAllUserDetailsAction | GetAllUserDetailsActionSuccess | GetAllUserTransactionsAction | GetAllUserTransactionsActionSuccess | HasPurchasedCreditsAction;
