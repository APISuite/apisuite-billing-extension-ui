import billingReducer from 'pages/Billing/ducks'
import billingRootSaga from 'pages/Billing/sagas'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const injectStuffIntoStore = (coreStoreProps: any): void => {
  coreStoreProps.injectReducer('billing', billingReducer)

  coreStoreProps.injectSaga('billing', billingRootSaga)
}
