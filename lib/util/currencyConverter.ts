export const currencyConverter = (
  languageString: string,
  valueString: string,
  currencyString: string
) => {
  return parseInt(valueString).toLocaleString(languageString, {
    style: 'currency',
    currency: currencyString,
  })
}
