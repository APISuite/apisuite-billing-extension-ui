import React from 'react'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'

import { CreditPacksCatalogProps } from './types'
import useStyles from './styles'
import { Box, Typography, useTheme } from '@material-ui/core'

const CreditPacksCatalog: React.FC<CreditPacksCatalogProps> = ({
  creditPacks,
  selectedCreditPack,
  handleCreditPackSelection,
}) => {
  const classes = useStyles()
  const { palette } = useTheme()

  const generateCatalogEntries = () => {
    return creditPacks.map((creditPack, index) => {
      return (
        <div
          className={
            creditPack.id === selectedCreditPack.id
              ? classes.selectedCreditPackContainer
              : classes.notSelectedCreditPackContainer
          }
          key={`creditPacksCatalogEntry${index}`}
          onClick={() => handleCreditPackSelection(creditPack.id)}
        >
          {creditPack.id === selectedCreditPack.id ? (
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
              <b>€ {creditPack.price}</b>
            </Typography>

            <Typography variant="body2" color="inherit">
              {creditPack.credits} Cr
            </Typography>
          </Box>
        </div>
      )
    })
  }

  return (
    <div className={classes.creditPacksCatalogEntriesContainer}>
      {generateCatalogEntries()}
    </div>
  )
}

export default CreditPacksCatalog
