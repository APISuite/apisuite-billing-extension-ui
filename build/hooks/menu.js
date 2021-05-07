import { Menus } from '@apisuite/extension-ui-types';
import { BASE_URI } from '../helpers/constants';
const menuConfig = {
    [Menus.HeaderAuthenticatedDashboard]: [
        {
            label: 'Billing',
            route: BASE_URI,
            title: 'Billing',
        },
    ],
};
const hookMenu = (menu) => {
    return menuConfig[menu] || null;
};
export default hookMenu;
