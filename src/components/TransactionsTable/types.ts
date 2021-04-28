export type TransactionsTableProps = {
  arrayOfTransactions: TransactionDetails[]
}

export type TransactionDetails = {
  transactionAmount: string
  transactionCompleted: boolean
  transactionReference: string
  transactionDate: string
  transactionName: string
}
