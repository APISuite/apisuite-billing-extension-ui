import update from 'immutability-helper'

import {
  BillingActions,
  BillingStore,
  CreditPackDetails,
  PackageOrderMode,
  PackageSortMode,
  TransactionDetails,
  UserDetails,
} from './types'

/** Initial state */

const initialState: BillingStore = {
  allUserDetails: {
    subscriptionID: '',
    userCredits: 0,
    userID: 0,
    nextPaymentDate: '',
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
  subscriptionsDialogInfo: {
    type: 'warning',
    transKeys: {
      title: '',
      text: '',
      subText: '',
    },
  },
  successfullySubscribedToPlan: false,
  hasRetrievedAllCreditPacks: false,
  hasRetrievedAllSubscriptionPlans: false,
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

export const START_SUBSCRIPTION_ACTION = 'Billing/START_SUBSCRIPTION_ACTION'
export const START_SUBSCRIPTION_ACTION_SUCCESS =
  'Billing/START_SUBSCRIPTION_ACTION_SUCCESS'
export const START_SUBSCRIPTION_ACTION_ERROR =
  'Billing/START_SUBSCRIPTION_ACTION_ERROR'

export const CANCEL_SUBSCRIPTION = 'Billing/CANCEL_SUBSCRIPTION'
export const CANCEL_SUBSCRIPTION_SUCCESS = 'Billing/CANCEL_SUBSCRIPTION_SUCCESS'
export const CANCEL_SUBSCRIPTION_ERROR = 'Billing/CANCEL_SUBSCRIPTION_ERROR'

export const CLEAR_SUBSCRIPTION_INFO = 'Billing/CLEAR_SUBSCRIPTION_INFO'

/** Reducer */

export default function billingReducer(
  state = initialState,
  action: BillingActions
): BillingStore {
  switch (action.type) {
    case GET_ALL_USER_DETAILS_ACTION_SUCCESS: {
      return update(state, {
        allUserDetails: { $set: action.allUserDetails },
      })
    }

    case GET_ALL_CREDIT_PACKS_ACTION_SUCCESS: {
      return update(state, {
        allCreditPacks: { $set: action.allCreditPacks },
        hasRetrievedAllCreditPacks: { $set: true },
      })
    }

    case GET_ALL_SUBSCRIPTION_PLANS_ACTION_SUCCESS: {
      return update(state, {
        allSubscriptionPlans: { $set: action.allSubscriptionPlans },
        hasRetrievedAllSubscriptionPlans: { $set: true },
      })
    }

    case GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS: {
      return update(state, {
        allUserTransactions: { $set: action.allUserTransactions },
      })
    }

    case GET_TRANSACTION_DETAILS_ACTION_SUCCESS: {
      return update(state, {
        transactionDetails: { $set: action.transactionDetails },
      })
    }

    case PURCHASE_CREDITS_ACTION_ERROR: {
      return update(state, {
        error: { $set: action.error },
      })
    }

    case START_SUBSCRIPTION_ACTION: {
      return update(state, {
        successfullySubscribedToPlan: { $set: false },
      })
    }

    case START_SUBSCRIPTION_ACTION_SUCCESS: {
      return update(state, {
        successfullySubscribedToPlan: { $set: true },
      })
    }

    case CANCEL_SUBSCRIPTION_SUCCESS: {
      return update(state, {
        subscriptionsDialogInfo: {
          $set: {
            type: 'success',
            transKeys: {
              title: 'subscriptions.success.title',
              text: 'subscriptions.success.text',
              subText: 'subscriptions.success.subText',
            },
          },
        },
        allUserDetails: {
          subscriptionID: { $set: '' },
          nextPaymentDate: { $set: '' },
        },
      })
    }

    case CLEAR_SUBSCRIPTION_INFO: {
      return update(state, {
        subscriptionsDialogInfo: {
          $set: {
            type: 'warning',
            transKeys: {
              title: '',
              text: '',
              subText: '',
            },
          },
        },
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

export function getAllCreditPacksAction(
  sortBy: PackageSortMode,
  orderBy: PackageOrderMode
) {
  return { type: GET_ALL_CREDIT_PACKS_ACTION, sortBy, orderBy }
}

export function getAllCreditPacksActionSuccess(
  allCreditPacks: CreditPackDetails[]
) {
  return { type: GET_ALL_CREDIT_PACKS_ACTION_SUCCESS, allCreditPacks }
}

export function getAllSubscriptionPlansAction(
  sortBy: PackageSortMode,
  orderBy: PackageOrderMode
) {
  return { type: GET_ALL_SUBSCRIPTION_PLANS_ACTION, sortBy, orderBy }
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

export function startSubscriptionAction(subscriptionPlanID: number) {
  return { type: START_SUBSCRIPTION_ACTION, subscriptionPlanID }
}

export function startSubscriptionActionError(error: string) {
  return { type: START_SUBSCRIPTION_ACTION_ERROR, error }
}

export function startSubscriptionActionSuccess() {
  return { type: START_SUBSCRIPTION_ACTION_SUCCESS }
}

export function cancelSubscriptionAction() {
  return { type: CANCEL_SUBSCRIPTION }
}

export function cancelSubscriptionActionError(error: string) {
  return { type: CANCEL_SUBSCRIPTION_ERROR, error }
}

export function cancelSubscriptionActionSuccess() {
  return { type: CANCEL_SUBSCRIPTION_SUCCESS }
}

export function clearSubscriptionInfoAction() {
  return { type: CLEAR_SUBSCRIPTION_INFO }
}
