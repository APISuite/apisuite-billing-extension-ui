export const currencyConverter = (
  languageString: string,
  valueString: string,
  currencyString: string
) => {
  try {
    return parseFloat(valueString).toLocaleString(languageString, {
      style: 'currency',
      currency: currencyString,
    })
  } catch (error) {
    return null
  }
}
