import { makeStyles } from '@apisuite/fe-base'

export default makeStyles({
  creditPackDetailsContainer: {
    '& > :first-child': {
      color: '#14283C',
      fontSize: '16px',
      fontWeight: 500,
      marginBottom: '-10px',
    },

    '& > :last-child': {
      color: '#51606E',
      fontSize: '14px',
      fontWeight: 300,
    },
  },

  creditPacksCatalogEntriesContainer: {
    display: 'flex',
  },

  creditPacksTitle: {
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 300,
    marginBottom: '12px',
  },

  notSelectedCreditPackContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    border: '1px solid #BAC0C6',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    height: '55px',
    margin: '0px 12px 12px 0px',
    maxWidth: '145px',
    padding: '8px',
    width: '100%',
  },

  notSelectedCreditPackIcon: {
    color: '#14283C',
    fontSize: '24px',
    marginRight: '8px',
  },

  selectedCreditPackContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    border: '1px solid #19B3EE',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    height: '55px',
    margin: '0px 12px 12px 0px',
    maxWidth: '145px',
    padding: '8px',
    width: '100%',
  },

  selectedCreditPackIcon: {
    color: '#19B3EE',
    fontSize: '24px',
    marginRight: '8px',
  },
})
