import React from 'react';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import useStyles from './styles';
import { Box, Typography, useTheme } from '@material-ui/core';
const CreditPacksCatalog = ({ creditPacks, selectedCreditPack, handleCreditPackSelection, }) => {
    const classes = useStyles();
    const { palette } = useTheme();
    const generateCatalogEntries = () => {
        return creditPacks.map((creditPack, index) => {
            return (React.createElement("div", { className: creditPack.id === selectedCreditPack.id
                    ? classes.selectedCreditPackContainer
                    : classes.notSelectedCreditPackContainer, key: `creditPacksCatalogEntry${index}`, onClick: () => handleCreditPackSelection(creditPack.id) },
                creditPack.id === selectedCreditPack.id ? (React.createElement(RadioButtonCheckedRoundedIcon, { className: classes.selectedCreditPackIcon })) : (React.createElement(RadioButtonUncheckedRoundedIcon, { className: classes.notSelectedCreditPackIcon })),
                React.createElement(Box, { color: palette.text.primary },
                    React.createElement(Typography, { variant: "body1", color: "inherit" },
                        React.createElement("b", null,
                            "\u20AC ",
                            creditPack.price)),
                    React.createElement(Typography, { variant: "body2", color: "inherit" },
                        creditPack.credits,
                        " Cr"))));
        });
    };
    return (React.createElement("div", { className: classes.creditPacksCatalogEntriesContainer }, generateCatalogEntries()));
};
export default CreditPacksCatalog;
