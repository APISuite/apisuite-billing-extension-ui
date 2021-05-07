import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  allTransactionDetailsContainer: {
    backgroundColor: theme.palette.background.paper,
    border: `1 solid ${theme.palette.grey[300]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    padding: '24',
  },

  buttonsContainer: {
    display: 'flex',
  },

  goToBillingButton: {
    backgroundColor: theme.palette.background.paper,
    border: `1 solid ${theme.palette.grey[300]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.text.hint} !important`,
    fontSize: '16',
    fontWeight: 500,
    height: '45',
    padding: '8 0',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    width: '180',

    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },

  goToMarketplaceButton: {
    backgroundColor: theme.palette.primary.main,
    border: `1 solid ${theme.palette.primary.main}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.primary.contrastText} !important`,
    fontSize: '16',
    fontWeight: 500,
    height: '45',
    marginRight: '12',
    padding: '8 0',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    width: '220',

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  pageContentContainer: {
    margin: '0 auto',
    maxWidth: '550',
    width: '100%',
  },

  separator: {
    border: `1 solid ${theme.palette.grey[200]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    margin: '40 0',
    width: '100%',
  },

  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: '20',
    fontWeight: 300,
    marginBottom: '40',

    '& > span': {
      display: 'block',
      fontWeight: 500,
    },
  },

  title: {
    color: theme.palette.text.primary,
    fontSize: '42',
    fontWeight: 700,
    marginBottom: '24',
  },

  transactionDetailContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5',

    '& > :first-child': {
      color: theme.palette.text.secondary,
      fontSize: '16',
      fontWeight: 300,
      maxWidth: '140',
      textAlign: 'left',
      width: '100%',
    },

    '& > :last-child': {
      color: theme.palette.text.hint,
      fontSize: '14',
      fontWeight: 400,
      maxWidth: '325',
      textAlign: 'right',
      width: '100%',
    },
  },

  transactionDetailsTitle: {
    color: theme.palette.text.primary,
    fontSize: '22',
    fontWeight: 400,
    marginBottom: '24',
  },

  transactionTitle: {
    color: theme.palette.text.primary,
    fontSize: '18',
    fontWeight: 500,
    marginBottom: '15',
  },
}))
