import { SubscriptionPlanDetails } from 'pages/Billing/types'

export type SubscriptionPlansCatalogProps = {
  arrayOfSubscriptionPlans: SubscriptionPlanDetails[]
  currentlySelectedSubscriptionPlan: SubscriptionPlanDetails
  handleSubscriptionPlanSelection: (
    idOfSelectedSubscriptionPlan: number
  ) => void
}
