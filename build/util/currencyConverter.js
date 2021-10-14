export const currencyConverter = (languageString, valueString, currencyString) => {
    return parseInt(valueString).toLocaleString(languageString, {
        style: 'currency',
        currency: currencyString,
    });
};
