import { Dispatch } from 'redux';
import { getTransactionDetailsAction } from '../Billing/ducks';
export declare const mapStateToProps: ({ billing, profile }: {
    billing: any;
    profile: any;
}) => {
    transactionDetails: any;
    orgId: any;
};
export declare const mapDispatchToProps: (dispatch: Dispatch) => {
    getTransactionDetailsAction: typeof getTransactionDetailsAction;
};
declare const _default: any;
export default _default;
