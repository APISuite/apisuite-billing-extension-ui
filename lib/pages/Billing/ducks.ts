import update from 'immutability-helper'

import {
  BillingActions,
  BillingStore,
  CreditPackDetails,
  PackageOrderMode,
  PackageSortMode,
  SubscriptionPlanDetails,
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
  creditPacks: [],
  subscriptions: [],
  transactions: [],
  transactionDetails: {
    amount: {
      currency: '',
      value: '',
    },
    credits: 0,
    date: '',
    description: '',
    id: '',
    status: '',
    type: '',
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
  hasRetrievedAllSubscriptions: false,
}

/** Action types */

export const GET_USER_DETAILS_ACTION = 'Billing/GET_USER_DETAILS_ACTION'
export const GET_USER_DETAILS_ACTION_SUCCESS =
  'Billing/GET_USER_DETAILS_ACTION_SUCCESS'

export const GET_CREDIT_PACKS_ACTION = 'Billing/GET_CREDIT_PACKS_ACTION'
export const GET_CREDIT_PACKS_ACTION_SUCCESS =
  'Billing/GET_CREDIT_PACKS_ACTION_SUCCESS'

export const GET_SUBSCRIPTION_PLANS_ACTION =
  'Billing/GET_SUBSCRIPTION_PLANS_ACTION'
export const GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS =
  'Billing/GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS'

export const GET_USER_TRANSACTIONS_ACTION =
  'Billing/GET_USER_TRANSACTIONS_ACTION'
export const GET_USER_TRANSACTIONS_ACTION_SUCCESS =
  'Billing/GET_USER_TRANSACTIONS_ACTION_SUCCESS'

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
    case GET_USER_DETAILS_ACTION_SUCCESS: {
      return update(state, {
        allUserDetails: { $set: action.allUserDetails },
      })
    }

    case GET_CREDIT_PACKS_ACTION_SUCCESS: {
      return update(state, {
        creditPacks: { $set: action.creditPacks },
        hasRetrievedAllCreditPacks: { $set: true },
      })
    }

    case GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS: {
      return update(state, {
        subscriptions: { $set: action.subscriptions },
        hasRetrievedAllSubscriptions: { $set: true },
      })
    }

    case GET_USER_TRANSACTIONS_ACTION_SUCCESS: {
      return update(state, {
        transactions: { $set: action.transactions },
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

export function getUserDetailsAction(userID: number) {
  return { type: GET_USER_DETAILS_ACTION, userID }
}

export function getUserDetailsActionSuccess(allUserDetails: UserDetails) {
  return { type: GET_USER_DETAILS_ACTION_SUCCESS, allUserDetails }
}

export function getCreditPacksAction(
  sortBy: PackageSortMode,
  orderBy: PackageOrderMode
) {
  return { type: GET_CREDIT_PACKS_ACTION, sortBy, orderBy }
}

export function getCreditPacksActionSuccess(creditPacks: CreditPackDetails[]) {
  return { type: GET_CREDIT_PACKS_ACTION_SUCCESS, creditPacks }
}

export function getSubscriptionPlansAction(
  sortBy: PackageSortMode,
  orderBy: PackageOrderMode
) {
  return { type: GET_SUBSCRIPTION_PLANS_ACTION, sortBy, orderBy }
}

export function getSubscriptionPlansActionSuccess(
  subscriptions: SubscriptionPlanDetails[]
) {
  return {
    type: GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS,
    subscriptions,
  }
}

export function getUserTransactionsAction() {
  return { type: GET_USER_TRANSACTIONS_ACTION }
}

export function getUserTransactionsActionSuccess(
  transactions: TransactionDetails[]
) {
  return { type: GET_USER_TRANSACTIONS_ACTION_SUCCESS, transactions }
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
