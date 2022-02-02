import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getBillingSettingsAction, getCreditPacksAction, getSubscriptionPlansAction, getOrganizationAction, getUserTransactionsAction, purchaseCreditsAction, setUserInvoiceNoteAction, startSubscriptionAction, cancelSubscriptionAction, clearSubscriptionInfoAction, editPaymentInfoAction, } from './ducks';
import Billing from './Billing';
export const mapStateToProps = ({ billing, profile }) => ({
    creditPacks: billing.creditPacks,
    subscriptions: billing.subscriptions,
    invoiceNote: billing.invoiceNote,
    transactions: billing.transactions,
    dialogInfo: billing.subscriptionsDialogInfo,
    hasRetrievedAllCreditPacks: billing.hasRetrievedAllCreditPacks,
    hasRetrievedAllSubscriptions: billing.hasRetrievedAllSubscriptions,
    settings: billing.settings,
    successfullySubscribedToPlan: billing.successfullySubscribedToPlan,
    orgId: profile.profile.currentOrg.id,
    orgDetails: billing.organizationDetails,
});
export const mapDispatchToProps = (dispatch) => bindActionCreators({
    getBillingSettingsAction,
    getCreditPacksAction,
    getSubscriptionPlansAction,
    getOrganizationAction,
    getUserTransactionsAction,
    purchaseCreditsAction,
    setUserInvoiceNoteAction,
    startSubscriptionAction,
    cancelSubscriptionAction,
    clearSubscriptionInfoAction,
    editPaymentInfoAction,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Billing);
