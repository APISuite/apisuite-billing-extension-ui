import { makeStyles } from '@apisuite/fe-base';
export default makeStyles((theme) => ({
    noticeBackgoundInfo: {
        backgroundColor: theme.palette.info.light,
    },
    noticeBackgoundError: {
        backgroundColor: theme.palette.error.light,
    },
    noticeBackgoundWarning: {
        backgroundColor: theme.palette.warning.light,
    },
    noticeContentsContainer: {
        borderRadius: theme.shape.borderRadius,
        display: 'flex',
        padding: theme.spacing(1),
        width: '100%',
        alignItems: 'center',
        '& p': {
            letterSpacing: '0.1px',
        },
    },
    noticeIcon: {
        display: 'flex',
        marginRight: theme.spacing(1),
        alignSelf: 'flex-start',
    },
    noticeIconInfo: {
        color: theme.palette.info.main,
    },
    noticeIconError: {
        color: theme.palette.error.main,
    },
    noticeIconWarning: {
        color: theme.palette.warning.main,
    },
}));
