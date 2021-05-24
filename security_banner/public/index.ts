import './index.scss';


import { SecurityBannerPlugin } from './plugin';
import { PluginInitializerContext } from '../../../src/core/public';


// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin(initializerContext: PluginInitializerContext) {
  return new SecurityBannerPlugin(initializerContext);
}
export { SecurityBannerPluginSetup, SecurityBannerPluginStart } from './types';
