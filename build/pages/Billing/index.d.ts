import { Dispatch } from 'redux';
import { getBillingSettingsAction, getCreditPacksAction, getSubscriptionPlansAction, getUserDetailsAction, getUserInvoiceNoteAction, getUserTransactionsAction, purchaseCreditsAction, setUserInvoiceNoteAction, startSubscriptionAction, cancelSubscriptionAction, clearSubscriptionInfoAction, editPaymentInfoAction } from './ducks';
export declare const mapStateToProps: ({ auth, billing }: {
    auth: any;
    billing: any;
}) => {
    creditPacks: any;
    subscriptions: any;
    invoiceNote: any;
    allUserDetails: any;
    transactions: import("./types").TransactionDetails;
    dialogInfo: any;
    hasRetrievedAllCreditPacks: any;
    hasRetrievedAllSubscriptions: any;
    settings: any;
    successfullySubscribedToPlan: any;
    user: any;
};
export declare const mapDispatchToProps: (dispatch: Dispatch) => {
    getBillingSettingsAction: typeof getBillingSettingsAction;
    getCreditPacksAction: typeof getCreditPacksAction;
    getSubscriptionPlansAction: typeof getSubscriptionPlansAction;
    getUserDetailsAction: typeof getUserDetailsAction;
    getUserInvoiceNoteAction: typeof getUserInvoiceNoteAction;
    getUserTransactionsAction: typeof getUserTransactionsAction;
    purchaseCreditsAction: typeof purchaseCreditsAction;
    setUserInvoiceNoteAction: typeof setUserInvoiceNoteAction;
    startSubscriptionAction: typeof startSubscriptionAction;
    cancelSubscriptionAction: typeof cancelSubscriptionAction;
    clearSubscriptionInfoAction: typeof clearSubscriptionInfoAction;
    editPaymentInfoAction: typeof editPaymentInfoAction;
};
declare const _default: any;
export default _default;
