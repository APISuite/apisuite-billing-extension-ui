import React from 'react';
import useStyles from './styles';
import { Box, Button, Divider, Icon, Typography, useTheme, useTranslation, } from '@apisuite/fe-base';
import { Notice } from '../Notice';
import { Select } from '../Select';
export const BillingOrganizationSelector = ({ billingOrganizationId, getUserDetailsAction, orgs, setUserBillingOrgAction, user, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const { palette } = useTheme();
    const t = (str, ...args) => {
        return trans.t(`extensions.billing.${str}`, ...args);
    };
    const [selectedOrg, setSelectedOrg] = React.useState({
        group: '',
        label: '',
        value: '',
    });
    React.useEffect(() => {
        getUserDetailsAction(user.id);
    }, []);
    React.useEffect(() => {
        if (billingOrganizationId) {
            const org = orgs.find((o) => {
                return o.id === billingOrganizationId;
            });
            if (org) {
                setSelectedOrg({
                    group: '',
                    label: org.name,
                    value: org.id,
                });
            }
        }
        else if (orgs && orgs.length === 1) {
            setSelectedOrg({
                group: '',
                label: orgs[0].name,
                value: orgs[0].id,
            });
        }
    }, [billingOrganizationId]);
    const organisationMapper = (organisations) => {
        return organisations.map((organisation) => ({
            group: '',
            label: organisation.name,
            value: organisation.id,
        }));
    };
    const handleChange = (event, selectedOrganisation) => {
        event.preventDefault();
        const org = {
            group: '',
            label: selectedOrganisation.label,
            value: selectedOrganisation.value,
        };
        setSelectedOrg(org);
    };
    const saveBillingOrg = () => {
        setUserBillingOrgAction(user.id, Number(selectedOrg.value));
    };
    return (React.createElement(Box, { className: classes.container },
        React.createElement(Box, { my: 4 },
            React.createElement(Divider, null)),
        React.createElement(Box, { mb: 2 },
            React.createElement(Typography, { variant: "h3" }, t('billingOrg.title'))),
        React.createElement(Box, { mb: 1 },
            React.createElement(Select, { customCloseIcon: React.createElement(Icon, null, "expand_less"), customOpenIcon: React.createElement(Icon, null, "expand_more"), disabled: orgs.length <= 1, fieldLabel: t('billingOrg.selectText'), onChange: handleChange, options: organisationMapper(orgs), selected: selectedOrg })),
        React.createElement(Box, { clone: true, my: 2, maxWidth: "250px" },
            React.createElement(Button, { disabled: selectedOrg.value === billingOrganizationId ||
                    selectedOrg.value === '', size: "large", color: "primary", variant: "contained", disableElevation: true, onClick: saveBillingOrg }, t('billingOrg.saveButton'))),
        React.createElement(Box, { my: 1 },
            React.createElement(Notice, { noticeIcon: React.createElement(Icon, null, "announcement"), noticeText: React.createElement(Typography, { variant: "body2", display: "block", style: { color: palette.info.dark } }, t('billingOrg.info')), type: "info" }))));
};
