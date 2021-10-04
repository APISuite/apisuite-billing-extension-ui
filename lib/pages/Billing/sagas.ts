import { call, put, select, takeLatest } from 'redux-saga/effects'

import { BILLING_API_URL } from '../../constants/endpoints'
import request from '../../util/request'
import {
  CANCEL_SUBSCRIPTION,
  cancelSubscriptionActionError,
  cancelSubscriptionActionSuccess,
  GET_CREDIT_PACKS_ACTION,
  GET_SUBSCRIPTION_PLANS_ACTION,
  GET_USER_DETAILS_ACTION,
  GET_USER_TRANSACTIONS_ACTION,
  GET_TRANSACTION_DETAILS_ACTION,
  getCreditPacksActionSuccess,
  getSubscriptionPlansActionSuccess,
  getUserDetailsActionSuccess,
  getUserTransactionsActionSuccess,
  getTransactionDetailsActionSuccess,
  PURCHASE_CREDITS_ACTION,
  purchaseCreditsActionError,
  START_SUBSCRIPTION_ACTION,
  startSubscriptionActionError,
  startSubscriptionActionSuccess,
} from './ducks'
import {
  GetCreditPacksAction,
  GetSubscriptionPlansAction,
  GetUserDetailsAction,
  GetTransactionDetailsAction,
  PurchaseCreditsAction,
  StartSubscriptionAction,
} from './types'

export function* getUserDetailsActionSaga(action: GetUserDetailsAction) {
  try {
    const getUserDetailsUrl = `${BILLING_API_URL}/users/${action.userID}`

    const response = yield call(request, {
      url: getUserDetailsUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const userDetails = {
      subscriptionID: response.data.subscriptionId,
      userCredits: response.data.credits,
      userID: response.data.id,
      nextPaymentDate: response.data.nextPaymentDate,
    }

    yield put(getUserDetailsActionSuccess(userDetails))
  } catch (error) {
    console.log('Error fetching all user details.')
  }
}

export function* getCreditPacksActionSaga(action: GetCreditPacksAction) {
  try {
    const getCreditPacksUrl = `${BILLING_API_URL}/packages?sort_by=${action.sortBy}&order=${action.orderBy}`

    const response = yield call(request, {
      url: getCreditPacksUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const creditPacks = response.data.map((creditPack: any) => ({
      credits: creditPack.credits,
      id: creditPack.id,
      name: creditPack.name,
      price: creditPack.price,
    }))

    yield put(getCreditPacksActionSuccess(creditPacks))
  } catch (error) {
    console.log('Error fetching all credit packs.')
  }
}

export function* getSubscriptionPlansActionSaga(
  action: GetSubscriptionPlansAction
) {
  try {
    const getSubscriptionsUrl = `${BILLING_API_URL}/subscriptions?sort_by=${action.sortBy}&order=${action.orderBy}`

    const response = yield call(request, {
      url: getSubscriptionsUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const subscriptions = response.data.map((sub: any) => ({
      credits: sub.credits,
      id: sub.id,
      name: sub.name,
      periodicity: sub.periodicity,
      price: sub.price,
    }))

    yield put(getSubscriptionPlansActionSuccess(subscriptions))
  } catch (error) {
    console.log('Error fetching all subscription plans.')
  }
}

export function* getUserTransactionsActionSaga() {
  try {
    const getTransactionsUrl = `${BILLING_API_URL}/purchases`

    const response = yield call(request, {
      url: getTransactionsUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const transactions = response.data.map((transaction: any) => ({
      transactionAmount: {
        transactionCurrency: transaction.amount.currency,
        transactionValue: transaction.amount.value,
      },
      transactionCredits: transaction.credits,
      transactionDate: transaction.createdAt,
      transactionDescription: transaction.description,
      transactionID: transaction.id,
      transactionStatus: transaction.status,
      transactionType: transaction.type,
    }))

    yield put(getUserTransactionsActionSuccess(transactions))
  } catch (error) {
    console.log("Error fetching all of the user's transactions.")
  }
}

export function* getTransactionDetailsActionSaga(
  action: GetTransactionDetailsAction
) {
  try {
    const getTransactionDetailsActionUrl = `${BILLING_API_URL}/purchases/${action.transactionID}`

    const response = yield call(request, {
      url: getTransactionDetailsActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const transactionDetails = {
      transactionAmount: {
        transactionCurrency: response.data.amount.currency,
        transactionValue: response.data.amount.value,
      },
      transactionCredits: response.data.credits,
      transactionDate: response.data.createdAt,
      transactionDescription: response.data.description,
      transactionID: response.data.id,
      transactionStatus: response.data.status,
      transactionType: response.data.type,
    }

    yield put(getTransactionDetailsActionSuccess(transactionDetails))
  } catch (error) {
    console.log("Error fetching the transaction's details.")
  }
}

export function* purchaseCreditsActionSaga(action: PurchaseCreditsAction) {
  try {
    const purchaseCreditsActionUrl = `${BILLING_API_URL}/purchases/packages/${action.creditPackID}`

    const response = yield call(request, {
      url: purchaseCreditsActionUrl,
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    window.location.href = response.data
  } catch (error) {
    yield put(purchaseCreditsActionError(error.message))
  }
}

export function* startSubscriptionActionSaga(action: StartSubscriptionAction) {
  try {
    const startSubscriptionActionUrl = `${BILLING_API_URL}/purchases/subscriptions/${action.subscriptionPlanID}`

    const response = yield call(request, {
      url: startSubscriptionActionUrl,
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    // FIXME: When the time to refactor comes, look into the fact that there might be requests
    // that do not have any response whatsoever - this, in turn, causes issues. Look into 'request' and
    // its associated 'checkStatus' function.
    if (!response) {
      return yield put(startSubscriptionActionSuccess())
    }

    window.location.href = response.data
  } catch (error) {
    yield put(startSubscriptionActionError(error.message))
  }
}

export function* cancelSubscriptionSaga() {
  try {
    const userID: number = yield select(
      (store) => store.billing.allUserDetails.userID
    )
    const cancelSubscriptionActionUrl = `${BILLING_API_URL}/users/${userID}/subscriptions`

    yield call(request, {
      url: cancelSubscriptionActionUrl,
      method: 'DELETE',
    })

    yield put(cancelSubscriptionActionSuccess())
  } catch (error) {
    yield put(cancelSubscriptionActionError(error.message))
  }
}

function* billingRootSaga() {
  yield takeLatest(GET_CREDIT_PACKS_ACTION, getCreditPacksActionSaga)
  yield takeLatest(
    GET_SUBSCRIPTION_PLANS_ACTION,
    getSubscriptionPlansActionSaga
  )
  yield takeLatest(GET_USER_DETAILS_ACTION, getUserDetailsActionSaga)
  yield takeLatest(
    GET_USER_TRANSACTIONS_ACTION,
    getUserTransactionsActionSaga
  )
  yield takeLatest(
    GET_TRANSACTION_DETAILS_ACTION,
    getTransactionDetailsActionSaga
  )
  yield takeLatest(PURCHASE_CREDITS_ACTION, purchaseCreditsActionSaga)
  yield takeLatest(START_SUBSCRIPTION_ACTION, startSubscriptionActionSaga)
  yield takeLatest(CANCEL_SUBSCRIPTION, cancelSubscriptionSaga)
}

export default billingRootSaga
