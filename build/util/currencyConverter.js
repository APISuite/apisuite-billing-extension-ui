export const currencyConverter = (languageString, valueString, currencyString) => {
    try {
        return parseFloat(valueString).toLocaleString(languageString, {
            style: 'currency',
            currency: currencyString,
        });
    }
    catch (error) {
        return null;
    }
};
