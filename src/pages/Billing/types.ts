import { Action } from 'redux'

import {
  GET_ALL_CREDIT_PACKS_ACTION_SUCCESS,
  GET_ALL_CREDIT_PACKS_ACTION,
  GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS,
  GET_ALL_SUBSCRIPTION_PLANS_ACTION,
  GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS,
  GET_ALL_USER_TRANSACTIONS_ACTION,

  // Keep this for demo purposes, remove once demo is complete, and implement this behaviour
  HAS_PURCHASED_CREDITS_ACTION,
} from './ducks'

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
  creditsReceived: number
  paymentID: number
  transactionCost: number
  transactionStatus: boolean
  transactionType: 'topup' | 'consent' | 'subscription'
  updatedAt: string
  userID: string
}

export interface BillingStore {
  allCreditPacks: CreditPackDetails[]
  allSubscriptionPlans: SubscriptionPlanDetails[]
  allUserTransactions: TransactionDetails[]

  // Keep this for demo purposes, remove once demo is complete, and implement this behaviour
  hasPurchasedCredits: boolean
}

export interface BillingProps {
  allCreditPacks: CreditPackDetails[]
  allSubscriptionPlans: SubscriptionPlanDetails[]
  allUserTransactions: TransactionDetails[]

  // Keep this for demo purposes, remove once demo is complete, and implement this behaviour
  hasPurchasedCredits: boolean

  getAllCreditPacksAction: () => void
  getAllSubscriptionPlansAction: () => void
  getAllUserTransactionsAction: () => void
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

// Keep this for demo purposes, remove once demo is complete, and implement this behaviour
export interface HasPurchasedCreditsAction extends Action {
  type: typeof HAS_PURCHASED_CREDITS_ACTION
}

export type BillingActions =
  | GetAllCreditPacksAction
  | GetAllCreditPacksActionSuccess
  | GetAllSubscriptionPlansAction
  | GetAllSubscriptionPlansActionSuccess
  | GetAllUserTransactionsAction
  | GetAllUserTransactionsActionSuccess
  // Keep this for demo purposes, remove once demo is complete, and implement this behaviour
  | HasPurchasedCreditsAction
