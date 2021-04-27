export type TransactionsTableProps = {
  arrayOfTransactions: TransactionDetails[]
}

export type TransactionDetails = {
  transactionAmount: string
  transactionCompleted: boolean
  transactionCredits: string
  transactionDate: string
  transactionName: string
}
