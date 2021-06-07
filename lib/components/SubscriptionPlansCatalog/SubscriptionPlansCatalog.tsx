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
                subscriptionPlan.idOfSubscriptionPlan ===
                currentlySelectedSubscriptionPlan.idOfSubscriptionPlan,
              [classes.notSelectedSubscriptionPlanContainer]:
                subscriptionPlan.idOfSubscriptionPlan !==
                currentlySelectedSubscriptionPlan.idOfSubscriptionPlan,
            })}
            key={`subscriptionPlansCatalogEntry${index}`}
            onClick={() =>
              handleSubscriptionPlanSelection(
                subscriptionPlan.idOfSubscriptionPlan
              )
            }
          >
            {subscriptionPlan.idOfSubscriptionPlan ===
              currentlySelectedSubscriptionPlan.idOfSubscriptionPlan ||
            subscriptionPlan.idOfSubscriptionPlan ===
              activeSubscriptionPlanID ? (
              <RadioButtonCheckedRoundedIcon
                className={clsx(classes.selectedSubscriptionPlanIcon, {
                  [classes.disabledSubscriptionPlanIcon]:
                    subscriptionPlan.idOfSubscriptionPlan ===
                    activeSubscriptionPlanID,
                })}
              />
            ) : (
              <RadioButtonUncheckedRoundedIcon
                className={classes.notSelectedSubscriptionPlanIcon}
              />
            )}

            <div className={classes.subscriptionPlanDetailsContainer}>
              <div>
                <Typography variant="body2">
                  {subscriptionPlan.nameOfSubscriptionPlan}
                </Typography>

                <Typography variant="body1">
                  <b>{subscriptionPlan.creditsInSubscriptionPlan} credits</b>
                </Typography>
              </div>

              <div>
                <Typography variant="body1">
                  <b>€ {subscriptionPlan.priceOfSubscriptionPlan}</b>
                </Typography>

                <Typography variant="body2">
                  {subscriptionPlan.periodicityOfSubscriptionPlan}
                </Typography>
              </div>
            </div>

            {subscriptionPlan.idOfSubscriptionPlan ===
              activeSubscriptionPlanID && (
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
