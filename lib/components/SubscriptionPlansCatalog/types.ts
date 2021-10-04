import { SubscriptionPlanDetails } from '../../pages/Billing/types'

export type SubscriptionPlansCatalogProps = {
  activeSubscriptionID?: SubscriptionPlanDetails['id']
  subscriptions: SubscriptionPlanDetails[]
  selectedSubscription: SubscriptionPlanDetails
  handleSubscriptionSelection: (idOfSelectedSubscriptionPlan: number) => void
}
