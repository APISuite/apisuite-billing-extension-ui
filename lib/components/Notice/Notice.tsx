import React from 'react'

import clsx from 'clsx'

import { Icon } from '@apisuite/fe-base'

import useStyles from './styles'

import { NoticeProps } from './types'

export const Notice: React.FC<NoticeProps> = ({
  type = 'info',
  noticeIcon,
  noticeIconStyle,
  noticeText,
}) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(
        classes.noticeContentsContainer,
        type === 'info' && classes.noticeBackgoundInfo,
        type === 'error' && classes.noticeBackgoundError,
        type === 'warning' && classes.noticeBackgoundWarning
      )}
    >
      <div
        className={clsx(
          classes.noticeIcon,
          type === 'info' && classes.noticeIconInfo,
          type === 'error' && classes.noticeIconError,
          type === 'warning' && classes.noticeIconWarning,
          noticeIconStyle
        )}
      >
        {noticeIcon || <Icon>info</Icon>}
      </div>

      <span>{noticeText}</span>
    </div>
  )
}
