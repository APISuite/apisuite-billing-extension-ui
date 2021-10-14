import { makeStyles } from '@apisuite/fe-base';
export default makeStyles((theme) => ({
    creditPacksCatalogEntriesContainer: {
        display: 'flex',
        flexFlow: 'wrap',
        marginBottom: 40,
    },
    notSelectedCreditPackContainer: {
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: theme.shape.borderRadius,
        cursor: 'pointer',
        display: 'flex',
        height: 55,
        margin: '0px 12px 12px 0px',
        maxWidth: 135,
        padding: 8,
        width: '100%',
    },
    notSelectedCreditPackIcon: {
        color: theme.palette.text.secondary,
        fontSize: 24,
        marginRight: 8,
    },
    selectedCreditPackContainer: {
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.action.focus}`,
        borderRadius: theme.shape.borderRadius,
        cursor: 'pointer',
        display: 'flex',
        height: 55,
        margin: '0px 12px 12px 0px',
        maxWidth: 135,
        padding: 8,
        width: '100%',
    },
    selectedCreditPackIcon: {
        color: theme.palette.action.focus,
        fontSize: 24,
        marginRight: 8,
    },
}));
