import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface SecurityBannerPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SecurityBannerPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}

export interface ClientConfigType {
  text: string;
  bg_color: string;
  fg_color: string;
}
