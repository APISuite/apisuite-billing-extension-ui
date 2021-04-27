import { Action } from 'redux';
import { GET_ALL_CREDIT_PACKS_ACTION_SUCCESS, GET_ALL_CREDIT_PACKS_ACTION, GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS, GET_ALL_SUBSCRIPTION_PLANS_ACTION } from './ducks';
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
export interface BillingStore {
    allCreditPacks: CreditPackDetails[];
    allSubscriptionPlans: SubscriptionPlanDetails[];
    retrievedAllCreditPacks: boolean;
    retrievedAllSubscriptionPlans: boolean;
}
export interface BillingProps {
    allCreditPacks: CreditPackDetails[];
    allSubscriptionPlans: SubscriptionPlanDetails[];
    getAllCreditPacksAction: () => void;
    getAllSubscriptionPlansAction: () => void;
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
export declare type BillingActions = GetAllCreditPacksAction | GetAllCreditPacksActionSuccess | GetAllSubscriptionPlansAction | GetAllSubscriptionPlansActionSuccess;
