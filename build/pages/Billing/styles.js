import { makeStyles } from '@apisuite/fe-base';
export default makeStyles((theme) => ({
    addCreditsButton: {
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: theme.palette.dimensions.borderRadius,
        color: `${theme.palette.primary.contrastText} !important`,
        fontSize: '16px',
        fontWeight: 500,
        height: '40px',
        padding: '12px 20px',
        textDecoration: 'none',
        textTransform: 'none',
        width: '175px',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },
    billingContentContainer: {
        margin: '0px auto',
        maxWidth: '900px',
        width: '100%',
    },
    cancelCreditsPurchaseButton: {
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: theme.palette.dimensions.borderRadius,
        color: `${theme.palette.text.hint} !important`,
        fontSize: '16px',
        fontWeight: 500,
        height: '45px',
        padding: '12px 20px',
        textDecoration: 'none',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.background.paper,
        },
    },
    creditBalanceContainer: {
        '& > :first-child': {
            color: '#E3E3E3',
            fontSize: '16px',
            fontWeight: 400,
            marginBottom: '6px',
        },
        '& > :last-child': {
            color: theme.palette.primary.contrastText,
            fontSize: '40px',
            fontWeight: 500,
        },
    },
    creditPacksTitle: {
        color: theme.palette.primary.contrastText,
        fontSize: '14px',
        fontWeight: 300,
        marginBottom: '12px',
    },
    disabledPurchaseCreditsButton: {
        backgroundColor: theme.palette.grey[300],
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: theme.palette.dimensions.borderRadius,
        color: `${theme.palette.primary.contrastText} !important`,
        fontSize: '16px',
        fontWeight: 500,
        height: '45px',
        marginRight: '12px',
        padding: '12px 20px',
        pointerEvents: 'none',
        textDecoration: 'none',
        textTransform: 'none',
        width: '175px',
        '&:hover': {
            backgroundColor: theme.palette.grey[300],
        },
    },
    disabledStartSubscriptionButton: {
        backgroundColor: theme.palette.grey[300],
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: theme.palette.dimensions.borderRadius,
        color: `${theme.palette.primary.contrastText} !important`,
        fontSize: '16px',
        fontWeight: 500,
        height: '45px',
        padding: '12px 20px',
        pointerEvents: 'none',
        textDecoration: 'none',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.grey[300],
        },
    },
    editPaymentDetailsButton: {
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: theme.palette.dimensions.borderRadius,
        color: `${theme.palette.text.hint} !important`,
        fontSize: '16px',
        fontWeight: 500,
        height: '40px',
        marginBottom: '40px',
        padding: '12px 20px',
        textDecoration: 'none',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.background.paper,
        },
    },
    enabledPurchaseCreditsButton: {
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: theme.palette.dimensions.borderRadius,
        color: `${theme.palette.primary.contrastText} !important`,
        fontSize: '16px',
        fontWeight: 500,
        height: '45px',
        marginRight: '12px',
        padding: '12px 20px',
        textDecoration: 'none',
        textTransform: 'none',
        width: '175px',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },
    enabledStartSubscriptionButton: {
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: theme.palette.dimensions.borderRadius,
        color: `${theme.palette.primary.contrastText} !important`,
        fontSize: '16px',
        fontWeight: 500,
        height: '45px',
        padding: '12px 20px',
        textDecoration: 'none',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },
    noActiveSubscriptionText: {
        color: theme.palette.text.hint,
        fontSize: '16px',
        fontWeight: 400,
        marginBottom: '40px',
    },
    retrievingAllAvailableCreditPacks: {
        color: theme.palette.primary.contrastText,
        fontSize: '16px',
        fontWeight: 300,
    },
    retrievingAllAvailableSubscriptionPlans: {
        color: theme.palette.text.hint,
        fontSize: '16px',
        fontWeight: 300,
        marginBottom: '40px',
    },
    sectionSubtitle: {
        color: '#ACACAC',
        fontSize: '16px',
        fontWeight: 300,
        marginBottom: '40px',
    },
    sectionTitle: {
        color: theme.palette.text.primary,
        fontSize: '22px',
        fontWeight: 500,
        marginBottom: '24px',
        marginTop: '40px',
    },
    separator: {
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: theme.palette.dimensions.borderRadius,
        margin: '25px 0px 15px 0px',
        width: '100%',
    },
    subscriptionSelectionTitle: {
        color: theme.palette.text.primary,
        fontSize: '18px',
        fontWeight: 500,
        marginBottom: '24px',
    },
    subtitle: {
        color: theme.palette.text.secondary,
        fontSize: '16px',
        fontWeight: 300,
        marginBottom: '40px',
    },
    title: {
        color: theme.palette.text.primary,
        fontSize: '32px',
        fontWeight: 300,
        marginBottom: '12px',
    },
    yourCreditBalanceContainerWithCreditPacks: {
        alignItems: 'center',
        backgroundColor: theme.palette.text.primary,
        borderRadius: theme.palette.dimensions.borderRadius,
        display: 'block',
        justifyContent: 'space-between',
        marginBottom: '40px',
        maxWidth: '500px',
        padding: '24px',
        width: '100%',
    },
    yourCreditBalanceContainerWithoutCreditPacks: {
        alignItems: 'center',
        backgroundColor: theme.palette.text.primary,
        borderRadius: theme.palette.dimensions.borderRadius,
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '40px',
        maxWidth: '500px',
        padding: '24px',
        width: '100%',
    },
}));