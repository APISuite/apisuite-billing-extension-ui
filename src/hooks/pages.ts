import { HookPages, PageEntry } from '@apisuite/extension-ui-types'

import Billing from 'pages/Billing'
import TransactionComplete from 'pages/TransactionComplete'

const pagesConfig: PageEntry[] = [
  {
    auth: true,
    component: Billing,
    exact: true,
    path: '/billing',
  },
  {
    auth: true,
    component: TransactionComplete,
    exact: true,
    path: '/billing/creditpayment' || '/billing/subscriptionpayment',
  },
]

const hookPages: HookPages = () => {
  return pagesConfig
}

export default hookPages
