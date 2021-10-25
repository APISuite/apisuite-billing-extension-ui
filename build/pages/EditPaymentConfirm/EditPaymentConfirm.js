import React, { useEffect } from 'react';
import { Box, Button, Typography, useTranslation } from '@apisuite/fe-base';
import { BASE_URI } from '../../helpers/constants';
import useStyles from './styles';
import { TransactionCard } from '../../components/TransactionCard';
const EditPaymentConfirm = ({ getTransactionDetailsAction, transactionDetails, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const t = (str) => {
        return trans.t(`extensions.billing.${str}`);
    };
    useEffect(() => {
        const urlParameters = new URLSearchParams(window.location.search);
        const transactionID = urlParameters.get('id');
        getTransactionDetailsAction(transactionID);
    }, []);
    // const handlePrint = () => {
    //   window.print()
    // }
    return (React.createElement("main", { className: `page-container ${classes.pageContentContainer}` },
        React.createElement(Box, { mb: 3 },
            React.createElement(Typography, { variant: "h2" }, t('editPaymentConfirm.title'))),
        React.createElement(Box, { mb: 5 },
            React.createElement(Typography, { variant: "body1", style: { whiteSpace: 'pre-line' } }, t('editPaymentConfirm.message'))),
        React.createElement(Box, { mb: 3 },
            React.createElement(Typography, { variant: "h4" }, t('editPaymentConfirm.subtitle'))),
        React.createElement(Box, { mb: 5 },
            React.createElement(TransactionCard, { transaction: transactionDetails })),
        React.createElement(Box, { display: "flex", justifyContent: "flex-end", mb: 3 },
            React.createElement(Box, { alignSelf: "flex-end" },
                React.createElement(Button, { variant: "outlined", color: "secondary", size: "large", href: BASE_URI }, t('editPaymentConfirm.buttons.billingLabel'))))));
};
export default EditPaymentConfirm;
