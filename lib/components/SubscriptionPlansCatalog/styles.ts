import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  notSelectedSubscriptionPlanContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    display: 'flex',
    height: 70,
    margin: '0px 12px 12px 0px',
    position: 'relative',
    maxWidth: 280,
    padding: 15,
    width: '100%',
  },

  notSelectedSubscriptionPlanIcon: {
    color: theme.palette.text.secondary,
    fontSize: 24,
    marginRight: 12,
  },

  selectedSubscriptionPlanContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.action.focus}`,
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    display: 'flex',
    height: 70,
    margin: '0px 12px 12px 0px',
    maxWidth: 280,
    padding: 15,
    width: '100%',
    position: 'relative',
  },

  selectedSubscriptionPlanIcon: {
    color: theme.palette.action.focus,
    fontSize: 24,
    marginRight: 12,
  },

  subscriptionPlanDetailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 220,
  },

  subscriptionPlansCatalogEntriesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  disabledSubscriptionPlanContainer: {
    background: theme.palette.action.disabledBackground,
    opacity: theme.palette.action.disabledOpacity,
    borderRadius: 4,
    bottom: 0,
    cursor: 'default',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  disabledSubscriptionPlanIcon: {
    color: theme.palette.action.disabled,
    fontSize: 24,
    marginRight: 12,
  },
}))
