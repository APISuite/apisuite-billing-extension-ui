import { HookMenu, MenuEntry, Menus } from '@apisuite/extension-ui-types'

import { BILLING_API_URL } from 'helpers/constants'

type MenuConfig = {
  [menu: string]: MenuEntry[]
}

const menuConfig: MenuConfig = {
  [Menus.HeaderAuthenticatedDashboard]: [
    {
      label: 'Billing',
      route: BILLING_API_URL,
      title: 'Billing',
    },
  ],
}

const hookMenu: HookMenu = (menu) => {
  return menuConfig[menu] || null
}

export default hookMenu
