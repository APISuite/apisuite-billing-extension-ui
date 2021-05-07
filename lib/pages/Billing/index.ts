import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  getAllCreditPacksAction,
  getAllSubscriptionPlansAction,
  getAllUserDetailsAction,
  getAllUserTransactionsAction,
  purchaseCreditsAction,
} from './ducks'
import Billing from './Billing'

export const mapStateToProps = ({ auth, billing }) => ({
  allCreditPacks: billing.allCreditPacks,
  allSubscriptionPlans: billing.allSubscriptionPlans,
  allUserDetails: billing.allUserDetails,
  allUserTransactions: billing.allUserTransactions,
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
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Billing)
