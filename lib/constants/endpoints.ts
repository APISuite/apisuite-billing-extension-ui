import core from '../helpers/core'

export function getApiUrl() {
  if (core().IS_CLOUD) return core().buildCloudBackendUrl()
  return process.env.API_URL || ''
}

export function getBillingApiUrl() {
  if (core().IS_CLOUD) return core().buildCloudBackendUrl('ext-billing')
  return process.env.BILLING_API_URL || ''
}

export const INFORM_URL = process.env.INFORM_URL || ''
