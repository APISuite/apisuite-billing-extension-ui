import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  getAllCreditPacksAction,
  getAllSubscriptionPlansAction,
  getAllUserDetailsAction,
  getAllUserTransactionsAction,
} from './ducks'
import Billing from './Billing'

export const mapStateToProps = ({ auth, billing }: any) => ({
  allCreditPacks: billing.allCreditPacks,
  allSubscriptionPlans: billing.allSubscriptionPlans,
  allUserDetails: billing.allUserDetails,
  allUserTransactions: billing.allUserTransactions,
  user: auth.user,
})

export const mapDispatchToProps = (dispatch: Dispatch): any =>
  bindActionCreators(
    {
      getAllCreditPacksAction: getAllCreditPacksAction,
      getAllSubscriptionPlansAction: getAllSubscriptionPlansAction,
      getAllUserDetailsAction: getAllUserDetailsAction,
      getAllUserTransactionsAction: getAllUserTransactionsAction,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Billing)
