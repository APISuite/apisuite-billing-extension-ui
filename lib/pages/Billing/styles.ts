import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  addCreditsButton: {
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    color: `${theme.palette.primary.contrastText} !important`,
    fontSize: 16,
    fontWeight: 500,
    height: 40,
    padding: '12px 20px',
    textDecoration: 'none',
    textTransform: 'none',
    width: 175,

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  billingContentContainer: {
    margin: '0px auto',
    maxWidth: 900,
    width: '100%',
  },

  creditPacksTitle: {
    color: theme.palette.primary.contrastText,
    fontSize: 14,
    fontWeight: 300,
    marginBottom: 12,
  },

  dialogCancelButton: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    textTransform: 'none',

    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },

  dialogConfirmButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textTransform: 'none',

    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },

  editPaymentDetailsButton: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    color: `${theme.palette.text.hint} !important`,
    fontSize: 16,
    fontWeight: 500,
    height: 40,
    marginBottom: 40,
    padding: '12px 20px',
    textDecoration: 'none',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },

  retrievingAllAvailableCreditPacks: {
    color: theme.palette.primary.contrastText,
    fontSize: 16,
    fontWeight: 300,
  },

  retrievingAllAvailableSubscriptionPlans: {
    color: theme.palette.text.hint,
    fontSize: 16,
    fontWeight: 300,
    marginBottom: 40,
  },

  sectionSubtitle: {
    color: '#ACACAC',
    fontSize: 16,
    fontWeight: 300,
    marginBottom: 40,
  },

  separator: {
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: theme.shape.borderRadius,
    margin: '25px 0px 15px 0px',
    width: '100%',
  },

  yourCreditBalanceContainerWithCreditPacks: {
    alignItems: 'center',
    backgroundColor: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    display: 'block',
    justifyContent: 'space-between',
    marginBottom: 40,
    maxWidth: 500,
    padding: 24,
    width: '100%',
  },

  yourCreditBalanceContainerWithoutCreditPacks: {
    alignItems: 'center',
    backgroundColor: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 40,
    maxWidth: 500,
    padding: 24,
    width: '100%',
  },
}))
