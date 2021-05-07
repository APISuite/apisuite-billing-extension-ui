import React from 'react';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import useStyles from './styles';
const CreditPacksCatalog = ({ arrayOfCreditPacks, currentlySelectedCreditPack, handleCreditPackSelection, }) => {
    const classes = useStyles();
    const generateCatalogEntries = () => {
        const arrayOfCatalogEntries = arrayOfCreditPacks.map((creditPack, index) => {
            return (React.createElement("div", { className: creditPack.idOfCreditPack ===
                    currentlySelectedCreditPack.idOfCreditPack
                    ? classes.selectedCreditPackContainer
                    : classes.notSelectedCreditPackContainer, key: `creditPacksCatalogEntry${index}`, onClick: () => handleCreditPackSelection(creditPack.idOfCreditPack) },
                creditPack.idOfCreditPack ===
                    currentlySelectedCreditPack.idOfCreditPack ? (React.createElement(RadioButtonCheckedRoundedIcon, { className: classes.selectedCreditPackIcon })) : (React.createElement(RadioButtonUncheckedRoundedIcon, { className: classes.notSelectedCreditPackIcon })),
                React.createElement("div", { className: classes.creditPackDetailsContainer },
                    React.createElement("p", null,
                        "\u20AC ",
                        creditPack.priceOfCreditPack),
                    React.createElement("p", null,
                        creditPack.creditsInCreditPack,
                        " Cr"))));
        });
        return arrayOfCatalogEntries;
    };
    return (React.createElement("div", { className: classes.creditPacksCatalogEntriesContainer }, generateCatalogEntries()));
};
export default CreditPacksCatalog;
