import { makeStyles } from '@apisuite/fe-base';
export default makeStyles((theme) => ({
    leftDetailsContainer: {
        '& > :first-child': {
            color: theme.palette.text.hint,
            fontSize: '14px',
            fontWeight: 400,
            marginBottom: '-6px',
        },
        '& > :last-child': {
            color: theme.palette.text.primary,
            fontSize: '16px',
            fontWeight: 500,
        },
    },
    noActiveSubscriptionText: {
        color: theme.palette.text.hint,
        fontSize: '16px',
        fontWeight: 400,
        marginBottom: '40px',
    },
    notSelectedSubscriptionPlanContainer: {
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: theme.palette.dimensions.borderRadius,
        cursor: 'pointer',
        display: 'flex',
        height: '70px',
        margin: '0px 12px 12px 0px',
        maxWidth: '280px',
        padding: '15px',
        width: '100%',
    },
    notSelectedSubscriptionPlanIcon: {
        color: theme.palette.text.primary,
        fontSize: '24px',
        marginRight: '12px',
    },
    rightDetailsContainer: {
        '& > :first-child': {
            color: theme.palette.text.primary,
            fontSize: '16px',
            fontWeight: 500,
            marginBottom: '-6px',
        },
        '& > :last-child': {
            color: theme.palette.text.hint,
            fontSize: '14px',
            fontWeight: 400,
        },
    },
    selectedSubscriptionPlanContainer: {
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.action.focus}`,
        borderRadius: theme.palette.dimensions.borderRadius,
        cursor: 'pointer',
        display: 'flex',
        height: '70px',
        margin: '0px 12px 12px 0px',
        maxWidth: '280px',
        padding: '15px',
        width: '100%',
    },
    selectedSubscriptionPlanIcon: {
        color: theme.palette.action.focus,
        fontSize: '24px',
        marginRight: '12px',
    },
    subscriptionPlanDetailsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '220px',
        width: '100%',
    },
    subscriptionPlansCatalogEntriesContainer: {
        display: 'flex',
        marginBottom: '40px',
    },
    subscriptionSelectionTitle: {
        color: theme.palette.text.primary,
        fontSize: '18px',
        fontWeight: 500,
        marginBottom: '24px',
    },
}));
