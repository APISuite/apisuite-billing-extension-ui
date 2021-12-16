import { Dispatch } from 'redux';
import { getBillingSettingsAction, getCreditPacksAction, getSubscriptionPlansAction, getOrganizationAction, getUserTransactionsAction, purchaseCreditsAction, setUserInvoiceNoteAction, startSubscriptionAction, cancelSubscriptionAction, clearSubscriptionInfoAction, editPaymentInfoAction } from './ducks';
export declare const mapStateToProps: ({ billing, profile }: {
    billing: any;
    profile: any;
}) => {
    creditPacks: any;
    subscriptions: any;
    invoiceNote: any;
    transactions: import("./types").TransactionDetails;
    dialogInfo: any;
    hasRetrievedAllCreditPacks: any;
    hasRetrievedAllSubscriptions: any;
    settings: any;
    successfullySubscribedToPlan: any;
    orgId: any;
    orgDetails: any;
};
export declare const mapDispatchToProps: (dispatch: Dispatch) => {
    getBillingSettingsAction: typeof getBillingSettingsAction;
    getCreditPacksAction: typeof getCreditPacksAction;
    getSubscriptionPlansAction: typeof getSubscriptionPlansAction;
    getOrganizationAction: typeof getOrganizationAction;
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
