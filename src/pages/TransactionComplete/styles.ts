import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  allTransactionDetailsContainer: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    padding: '24px',
  },

  buttonsContainer: {
    display: 'flex',
  },

  goToBillingButton: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.text.hint} !important`,
    fontSize: '16px',
    fontWeight: 500,
    height: '45px',
    padding: '8px 0px',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    width: '180px',

    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },

  goToMarketplaceButton: {
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.primary.contrastText} !important`,
    fontSize: '16px',
    fontWeight: 500,
    height: '45px',
    marginRight: '12px',
    padding: '8px 0px',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    width: '220px',

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  pageContentContainer: {
    margin: '0px auto',
    maxWidth: '550px',
    width: '100%',
  },

  separator: {
    border: `1px solid ${theme.palette.grey[200]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    margin: '40px 0px',
    width: '100%',
  },

  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: '20px',
    fontWeight: 300,
    marginBottom: '40px',

    '& > span': {
      display: 'block',
      fontWeight: 500,
    },
  },

  title: {
    color: theme.palette.text.primary,
    fontSize: '42px',
    fontWeight: 700,
    marginBottom: '24px',
  },

  transactionDetailContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5px',

    '& > :first-child': {
      color: theme.palette.text.secondary,
      fontSize: '16px',
      fontWeight: 300,
      maxWidth: '140px',
      textAlign: 'left',
      width: '100%',
    },

    '& > :last-child': {
      color: theme.palette.text.hint,
      fontSize: '14px',
      fontWeight: 400,
      maxWidth: '325px',
      textAlign: 'right',
      width: '100%',
    },
  },

  transactionDetailsTitle: {
    color: theme.palette.text.primary,
    fontSize: '22px',
    fontWeight: 400,
    marginBottom: '24px',
  },

  transactionTitle: {
    color: theme.palette.text.primary,
    fontSize: '18px',
    fontWeight: 500,
    marginBottom: '15px',
  },
}))
