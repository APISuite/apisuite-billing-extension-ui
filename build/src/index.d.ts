import './translations';
import { BillingExtensionConfig } from './config';
import { Extension, ExtensionParams } from '@apisuite/extension-ui-types/v1';
declare type BillingExtensionParams = ExtensionParams & {
    config?: BillingExtensionConfig;
};
declare class BillingExtension extends Extension {
    static info: {
        name: string;
        version: string;
        protocolVersion: string;
    };
    config: BillingExtensionConfig;
    hooks: import("@apisuite/extension-ui-types").Hooks;
    constructor({ core, config }: BillingExtensionParams);
}
export default BillingExtension;
