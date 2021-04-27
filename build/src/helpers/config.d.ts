import { BillingExtensionConfig } from 'config';
interface Config {
    (): BillingExtensionConfig;
    set: (conf: Record<string, unknown>) => void;
}
declare const config: Config;
export default config;
