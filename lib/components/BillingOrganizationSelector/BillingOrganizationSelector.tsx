import React from 'react'

import { BillingOrganizationSelectorProps, Organization } from './types'
import useStyles from './styles'
import {
  Box,
  Button,
  Divider,
  Icon,
  Typography,
  useTheme,
  useTranslation,
} from '@apisuite/fe-base'
import { Notice } from '../Notice'
import { Select } from '../Select'
import { SelectOption } from '../Select/types'

export const BillingOrganizationSelector: React.FC<BillingOrganizationSelectorProps> = ({
  billingOrganizationId,
  getUserDetailsAction,
  orgs,
  setUserBillingOrgAction,
  user,
}) => {
  const classes = useStyles()
  const trans = useTranslation()
  const { palette } = useTheme()
  const t = (str: string, ...args) => {
    return trans.t(`extensions.billing.${str}`, ...args)
  }
  const [selectedOrg, setSelectedOrg] = React.useState({
    group: '',
    label: '',
    value: '',
  })

  React.useEffect(() => {
    getUserDetailsAction(user.id)
  }, [])

  React.useEffect(() => {
    if (billingOrganizationId) {
      const org = orgs.find((o) => {
        return o.id === billingOrganizationId
      })

      if (org) {
        setSelectedOrg({
          group: '',
          label: org.name,
          value: org.id,
        })
      }
    } else if (orgs && orgs.length === 1) {
      setSelectedOrg({
        group: '',
        label: orgs[0].name,
        value: orgs[0].id,
      })
    }
  }, [billingOrganizationId])

  const organisationMapper = (organisations: Organization[]) => {
    return organisations.map((organisation) => ({
      group: '',
      label: organisation.name,
      value: organisation.id,
    }))
  }

  const handleChange = (
    event: React.ChangeEvent<any>,
    selectedOrganisation: SelectOption
  ) => {
    event.preventDefault()

    const org = {
      group: '',
      label: selectedOrganisation.label,
      value: selectedOrganisation.value,
    }

    setSelectedOrg(org)
  }

  const saveBillingOrg = () => {
    setUserBillingOrgAction(user.id, Number(selectedOrg.value))
  }

  return (
    <Box className={classes.container}>
      <Box my={4}>
        <Divider />
      </Box>

      <Box mb={2}>
        <Typography variant="h3">{t('billingOrg.title')}</Typography>
      </Box>

      <Box mb={1}>
        <Select
          customCloseIcon={<Icon>expand_less</Icon>}
          customOpenIcon={<Icon>expand_more</Icon>}
          disabled={orgs.length <= 1}
          fieldLabel={t('billingOrg.selectText')}
          onChange={handleChange}
          options={organisationMapper(orgs)}
          selected={selectedOrg}
        />
      </Box>
      <Box clone my={2} maxWidth="250px">
        <Button
          disabled={
            selectedOrg.value === billingOrganizationId ||
            selectedOrg.value === ''
          }
          size="large"
          color="primary"
          variant="contained"
          disableElevation
          onClick={saveBillingOrg}
        >
          {t('billingOrg.saveButton')}
        </Button>
      </Box>

      <Box my={1}>
        <Notice
          noticeIcon={<Icon>announcement</Icon>}
          noticeText={
            <Typography
              variant="body2"
              display="block"
              style={{ color: palette.info.dark }}
            >
              {t('billingOrg.info')}
            </Typography>
          }
          type="info"
        />
      </Box>
    </Box>
  )
}
