import { HookMenu, MenuEntry, Menus } from '@apisuite/extension-ui-types'

type MenuConfig = {
  [menu: string]: MenuEntry[]
}

const menuConfig: MenuConfig = {
  [Menus.HeaderAuthenticatedDashboard]: [
    {
      label: 'Billing',
      route: '/billing',
      title: 'Billing',
    },
  ],
}

const hookMenu: HookMenu = (menu) => {
  return menuConfig[menu] || null
}

export default hookMenu
