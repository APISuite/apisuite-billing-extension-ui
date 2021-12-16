import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserDetailsAction, setUserBillingOrgAction, } from '../../pages/Billing/ducks';
import { BillingOrganizationSelector } from './BillingOrganizationSelector';
export const mapStateToProps = ({ auth, billing, profile }) => ({
    billingOrganizationId: billing.allUserDetails.billingOrganizationId,
    orgs: profile.profile.orgs_member || [],
    user: auth.user,
});
export const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUserDetailsAction,
    setUserBillingOrgAction,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingOrganizationSelector);
