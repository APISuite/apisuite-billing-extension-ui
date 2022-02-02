import { TransactionDetails } from '../Billing/types'

export interface TransactionCompleteProps {
  getTransactionDetailsAction: (orgId: number, transactionID: string) => void
  orgId: number
  transactionDetails: TransactionDetails
}
