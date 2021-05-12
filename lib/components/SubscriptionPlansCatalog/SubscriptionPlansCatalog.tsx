import React from 'react'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'

import { SubscriptionPlansCatalogProps } from './types'
import clsx from 'clsx'
import useStyles from './styles'

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
              <div
                className={clsx({
                  [classes.enabledLeftDetailsContainer]:
                    subscriptionPlan.idOfSubscriptionPlan !==
                    activeSubscriptionPlanID,
                  [classes.disabledLeftDetailsContainer]:
                    subscriptionPlan.idOfSubscriptionPlan ===
                    activeSubscriptionPlanID,
                })}
              >
                <p>{subscriptionPlan.nameOfSubscriptionPlan}</p>

                <p>{subscriptionPlan.creditsInSubscriptionPlan} credits</p>
              </div>

              <div
                className={clsx({
                  [classes.enabledRightDetailsContainer]:
                    subscriptionPlan.idOfSubscriptionPlan !==
                    activeSubscriptionPlanID,
                  [classes.disabledRightDetailsContainer]:
                    subscriptionPlan.idOfSubscriptionPlan ===
                    activeSubscriptionPlanID,
                })}
              >
                <p>€ {subscriptionPlan.priceOfSubscriptionPlan}</p>

                <p>{subscriptionPlan.periodicityOfSubscriptionPlan}</p>
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
