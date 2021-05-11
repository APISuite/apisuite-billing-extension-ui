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
  GET_TRANSACTION_DETAILS_ACTION_SUCCESS,
  GET_TRANSACTION_DETAILS_ACTION,
  PURCHASE_CREDITS_ACTION_ERROR,
  PURCHASE_CREDITS_ACTION_SUCCESS,
  PURCHASE_CREDITS_ACTION,
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
  transactionAmount: {
    transactionCurrency: string
    transactionValue: string
  }
  transactionCredits: number
  transactionDate: string
  transactionDescription: string
  transactionID: string
  transactionStatus: string
  transactionType: string
}

export interface BillingStore {
  allCreditPacks: CreditPackDetails[]
  allSubscriptionPlans: SubscriptionPlanDetails[]
  allUserDetails: UserDetails
  allUserTransactions: TransactionDetails[]
  error?: string
  transactionDetails: TransactionDetails
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
  purchaseCreditsAction: (creditPackID: number) => void
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

export interface GetTransactionDetailsAction extends Action {
  type: typeof GET_TRANSACTION_DETAILS_ACTION
  transactionID: string
}

export interface GetTransactionDetailsActionSuccess extends Action {
  type: typeof GET_TRANSACTION_DETAILS_ACTION_SUCCESS
  transactionDetails: TransactionDetails
}

export interface PurchaseCreditsAction extends Action {
  type: typeof PURCHASE_CREDITS_ACTION
  creditPackID: number
}

export interface PurchaseCreditsActionSuccess extends Action {
  type: typeof PURCHASE_CREDITS_ACTION_SUCCESS
}

export interface PurchaseCreditsActionError extends Action {
  type: typeof PURCHASE_CREDITS_ACTION_ERROR
  error: string
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
  | GetTransactionDetailsAction
  | GetTransactionDetailsActionSuccess
  | PurchaseCreditsAction
  | PurchaseCreditsActionError
  | PurchaseCreditsActionSuccess
