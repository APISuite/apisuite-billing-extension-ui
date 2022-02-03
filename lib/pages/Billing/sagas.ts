import { call, put, select, takeLatest } from 'redux-saga/effects'
import { i18n } from '@apisuite/fe-base'

import { openNotification } from '../../components/NotificationStack/ducks'
import { getBillingApiUrl } from '../../constants/endpoints'
import request from '../../util/request'
import {
  CANCEL_SUBSCRIPTION,
  cancelSubscriptionActionError,
  cancelSubscriptionActionSuccess,
  EDIT_PAYMENT_INFORMATION,
  GET_CREDIT_PACKS_ACTION,
  GET_SUBSCRIPTION_PLANS_ACTION,
  GET_USER_DETAILS_ACTION,
  GET_USER_ORGANIZATION_ACTION,
  getOrganizationActionError,
  getOrganizationActionSuccess,
  SET_USER_INVOICE_NOTES_ACTION,
  setUserInvoiceNoteActionSuccess,
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
  GET_BILLING_SETTINGS,
  getBillingSettingsActionSuccess,
  getBillingSettingsActionError,
  setUserBillingOrgActionSuccess,
  SET_BILLING_ORGANIZATION,
} from './ducks'
import {
  GetCreditPacksAction,
  GetSubscriptionPlansAction,
  GetUserDetailsAction,
  GetOrganizationAction,
  SetUserInvoiceNoteAction,
  GetTransactionDetailsAction,
  PurchaseCreditsAction,
  StartSubscriptionAction,
  BillingSettings,
  SetUserBillingOrgAction,
  OrgDetailsResponse,
  GetUserTransactionsAction,
  EditPaymentInfoAction,
} from './types'

export function* getUserDetailsActionSaga(action: GetUserDetailsAction) {
  try {
    const getUserDetailsUrl = `${getBillingApiUrl()}/users/${action.userID}`

    const response = yield call(request, {
      url: getUserDetailsUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const userDetails = {
      billingOrganizationId: response.data.billingOrganizationId,
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
    const getCreditPacksUrl = `${getBillingApiUrl()}/packages?sort_by=${
      action.sortBy
    }&order=${action.orderBy}`

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
    const getSubscriptionsUrl = `${getBillingApiUrl()}/subscriptions?sort_by=${
      action.sortBy
    }&order=${action.orderBy}`

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

export function* getOrganizationSaga(action: GetOrganizationAction) {
  try {
    const getOrganizationActionUrl = `${getBillingApiUrl()}/organizations/${
      action.orgId
    }`

    const response: OrgDetailsResponse = yield call(request, {
      url: getOrganizationActionUrl,
      method: 'GET',
    })

    yield put(getOrganizationActionSuccess(response.data))
  } catch (error) {
    yield put(
      openNotification(
        'error',
        i18n.t('extensions.billing.feedback.orgRetrievalError'),
        3000
      )
    )
    yield put(
      getOrganizationActionError({
        id: 0,
        subscriptionId: '',
        credits: 0,
        invoiceNotes: '',
        nextPaymentDate: '',
      })
    )
  }
}

export function* setUserInvoiceNoteActionSaga(
  action: SetUserInvoiceNoteAction
) {
  try {
    const setUserInvoiceNoteActionUrl = `${getBillingApiUrl()}/organizations/${
      action.orgId
    }`

    const response: OrgDetailsResponse = yield call(request, {
      url: setUserInvoiceNoteActionUrl,
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        invoiceNotes: action.invoiceNote,
      },
    })

    yield put(setUserInvoiceNoteActionSuccess(response.data.invoiceNotes))
    yield put(
      openNotification(
        'success',
        i18n.t('extensions.billing.feedback.invoiceSavingSuccessful'),
        3000
      )
    )
  } catch (error) {
    yield put(
      openNotification(
        'error',
        i18n.t('extensions.billing.feedback.invoiceSavingError'),
        3000
      )
    )
  }
}

export function* getUserTransactionsActionSaga(
  action: GetUserTransactionsAction
) {
  try {
    const getTransactionsUrl = `${getBillingApiUrl()}/organizations/${
      action.orgId
    }/purchases`

    const response = yield call(request, {
      url: getTransactionsUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const transactions = response.data.map((transaction: any) => ({
      amount: {
        currency: transaction.amount.currency,
        value: transaction.amount.value,
      },
      credits: transaction.credits,
      date: transaction.createdAt,
      description: transaction.description,
      id: transaction.id,
      status: transaction.status,
      type: transaction.type,
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
    const getTransactionDetailsActionUrl = `${getBillingApiUrl()}/organizations/${
      action.orgId
    }/purchases/${action.transactionID}`

    const response = yield call(request, {
      url: getTransactionDetailsActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const transactionDetails = {
      amount: {
        currency: response.data.amount.currency,
        value: response.data.amount.value,
      },
      credits: response.data.credits,
      date: response.data.createdAt,
      description: response.data.description,
      id: response.data.id,
      status: response.data.status,
      type: response.data.type,
    }

    yield put(getTransactionDetailsActionSuccess(transactionDetails))
  } catch (error) {
    console.log("Error fetching the transaction's details.")
  }
}

export function* purchaseCreditsActionSaga(action: PurchaseCreditsAction) {
  try {
    const purchaseCreditsActionUrl = `${getBillingApiUrl()}/organizations/${
      action.orgId
    }/purchases/packages/${action.creditPackID}`

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

export function* editPaymentInformationSaga(action: EditPaymentInfoAction) {
  try {
    const editPaymentInfoUrl = `${getBillingApiUrl()}/organizations/${
      action.orgId
    }/purchases/method`

    const response = yield call(request, {
      url: editPaymentInfoUrl,
      method: 'PATCH',
    })

    window.location.href = response.data
  } catch (error) {
    yield put(
      openNotification(
        'error',
        i18n.t('extensions.billing.feedback.editPaymentInfoError'),
        3000
      )
    )
  }
}

export function* startSubscriptionActionSaga(action: StartSubscriptionAction) {
  try {
    const startSubscriptionActionUrl = `${getBillingApiUrl()}/organizations/${
      action.orgId
    }/purchases/subscriptions/${action.subscriptionPlanID}`

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
    const orgId: number = yield select(
      (store) => store.profile.profile.currentOrg.id
    )
    const cancelSubscriptionActionUrl = `${getBillingApiUrl()}/organizations/${orgId}/subscriptions`

    yield call(request, {
      url: cancelSubscriptionActionUrl,
      method: 'DELETE',
    })

    yield put(cancelSubscriptionActionSuccess())
  } catch (error) {
    yield put(cancelSubscriptionActionError(error.message))
  }
}

export function* getBillingSettingsActionSaga() {
  try {
    const getBillingSettingUrl = `${getBillingApiUrl()}/settings`

    const response: BillingSettings = yield call(request, {
      url: getBillingSettingUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    yield put(getBillingSettingsActionSuccess(response))
  } catch (error) {
    yield put(getBillingSettingsActionError(error))
  }
}

export function* setUserBillingOrgActionSaga(action: SetUserBillingOrgAction) {
  try {
    const setBillingOrgUrl = `${getBillingApiUrl()}/users/${
      action.userID
    }/organizations/${action.orgID}`

    yield call(request, {
      url: setBillingOrgUrl,
      method: 'PUT',
    })

    const response = yield call(request, {
      url: `${getBillingApiUrl()}/users/${action.userID}`,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const userDetails = {
      billingOrganizationId: response.data.billingOrganizationId,
      subscriptionID: response.data.subscriptionId,
      userCredits: response.data.credits,
      userID: response.data.id,
      nextPaymentDate: response.data.nextPaymentDate,
    }

    yield put(setUserBillingOrgActionSuccess(userDetails))
    yield put(
      openNotification(
        'success',
        i18n.t('extensions.billing.billingOrg.setSuccessful'),
        3000
      )
    )
  } catch (error) {
    yield put(
      openNotification(
        'error',
        i18n.t('extensions.billing.billingOrg.setFailed'),
        3000
      )
    )
    console.log('Error setting user billing organisation.', error)
  }
}

function* billingRootSaga() {
  yield takeLatest(GET_CREDIT_PACKS_ACTION, getCreditPacksActionSaga)
  yield takeLatest(
    GET_SUBSCRIPTION_PLANS_ACTION,
    getSubscriptionPlansActionSaga
  )
  yield takeLatest(GET_USER_ORGANIZATION_ACTION, getOrganizationSaga)
  yield takeLatest(SET_USER_INVOICE_NOTES_ACTION, setUserInvoiceNoteActionSaga)
  yield takeLatest(GET_USER_DETAILS_ACTION, getUserDetailsActionSaga)
  yield takeLatest(GET_USER_TRANSACTIONS_ACTION, getUserTransactionsActionSaga)
  yield takeLatest(
    GET_TRANSACTION_DETAILS_ACTION,
    getTransactionDetailsActionSaga
  )
  yield takeLatest(PURCHASE_CREDITS_ACTION, purchaseCreditsActionSaga)
  yield takeLatest(START_SUBSCRIPTION_ACTION, startSubscriptionActionSaga)
  yield takeLatest(CANCEL_SUBSCRIPTION, cancelSubscriptionSaga)
  yield takeLatest(EDIT_PAYMENT_INFORMATION, editPaymentInformationSaga)
  yield takeLatest(GET_BILLING_SETTINGS, getBillingSettingsActionSaga)
  yield takeLatest(SET_BILLING_ORGANIZATION, setUserBillingOrgActionSaga)
}

export default billingRootSaga
