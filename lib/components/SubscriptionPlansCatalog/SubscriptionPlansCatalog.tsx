import React from 'react'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'

import { SubscriptionPlansCatalogProps } from './types'
import clsx from 'clsx'
import useStyles from './styles'
import { Typography } from '@material-ui/core'

const SubscriptionPlansCatalog: React.FC<SubscriptionPlansCatalogProps> = ({
  activeSubscriptionID,
  subscriptions,
  selectedSubscription,
  handleSubscriptionSelection,
}) => {
  const classes = useStyles()

  const generateCatalogEntries = () => {
    return subscriptions.map((sub, index) => {
      return (
        <div
          className={clsx({
            [classes.selectedSubscriptionContainer]:
              sub.id === selectedSubscription.id,
            [classes.notSelectedSubscriptionContainer]:
              sub.id !== selectedSubscription.id,
          })}
          key={`subscriptionPlansCatalogEntry${index}`}
          onClick={() => handleSubscriptionSelection(sub.id)}
        >
          {sub.id === selectedSubscription.id ||
          sub.id === activeSubscriptionID ? (
            <RadioButtonCheckedRoundedIcon
              className={clsx(classes.selectedSubscriptionPlanIcon, {
                [classes.disabledSubscriptionPlanIcon]:
                  sub.id === activeSubscriptionID,
              })}
            />
          ) : (
            <RadioButtonUncheckedRoundedIcon
              className={classes.notSelectedSubscriptionPlanIcon}
            />
          )}

          <div className={classes.subscriptionPlanDetailsContainer}>
            <div>
              <Typography variant="body2">{sub.name}</Typography>

              <Typography variant="body1">
                <b>{sub.credits} credits</b>
              </Typography>
            </div>

            <div>
              <Typography variant="body1">
                <b>€ {sub.price}</b>
              </Typography>

              <Typography variant="body2">{sub.periodicity}</Typography>
            </div>
          </div>

          {sub.id === activeSubscriptionID && (
            <div
              className={classes.disabledSubscriptionPlanContainer}
              onClick={(event) => {
                event.stopPropagation()
              }}
            />
          )}
        </div>
      )
    })
  }

  return (
    <div className={classes.subscriptionPlansCatalogEntriesContainer}>
      {generateCatalogEntries()}
    </div>
  )
}

export default SubscriptionPlansCatalog
