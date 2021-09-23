import { SubscriptionPlanDetails } from '../../pages/Billing/types'

export type SubscriptionPlansCatalogProps = {
  activeSubscriptionPlanID?: SubscriptionPlanDetails['id']
  arrayOfSubscriptionPlans: SubscriptionPlanDetails[]
  currentlySelectedSubscriptionPlan: SubscriptionPlanDetails
  handleSubscriptionPlanSelection: (
    idOfSelectedSubscriptionPlan: number
  ) => void
}
