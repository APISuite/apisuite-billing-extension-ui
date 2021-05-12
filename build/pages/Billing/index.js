import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllCreditPacksAction, getAllSubscriptionPlansAction, getAllUserDetailsAction, getAllUserTransactionsAction, purchaseCreditsAction, startSubscriptionAction, cancelSubscriptionAction, clearSubscriptionInfoAction, } from './ducks';
import Billing from './Billing';
export const mapStateToProps = ({ auth, billing }) => ({
    allCreditPacks: billing.allCreditPacks,
    allSubscriptionPlans: billing.allSubscriptionPlans,
    allUserDetails: billing.allUserDetails,
    allUserTransactions: billing.allUserTransactions,
    dialogInfo: billing.subscriptionsDialogInfo,
    successfullySubscribedToPlan: billing.successfullySubscribedToPlan,
    user: auth.user,
});
export const mapDispatchToProps = (dispatch) => bindActionCreators({
    getAllCreditPacksAction: getAllCreditPacksAction,
    getAllSubscriptionPlansAction: getAllSubscriptionPlansAction,
    getAllUserDetailsAction: getAllUserDetailsAction,
    getAllUserTransactionsAction: getAllUserTransactionsAction,
    purchaseCreditsAction: purchaseCreditsAction,
    startSubscriptionAction: startSubscriptionAction,
    cancelSubscriptionAction,
    clearSubscriptionInfoAction,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Billing);
