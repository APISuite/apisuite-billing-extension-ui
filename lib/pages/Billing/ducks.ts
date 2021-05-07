import update from 'immutability-helper'

import {
  BillingActions,
  BillingStore,
  CreditPackDetails,
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

  // Keep this for demo purposes, remove once demo is complete, and implement this behaviour
  hasPurchasedCredits: false,
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

// Keep this for demo purposes, remove once demo is complete, and implement this behaviour
export const HAS_PURCHASED_CREDITS_ACTION =
  'Billing/HAS_PURCHASED_CREDITS_ACTION'
export const HAS_PURCHASED_CREDITS_ACTION_SUCCESS =
  'Billing/HAS_PURCHASED_CREDITS_ACTION_SUCCESS'

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

    // Keep this for demo purposes, remove once demo is complete, and implement this behaviour
    case HAS_PURCHASED_CREDITS_ACTION: {
      return update(state, {
        hasPurchasedCredits: { $set: true },
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
  allUserTransactions: CreditPackDetails[]
) {
  return { type: GET_ALL_USER_TRANSACTIONS_ACTION_SUCCESS, allUserTransactions }
}

// Keep this for demo purposes, remove once demo is complete, and implement this behaviour
export function hasPurchasedCreditsAction() {
  return { type: HAS_PURCHASED_CREDITS_ACTION }
}
