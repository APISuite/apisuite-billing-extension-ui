import { SubscriptionPlanDetails } from '../../pages/Billing/types'

export type SubscriptionPlansCatalogProps = {
  activeSubscriptionPlanID?: SubscriptionPlanDetails['idOfSubscriptionPlan']
  arrayOfSubscriptionPlans: SubscriptionPlanDetails[]
  currentlySelectedSubscriptionPlan: SubscriptionPlanDetails
  handleSubscriptionPlanSelection: (
    idOfSelectedSubscriptionPlan: number
  ) => void
}
