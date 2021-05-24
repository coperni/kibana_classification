import { i18n } from '@kbn/i18n';
import $ from 'jquery';
import {CoreSetup, CoreStart, Plugin, PluginInitializerContext } from '../../../src/core/public';
import {
  SecurityBannerPluginSetup,
  SecurityBannerPluginStart,
  ClientConfigType,
} from './types';
import { PLUGIN_NAME } from '../common';

export class SecurityBannerPlugin
  implements Plugin<SecurityBannerPluginSetup, SecurityBannerPluginStart> {
    // @ts-ignore : initializerContext not used
  constructor(private readonly initializerContext: PluginInitializerContext) {}
    
  public setup(core: CoreSetup): SecurityBannerPluginSetup {
    const config = this.initializerContext.config.get<ClientConfigType>();

    // Register an application into the side navigation menu
    // core.application.register({
    //   id: 'securityBanner',
    //   title: PLUGIN_NAME,
    //   async mount(params: AppMountParameters) {
    //     // Load application bundle
    //     const { renderApp } = await import('./application');
    //     // Get start services as specified in kibana.json
    //     const [coreStart, depsStart] = await core.getStartServices();
    //     // Render the application
    //     return renderApp(coreStart, depsStart as AppPluginStartDependencies, params, config.text, config.bg_color);
    //   },
    // });
    $(document).ready( function(){
      var existCondition = setInterval(function() {
        if ($('#globalHeaderBars').length) {
           console.log("Exists!");
           clearInterval(existCondition);
           $('#globalHeaderBars').prepend('<h5 style="text-align:center;background-color:green">sdsd</h5>');
        }
       }, 100); // check every 100ms
    });

    const top_banner = { style : {
      color: "white",
      backgroundColor: config.bg_color,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 11000,
      textAlign: "center"
      },
    id : 'classificationBanner',
    className: 'topBanner'};


    // Return methods that should be available to other plugins
    return {
      getGreeting() {
        return i18n.translate('securityBanner.greetingText', {
          defaultMessage: 'Hello from {name}!',
          values: {
            name: PLUGIN_NAME,
          },
        });
      },
    };
  }

  public start(core: CoreStart): SecurityBannerPluginStart {
    console.log("Starting now");
    return {};
  }

  public stop() {}
}
