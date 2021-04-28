import React from 'react'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'

import { SubscriptionPlansCatalogProps } from './types'
import useStyles from './styles'

const SubscriptionPlansCatalog: React.FC<SubscriptionPlansCatalogProps> = ({
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
            className={
              subscriptionPlan.idOfSubscriptionPlan ===
              currentlySelectedSubscriptionPlan.idOfSubscriptionPlan
                ? classes.selectedSubscriptionPlanContainer
                : classes.notSelectedSubscriptionPlanContainer
            }
            key={`subscriptionPlansCatalogEntry${index}`}
            onClick={() =>
              handleSubscriptionPlanSelection(
                subscriptionPlan.idOfSubscriptionPlan
              )
            }
          >
            {subscriptionPlan.idOfSubscriptionPlan ===
            currentlySelectedSubscriptionPlan.idOfSubscriptionPlan ? (
              <RadioButtonCheckedRoundedIcon
                className={classes.selectedSubscriptionPlanIcon}
              />
            ) : (
              <RadioButtonUncheckedRoundedIcon
                className={classes.notSelectedSubscriptionPlanIcon}
              />
            )}

            <div className={classes.subscriptionPlanDetailsContainer}>
              <div className={classes.leftDetailsContainer}>
                <p>{subscriptionPlan.nameOfSubscriptionPlan}</p>

                <p>{subscriptionPlan.creditsInSubscriptionPlan} credits</p>
              </div>

              <div className={classes.rightDetailsContainer}>
                <p>€ {subscriptionPlan.priceOfSubscriptionPlan}</p>

                <p>{subscriptionPlan.periodicityOfSubscriptionPlan}</p>
              </div>
            </div>
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
