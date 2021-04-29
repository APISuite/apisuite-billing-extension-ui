/// <reference types="react" />
import { Dispatch } from 'redux';
export declare const mapStateToProps: ({ billing }: any) => {
    allCreditPacks: any;
    allSubscriptionPlans: any;
    allUserTransactions: any;
    hasPurchasedCredits: any;
};
export declare const mapDispatchToProps: (dispatch: Dispatch) => any;
declare const _default: import("react-redux").ConnectedComponent<import("react").FC<import("./types").BillingProps>, import("react-redux").Omit<import("./types").BillingProps, never>>;
export default _default;
