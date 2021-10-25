export const convertDateAndTime = (
  languageString: string,
  dateAndTimeString: string,
  pm = true
) => {
  const dateAndTimeFormat = new Intl.DateTimeFormat(languageString, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: pm,
  })

  try {
    return dateAndTimeFormat.format(new Date(dateAndTimeString))
  } catch (error) {
    return null
  }
}
