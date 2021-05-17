export const convertDateAndTime = (
  languageString: string,
  dateString: string
) => {
  const dateFormat = new Intl.DateTimeFormat(languageString, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })

  return dateFormat.format(new Date(dateString))
}
