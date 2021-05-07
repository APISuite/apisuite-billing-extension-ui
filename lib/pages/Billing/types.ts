import { Action } from 'redux'

import {
  GET_ALL_CREDIT_PACKS_ACTION_SUCCESS,
  GET_ALL_CREDIT_PACKS_ACTION,
  GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS,
  GET_ALL_SUBSCRIPTION_PLANS_ACTION,
  GET_ALL_USER_DETAILS_ACTION_SUCCESS,
  GET_ALL_USER_DETAILS_ACTION,
  GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS,
  GET_ALL_USER_TRANSACTIONS_ACTION,
} from './ducks'

export interface User {
  fName: string
  id: number
  lName: string
  role: {
    id: number
    name: string
  }
}

export interface UserDetails {
  subscriptionID: string | null
  userCredits: number
  userID: number
}

export interface CreditPackDetails {
  creditsInCreditPack: number
  idOfCreditPack: number
  nameOfCreditPack: string
  priceOfCreditPack: number
}

export interface SubscriptionPlanDetails {
  creditsInSubscriptionPlan: number
  idOfSubscriptionPlan: number
  nameOfSubscriptionPlan: string
  periodicityOfSubscriptionPlan: string
  priceOfSubscriptionPlan: number
}

export interface TransactionDetails {
  createdAt: string
  transactionAmount: {
    transactionCurrency: string
    transactionValue: string
  }
  transactionDescription: string
  transactionID: string
  transactionsStatus: string
}

export interface BillingStore {
  allCreditPacks: CreditPackDetails[]
  allSubscriptionPlans: SubscriptionPlanDetails[]
  allUserDetails: UserDetails
  allUserTransactions: TransactionDetails[]
}

export interface BillingProps {
  allCreditPacks: CreditPackDetails[]
  allSubscriptionPlans: SubscriptionPlanDetails[]
  allUserDetails: UserDetails
  allUserTransactions: TransactionDetails[]
  getAllCreditPacksAction: () => void
  getAllSubscriptionPlansAction: () => void
  getAllUserDetailsAction: (userID: number) => void
  getAllUserTransactionsAction: () => void
  user: User
}

export interface GetAllUserDetailsAction extends Action {
  type: typeof GET_ALL_USER_DETAILS_ACTION
  userID: number
}

export interface GetAllUserDetailsActionSuccess extends Action {
  type: typeof GET_ALL_USER_DETAILS_ACTION_SUCCESS
  allUserDetails: UserDetails
}

export interface GetAllCreditPacksAction extends Action {
  type: typeof GET_ALL_CREDIT_PACKS_ACTION
}

export interface GetAllCreditPacksActionSuccess extends Action {
  type: typeof GET_ALL_CREDIT_PACKS_ACTION_SUCCESS
  allCreditPacks: CreditPackDetails[]
}

export interface GetAllSubscriptionPlansAction extends Action {
  type: typeof GET_ALL_SUBSCRIPTION_PLANS_ACTION
}

export interface GetAllSubscriptionPlansActionSuccess extends Action {
  type: typeof GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS
  allSubscriptionPlans: SubscriptionPlanDetails[]
}

export interface GetAllUserTransactionsAction extends Action {
  type: typeof GET_ALL_USER_TRANSACTIONS_ACTION
}

export interface GetAllUserTransactionsActionSuccess extends Action {
  type: typeof GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS
  allUserTransactions: TransactionDetails[]
}

export type BillingActions =
  | GetAllCreditPacksAction
  | GetAllCreditPacksActionSuccess
  | GetAllSubscriptionPlansAction
  | GetAllSubscriptionPlansActionSuccess
  | GetAllUserDetailsAction
  | GetAllUserDetailsActionSuccess
  | GetAllUserTransactionsAction
  | GetAllUserTransactionsActionSuccess
