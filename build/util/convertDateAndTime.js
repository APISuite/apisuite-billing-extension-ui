export const convertDateAndTime = (languageString, dateAndTimeString) => {
    const dateAndTimeFormat = new Intl.DateTimeFormat(languageString, {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    });
    return dateAndTimeFormat.format(new Date(dateAndTimeString));
};
