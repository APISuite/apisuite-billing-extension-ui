import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { hasPurchasedCreditsAction } from 'pages/Billing/ducks'
import TransactionComplete from './TransactionComplete'

export const mapDispatchToProps = (dispatch: Dispatch): any =>
  bindActionCreators(
    {
      hasPurchasedCreditsAction: hasPurchasedCreditsAction,
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(TransactionComplete)
