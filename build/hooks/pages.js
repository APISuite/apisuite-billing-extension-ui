import { BASE_URI } from '../helpers/constants';
import Billing from '../pages/Billing';
import EditPaymentConfirm from '../pages/EditPaymentConfirm';
import TransactionComplete from '../pages/TransactionComplete';
const pagesConfig = [
    {
        auth: true,
        component: Billing,
        exact: true,
        path: BASE_URI,
    },
    {
        auth: true,
        component: TransactionComplete,
        exact: true,
        path: `${BASE_URI}/payments`,
    },
    {
        auth: true,
        component: EditPaymentConfirm,
        exact: true,
        path: `${BASE_URI}/edit/confirm`,
    },
];
const hookPages = () => {
    return pagesConfig;
};
export default hookPages;
