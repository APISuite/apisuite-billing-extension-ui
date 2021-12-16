import { Dispatch } from 'redux';
import { getUserDetailsAction, setUserBillingOrgAction } from '../../pages/Billing/ducks';
export declare const mapStateToProps: ({ auth, billing, profile }: {
    auth: any;
    billing: any;
    profile: any;
}) => {
    billingOrganizationId: any;
    orgs: any;
    user: any;
};
export declare const mapDispatchToProps: (dispatch: Dispatch) => {
    getUserDetailsAction: typeof getUserDetailsAction;
    setUserBillingOrgAction: typeof setUserBillingOrgAction;
};
declare const _default: any;
export default _default;
