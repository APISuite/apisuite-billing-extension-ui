import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { getTransactionDetailsAction } from '../Billing/ducks'
import EditPaymentConfirm from './EditPaymentConfirm'

export const mapStateToProps = ({ billing }) => ({
  transactionDetails: billing.transactionDetails,
})

export const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getTransactionDetailsAction,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(EditPaymentConfirm)