import React from 'react';
import { useTranslation } from '@apisuite/fe-base';
import useStyles from './styles';
const SubscriptionsTable = ({ arrayOfSubs, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    function t(str) {
        return trans.t(`extensions.${str}`);
    }
    const generateSubscriptionsTableEntries = () => {
        const arrayOfTableEntries = arrayOfSubs.map((sub, index) => {
            return (React.createElement("div", { className: index % 2 === 0
                    ? classes.regularSubscriptionsTableEntry
                    : classes.alternativeSubscriptionsTableEntry, key: `subscriptionsTableEntry${index}` },
                React.createElement("p", null, sub.subName),
                React.createElement("p", null, sub.subNextBillingDate)));
        });
        return arrayOfTableEntries;
    };
    return (React.createElement("div", { className: classes.subscriptionsTable },
        React.createElement("div", { className: classes.subscriptionsTableHeader },
            React.createElement("p", null, t('billing.subscriptionsTable.title')),
            React.createElement("p", null, t('billing.subscriptionsTable.subtitle'))),
        generateSubscriptionsTableEntries()));
};
export default SubscriptionsTable;
