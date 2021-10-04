import { SubscriptionPlanDetails } from '../../pages/Billing/types'

export type SubscriptionsCatalogProps = {
  activeSubscriptionID?: SubscriptionPlanDetails['id']
  subscriptions: SubscriptionPlanDetails[]
  selectedSubscription: SubscriptionPlanDetails
  handleSubscriptionSelection: (id: number) => void
}
