import React from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@apisuite/fe-base'
import InfoRoundedIcon from '@material-ui/icons/InfoRounded'
import WarningRoundedIcon from '@material-ui/icons/WarningRounded'

import { CustomizableDialogProps } from './types'
import useStyles from './styles'

export const CustomizableDialog: React.FC<CustomizableDialogProps> = ({
  icon,
  title,
  text,
  subText,
  children,
  actions,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <Dialog {...rest}>
      <div className={classes.dialogTitleContainer}>
        {icon === 'info' && (
          <InfoRoundedIcon className={classes.dialogTitleInfoIcon} />
        )}

        {icon === 'warning' && (
          <WarningRoundedIcon className={classes.dialogTitleWarningIcon} />
        )}

        <DialogTitle>{title}</DialogTitle>
      </div>

      <DialogContent className={classes.dialogContentContainer}>
        <DialogContentText className={classes.dialogText}>
          {text}
        </DialogContentText>

        <DialogContentText className={classes.dialogSubText}>
          {subText}
        </DialogContentText>

        {children}
      </DialogContent>

      <DialogActions className={classes.dialogActionsContainer}>
        {actions}
      </DialogActions>
    </Dialog>
  )
}
