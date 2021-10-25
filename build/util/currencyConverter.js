export const currencyConverter = (languageString, valueString, currencyString) => {
    try {
        return parseInt(valueString).toLocaleString(languageString, {
            style: 'currency',
            currency: currencyString,
        });
    }
    catch (error) {
        return null;
    }
};
