import { makeStyles } from '@apisuite/fe-base'

export default makeStyles({
  addCreditsButton: {
    backgroundColor: '#32C896',
    border: `1px solid #32C896`,
    borderRadius: '4px',
    color: `#FFFFFF !important`,
    fontSize: '16px',
    fontWeight: 500,
    height: '40px',
    padding: '12px 20px',
    textDecoration: 'none',
    textTransform: 'none',
    width: '175px',

    '&:hover': {
      backgroundColor: '#32C896',
    },
  },

  billingContentContainer: {
    margin: '0px auto',
    maxWidth: '900px',
    width: '100%',
  },

  cancelCreditsPurchaseButton: {
    backgroundColor: '#FFFFFF',
    border: `1px solid #BAC0C6`,
    borderRadius: '4px',
    color: `#51606E !important`,
    fontSize: '16px',
    fontWeight: 500,
    height: '45px',
    padding: '12px 20px',
    textDecoration: 'none',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },

  creditBalanceContainer: {
    '& > :first-child': {
      color: '#E3E3E3',
      fontSize: '16px',
      fontWeight: 400,
      marginBottom: '6px',
    },

    '& > :last-child': {
      color: '#FFFFFF',
      fontSize: '40px',
      fontWeight: 500,
    },
  },

  creditPacksTitle: {
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 300,
    marginBottom: '12px',
  },

  disabledPurchaseCreditsButton: {
    backgroundColor: '#BAC0C6',
    border: '1px solid #BAC0C6',
    borderRadius: '4px',
    color: `#FFFFFF !important`,
    fontSize: '16px',
    fontWeight: 500,
    height: '45px',
    marginRight: '12px',
    padding: '12px 20px',
    pointerEvents: 'none',
    textDecoration: 'none',
    textTransform: 'none',
    width: '175px',

    '&:hover': {
      backgroundColor: '#BAC0C6',
    },
  },

  disabledStartSubscriptionButton: {
    backgroundColor: '#BAC0C6',
    border: '1px solid #BAC0C6',
    borderRadius: '4px',
    color: `#FFFFFF !important`,
    fontSize: '16px',
    fontWeight: 500,
    height: '45px',
    padding: '12px 20px',
    pointerEvents: 'none',
    textDecoration: 'none',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: '#BAC0C6',
    },
  },

  editPaymentDetailsButton: {
    backgroundColor: '#FFFFFF',
    border: `1px solid #BAC0C6`,
    borderRadius: '4px',
    color: `#51606E !important`,
    fontSize: '16px',
    fontWeight: 500,
    height: '40px',
    marginBottom: '40px',
    padding: '12px 20px',
    textDecoration: 'none',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },

  enabledPurchaseCreditsButton: {
    backgroundColor: '#32C896',
    border: `1px solid #32C896`,
    borderRadius: '4px',
    color: `#FFFFFF !important`,
    fontSize: '16px',
    fontWeight: 500,
    height: '45px',
    marginRight: '12px',
    padding: '12px 20px',
    textDecoration: 'none',
    textTransform: 'none',
    width: '175px',

    '&:hover': {
      backgroundColor: '#32C896',
    },
  },

  enabledStartSubscriptionButton: {
    backgroundColor: '#14283C',
    border: `1px solid #14283C`,
    borderRadius: '4px',
    color: `#FFFFFF !important`,
    fontSize: '16px',
    fontWeight: 500,
    height: '45px',
    padding: '12px 20px',
    textDecoration: 'none',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: '#14283C',
    },
  },

  noActiveSubscriptionText: {
    color: '#51606E',
    fontSize: '16px',
    fontWeight: 400,
    marginBottom: '40px',
  },

  retrievingAllAvailableCreditPacks: {
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 300,
  },

  retrievingAllAvailableSubscriptionPlans: {
    color: '#51606E',
    fontSize: '16px',
    fontWeight: 300,
    marginBottom: '40px',
  },

  sectionSubtitle: {
    color: '#ACACAC',
    fontSize: '16px',
    fontWeight: 300,
    marginBottom: '40px',
  },

  sectionTitle: {
    color: '#14283C',
    fontSize: '22px',
    fontWeight: 500,
    marginBottom: '24px',
    marginTop: '40px',
  },

  separator: {
    border: `1px solid #FFFFFF`,
    borderRadius: '4px',
    margin: '25px 0px 15px 0px',
    width: '100%',
  },

  subscriptionSelectionTitle: {
    color: '#14283C',
    fontSize: '18px',
    fontWeight: 500,
    marginBottom: '24px',
  },

  subtitle: {
    color: '#85909A',
    fontSize: '16px',
    fontWeight: 300,
    marginBottom: '40px',
  },

  title: {
    color: '#14283C',
    fontSize: '32px',
    fontWeight: 300,
    marginBottom: '12px',
  },

  yourCreditBalanceContainerWithCreditPacks: {
    alignItems: 'center',
    backgroundColor: '#14283C',
    borderRadius: '4px',
    display: 'block',
    justifyContent: 'space-between',
    marginBottom: '40px',
    maxWidth: '500px',
    padding: '24px',
    width: '100%',
  },

  yourCreditBalanceContainerWithoutCreditPacks: {
    alignItems: 'center',
    backgroundColor: '#14283C',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '40px',
    maxWidth: '500px',
    padding: '24px',
    width: '100%',
  },
})
