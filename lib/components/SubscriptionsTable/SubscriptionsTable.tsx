import React, { useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTranslation,
} from '@apisuite/fe-base'
import { convertDate } from '../../util/convertDate'
import { CustomizableDialog } from '../CustomizableDialog/CustomizableDialog'
import { SubscriptionsTableProps } from './types'
import useStyles from './styles'

const SubscriptionsTable: React.FC<SubscriptionsTableProps> = ({
  subscriptions,
  onCancelSubscription,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  const [cancelSubDialogOpen, setCancelSubDialogOpen] = useState(false)

  const t = (str: string) => {
    return trans.t(`extensions.billing.${str}`)
  }

  const [anchorElement, setAnchorElement] = React.useState(null)
  const open = Boolean(anchorElement)

  const handleMenuClick = (event) => {
    setAnchorElement(event.currentTarget)
  }

  const handleMenuClose = (idx: number) => () => {
    setAnchorElement(null)

    if (idx === 1) {
      setCancelSubDialogOpen(true)
    }
  }

  const menuOptions = ['Edit payment information', 'Cancel subscription plan']

  const handleConfirmCancelSubscription = () => {
    setCancelSubDialogOpen(false)
    onCancelSubscription()
  }

  return (
    <>
      <div className={classes.subsTableWrapper}>
        <table className={classes.subsTable}>
          <tr className={classes.subsTableHeader}>
            <Typography component="th" variant="body1">
              <b>{t('subscriptionsTable.title')}</b>
            </Typography>

            <Typography component="th" variant="body1">
              <b>{t('subscriptionsTable.subtitle')}</b>
            </Typography>
            <th />
          </tr>

          {subscriptions.map((sub, index) => {
            return (
              <tr
                className={classes.subsTableEntry}
                key={`subTableEntry${index}`}
              >
                <Typography component="td" variant="body2">
                  {sub.name}
                </Typography>

                <Typography component="td" variant="body2">
                  {sub.nextBillingDate
                    ? convertDate(trans.i18n.language, sub.nextBillingDate)
                    : t('subscriptionsTable.awaitingConfirmation')}
                </Typography>

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
                    {menuOptions.map((menuOption, ix) => (
                      <MenuItem
                        // We want to disable the first option as well (because we have yet to implement it).
                        disabled={!ix}
                        key={menuOption}
                        onClick={handleMenuClose(ix)}
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
        title={t('subscriptionsTable.cancel.title')}
        text={t('subscriptionsTable.cancel.text')}
        subText={t('subscriptionsTable.cancel.subText')}
        actions={[
          <Button
            variant="outlined"
            key="cancel-sub-cancel"
            onClick={() => setCancelSubDialogOpen(false)}
          >
            {t('subscriptionsTable.cancel.cta')}
          </Button>,
          <Button
            className={classes.confirmCancelCTA}
            key="cancel-sub-confirm"
            onClick={handleConfirmCancelSubscription}
          >
            {t('subscriptionsTable.cancel.confirmCTA')}
          </Button>,
        ]}
      />
    </>
  )
}

export default SubscriptionsTable
