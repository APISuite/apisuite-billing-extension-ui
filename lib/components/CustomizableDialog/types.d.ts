import { DialogActionsProps, DialogProps } from '@apisuite/fe-base'

export interface CustomizableDialogProps extends DialogProps {
  icon: 'warning' | 'success'
  title: string
  text: string
  subText?: string
  content?: any
  actions: DialogActionsProps['children']
}
