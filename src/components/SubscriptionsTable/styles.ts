import { makeStyles } from '@apisuite/fe-base'

export default makeStyles({
  alternativeSubscriptionsTableEntry: {
    alignItems: 'center',
    backgroundColor: '#F7F8F9',
    borderTop: '1px solid #ECEDEF',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 40px',

    '& > :first-child': {
      color: '#14283C',
      fontSize: '14px',
      fontWeight: 500,
      maxWidth: '50%',
      textAlign: 'left',
      width: '100%',
    },

    '& > :last-child': {
      color: '#85909A',
      fontSize: '14px',
      fontWeight: 400,
      maxWidth: '50%',
      textAlign: 'right',
      width: '100%',
    },
  },

  regularSubscriptionsTableEntry: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #ECEDEF',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 40px',

    '& > :first-child': {
      color: '#14283C',
      fontSize: '14px',
      fontWeight: 500,
      maxWidth: '50%',
      textAlign: 'left',
      width: '100%',
    },

    '& > :last-child': {
      color: '#85909A',
      fontSize: '14px',
      fontWeight: 400,
      maxWidth: '50%',
      textAlign: 'right',
      width: '100%',
    },
  },

  subscriptionsTable: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #BAC0C6',
    borderRadius: '4px',
    marginBottom: '24px',
    maxWidth: '900px',
    width: '100%',
  },

  subscriptionsTableHeader: {
    alignItems: 'center',
    color: '#51606E',
    display: 'flex',
    fontSize: '16px',
    fontWeight: 500,
    justifyContent: 'space-between',
    padding: '12px 40px',

    '& > :first-child': {
      color: '#14283C',
      fontSize: '16px',
      fontWeight: 500,
      maxWidth: '50%',
      textAlign: 'left',
      width: '100%',
    },

    '& > :last-child': {
      color: '#14283C',
      fontSize: '16px',
      fontWeight: 500,
      maxWidth: '50%',
      textAlign: 'right',
      width: '100%',
    },
  },
})
