import React, { useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  useTranslation,
} from '@apisuite/fe-base'
import { SubscriptionsTableProps } from './types'
import useStyles from './styles'
import { CustomizableDialog } from '../CustomizableDialog/CustomizableDialog'

const SubscriptionsTable: React.FC<SubscriptionsTableProps> = ({
  arrayOfSubs,
  onCancelSubscription,
}) => {
  const classes = useStyles()
  const trans = useTranslation()
  const [cancelSubDialogOpen, setCancelSubDialogOpen] = useState(false)

  function t(str: string) {
    return trans.t(`extensions.billing.${str}`)
  }

  const [anchorElement, setAnchorElement] = React.useState(null)
  const open = Boolean(anchorElement)

  const handleMenuClick = (event) => {
    setAnchorElement(event.currentTarget)
  }

  const handleMenuClose = (idx: number) => () => {
    setAnchorElement(null)

    if (idx === 2) {
      setCancelSubDialogOpen(true)
    }
  }

  const menuOptions = [
    'Subscription options',
    'Edit payment information',
    'Cancel subscription plan',
  ]

  const convertDate = (dateString: string) => {
    const dateFormat = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    })

    return dateFormat.format(new Date(dateString))
  }

  const handleConfirmCancelSubscription = () => {
    setCancelSubDialogOpen(false)
    onCancelSubscription()
  }

  return (
    <>
      <div className={classes.subsTableWrapper}>
        <table className={classes.subsTable}>
          <tr className={classes.subsTableHeader}>
            <th>{t('subscriptionsTable.title')}</th>
            <th>{t('subscriptionsTable.subtitle')}</th>
            <th />
          </tr>

          {arrayOfSubs.map((sub, index) => {
            return (
              <tr
                className={classes.subsTableEntry}
                key={`subTableEntry${index}`}
              >
                <td>{sub.subName}</td>
                <td>{convertDate(sub.subNextBillingDate)}</td>
                <td>
                  <IconButton onClick={handleMenuClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorElement}
                    keepMounted
                    open={open}
                    onClose={handleMenuClose(-1)}
                  >
                    {menuOptions.map((menuOption, index) => (
                      <MenuItem
                        disabled={!index}
                        key={menuOption}
                        onClick={handleMenuClose(index)}
                      >
                        {menuOption}
                      </MenuItem>
                    ))}
                  </Menu>
                </td>
              </tr>
            )
          })}
        </table>
      </div>

      <CustomizableDialog
        icon="warning"
        open={cancelSubDialogOpen}
        onClose={() => setCancelSubDialogOpen(false)}
        title="Cancel Subscription"
        text="Are you sure you want to cancel your current subscription plan?"
        subText="You can still use all of your current credits after you cancel your subscription plan."
        actions={[
          <Button
            variant="outlined"
            key="cancel-sub-cancel"
            onClick={() => setCancelSubDialogOpen(false)}
          >
            Cancel
          </Button>,
          <Button
            className={classes.confirmCancelCTA}
            key="cancel-sub-confirm"
            onClick={handleConfirmCancelSubscription}
          >
            Cancel subscription plan
          </Button>,
        ]}
      />
    </>
  )
}

export default SubscriptionsTable
