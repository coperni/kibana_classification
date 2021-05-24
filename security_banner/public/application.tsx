import React from 'react';
import ReactDOM from 'react-dom';
import { AppMountParameters, CoreStart } from '../../../src/core/public';
import { AppPluginStartDependencies } from './types';
import { SecurityBannerApp } from './components/app';

export const renderApp = (
  { notifications, http }: CoreStart,
  { navigation }: AppPluginStartDependencies,
  { appBasePath, element }: AppMountParameters,
   classification_text  : string,
   background_color : string
) => {
  ReactDOM.render(
    <SecurityBannerApp
      basename={appBasePath}
      notifications={notifications}
      http={http}
      navigation={navigation}
    />,
    element
  );
  console.log(classification_text);
  console.log(background_color); 

  return () => ReactDOM.unmountComponentAtNode(element);
};
