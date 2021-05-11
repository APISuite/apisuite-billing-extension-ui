import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import { IconButton, Menu, MenuItem, useTranslation } from '@apisuite/fe-base'
import { SubscriptionsTableProps } from './types'
import useStyles from './styles'

const SubscriptionsTable: React.FC<SubscriptionsTableProps> = ({
  arrayOfSubs,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  function t(str: string) {
    return trans.t(`extensions.${str}`)
  }

  const [anchorElement, setAnchorElement] = React.useState(null)
  const open = Boolean(anchorElement)

  const handleMenuClick = (event) => {
    setAnchorElement(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorElement(null)
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

  return (
    <div className={classes.subsTableWrapper}>
      <table className={classes.subsTable}>
        <tr className={classes.subsTableHeader}>
          <th>{t('billing.subscriptionsTable.title')}</th>
          <th>{t('billing.subscriptionsTable.subtitle')}</th>
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
                  onClose={handleMenuClose}
                >
                  {menuOptions.map((menuOption, index) => (
                    <MenuItem
                      disabled={!index}
                      key={menuOption}
                      onClick={handleMenuClose}
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
  )
}

export default SubscriptionsTable
