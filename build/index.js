import './translations';
import { Extension, protocolVersion, } from '@apisuite/extension-ui-types/v1';
import { injectStuffIntoStore } from './helpers/store';
import { name, version } from './constants/info';
import configHelper from './helpers/config';
import coreHelper from './helpers/core';
import hooks from './hooks';
class BillingExtension extends Extension {
    constructor({ core, config }) {
        super({ core, config });
        this.hooks = hooks;
        configHelper.set(config);
        coreHelper.set(core);
        injectStuffIntoStore(core.store);
    }
}
BillingExtension.info = {
    name,
    version,
    protocolVersion,
};
export default BillingExtension;
