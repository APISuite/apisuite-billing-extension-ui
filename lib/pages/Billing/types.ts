import { Action } from 'redux'

import {
  GET_CREDIT_PACKS_ACTION_SUCCESS,
  GET_CREDIT_PACKS_ACTION,
  GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS,
  GET_SUBSCRIPTION_PLANS_ACTION,
  GET_USER_DETAILS_ACTION_SUCCESS,
  GET_USER_DETAILS_ACTION,
  GET_USER_TRANSACTIONS_ACTION_SUCCESS,
  GET_USER_TRANSACTIONS_ACTION,
  GET_TRANSACTION_DETAILS_ACTION_SUCCESS,
  GET_TRANSACTION_DETAILS_ACTION,
  PURCHASE_CREDITS_ACTION_ERROR,
  PURCHASE_CREDITS_ACTION_SUCCESS,
  PURCHASE_CREDITS_ACTION,
  START_SUBSCRIPTION_ACTION_ERROR,
  START_SUBSCRIPTION_ACTION_SUCCESS,
  START_SUBSCRIPTION_ACTION,
  CANCEL_SUBSCRIPTION,
  CANCEL_SUBSCRIPTION_SUCCESS,
  CANCEL_SUBSCRIPTION_ERROR,
  CLEAR_SUBSCRIPTION_INFO,
} from './ducks'

export type PackageSortMode = 'name' | 'price' | 'credits'
export type PackageOrderMode = 'asc' | 'desc'

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
  nextPaymentDate: string
}

export interface CreditPackDetails {
  credits: number
  id: number
  name: string
  price: number
}

export interface SubscriptionPlanDetails {
  credits: number
  id: number
  name: string
  periodicity: string
  price: number
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
  creditPacks: CreditPackDetails[]
  subscriptions: SubscriptionPlanDetails[]
  allUserDetails: UserDetails
  allUserTransactions: TransactionDetails[]
  error?: string
  hasRetrievedAllCreditPacks: boolean
  hasRetrievedAllSubscriptions: boolean
  subscriptionsDialogInfo: {
    type: 'success' | 'warning'
    transKeys: {
      title: string
      text: string
      subText: string
    }
  }
  successfullySubscribedToPlan: boolean
  transactionDetails: TransactionDetails
}

export interface BillingProps {
  creditPacks: CreditPackDetails[]
  subscriptions: SubscriptionPlanDetails[]
  allUserDetails: UserDetails
  allUserTransactions: TransactionDetails[]
  dialogInfo: BillingStore['subscriptionsDialogInfo']
  clearSubscriptionInfoAction: () => void
  getCreditPacksAction: (
    sortBy: PackageSortMode,
    orderBy: PackageOrderMode
  ) => void
  getSubscriptionPlansAction: (
    sortBy: PackageSortMode,
    orderBy: PackageOrderMode
  ) => void
  getUserDetailsAction: (userID: number) => void
  getUserTransactionsAction: () => void
  hasRetrievedAllCreditPacks: boolean
  hasRetrievedAllSubscriptions: boolean
  purchaseCreditsAction: (creditPackID: number) => void
  startSubscriptionAction: (subscriptionPlanID: number) => void
  cancelSubscriptionAction: () => void
  successfullySubscribedToPlan: boolean
  user: User
}

export interface GetUserDetailsAction extends Action {
  type: typeof GET_USER_DETAILS_ACTION
  userID: number
}

export interface GetUserDetailsActionSuccess extends Action {
  type: typeof GET_USER_DETAILS_ACTION_SUCCESS
  allUserDetails: UserDetails
}

export interface GetCreditPacksAction extends Action {
  type: typeof GET_CREDIT_PACKS_ACTION
  sortBy: PackageSortMode
  orderBy: PackageOrderMode
}

export interface GetCreditPacksActionSuccess extends Action {
  type: typeof GET_CREDIT_PACKS_ACTION_SUCCESS
  creditPacks: CreditPackDetails[]
}

export interface GetSubscriptionPlansAction extends Action {
  type: typeof GET_SUBSCRIPTION_PLANS_ACTION
  sortBy: PackageSortMode
  orderBy: PackageOrderMode
}

export interface GetSubscriptionPlansActionSuccess extends Action {
  type: typeof GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS
  subscriptions: SubscriptionPlanDetails[]
}

export interface GetUserTransactionsAction extends Action {
  type: typeof GET_USER_TRANSACTIONS_ACTION
}

export interface GetUserTransactionsActionSuccess extends Action {
  type: typeof GET_USER_TRANSACTIONS_ACTION_SUCCESS
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

export interface StartSubscriptionAction extends Action {
  type: typeof START_SUBSCRIPTION_ACTION
  subscriptionPlanID: number
}

export interface StartSubscriptionActionSuccess extends Action {
  type: typeof START_SUBSCRIPTION_ACTION_SUCCESS
}

export interface StartSubscriptionActionError extends Action {
  type: typeof START_SUBSCRIPTION_ACTION_ERROR
  error: string
}

export interface CancelSubscriptionAction {
  type: typeof CANCEL_SUBSCRIPTION
}

export interface CancelSubscriptionActionSuccess {
  type: typeof CANCEL_SUBSCRIPTION_SUCCESS
}

export interface CancelSubscriptionActionError {
  type: typeof CANCEL_SUBSCRIPTION_ERROR
  error: string
}

export interface ClearSubscriptionInfoAction {
  type: typeof CLEAR_SUBSCRIPTION_INFO
}

export type BillingActions =
  | GetCreditPacksAction
  | GetCreditPacksActionSuccess
  | GetSubscriptionPlansAction
  | GetSubscriptionPlansActionSuccess
  | GetUserDetailsAction
  | GetUserDetailsActionSuccess
  | GetUserTransactionsAction
  | GetUserTransactionsActionSuccess
  | GetTransactionDetailsAction
  | GetTransactionDetailsActionSuccess
  | PurchaseCreditsAction
  | PurchaseCreditsActionError
  | PurchaseCreditsActionSuccess
  | StartSubscriptionAction
  | StartSubscriptionActionError
  | StartSubscriptionActionSuccess
  | CancelSubscriptionAction
  | CancelSubscriptionActionError
  | CancelSubscriptionActionSuccess
  | ClearSubscriptionInfoAction
