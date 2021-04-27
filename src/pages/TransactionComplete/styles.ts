import { makeStyles } from '@apisuite/fe-base'

export default makeStyles({
  allTransactionDetailsContainer: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #BAC0C6',
    borderRadius: '4px',
    padding: '24px',
  },

  buttonsContainer: {
    display: 'flex',
  },

  goToBillingButton: {
    backgroundColor: '#FFFFFF',
    border: `1px solid #BAC0C6`,
    borderRadius: '4px',
    color: `#51606E !important`,
    fontSize: '16px',
    fontWeight: 500,
    height: '40px',
    padding: '12px 20px',
    textDecoration: 'none',
    textTransform: 'none',
    width: '180px',

    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },

  goToMarketplaceButton: {
    backgroundColor: '#32C896',
    border: `1px solid #32C896`,
    borderRadius: '4px',
    color: `#FFFFFF !important`,
    fontSize: '16px',
    fontWeight: 500,
    height: '40px',
    marginRight: '12px',
    padding: '12px 20px',
    textDecoration: 'none',
    textTransform: 'none',
    width: '220px',

    '&:hover': {
      backgroundColor: '#32C896',
    },
  },

  pageContentContainer: {
    margin: '0px auto',
    maxWidth: '550px',
    padding: '50px 0px 60px 0px !important',
    width: '100%',
  },

  separator: {
    border: `1px solid #DBDEE1`,
    borderRadius: '4px',
    margin: '40px 0px',
    width: '100%',
  },

  subtitle: {
    color: '#85909A',
    fontSize: '20px',
    fontWeight: 300,
    marginBottom: '40px',

    '& > span': {
      display: 'block',
      fontWeight: 500,
    },
  },

  title: {
    color: '#14283C',
    fontSize: '42px',
    fontWeight: 700,
    marginBottom: '24px',
  },

  transactionDetailContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5px',

    '& > :first-child': {
      color: '#85909A',
      fontSize: '16px',
      fontWeight: 300,
      maxWidth: '140px',
      textAlign: 'left',
      width: '100%',
    },

    '& > :last-child': {
      color: '#51606E',
      fontSize: '14px',
      fontWeight: 400,
      maxWidth: '325px',
      textAlign: 'right',
      width: '100%',
    },
  },

  transactionDetailsTitle: {
    color: '#14283C',
    fontSize: '22px',
    fontWeight: 400,
    marginBottom: '24px',
  },

  transactionTitle: {
    color: '#14283C',
    fontSize: '18px',
    fontWeight: 500,
    marginBottom: '15px',
  },
})
