import React from 'react'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'

import { CreditPacksCatalogProps } from './types'
import useStyles from './styles'

const CreditPacksCatalog: React.FC<CreditPacksCatalogProps> = ({
  arrayOfCreditPacks,
  currentlySelectedCreditPack,
  handleCreditPackSelection,
}) => {
  const classes = useStyles()

  const generateCatalogEntries = () => {
    const arrayOfCatalogEntries = arrayOfCreditPacks.map(
      (creditPack, index) => {
        return (
          <div
            className={
              creditPack.idOfCreditPack ===
              currentlySelectedCreditPack.idOfCreditPack
                ? classes.selectedCreditPackContainer
                : classes.notSelectedCreditPackContainer
            }
            key={`creditPacksCatalogEntry${index}`}
            onClick={() => handleCreditPackSelection(creditPack.idOfCreditPack)}
          >
            {creditPack.idOfCreditPack ===
            currentlySelectedCreditPack.idOfCreditPack ? (
              <RadioButtonCheckedRoundedIcon
                className={classes.selectedCreditPackIcon}
              />
            ) : (
              <RadioButtonUncheckedRoundedIcon
                className={classes.notSelectedCreditPackIcon}
              />
            )}

            <div className={classes.creditPackDetailsContainer}>
              <p>€ {creditPack.priceOfCreditPack}</p>

              <p>{creditPack.creditsInCreditPack} Cr</p>
            </div>
          </div>
        )
      }
    )

    return arrayOfCatalogEntries
  }

  return (
    <div className={classes.creditPacksCatalogEntriesContainer}>
      {generateCatalogEntries()}
    </div>
  )
}

export default CreditPacksCatalog
