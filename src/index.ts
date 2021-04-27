import './translations'
import { BillingExtensionConfig } from './config'
import {
  Extension,
  ExtensionParams,
  protocolVersion,
} from '@apisuite/extension-ui-types/v1'
import { injectStuffIntoStore } from './helpers/store'
import { name, version } from '../package.json'
import configHelper from './helpers/config'
import coreHelper from './helpers/core'
import hooks from './hooks'

type BillingExtensionParams = ExtensionParams & {
  config?: BillingExtensionConfig
}

class BillingExtension extends Extension {
  static info = {
    name,
    version,
    protocolVersion,
  }

  public config: BillingExtensionConfig

  hooks = hooks

  constructor({ core, config }: BillingExtensionParams) {
    super({ core, config })

    configHelper.set(config)
    coreHelper.set(core)

    injectStuffIntoStore(core.store)
  }
}

export default BillingExtension
