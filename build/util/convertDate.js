export const convertDate = (languageString, dateString) => {
    const dateFormat = new Intl.DateTimeFormat(languageString, {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    });
    return dateFormat.format(new Date(dateString));
};
