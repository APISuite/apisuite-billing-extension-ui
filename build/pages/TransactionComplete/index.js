import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTransactionDetailsAction } from '../Billing/ducks';
import TransactionComplete from './TransactionComplete';
export const mapStateToProps = ({ billing, profile }) => ({
    transactionDetails: billing.transactionDetails,
    orgId: profile.profile.currentOrg.id,
});
export const mapDispatchToProps = (dispatch) => bindActionCreators({
    getTransactionDetailsAction,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TransactionComplete);
