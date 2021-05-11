import { GetAllUserDetailsAction, PurchaseCreditsAction } from './types';
export declare function getAllUserDetailsActionSaga(action: GetAllUserDetailsAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    allUserDetails: import("./types").UserDetails;
}>, void, unknown>;
export declare function getAllCreditPacksActionSaga(): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    allCreditPacks: import("./types").CreditPackDetails[];
}>, void, unknown>;
export declare function getAllSubscriptionPlansActionSaga(): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    allSubscriptionPlans: import("./types").CreditPackDetails[];
}>, void, unknown>;
export declare function getAllUserTransactionsActionSaga(): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    allUserTransactions: import("./types").CreditPackDetails[];
}>, void, unknown>;
export declare function purchaseCreditsActionSaga(action: PurchaseCreditsAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    error: string;
}>, void, unknown>;
declare function billingRootSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default billingRootSaga;
