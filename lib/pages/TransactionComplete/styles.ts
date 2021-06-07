import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  allTransactionDetailsContainer: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    padding: 24,
  },

  pageContentContainer: {
    margin: '0 auto',
    width: 'calc(100% - 24px)',
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md - 24,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values.md - 24,
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: theme.breakpoints.values.md - 24,
    },
  },

  transactionDetailContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 5,

    '& > :first-child': {
      ...theme.typography.body1,
      color: theme.palette.text.secondary,
      maxWidth: 140,
      textAlign: 'left',
      width: '100%',
    },

    '& > :last-child': {
      ...theme.typography.body1,
      maxWidth: 325,
      textAlign: 'right',
      width: '100%',
    },
  },

  transactionTitle: {
    ...theme.typography.body1,
    fontWeight: 700,
    marginBottom: 15,

    '& > span': {
      fontSize: '15px',
      fontWeight: 300,
      marginLeft: '5px',
    },
  },
}))
