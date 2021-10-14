import { makeStyles } from '@apisuite/fe-base';
export default makeStyles((theme) => ({
    subsTableEntry: {
        '& > :first-child': {
            textAlign: 'left',
            paddingLeft: 40,
        },
        '& > :nth-child(2)': {
            textAlign: 'right',
        },
        '& > :last-child': {
            width: 50,
        },
    },
    subsTable: {
        borderCollapse: 'collapse',
        width: '100%',
    },
    subsTableHeader: {
        borderBottom: `1px solid ${theme.palette.grey[100]}`,
        '& > :first-child': {
            textAlign: 'left',
            padding: '12px 0px 12px 40px',
        },
        '& > :nth-child(2)': {
            textAlign: 'right',
            padding: '12px 0px 12px 0px',
        },
    },
    subsTableWrapper: {
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: theme.shape.borderRadius,
        maxWidth: 900,
        width: '100%',
        overflow: 'hidden',
        marginBottom: 24,
    },
    confirmCancelCTA: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
        },
    },
}));
