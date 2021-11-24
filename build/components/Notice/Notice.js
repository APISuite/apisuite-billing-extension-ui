import React from 'react';
import clsx from 'clsx';
import { Icon } from '@apisuite/fe-base';
import useStyles from './styles';
export const Notice = ({ type = 'info', noticeIcon, noticeIconStyle, noticeText, }) => {
    const classes = useStyles();
    return (React.createElement("div", { className: clsx(classes.noticeContentsContainer, type === 'info' && classes.noticeBackgoundInfo, type === 'error' && classes.noticeBackgoundError, type === 'warning' && classes.noticeBackgoundWarning) },
        React.createElement("div", { className: clsx(classes.noticeIcon, type === 'info' && classes.noticeIconInfo, type === 'error' && classes.noticeIconError, type === 'warning' && classes.noticeIconWarning, noticeIconStyle) }, noticeIcon || React.createElement(Icon, null, "info")),
        React.createElement("span", null, noticeText)));
};
