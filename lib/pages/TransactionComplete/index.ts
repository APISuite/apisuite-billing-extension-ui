import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import TransactionComplete from './TransactionComplete'

// export const mapDispatchToProps = (dispatch: Dispatch): any =>
//   bindActionCreators(
//     {
//       someAction: someAction,
//     },
//     dispatch
//   )

export default connect(null, null)(TransactionComplete)
