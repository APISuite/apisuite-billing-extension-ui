import React from 'react';
import { Card, CardContent, Grid, Typography, useTheme, useTranslation, } from '@apisuite/fe-base';
import useStyles from './styles';
import { currencyConverter } from '../../util/currencyConverter';
import { convertDateAndTime } from '../../util/convertDateAndTime';
export const TransactionCard = ({ transaction, }) => {
    const classes = useStyles();
    const { spacing } = useTheme();
    const trans = useTranslation();
    const t = (str) => {
        return trans.t(`extensions.billing.${str}`);
    };
    return (React.createElement(Card, { className: classes.container },
        React.createElement(CardContent, { style: { padding: spacing(3) } },
            React.createElement(Grid, { container: true, spacing: 1 },
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Typography, { variant: "body1" }, transaction.description || '-')),
                React.createElement(Grid, { item: true, xs: 6 },
                    React.createElement(Typography, { variant: "body1", className: classes.leftTxt },
                        t('transactioncard.reference') || '-',
                        ":")),
                React.createElement(Grid, { item: true, xs: 6 },
                    React.createElement(Typography, { variant: "body1", className: classes.rightTxt }, transaction.id)),
                React.createElement(Grid, { item: true, xs: 6 },
                    React.createElement(Typography, { variant: "body1", className: classes.leftTxt },
                        t('transactioncard.price'),
                        ":")),
                React.createElement(Grid, { item: true, xs: 6 },
                    React.createElement(Typography, { variant: "body1", className: classes.rightTxt }, currencyConverter(trans.i18n.language, transaction.amount.value, transaction.amount.currency) || '0')),
                React.createElement(Grid, { item: true, xs: 6 },
                    React.createElement(Typography, { variant: "body1", className: classes.leftTxt },
                        t('transactioncard.creditAmount'),
                        ":")),
                React.createElement(Grid, { item: true, xs: 6 },
                    React.createElement(Typography, { variant: "body1", className: classes.rightTxt }, `${transaction.credits} Cr` || '-')),
                React.createElement(Grid, { item: true, xs: 6 },
                    React.createElement(Typography, { variant: "body1", className: classes.leftTxt },
                        t('transactioncard.purchaseDate'),
                        ":")),
                React.createElement(Grid, { item: true, xs: 6 },
                    React.createElement(Typography, { variant: "body1", className: classes.rightTxt }, convertDateAndTime(trans.i18n.language, transaction.date, false) || '-'))))));
};
