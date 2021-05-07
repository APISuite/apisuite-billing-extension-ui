import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllCreditPacksAction, getAllSubscriptionPlansAction, getAllUserDetailsAction, getAllUserTransactionsAction, } from './ducks';
import Billing from './Billing';
export const mapStateToProps = ({ auth, billing }) => ({
    allCreditPacks: billing.allCreditPacks,
    allSubscriptionPlans: billing.allSubscriptionPlans,
    allUserDetails: billing.allUserDetails,
    allUserTransactions: billing.allUserTransactions,
    user: auth.user,
    // Keep this for demo purposes, remove once demo is complete, and implement this behaviour
    hasPurchasedCredits: billing.hasPurchasedCredits,
});
export const mapDispatchToProps = (dispatch) => bindActionCreators({
    getAllCreditPacksAction: getAllCreditPacksAction,
    getAllSubscriptionPlansAction: getAllSubscriptionPlansAction,
    getAllUserDetailsAction: getAllUserDetailsAction,
    getAllUserTransactionsAction: getAllUserTransactionsAction,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Billing);
