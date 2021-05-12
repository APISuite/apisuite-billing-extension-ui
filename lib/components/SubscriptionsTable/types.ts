export type SubscriptionsTableProps = {
  arrayOfSubs: SubDetails[]
  onCancelSubscription: () => void
}

export type SubDetails = {
  subName: string
  subNextBillingDate: string
}
