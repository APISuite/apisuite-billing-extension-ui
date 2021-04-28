import { makeStyles } from '@apisuite/fe-base'

export default makeStyles({
  alternativeTransactionsTableEntry: {
    alignItems: 'center',
    backgroundColor: '#F7F8F9',
    borderTop: '1px solid #ECEDEF',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '12px 40px',

    '& p': {
      color: '#85909A',
      fontSize: '14px',
      fontWeight: 400,
    },

    '& > :first-child': {
      color: '#14283C',
      fontSize: '14px',
      fontWeight: 400,
    },
  },

  completedTransactionStatus: {
    backgroundColor: '#14DE2D',
    borderRadius: '4px',
    color: '#FFFFFF !important',
    fontSize: '14px',
    fontWeight: 400,
    maxWidth: '135px',
    marginRight: '10px',
    textAlign: 'center',
    width: '100%',
  },

  pendingTransactionStatus: {
    backgroundColor: '#F78E27',
    borderRadius: '4px',
    color: '#FFFFFF !important',
    fontSize: '14px',
    fontWeight: 400,
    marginRight: '10px',
    maxWidth: '135px',
    textAlign: 'center',
    width: '100%',
  },

  regularTransactionsTableEntry: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #ECEDEF',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '12px 40px',

    '& p': {
      color: '#85909A',
      fontSize: '14px',
      fontWeight: 400,
    },

    '& > :first-child': {
      color: '#14283C',
      fontSize: '14px',
      fontWeight: 400,
    },
  },

  transactionAmount: {
    maxWidth: '65px',
    overflow: 'hidden',
    textAlign: 'right',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },

  transactionReference: {
    marginRight: '10px',
    maxWidth: '150px',
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },

  transactionDate: {
    marginRight: '10px',
    maxWidth: '175px',
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },

  transactionName: {
    maxWidth: '230px',
    marginRight: '10px',
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },

  transactionStatus: {
    maxWidth: '135px',
    marginRight: '10px',
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
  },

  transactionsTable: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #BAC0C6',
    borderRadius: '4px',
    marginBottom: '24px',
    maxWidth: '900px',
    width: '100%',
  },

  transactionsTableHeader: {
    alignItems: 'center',
    color: '#51606E',
    display: 'flex',
    fontSize: '16px',
    fontWeight: 500,
    justifyContent: 'flex-start',
    padding: '12px 40px',

    '& p': {
      color: '#14283C',
      fontSize: '16px',
      fontWeight: 500,
    },
  },
})
