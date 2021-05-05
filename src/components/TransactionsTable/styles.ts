import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  alternativeTransactionsTableEntry: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.grey[100]}`,
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '12px 30px',

    '& p': {
      color: theme.palette.text.secondary,
      fontSize: '14px',
      fontWeight: 400,
    },

    '& > :first-child': {
      color: theme.palette.text.primary,
      fontSize: '14px',
      fontWeight: 400,
    },
  },

  completeTransactionStatus: {
    backgroundColor: theme.palette.success.light,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.success.dark} !important`,
    fontSize: '14px',
    fontWeight: 400,
    marginRight: '10px',
    maxWidth: '135px',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: '100%',
  },

  failedTransactionStatus: {
    backgroundColor: theme.palette.error.light,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.error.dark} !important`,
    fontSize: '14px',
    fontWeight: 400,
    marginRight: '10px',
    maxWidth: '135px',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: '100%',
  },

  openTransactionStatus: {
    backgroundColor: theme.palette.info.light,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.info.dark} !important`,
    fontSize: '14px',
    fontWeight: 400,
    marginRight: '10px',
    maxWidth: '135px',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: '100%',
  },

  pendingTransactionStatus: {
    backgroundColor: theme.palette.warning.light,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.warning.dark} !important`,
    fontSize: '14px',
    fontWeight: 400,
    marginRight: '10px',
    maxWidth: '135px',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: '100%',
  },

  regularTransactionsTableEntry: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.grey[100]}`,
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '12px 30px',

    '& p': {
      color: theme.palette.text.secondary,
      fontSize: '14px',
      fontWeight: 400,
    },

    '& > :first-child': {
      color: theme.palette.text.primary,
      fontSize: '14px',
      fontWeight: 400,
    },
  },

  transactionAmount: {
    maxWidth: '85px',
    overflow: 'hidden',
    textAlign: 'right',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },

  transactionDate: {
    marginRight: '15px',
    maxWidth: '175px',
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },

  transactionDescription: {
    marginRight: '15px',
    maxWidth: '230px',
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },

  transactionID: {
    alignItems: 'center',
    display: 'flex',
    maxWidth: '175px',
    width: '100%',
  },

  transactionIDText: {
    marginRight: '5px',
    maxWidth: '110px',
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },

  transactionIDIcon: {
    color: theme.palette.grey[400],
    cursor: 'pointer',
    fontSize: '20px',

    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },

  transactionStatus: {
    marginRight: '15px',
    maxWidth: '135px',
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },

  transactionsTable: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    marginBottom: '24px',
    maxWidth: '900px',
    width: '100%',
  },

  transactionsTableHeader: {
    alignItems: 'center',
    color: theme.palette.text.hint,
    display: 'flex',
    fontSize: '16px',
    fontWeight: 500,
    justifyContent: 'flex-start',
    padding: '12px 30px',

    '& p': {
      color: theme.palette.text.primary,
      fontSize: '16px',
      fontWeight: 500,
    },
  },

  incompleteTransactionStatus: {
    backgroundColor: theme.palette.grey[100],
    borderRadius: theme.palette.dimensions.borderRadius,
    color: `${theme.palette.text.hint} !important`,
    fontSize: '14px',
    fontWeight: 400,
    marginRight: '10px',
    maxWidth: '135px',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: '100%',
  },
}))
