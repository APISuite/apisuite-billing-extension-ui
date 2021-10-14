import { GetCreditPacksAction, GetSubscriptionPlansAction, GetUserDetailsAction, GetUserInvoiceNoteAction, SetUserInvoiceNoteAction, GetTransactionDetailsAction, PurchaseCreditsAction, StartSubscriptionAction, InvoiceNoteResponse } from './types';
export declare function getUserDetailsActionSaga(action: GetUserDetailsAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    allUserDetails: import("./types").UserDetails;
}>, void, unknown>;
export declare function getCreditPacksActionSaga(action: GetCreditPacksAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    creditPacks: import("./types").CreditPackDetails[];
}>, void, unknown>;
export declare function getSubscriptionPlansActionSaga(action: GetSubscriptionPlansAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    subscriptions: import("./types").SubscriptionPlanDetails[];
}>, void, unknown>;
export declare function getUserInvoiceNoteActionSaga(action: GetUserInvoiceNoteAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<any>, void, InvoiceNoteResponse>;
export declare function setUserInvoiceNoteActionSaga(action: SetUserInvoiceNoteAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<any>, void, InvoiceNoteResponse>;
export declare function getUserTransactionsActionSaga(): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    transactions: import("./types").TransactionDetails[];
}>, void, unknown>;
export declare function getTransactionDetailsActionSaga(action: GetTransactionDetailsAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    transactionDetails: import("./types").TransactionDetails;
}>, void, unknown>;
export declare function purchaseCreditsActionSaga(action: PurchaseCreditsAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    error: string;
}>, void, unknown>;
export declare function startSubscriptionActionSaga(action: StartSubscriptionAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, any, unknown>;
export declare function cancelSubscriptionSaga(): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, void, number>;
declare function billingRootSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default billingRootSaga;
