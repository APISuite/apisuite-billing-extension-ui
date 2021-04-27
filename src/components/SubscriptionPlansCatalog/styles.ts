import { makeStyles } from '@apisuite/fe-base'

export default makeStyles({
  leftDetailsContainer: {
    '& > :first-child': {
      color: '#51606E',
      fontSize: '14px',
      fontWeight: 400,
      marginBottom: '-6px',
    },

    '& > :last-child': {
      color: '#14283C',
      fontSize: '16px',
      fontWeight: 500,
    },
  },

  noActiveSubscriptionText: {
    color: '#51606E',
    fontSize: '16px',
    fontWeight: 400,
    marginBottom: '40px',
  },

  notSelectedSubscriptionPlanContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    border: '1px solid #BAC0C6',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    height: '70px',
    margin: '0px 12px 12px 0px',
    maxWidth: '280px',
    padding: '15px',
    width: '100%',
  },

  notSelectedSubscriptionPlanIcon: {
    color: '#14283C',
    fontSize: '24px',
    marginRight: '12px',
  },

  rightDetailsContainer: {
    '& > :first-child': {
      color: '#14283C',
      fontSize: '16px',
      fontWeight: 500,
      marginBottom: '-6px',
    },

    '& > :last-child': {
      color: '#51606E',
      fontSize: '14px',
      fontWeight: 400,
    },
  },

  selectedSubscriptionPlanContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    border: '1px solid #19B3EE',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    height: '70px',
    margin: '0px 12px 12px 0px',
    maxWidth: '280px',
    padding: '15px',
    width: '100%',
  },

  selectedSubscriptionPlanIcon: {
    color: '#19B3EE',
    fontSize: '24px',
    marginRight: '12px',
  },

  subscriptionPlanDetailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '220px',
    width: '100%',
  },

  subscriptionPlansCatalogEntriesContainer: {
    display: 'flex',
  },

  subscriptionSelectionTitle: {
    color: '#14283C',
    fontSize: '18px',
    fontWeight: 500,
    marginBottom: '24px',
  },
})
