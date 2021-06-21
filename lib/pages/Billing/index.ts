import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  getAllCreditPacksAction,
  getAllSubscriptionPlansAction,
  getAllUserDetailsAction,
  getAllUserTransactionsAction,
  purchaseCreditsAction,
  startSubscriptionAction,
  cancelSubscriptionAction,
  clearSubscriptionInfoAction,
} from './ducks'
import Billing from './Billing'
import { BillingStore } from './types'

export const mapStateToProps = ({ auth, billing }) => ({
  allCreditPacks: billing.allCreditPacks,
  allSubscriptionPlans: billing.allSubscriptionPlans,
  allUserDetails: billing.allUserDetails,
  allUserTransactions: billing.allUserTransactions as BillingStore['transactionDetails'],
  dialogInfo: billing.subscriptionsDialogInfo,
  hasRetrievedAllCreditPacks: billing.hasRetrievedAllCreditPacks,
  hasRetrievedAllSubscriptionPlans: billing.hasRetrievedAllSubscriptionPlans,
  successfullySubscribedToPlan: billing.successfullySubscribedToPlan,
  user: auth.user,
})

export const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getAllCreditPacksAction: getAllCreditPacksAction,
      getAllSubscriptionPlansAction: getAllSubscriptionPlansAction,
      getAllUserDetailsAction: getAllUserDetailsAction,
      getAllUserTransactionsAction: getAllUserTransactionsAction,
      purchaseCreditsAction: purchaseCreditsAction,
      startSubscriptionAction: startSubscriptionAction,
      cancelSubscriptionAction,
      clearSubscriptionInfoAction,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Billing)
