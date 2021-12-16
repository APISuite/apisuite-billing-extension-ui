import React from 'react';
import BillingOrganizationSelector from '../components/BillingOrganizationSelector';
const sections = {
    ['PROFILE_BOTTOM_SECTION']: BillingOrganizationSelector,
};
const hookSections = (section, props) => {
    const Component = sections[section];
    if (Component) {
        return React.createElement(Component, Object.assign({}, props));
    }
    return null;
};
export default hookSections;
