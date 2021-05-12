import { BILLING_API_URL } from '../../constants/endpoints';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_ALL_CREDIT_PACKS_ACTION, GET_ALL_SUBSCRIPTION_PLANS_ACTION, GET_ALL_USER_DETAILS_ACTION, GET_ALL_USER_TRANSACTIONS_ACTION, GET_TRANSACTION_DETAILS_ACTION, getAllCreditPacksActionSuccess, getAllSubscriptionPlansActionSuccess, getAllUserDetailsActionSuccess, getAllUserTransactionsActionSuccess, getTransactionDetailsActionSuccess, PURCHASE_CREDITS_ACTION, purchaseCreditsActionError, startSubscriptionActionError, START_SUBSCRIPTION_ACTION, cancelSubscriptionActionSuccess, cancelSubscriptionActionError, CANCEL_SUBSCRIPTION, startSubscriptionActionSuccess, } from './ducks';
import request from '../../util/request';
export function* getAllUserDetailsActionSaga(action) {
    try {
        const getAllUserDetailsActionUrl = `${BILLING_API_URL}/users/${action.userID}`;
        const response = yield call(request, {
            url: getAllUserDetailsActionUrl,
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        const allUserDetails = {
            subscriptionID: response.data.subscriptionId,
            userCredits: response.data.credits,
            userID: response.data.id,
            nextPaymentDate: response.data.nextPaymentDate,
        };
        yield put(getAllUserDetailsActionSuccess(allUserDetails));
    }
    catch (error) {
        console.log('Error fetching all user details.');
    }
}
export function* getAllCreditPacksActionSaga() {
    try {
        const getAllCreditPacksActionUrl = `${BILLING_API_URL}/packages`;
        const response = yield call(request, {
            url: getAllCreditPacksActionUrl,
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        const allCreditPacks = response.data.map((creditPack) => ({
            creditsInCreditPack: creditPack.credits,
            idOfCreditPack: creditPack.id,
            nameOfCreditPack: creditPack.name,
            priceOfCreditPack: creditPack.price,
        }));
        yield put(getAllCreditPacksActionSuccess(allCreditPacks));
    }
    catch (error) {
        console.log('Error fetching all credit packs.');
    }
}
export function* getAllSubscriptionPlansActionSaga() {
    try {
        const getAllSubscriptionPlansActionUrl = `${BILLING_API_URL}/subscriptions`;
        const response = yield call(request, {
            url: getAllSubscriptionPlansActionUrl,
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        const allSubscriptionPlans = response.data.map((subscriptionPlan) => ({
            creditsInSubscriptionPlan: subscriptionPlan.credits,
            idOfSubscriptionPlan: subscriptionPlan.id,
            nameOfSubscriptionPlan: subscriptionPlan.name,
            periodicityOfSubscriptionPlan: subscriptionPlan.periodicity,
            priceOfSubscriptionPlan: subscriptionPlan.price,
        }));
        yield put(getAllSubscriptionPlansActionSuccess(allSubscriptionPlans));
    }
    catch (error) {
        console.log('Error fetching all subscription plans.');
    }
}
export function* getAllUserTransactionsActionSaga() {
    try {
        const getAllUserTransactionsActionUrl = `${BILLING_API_URL}/purchases`;
        const response = yield call(request, {
            url: getAllUserTransactionsActionUrl,
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        const allUserTransactions = response.data.map((transaction) => ({
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
        }));
        yield put(getAllUserTransactionsActionSuccess(allUserTransactions));
    }
    catch (error) {
        console.log("Error fetching all of the user's transactions.");
    }
}
export function* getTransactionDetailsActionSaga(action) {
    try {
        const getTransactionDetailsActionUrl = `${BILLING_API_URL}/purchases/${action.transactionID}`;
        const response = yield call(request, {
            url: getTransactionDetailsActionUrl,
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
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
        };
        yield put(getTransactionDetailsActionSuccess(transactionDetails));
    }
    catch (error) {
        console.log("Error fetching the transaction's details.");
    }
}
export function* purchaseCreditsActionSaga(action) {
    try {
        const purchaseCreditsActionUrl = `${BILLING_API_URL}/purchases/packages/${action.creditPackID}`;
        const response = yield call(request, {
            url: purchaseCreditsActionUrl,
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        window.location.href = response.data;
    }
    catch (error) {
        yield put(purchaseCreditsActionError(error.message));
    }
}
export function* startSubscriptionActionSaga(action) {
    try {
        const startSubscriptionActionUrl = `${BILLING_API_URL}/purchases/subscriptions/${action.subscriptionPlanID}`;
        const response = yield call(request, {
            url: startSubscriptionActionUrl,
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        // FIXME: When the time to refactor comes, look into the fact that there might be requests
        // that do not have any response whatsoever - this, in turn, causes issues. Look into 'request' and
        // its associated 'checkStatus' function.
        if (!response) {
            return yield put(startSubscriptionActionSuccess());
        }
        window.location.href = response.data;
    }
    catch (error) {
        yield put(startSubscriptionActionError(error.message));
    }
}
export function* cancelSubscriptionSaga() {
    try {
        const userID = yield select((store) => store.billing.allUserDetails.userID);
        const cancelSubscriptionActionUrl = `${BILLING_API_URL}/users/${userID}/subscriptions`;
        yield call(request, {
            url: cancelSubscriptionActionUrl,
            method: 'DELETE',
        });
        yield put(cancelSubscriptionActionSuccess());
    }
    catch (error) {
        yield put(cancelSubscriptionActionError(error.message));
    }
}
function* billingRootSaga() {
    yield takeLatest(GET_ALL_CREDIT_PACKS_ACTION, getAllCreditPacksActionSaga);
    yield takeLatest(GET_ALL_SUBSCRIPTION_PLANS_ACTION, getAllSubscriptionPlansActionSaga);
    yield takeLatest(GET_ALL_USER_DETAILS_ACTION, getAllUserDetailsActionSaga);
    yield takeLatest(GET_ALL_USER_TRANSACTIONS_ACTION, getAllUserTransactionsActionSaga);
    yield takeLatest(GET_TRANSACTION_DETAILS_ACTION, getTransactionDetailsActionSaga);
    yield takeLatest(PURCHASE_CREDITS_ACTION, purchaseCreditsActionSaga);
    yield takeLatest(START_SUBSCRIPTION_ACTION, startSubscriptionActionSaga);
    yield takeLatest(CANCEL_SUBSCRIPTION, cancelSubscriptionSaga);
}
export default billingRootSaga;
