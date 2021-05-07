import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  addCreditsButton: {
    backgroundColor: theme.palette.primary.main,
    border: `1 solid ${theme.palette.primary.main}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.primary.contrastText} !important`,
    fontSize: '16',
    fontWeight: 500,
    height: '40',
    padding: '12 20',
    textDecoration: 'none',
    textTransform: 'none',
    width: '175',

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  billingContentContainer: {
    margin: '0 auto',
    maxWidth: '900',
    width: '100%',
  },

  cancelCreditsPurchaseButton: {
    backgroundColor: theme.palette.background.paper,
    border: `1 solid ${theme.palette.grey[300]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.text.hint} !important`,
    fontSize: '16',
    fontWeight: 500,
    height: '45',
    padding: '12 20',
    textDecoration: 'none',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },

  creditBalanceContainer: {
    '& > :first-child': {
      color: '#E3E3E3',
      fontSize: '16',
      fontWeight: 400,
      marginBottom: '6',
    },

    '& > :last-child': {
      color: theme.palette.primary.contrastText,
      fontSize: '40',
      fontWeight: 500,
    },
  },

  creditPacksTitle: {
    color: theme.palette.primary.contrastText,
    fontSize: '14',
    fontWeight: 300,
    marginBottom: '12',
  },

  disabledPurchaseCreditsButton: {
    backgroundColor: theme.palette.grey[300],
    border: `1 solid ${theme.palette.grey[300]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.primary.contrastText} !important`,
    fontSize: '16',
    fontWeight: 500,
    height: '45',
    marginRight: '12',
    padding: '12 20',
    pointerEvents: 'none',
    textDecoration: 'none',
    textTransform: 'none',
    width: '175',

    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
  },

  disabledStartSubscriptionButton: {
    backgroundColor: theme.palette.grey[300],
    border: `1 solid ${theme.palette.grey[300]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.primary.contrastText} !important`,
    fontSize: '16',
    fontWeight: 500,
    height: '45',
    padding: '12 20',
    pointerEvents: 'none',
    textDecoration: 'none',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
  },

  editPaymentDetailsButton: {
    backgroundColor: theme.palette.background.paper,
    border: `1 solid ${theme.palette.grey[300]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.text.hint} !important`,
    fontSize: '16',
    fontWeight: 500,
    height: '40',
    marginBottom: '40',
    padding: '12 20',
    textDecoration: 'none',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },

  enabledPurchaseCreditsButton: {
    backgroundColor: theme.palette.primary.main,
    border: `1 solid ${theme.palette.primary.main}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.primary.contrastText} !important`,
    fontSize: '16',
    fontWeight: 500,
    height: '45',
    marginRight: '12',
    padding: '12 20',
    textDecoration: 'none',
    textTransform: 'none',
    width: '175',

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  enabledStartSubscriptionButton: {
    backgroundColor: theme.palette.primary.main,
    border: `1 solid ${theme.palette.primary.main}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.primary.contrastText} !important`,
    fontSize: '16',
    fontWeight: 500,
    height: '45',
    padding: '12 20',
    textDecoration: 'none',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  noActiveSubscriptionText: {
    color: theme.palette.text.hint,
    fontSize: '16',
    fontWeight: 400,
    marginBottom: '40',
  },

  retrievingAllAvailableCreditPacks: {
    color: theme.palette.primary.contrastText,
    fontSize: '16',
    fontWeight: 300,
  },

  retrievingAllAvailableSubscriptionPlans: {
    color: theme.palette.text.hint,
    fontSize: '16',
    fontWeight: 300,
    marginBottom: '40',
  },

  sectionSubtitle: {
    color: '#ACACAC',
    fontSize: '16',
    fontWeight: 300,
    marginBottom: '40',
  },

  sectionTitle: {
    color: theme.palette.text.primary,
    fontSize: '22',
    fontWeight: 500,
    marginBottom: '24',
    marginTop: '40',
  },

  separator: {
    border: `1 solid ${theme.palette.primary.contrastText}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    margin: '25 0 15 0',
    width: '100%',
  },

  subscriptionSelectionTitle: {
    color: theme.palette.text.primary,
    fontSize: '18',
    fontWeight: 500,
    marginBottom: '24',
  },

  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: '16',
    fontWeight: 300,
    marginBottom: '40',
  },

  title: {
    color: theme.palette.text.primary,
    fontSize: '32',
    fontWeight: 300,
    marginBottom: '12',
  },

  yourCreditBalanceContainerWithCreditPacks: {
    alignItems: 'center',
    backgroundColor: theme.palette.text.primary,
    borderRadius: theme.palette.dimensions.borderRadius,
    display: 'block',
    justifyContent: 'space-between',
    marginBottom: '40',
    maxWidth: '500',
    padding: '24',
    width: '100%',
  },

  yourCreditBalanceContainerWithoutCreditPacks: {
    alignItems: 'center',
    backgroundColor: theme.palette.text.primary,
    borderRadius: theme.palette.dimensions.borderRadius,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '40',
    maxWidth: '500',
    padding: '24',
    width: '100%',
  },
}))
