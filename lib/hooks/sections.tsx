import React from 'react'

import { HookSections } from '@apisuite/extension-ui-types/v1'

import BillingOrganizationSelector from '../components/BillingOrganizationSelector'

type SectionsConfig = {
  [section: string]: React.FC
}

const sections: SectionsConfig = {
  ['PROFILE_BOTTOM_SECTION']: BillingOrganizationSelector,
}

const hookSections: HookSections = (section, props) => {
  const Component = sections[section]

  if (Component) {
    return <Component {...props} />
  }

  return null
}

export default hookSections
