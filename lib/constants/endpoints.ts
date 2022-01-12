import core from '../helpers/core'

function getApiUrl() {
  if (core().IS_CLOUD) return core().buildCloudBackendUrl()
  return process.env.API_URL || ''
}

function getBillingApiUrl() {
  if (core().IS_CLOUD) return core().buildCloudBackendUrl('ext-billing')
  return process.env.BILLING_API_URL || ''
}

export const API_URL = getApiUrl()
export const BILLING_API_URL = getBillingApiUrl()
export const INFORM_URL = process.env.INFORM_URL || ''
