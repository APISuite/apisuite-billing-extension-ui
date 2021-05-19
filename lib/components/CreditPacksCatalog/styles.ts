import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  creditPackDetailsContainer: {
    '& > :first-child': {
      color: theme.palette.text.primary,
      fontSize: 16,
      fontWeight: 500,
      marginBottom: -10,
    },

    '& > :last-child': {
      color: theme.palette.text.hint,
      fontSize: 14,
      fontWeight: 300,
    },
  },

  creditPacksCatalogEntriesContainer: {
    display: 'flex',
    flexFlow: 'wrap',
    marginBottom: 40,
  },

  creditPacksTitle: {
    color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: 300,
    marginBottom: 12,
  },

  notSelectedCreditPackContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    display: 'flex',
    height: 55,
    margin: '0px 12px 12px 0px',
    maxWidth: 135,
    padding: 8,
    width: '100%',
  },

  notSelectedCreditPackIcon: {
    color: theme.palette.text.primary,
    fontSize: 24,
    marginRight: 8,
  },

  selectedCreditPackContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.action.focus}`,
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    display: 'flex',
    height: 55,
    margin: '0px 12px 12px 0px',
    maxWidth: 135,
    padding: 8,
    width: '100%',
  },

  selectedCreditPackIcon: {
    color: theme.palette.action.focus,
    fontSize: 24,
    marginRight: 8,
  },
}))
