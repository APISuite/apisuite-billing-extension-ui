import { User, UserDetails } from '../../pages/Billing/types'

export type Organization = {
  id: string
  name: string
}

export type BillingOrganizationSelectorProps = {
  billingOrganizationId: UserDetails['billingOrganizationId']
  getUserDetailsAction: (userID: number) => void
  orgs: Organization[]
  setUserBillingOrgAction: (userID: number, orgID: number) => void
  user: User
}
