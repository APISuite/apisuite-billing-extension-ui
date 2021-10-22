export const currencyConverter = (
  languageString: string,
  valueString: string,
  currencyString: string
) => {
  try {
    return parseInt(valueString).toLocaleString(languageString, {
      style: 'currency',
      currency: currencyString,
    })
  } catch (error) {
    return null
  }
}
