import React from 'react'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'

import { CreditPacksCatalogProps } from './types'
import useStyles from './styles'
import { Box, Typography, useTheme } from '@material-ui/core'

const CreditPacksCatalog: React.FC<CreditPacksCatalogProps> = ({
  arrayOfCreditPacks,
  currentlySelectedCreditPack,
  handleCreditPackSelection,
}) => {
  const classes = useStyles()
  const { palette } = useTheme()

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

            <Box color={palette.text.primary}>
              <Typography variant="body1" color="inherit">
                <b>€ {creditPack.priceOfCreditPack}</b>
              </Typography>

              <Typography variant="body2" color="inherit">
                {creditPack.creditsInCreditPack} Cr
              </Typography>
            </Box>
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
