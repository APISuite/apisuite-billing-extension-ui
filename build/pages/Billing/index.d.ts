import { Dispatch } from 'redux';
import { getAllCreditPacksAction, getAllSubscriptionPlansAction, getAllUserDetailsAction, getAllUserTransactionsAction, purchaseCreditsAction } from './ducks';
export declare const mapStateToProps: ({ auth, billing }: {
    auth: any;
    billing: any;
}) => {
    allCreditPacks: any;
    allSubscriptionPlans: any;
    allUserDetails: any;
    allUserTransactions: any;
    user: any;
};
export declare const mapDispatchToProps: (dispatch: Dispatch) => {
    getAllCreditPacksAction: typeof getAllCreditPacksAction;
    getAllSubscriptionPlansAction: typeof getAllSubscriptionPlansAction;
    getAllUserDetailsAction: typeof getAllUserDetailsAction;
    getAllUserTransactionsAction: typeof getAllUserTransactionsAction;
    purchaseCreditsAction: typeof purchaseCreditsAction;
};
declare const _default: any;
export default _default;
