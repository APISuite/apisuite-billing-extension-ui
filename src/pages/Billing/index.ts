import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  getAllCreditPacksAction,
  getAllSubscriptionPlansAction,
  getAllUserTransactionsAction,
} from './ducks'
import Billing from './Billing'

export const mapStateToProps = ({ billing }: any) => ({
  allCreditPacks: billing.allCreditPacks,
  allSubscriptionPlans: billing.allSubscriptionPlans,
  allUserTransactions: billing.allUserTransactions,
})

export const mapDispatchToProps = (dispatch: Dispatch): any =>
  bindActionCreators(
    {
      getAllCreditPacksAction: getAllCreditPacksAction,
      getAllSubscriptionPlansAction: getAllSubscriptionPlansAction,
      getAllUserTransactionsAction: getAllUserTransactionsAction,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Billing)
