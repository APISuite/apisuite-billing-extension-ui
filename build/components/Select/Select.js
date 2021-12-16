import React from 'react';
import { Paper, TextField } from '@apisuite/fe-base';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';
export const Select = ({ customCloseIcon, customOpenIcon, fieldLabel, options, selected, ...rest }) => {
    const classes = useStyles();
    return (React.createElement(Autocomplete, Object.assign({}, rest, { closeIcon: customCloseIcon, defaultValue: selected
            ? options.find((option) => option.value === selected.value)
            : undefined, disableClearable: true, getOptionLabel: (option) => option.label, groupBy: (option) => option.group, options: options.sort((optionA, optionB) => -optionB.group.localeCompare(optionA.group)), popupIcon: customOpenIcon, PaperComponent: (props) => React.createElement(Paper, Object.assign({}, props, { elevation: 3 })), renderInput: (params) => (React.createElement(TextField, Object.assign({}, params, { className: classes.textField, fullWidth: true, label: fieldLabel, placeholder: "Make your selection", variant: "outlined" }))), value: selected })));
};
