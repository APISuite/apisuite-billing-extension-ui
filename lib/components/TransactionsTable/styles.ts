import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  completeTransactionStatus: {
    backgroundColor: theme.palette.success.light,
    borderRadius: theme.shape.borderRadius,
    color: `${theme.palette.success.dark} !important`,
    marginRight: 10,
    maxWidth: 135,
    textAlign: 'center',
    textTransform: 'capitalize',
    width: '100%',
  },

  failedTransactionStatus: {
    backgroundColor: theme.palette.error.light,
    borderRadius: theme.shape.borderRadius,
    color: `${theme.palette.error.dark} !important`,
    marginRight: 10,
    maxWidth: 135,
    textAlign: 'center',
    textTransform: 'capitalize',
    width: '100%',
  },

  openTransactionStatus: {
    backgroundColor: theme.palette.info.light,
    borderRadius: theme.shape.borderRadius,
    color: `${theme.palette.info.dark} !important`,
    marginRight: 10,
    maxWidth: 135,
    textAlign: 'center',
    textTransform: 'capitalize',
    width: '100%',
  },

  pendingTransactionStatus: {
    backgroundColor: theme.palette.warning.light,
    borderRadius: theme.shape.borderRadius,
    color: `${theme.palette.warning.dark} !important`,
    marginRight: 10,
    maxWidth: 135,
    textAlign: 'center',
    textTransform: 'capitalize',
    width: '100%',
  },

  transactionIDIcon: {
    color: theme.palette.grey[400],
    cursor: 'pointer',
    fontSize: 20,

    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },

  incompleteTransactionStatus: {
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.shape.borderRadius,
    color: `${theme.palette.text.hint} !important`,
    marginRight: 10,
    maxWidth: 135,
    textAlign: 'center',
    textTransform: 'capitalize',
    width: '100%',
  },
}))
