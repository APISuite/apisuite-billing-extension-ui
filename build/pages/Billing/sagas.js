import { BILLING_API_URL } from '../../constants/endpoints';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_CREDIT_PACKS_ACTION, GET_ALL_SUBSCRIPTION_PLANS_ACTION, GET_ALL_USER_DETAILS_ACTION, GET_ALL_USER_TRANSACTIONS_ACTION, getAllCreditPacksActionSuccess, getAllSubscriptionPlansActionSuccess, getAllUserDetailsActionSuccess, getAllUserTransactionsActionSuccess, PURCHASE_CREDITS_ACTION, purchaseCreditsActionError, } from './ducks';
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
            createdAt: transaction.createdAt,
            transactionAmount: {
                transactionCurrency: transaction.amount.currency,
                transactionValue: transaction.amount.value,
            },
            transactionDescription: transaction.description,
            transactionID: transaction.id,
            transactionsStatus: transaction.status,
        }));
        yield put(getAllUserTransactionsActionSuccess(allUserTransactions));
    }
    catch (error) {
        console.log("Error fetching all of the user's transactions.");
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
function* billingRootSaga() {
    yield takeLatest(GET_ALL_CREDIT_PACKS_ACTION, getAllCreditPacksActionSaga);
    yield takeLatest(GET_ALL_SUBSCRIPTION_PLANS_ACTION, getAllSubscriptionPlansActionSaga);
    yield takeLatest(GET_ALL_USER_DETAILS_ACTION, getAllUserDetailsActionSaga);
    yield takeLatest(GET_ALL_USER_TRANSACTIONS_ACTION, getAllUserTransactionsActionSaga);
    yield takeLatest(PURCHASE_CREDITS_ACTION, purchaseCreditsActionSaga);
}
export default billingRootSaga;
