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
  START_SUBSCRIPTION_ACTION_ERROR,
  START_SUBSCRIPTION_ACTION_SUCCESS,
  START_SUBSCRIPTION_ACTION,
  CANCEL_SUBSCRIPTION,
  CANCEL_SUBSCRIPTION_SUCCESS,
  CANCEL_SUBSCRIPTION_ERROR,
  CLEAR_SUBSCRIPTION_INFO,
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
  nextPaymentDate: string
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
  successfullySubscribedToPlan: boolean
  transactionDetails: TransactionDetails
  subscriptionsDialogInfo: {
    type: 'success' | 'warning'
    transKeys: {
      title: string
      text: string
      subText: string
    }
  }
}

export interface BillingProps {
  allCreditPacks: CreditPackDetails[]
  allSubscriptionPlans: SubscriptionPlanDetails[]
  allUserDetails: UserDetails
  allUserTransactions: TransactionDetails[]
  dialogInfo: BillingStore['subscriptionsDialogInfo']
  clearSubscriptionInfoAction: () => void
  getAllCreditPacksAction: () => void
  getAllSubscriptionPlansAction: () => void
  getAllUserDetailsAction: (userID: number) => void
  getAllUserTransactionsAction: () => void
  purchaseCreditsAction: (creditPackID: number) => void
  startSubscriptionAction: (subscriptionPlanID: number) => void
  cancelSubscriptionAction: () => void
  successfullySubscribedToPlan: boolean
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
  | StartSubscriptionAction
  | StartSubscriptionActionError
  | StartSubscriptionActionSuccess
  | CancelSubscriptionAction
  | CancelSubscriptionActionError
  | CancelSubscriptionActionSuccess
  | ClearSubscriptionInfoAction
