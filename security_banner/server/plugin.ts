import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { SecurityBannerPluginSetup, SecurityBannerPluginStart } from './types';
import { defineRoutes } from './routes';

export class SecurityBannerPlugin
  implements Plugin<SecurityBannerPluginSetup, SecurityBannerPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('securityBanner: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('securityBanner: Started');
    return {};
  }

  public stop() {}
}
