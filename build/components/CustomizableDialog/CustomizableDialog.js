import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from '@apisuite/fe-base';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import useStyles from './styles';
export const CustomizableDialog = ({ icon, title, text, subText, children, actions, ...rest }) => {
    const classes = useStyles();
    return (React.createElement(Dialog, Object.assign({}, rest),
        React.createElement("div", { className: classes.dialogTitleContainer },
            icon === 'success' && (React.createElement(CheckCircleOutlineIcon, { className: classes.dialogTitleSuccessIcon })),
            icon === 'warning' && (React.createElement(WarningRoundedIcon, { className: classes.dialogTitleWarningIcon })),
            React.createElement(DialogTitle, null, title)),
        React.createElement(DialogContent, { className: classes.dialogContentContainer },
            React.createElement(DialogContentText, { className: classes.dialogText }, text),
            React.createElement(DialogContentText, { className: classes.dialogSubText }, subText),
            children),
        React.createElement(DialogActions, { className: classes.dialogActionsContainer }, actions)));
};
