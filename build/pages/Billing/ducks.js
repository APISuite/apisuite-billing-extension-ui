import update from 'immutability-helper';
/** Initial state */
const initialState = {
    allUserDetails: {
        billingOrganizationId: null,
        subscriptionID: '',
        userCredits: 0,
        userID: 0,
        nextPaymentDate: '',
    },
    creditPacks: [],
    subscriptions: [],
    invoiceNote: '',
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
    settings: {
        data: {
            vatRate: null,
        },
    },
    organizationDetails: {
        id: 0,
        subscriptionId: '',
        credits: 0,
        invoiceNotes: '',
        nextPaymentDate: '',
    },
};
/** Action types */
export const GET_USER_DETAILS_ACTION = 'Billing/GET_USER_DETAILS_ACTION';
export const GET_USER_DETAILS_ACTION_SUCCESS = 'Billing/GET_USER_DETAILS_ACTION_SUCCESS';
export const GET_CREDIT_PACKS_ACTION = 'Billing/GET_CREDIT_PACKS_ACTION';
export const GET_CREDIT_PACKS_ACTION_SUCCESS = 'Billing/GET_CREDIT_PACKS_ACTION_SUCCESS';
export const GET_SUBSCRIPTION_PLANS_ACTION = 'Billing/GET_SUBSCRIPTION_PLANS_ACTION';
export const GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS = 'Billing/GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS';
export const GET_USER_ORGANIZATION_ACTION = 'Billing/GET_USER_ORGANIZATION_ACTION';
export const GET_USER_ORGANIZATION_ACTION_SUCCESS = 'Billing/GET_USER_ORGANIZATION_ACTION_SUCCESS';
export const SET_USER_INVOICE_NOTES_ACTION = 'Billing/SET_USER_INVOICE_NOTES_ACTION';
export const SET_USER_INVOICE_NOTES_ACTION_SUCCESS = 'Billing/SET_USER_INVOICE_NOTES_ACTION_SUCCESS';
export const GET_USER_TRANSACTIONS_ACTION = 'Billing/GET_USER_TRANSACTIONS_ACTION';
export const GET_USER_TRANSACTIONS_ACTION_SUCCESS = 'Billing/GET_USER_TRANSACTIONS_ACTION_SUCCESS';
export const GET_TRANSACTION_DETAILS_ACTION = 'Billing/GET_TRANSACTION_DETAILS_ACTION';
export const GET_TRANSACTION_DETAILS_ACTION_SUCCESS = 'Billing/GET_TRANSACTION_DETAILS_ACTION_SUCCESS';
export const PURCHASE_CREDITS_ACTION = 'Billing/PURCHASE_CREDITS_ACTION';
export const PURCHASE_CREDITS_ACTION_SUCCESS = 'Billing/PURCHASE_CREDITS_ACTION_SUCCESS';
export const PURCHASE_CREDITS_ACTION_ERROR = 'Billing/PURCHASE_CREDITS_ACTION_ERROR';
export const START_SUBSCRIPTION_ACTION = 'Billing/START_SUBSCRIPTION_ACTION';
export const START_SUBSCRIPTION_ACTION_SUCCESS = 'Billing/START_SUBSCRIPTION_ACTION_SUCCESS';
export const START_SUBSCRIPTION_ACTION_ERROR = 'Billing/START_SUBSCRIPTION_ACTION_ERROR';
export const CANCEL_SUBSCRIPTION = 'Billing/CANCEL_SUBSCRIPTION';
export const CANCEL_SUBSCRIPTION_SUCCESS = 'Billing/CANCEL_SUBSCRIPTION_SUCCESS';
export const CANCEL_SUBSCRIPTION_ERROR = 'Billing/CANCEL_SUBSCRIPTION_ERROR';
export const CLEAR_SUBSCRIPTION_INFO = 'Billing/CLEAR_SUBSCRIPTION_INFO';
export const EDIT_PAYMENT_INFORMATION = 'Billing/EDIT_PAYMENT_INFORMATION';
export const GET_BILLING_SETTINGS = 'Billing/GET_BILLING_SETTINGS';
export const GET_BILLING_SETTINGS_SUCCESS = 'Billing/GET_BILLING_SETTINGS_SUCCESS';
export const GET_BILLING_SETTINGS_ERROR = 'Billing/GET_BILLING_SETTINGS_ERROR';
export const SET_BILLING_ORGANIZATION = 'Billing/SET_BILLING_ORGANIZATION';
export const SET_BILLING_ORGANIZATION_SUCCESS = 'Billing/SET_BILLING_ORGANIZATIONS_SUCCESS';
/** Reducer */
export default function billingReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_DETAILS_ACTION_SUCCESS:
        case SET_BILLING_ORGANIZATION_SUCCESS: {
            return update(state, {
                allUserDetails: { $set: action.allUserDetails },
            });
        }
        case GET_CREDIT_PACKS_ACTION_SUCCESS: {
            return update(state, {
                creditPacks: { $set: action.creditPacks },
                hasRetrievedAllCreditPacks: { $set: true },
            });
        }
        case GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS: {
            return update(state, {
                subscriptions: { $set: action.subscriptions },
                hasRetrievedAllSubscriptions: { $set: true },
            });
        }
        case GET_USER_ORGANIZATION_ACTION_SUCCESS: {
            return update(state, {
                allUserDetails: {
                    nextPaymentDate: { $set: action.orgData.nextPaymentDate },
                    userCredits: { $set: action.orgData.credits },
                },
                invoiceNote: { $set: action.orgData.invoiceNotes },
                organizationDetails: { $set: action.orgData },
            });
        }
        case SET_USER_INVOICE_NOTES_ACTION_SUCCESS: {
            return update(state, {
                invoiceNote: { $set: action.invoiceNote },
            });
        }
        case GET_USER_TRANSACTIONS_ACTION_SUCCESS: {
            return update(state, {
                transactions: { $set: action.transactions },
            });
        }
        case GET_TRANSACTION_DETAILS_ACTION_SUCCESS: {
            return update(state, {
                transactionDetails: { $set: action.transactionDetails },
            });
        }
        case PURCHASE_CREDITS_ACTION_ERROR: {
            return update(state, {
                error: { $set: action.error },
            });
        }
        case START_SUBSCRIPTION_ACTION: {
            return update(state, {
                successfullySubscribedToPlan: { $set: false },
            });
        }
        case START_SUBSCRIPTION_ACTION_SUCCESS: {
            return update(state, {
                successfullySubscribedToPlan: { $set: true },
            });
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
            });
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
            });
        }
        case GET_BILLING_SETTINGS_SUCCESS: {
            return update(state, {
                settings: {
                    data: { $set: { ...action.payload.data } },
                },
            });
        }
        case GET_BILLING_SETTINGS_ERROR: {
            return update(state, {
                settings: {
                    data: { $set: { vatRate: null } },
                },
            });
        }
        default:
            return state;
    }
}
/** Action builders */
export function getUserDetailsAction(userID) {
    return { type: GET_USER_DETAILS_ACTION, userID };
}
export function getUserDetailsActionSuccess(allUserDetails) {
    return { type: GET_USER_DETAILS_ACTION_SUCCESS, allUserDetails };
}
export function getCreditPacksAction(sortBy, orderBy) {
    return { type: GET_CREDIT_PACKS_ACTION, sortBy, orderBy };
}
export function getCreditPacksActionSuccess(creditPacks) {
    return { type: GET_CREDIT_PACKS_ACTION_SUCCESS, creditPacks };
}
export function getSubscriptionPlansAction(sortBy, orderBy) {
    return { type: GET_SUBSCRIPTION_PLANS_ACTION, sortBy, orderBy };
}
export function getSubscriptionPlansActionSuccess(subscriptions) {
    return {
        type: GET_SUBSCRIPTION_PLANS_ACTION_SUCCESS,
        subscriptions,
    };
}
export function getOrganizationAction(orgId) {
    return { type: GET_USER_ORGANIZATION_ACTION, orgId };
}
export function getOrganizationActionSuccess(orgData) {
    return {
        type: GET_USER_ORGANIZATION_ACTION_SUCCESS,
        orgData,
    };
}
export function setUserInvoiceNoteAction(userID, invoiceNote) {
    return { type: SET_USER_INVOICE_NOTES_ACTION, userID, invoiceNote };
}
export function setUserInvoiceNoteActionSuccess(invoiceNote) {
    return {
        type: SET_USER_INVOICE_NOTES_ACTION_SUCCESS,
        invoiceNote,
    };
}
export function getUserTransactionsAction(orgId) {
    return { type: GET_USER_TRANSACTIONS_ACTION, orgId };
}
export function getUserTransactionsActionSuccess(transactions) {
    return { type: GET_USER_TRANSACTIONS_ACTION_SUCCESS, transactions };
}
export function getTransactionDetailsAction(orgId, transactionID) {
    return { type: GET_TRANSACTION_DETAILS_ACTION, orgId, transactionID };
}
export function getTransactionDetailsActionSuccess(transactionDetails) {
    return { type: GET_TRANSACTION_DETAILS_ACTION_SUCCESS, transactionDetails };
}
export function purchaseCreditsAction(orgId, creditPackID) {
    return { type: PURCHASE_CREDITS_ACTION, creditPackID, orgId };
}
export function purchaseCreditsActionSuccess() {
    return { type: PURCHASE_CREDITS_ACTION_SUCCESS };
}
export function purchaseCreditsActionError(error) {
    return { type: PURCHASE_CREDITS_ACTION_ERROR, error };
}
export function startSubscriptionAction(orgId, subscriptionPlanID) {
    return { type: START_SUBSCRIPTION_ACTION, orgId, subscriptionPlanID };
}
export function startSubscriptionActionError(error) {
    return { type: START_SUBSCRIPTION_ACTION_ERROR, error };
}
export function startSubscriptionActionSuccess() {
    return { type: START_SUBSCRIPTION_ACTION_SUCCESS };
}
export function cancelSubscriptionAction() {
    return { type: CANCEL_SUBSCRIPTION };
}
export function cancelSubscriptionActionError(error) {
    return { type: CANCEL_SUBSCRIPTION_ERROR, error };
}
export function cancelSubscriptionActionSuccess() {
    return { type: CANCEL_SUBSCRIPTION_SUCCESS };
}
export function clearSubscriptionInfoAction() {
    return { type: CLEAR_SUBSCRIPTION_INFO };
}
export function editPaymentInfoAction(orgId) {
    return { type: EDIT_PAYMENT_INFORMATION, orgId };
}
export function getBillingSettingsAction() {
    return { type: GET_BILLING_SETTINGS };
}
export function getBillingSettingsActionError(error) {
    return { type: GET_BILLING_SETTINGS_ERROR, error };
}
export function getBillingSettingsActionSuccess(payload) {
    return { type: GET_BILLING_SETTINGS_SUCCESS, payload };
}
export function setUserBillingOrgAction(userID, orgID) {
    return { type: SET_BILLING_ORGANIZATION, userID, orgID };
}
export function setUserBillingOrgActionSuccess(allUserDetails) {
    return { type: SET_BILLING_ORGANIZATION_SUCCESS, allUserDetails };
}
