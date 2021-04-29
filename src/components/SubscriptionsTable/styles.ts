import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  alternativeSubscriptionsTableEntry: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.grey[100]}`,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 40px',

    '& > :first-child': {
      color: theme.palette.text.primary,
      fontSize: '14px',
      fontWeight: 500,
      maxWidth: '50%',
      textAlign: 'left',
      width: '100%',
    },

    '& > :last-child': {
      color: theme.palette.text.secondary,
      fontSize: '14px',
      fontWeight: 400,
      maxWidth: '50%',
      textAlign: 'right',
      width: '100%',
    },
  },

  regularSubscriptionsTableEntry: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.grey[100]}`,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 40px',

    '& > :first-child': {
      color: theme.palette.text.primary,
      fontSize: '14px',
      fontWeight: 500,
      maxWidth: '50%',
      textAlign: 'left',
      width: '100%',
    },

    '& > :last-child': {
      color: theme.palette.text.secondary,
      fontSize: '14px',
      fontWeight: 400,
      maxWidth: '50%',
      textAlign: 'right',
      width: '100%',
    },
  },

  subscriptionsTable: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    marginBottom: '24px',
    maxWidth: '900px',
    width: '100%',
  },

  subscriptionsTableHeader: {
    alignItems: 'center',
    color: theme.palette.text.hint,
    display: 'flex',
    fontSize: '16px',
    fontWeight: 500,
    justifyContent: 'space-between',
    padding: '12px 40px',

    '& > :first-child': {
      color: theme.palette.text.primary,
      fontSize: '16px',
      fontWeight: 500,
      maxWidth: '50%',
      textAlign: 'left',
      width: '100%',
    },

    '& > :last-child': {
      color: theme.palette.text.primary,
      fontSize: '16px',
      fontWeight: 500,
      maxWidth: '50%',
      textAlign: 'right',
      width: '100%',
    },
  },
}))
