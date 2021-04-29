import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  creditPackDetailsContainer: {
    '& > :first-child': {
      color: theme.palette.text.primary,
      fontSize: '16px',
      fontWeight: 500,
      marginBottom: '-10px',
    },

    '& > :last-child': {
      color: theme.palette.text.hint,
      fontSize: '14px',
      fontWeight: 300,
    },
  },

  creditPacksCatalogEntriesContainer: {
    display: 'flex',
    marginBottom: '40px',
  },

  creditPacksTitle: {
    color: theme.palette.common.white,
    fontSize: '14px',
    fontWeight: 300,
    marginBottom: '12px',
  },

  notSelectedCreditPackContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    cursor: 'pointer',
    display: 'flex',
    height: '55px',
    margin: '0px 12px 12px 0px',
    maxWidth: '145px',
    padding: '8px',
    width: '100%',
  },

  notSelectedCreditPackIcon: {
    color: theme.palette.text.primary,
    fontSize: '24px',
    marginRight: '8px',
  },

  selectedCreditPackContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.action.focus}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    cursor: 'pointer',
    display: 'flex',
    height: '55px',
    margin: '0px 12px 12px 0px',
    maxWidth: '145px',
    padding: '8px',
    width: '100%',
  },

  selectedCreditPackIcon: {
    color: theme.palette.action.focus,
    fontSize: '24px',
    marginRight: '8px',
  },
}))
