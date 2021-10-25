import { makeStyles } from '@apisuite/fe-base';
export default makeStyles((theme) => ({
    container: {
        borderRadius: theme.shape.borderRadius,
        maxWidth: 470,
    },
    leftTxt: {
        color: theme.palette.grey[400],
        textAlign: 'left',
    },
    rightTxt: {
        color: '#51606E',
        textAlign: 'right',
    },
}));
