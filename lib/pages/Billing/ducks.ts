import update from 'immutability-helper'

import {
  BillingActions,
  BillingStore,
  CreditPackDetails,
  TransactionDetails,
  UserDetails,
} from './types'

/** Initial state */

const initialState: BillingStore = {
  allUserDetails: {
    subscriptionID: '',
    userCredits: 0,
    userID: 0,
  },
  allCreditPacks: [],
  allSubscriptionPlans: [],
  allUserTransactions: [],
  transactionDetails: {
    transactionAmount: {
      transactionCurrency: '',
      transactionValue: '',
    },
    transactionCredits: 0,
    transactionDate: '',
    transactionDescription: '',
    transactionID: '',
    transactionStatus: '',
    transactionType: '',
  },
  error: undefined,
}

/** Action types */

export const GET_ALL_USER_DETAILS_ACTION = 'Billing/GET_ALL_USER_DETAILS_ACTION'
export const GET_ALL_USER_DETAILS_ACTION_SUCCESS =
  'Billing/GET_ALL_USER_DETAILS_ACTION_SUCCESS'

export const GET_ALL_CREDIT_PACKS_ACTION = 'Billing/GET_ALL_CREDIT_PACKS_ACTION'
export const GET_ALL_CREDIT_PACKS_ACTION_SUCCESS =
  'Billing/GET_ALL_CREDIT_PACKS_ACTION_SUCCESS'

export const GET_ALL_SUBSCRIPTION_PLANS_ACTION =
  'Billing/GET_ALL_SUBSCRIPTION_PLANS_ACTION'
export const GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS =
  'Billing/GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS'

export const GET_ALL_USER_TRANSACTIONS_ACTION =
  'Billing/GET_ALL_USER_TRANSACTIONS_ACTION'
export const GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS =
  'Billing/GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS'

export const GET_TRANSACTION_DETAILS_ACTION =
  'Billing/GET_TRANSACTION_DETAILS_ACTION'
export const GET_TRANSACTION_DETAILS_ACTION_SUCCESS =
  'Billing/GET_TRANSACTION_DETAILS_ACTION_SUCCESS'

export const PURCHASE_CREDITS_ACTION = 'Billing/PURCHASE_CREDITS_ACTION'
export const PURCHASE_CREDITS_ACTION_SUCCESS =
  'Billing/PURCHASE_CREDITS_ACTION_SUCCESS'
export const PURCHASE_CREDITS_ACTION_ERROR =
  'Billing/PURCHASE_CREDITS_ACTION_ERROR'

/** Reducer */

export default function billingReducer(
  state = initialState,
  action: BillingActions
): BillingStore {
  switch (action.type) {
    case GET_ALL_USER_DETAILS_ACTION: {
      return state
    }

    case GET_ALL_USER_DETAILS_ACTION_SUCCESS: {
      return update(state, {
        allUserDetails: { $set: action.allUserDetails },
      })
    }

    case GET_ALL_CREDIT_PACKS_ACTION: {
      return state
    }

    case GET_ALL_CREDIT_PACKS_ACTION_SUCCESS: {
      return update(state, {
        allCreditPacks: { $set: action.allCreditPacks },
      })
    }

    case GET_ALL_SUBSCRIPTION_PLANS_ACTION: {
      return state
    }

    case GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS: {
      return update(state, {
        allSubscriptionPlans: { $set: action.allSubscriptionPlans },
      })
    }

    case GET_ALL_USER_TRANSACTIONS_ACTION: {
      return state
    }

    case GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS: {
      return update(state, {
        allUserTransactions: { $set: action.allUserTransactions },
      })
    }

    case GET_TRANSACTION_DETAILS_ACTION: {
      return state
    }

    case GET_TRANSACTION_DETAILS_ACTION_SUCCESS: {
      return update(state, {
        transactionDetails: { $set: action.transactionDetails },
      })
    }

    case PURCHASE_CREDITS_ACTION:
    case PURCHASE_CREDITS_ACTION_SUCCESS: {
      return state
    }

    case PURCHASE_CREDITS_ACTION_ERROR: {
      return update(state, {
        error: { $set: action.error },
      })
    }

    default:
      return state
  }
}

/** Action builders */

export function getAllUserDetailsAction(userID: number) {
  return { type: GET_ALL_USER_DETAILS_ACTION, userID }
}

export function getAllUserDetailsActionSuccess(allUserDetails: UserDetails) {
  return { type: GET_ALL_USER_DETAILS_ACTION_SUCCESS, allUserDetails }
}

export function getAllCreditPacksAction() {
  return { type: GET_ALL_CREDIT_PACKS_ACTION }
}

export function getAllCreditPacksActionSuccess(
  allCreditPacks: CreditPackDetails[]
) {
  return { type: GET_ALL_CREDIT_PACKS_ACTION_SUCCESS, allCreditPacks }
}

export function getAllSubscriptionPlansAction() {
  return { type: GET_ALL_SUBSCRIPTION_PLANS_ACTION }
}

export function getAllSubscriptionPlansActionSuccess(
  allSubscriptionPlans: CreditPackDetails[]
) {
  return {
    type: GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS,
    allSubscriptionPlans,
  }
}

export function getAllUserTransactionsAction() {
  return { type: GET_ALL_USER_TRANSACTIONS_ACTION }
}

export function getAllUserTransactionsActionSuccess(
  allUserTransactions: TransactionDetails[]
) {
  return { type: GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS, allUserTransactions }
}

export function getTransactionDetailsAction(transactionID: string) {
  return { type: GET_TRANSACTION_DETAILS_ACTION, transactionID }
}

export function getTransactionDetailsActionSuccess(
  transactionDetails: TransactionDetails
) {
  return { type: GET_TRANSACTION_DETAILS_ACTION_SUCCESS, transactionDetails }
}

export function purchaseCreditsAction(creditPackID: number) {
  return { type: PURCHASE_CREDITS_ACTION, creditPackID }
}

export function purchaseCreditsActionSuccess() {
  return { type: PURCHASE_CREDITS_ACTION_SUCCESS }
}

export function purchaseCreditsActionError(error: string) {
  return { type: PURCHASE_CREDITS_ACTION_ERROR, error }
}
