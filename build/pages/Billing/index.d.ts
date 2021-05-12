import { Dispatch } from 'redux';
import { getAllCreditPacksAction, getAllSubscriptionPlansAction, getAllUserDetailsAction, getAllUserTransactionsAction, purchaseCreditsAction, startSubscriptionAction, cancelSubscriptionAction, clearSubscriptionInfoAction } from './ducks';
export declare const mapStateToProps: ({ auth, billing }: {
    auth: any;
    billing: any;
}) => {
    allCreditPacks: any;
    allSubscriptionPlans: any;
    allUserDetails: any;
    allUserTransactions: import("./types").TransactionDetails;
    dialogInfo: any;
    successfullySubscribedToPlan: any;
    user: any;
};
export declare const mapDispatchToProps: (dispatch: Dispatch) => {
    getAllCreditPacksAction: typeof getAllCreditPacksAction;
    getAllSubscriptionPlansAction: typeof getAllSubscriptionPlansAction;
    getAllUserDetailsAction: typeof getAllUserDetailsAction;
    getAllUserTransactionsAction: typeof getAllUserTransactionsAction;
    purchaseCreditsAction: typeof purchaseCreditsAction;
    startSubscriptionAction: typeof startSubscriptionAction;
    cancelSubscriptionAction: typeof cancelSubscriptionAction;
    clearSubscriptionInfoAction: typeof clearSubscriptionInfoAction;
};
declare const _default: any;
export default _default;
