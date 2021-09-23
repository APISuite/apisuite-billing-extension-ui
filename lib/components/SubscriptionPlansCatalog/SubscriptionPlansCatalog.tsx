import React from 'react'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'

import { SubscriptionPlansCatalogProps } from './types'
import clsx from 'clsx'
import useStyles from './styles'
import { Typography } from '@material-ui/core'

const SubscriptionPlansCatalog: React.FC<SubscriptionPlansCatalogProps> = ({
  activeSubscriptionPlanID,
  arrayOfSubscriptionPlans,
  currentlySelectedSubscriptionPlan,
  handleSubscriptionPlanSelection,
}) => {
  const classes = useStyles()

  const generateCatalogEntries = () => {
    const arrayOfCatalogEntries = arrayOfSubscriptionPlans.map(
      (subscriptionPlan, index) => {
        return (
          <div
            className={clsx({
              [classes.selectedSubscriptionPlanContainer]:
                subscriptionPlan.id === currentlySelectedSubscriptionPlan.id,
              [classes.notSelectedSubscriptionPlanContainer]:
                subscriptionPlan.id !== currentlySelectedSubscriptionPlan.id,
            })}
            key={`subscriptionPlansCatalogEntry${index}`}
            onClick={() => handleSubscriptionPlanSelection(subscriptionPlan.id)}
          >
            {subscriptionPlan.id === currentlySelectedSubscriptionPlan.id ||
            subscriptionPlan.id === activeSubscriptionPlanID ? (
              <RadioButtonCheckedRoundedIcon
                className={clsx(classes.selectedSubscriptionPlanIcon, {
                  [classes.disabledSubscriptionPlanIcon]:
                    subscriptionPlan.id === activeSubscriptionPlanID,
                })}
              />
            ) : (
              <RadioButtonUncheckedRoundedIcon
                className={classes.notSelectedSubscriptionPlanIcon}
              />
            )}

            <div className={classes.subscriptionPlanDetailsContainer}>
              <div>
                <Typography variant="body2">{subscriptionPlan.name}</Typography>

                <Typography variant="body1">
                  <b>{subscriptionPlan.credits} credits</b>
                </Typography>
              </div>

              <div>
                <Typography variant="body1">
                  <b>€ {subscriptionPlan.price}</b>
                </Typography>

                <Typography variant="body2">
                  {subscriptionPlan.periodicity}
                </Typography>
              </div>
            </div>

            {subscriptionPlan.id === activeSubscriptionPlanID && (
              <div
                className={classes.disabledSubscriptionPlanContainer}
                onClick={(event) => {
                  event.stopPropagation()
                }}
              />
            )}
          </div>
        )
      }
    )

    return arrayOfCatalogEntries
  }

  return (
    <div className={classes.subscriptionPlansCatalogEntriesContainer}>
      {generateCatalogEntries()}
    </div>
  )
}

export default SubscriptionPlansCatalog
