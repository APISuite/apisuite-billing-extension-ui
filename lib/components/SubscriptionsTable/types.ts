export type SubscriptionsTableProps = {
  subscriptions: SubscriptionDetails[]
  onCancelSubscription: () => void
}

export type SubscriptionDetails = {
  name: string
  nextBillingDate: string
}
