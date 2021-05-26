import { i18n } from '@kbn/i18n';
//import $ from 'jquery';
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

    $(document).ready( function(){
      var existCondition = setInterval(function() {
        if ($('#globalHeaderBars').length) {
           console.log("Exists!");
           clearInterval(existCondition);
           $('.euiHeader--dark').before(`"<div id='top-banner' style='
           width: 100%; 
           position: fixed; 
           z-index: 1040;
           white-space: nowrap; 
           top:0;'>
           <h5 class='banner-text' 
                style='background-color: ${config.bg_color} !important; 
                color: ${config.fg_color}; text-align: center; 
                font-family: Ropa Sans, sans-serif !important; 
                margin-bottom: 0.5px; 
                margin-top: 0px;'>${config.text}</h5></div>"`);
          $('.euiHeader--dark').css({marginTop: '0.85%'});
          $('.euiHeader--default').css({marginTop: '0.8%'});
          $('.banner-text').css("line-height", 1.2);
          $('.content').append(`"<div id='bottom-banner' style='
          width: 100%; 
          position: fixed; 
          z-index: 1040;
          white-space: nowrap; 
          bottom:0;'>
          <h5 class='banner-text' 
               style='background-color: ${config.bg_color} !important; 
               color: ${config.fg_color}; text-align: center; 
               font-family: Ropa Sans, sans-serif !important; 
               margin-bottom: 0.5px; 
               margin-top: 0px;'>${config.text}</h5></div>"`);
        }
       }, 100); // check every 100ms
    });


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
