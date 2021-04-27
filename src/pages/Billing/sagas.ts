import { call, put, takeLatest } from 'redux-saga/effects'
import request from 'util/request'

import {
  GET_ALL_CREDIT_PACKS_ACTION,
  GET_ALL_SUBSCRIPTION_PLANS_ACTION,
  GET_ALL_USER_TRANSACTIONS_ACTION,
  getAllCreditPacksActionSuccess,
  getAllSubscriptionPlansActionSuccess,
  getAllUserTransactionsActionSuccess,
} from './ducks'

export function* getAllCreditPacksActionSaga() {
  try {
    const getAllCreditPacksActionUrl = `https://billing.develop.apisuite.io/packages`

    const response = yield call(request, {
      url: getAllCreditPacksActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const allCreditPacks = response.data.map((creditPack: any) => ({
      creditsInCreditPack: creditPack.credits,
      idOfCreditPack: creditPack.id,
      nameOfCreditPack: creditPack.name,
      priceOfCreditPack: creditPack.price,
    }))

    yield put(getAllCreditPacksActionSuccess(allCreditPacks))
  } catch (error) {
    console.log('Error fetching all credit packs.')
  }
}

export function* getAllSubscriptionPlansActionSaga() {
  try {
    const getAllSubscriptionPlansActionUrl = `https://billing.develop.apisuite.io/subscriptions`

    const response = yield call(request, {
      url: getAllSubscriptionPlansActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const allSubscriptionPlans = response.data.map((subscriptionPlan: any) => ({
      creditsInSubscriptionPlan: subscriptionPlan.credits,
      idOfSubscriptionPlan: subscriptionPlan.id,
      nameOfSubscriptionPlan: subscriptionPlan.name,
      periodicityOfSubscriptionPlan: subscriptionPlan.periodicity,
      priceOfSubscriptionPlan: subscriptionPlan.price,
    }))

    yield put(getAllSubscriptionPlansActionSuccess(allSubscriptionPlans))
  } catch (error) {
    console.log('Error fetching all subscription plans.')
  }
}

export function* getAllUserTransactionsActionSaga() {
  try {
    const getAllUserTransactionsActionUrl = `https://billing.develop.apisuite.io/purchases`

    const response = yield call(request, {
      url: getAllUserTransactionsActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const allUserTransactions = response.data.map((subscriptionPlan: any) => ({
      createdAt: subscriptionPlan.createdAt,
      creditsReceived: subscriptionPlan.credits,
      paymentID: subscriptionPlan.paymentId,
      transactionCost: subscriptionPlan.amount,
      transactionStatus: subscriptionPlan.verified,
      transactionType: subscriptionPlan.type,
      updatedAt: subscriptionPlan.updatedAt,
      userID: subscriptionPlan.userId,
    }))

    yield put(getAllUserTransactionsActionSuccess(allUserTransactions))
  } catch (error) {
    console.log("Error fetching all of the user's transactions.")
  }
}

function* billingRootSaga() {
  yield takeLatest(GET_ALL_CREDIT_PACKS_ACTION, getAllCreditPacksActionSaga)
  yield takeLatest(
    GET_ALL_SUBSCRIPTION_PLANS_ACTION,
    getAllSubscriptionPlansActionSaga
  )
  yield takeLatest(
    GET_ALL_USER_TRANSACTIONS_ACTION,
    getAllUserTransactionsActionSaga
  )
}

export default billingRootSaga
