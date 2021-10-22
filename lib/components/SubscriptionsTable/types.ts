export type SubscriptionsTableProps = {
  subscriptions: SubscriptionDetails[]
  onCancelSubscription: () => void
  onEditPaymentClick: () => void
}

export type SubscriptionDetails = {
  name: string
  nextBillingDate: string
}
