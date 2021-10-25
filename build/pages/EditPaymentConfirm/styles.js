import { makeStyles } from '@apisuite/fe-base';
export default makeStyles((theme) => ({
    pageContentContainer: {
        margin: '0 auto',
        width: 'calc(100% - 24px)',
        [theme.breakpoints.up('md')]: {
            maxWidth: theme.breakpoints.values.md - 24,
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: theme.breakpoints.values.md - 24,
        },
        [theme.breakpoints.up('xl')]: {
            maxWidth: theme.breakpoints.values.md - 24,
        },
    },
}));
