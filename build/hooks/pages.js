import { BASE_URI } from '../helpers/constants';
import Billing from '../pages/Billing';
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
        // TODO: Once we get around to payment processing, decide upon this
        path: `${BASE_URI}/creditpayment` || `${BASE_URI}/subscriptionpayment`,
    },
];
const hookPages = () => {
    return pagesConfig;
};
export default hookPages;