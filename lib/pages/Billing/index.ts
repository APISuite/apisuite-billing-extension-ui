import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  getCreditPacksAction,
  getSubscriptionPlansAction,
  getUserDetailsAction,
  getUserInvoiceNotesAction,
  getUserTransactionsAction,
  purchaseCreditsAction,
  setUserInvoiceNotesAction,
  startSubscriptionAction,
  cancelSubscriptionAction,
  clearSubscriptionInfoAction,
} from './ducks'
import Billing from './Billing'
import { BillingStore } from './types'

export const mapStateToProps = ({ auth, billing }) => ({
  creditPacks: billing.creditPacks,
  subscriptions: billing.subscriptions,
  invoiceNotes: billing.invoiceNotes,
  allUserDetails: billing.allUserDetails,
  transactions: billing.transactions as BillingStore['transactionDetails'],
  dialogInfo: billing.subscriptionsDialogInfo,
  hasRetrievedAllCreditPacks: billing.hasRetrievedAllCreditPacks,
  hasRetrievedAllSubscriptions: billing.hasRetrievedAllSubscriptions,
  successfullySubscribedToPlan: billing.successfullySubscribedToPlan,
  user: auth.user,
})

export const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getCreditPacksAction,
      getSubscriptionPlansAction,
      getUserDetailsAction,
      getUserInvoiceNotesAction,
      getUserTransactionsAction,
      purchaseCreditsAction,
      setUserInvoiceNotesAction,
      startSubscriptionAction,
      cancelSubscriptionAction,
      clearSubscriptionInfoAction,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Billing)
