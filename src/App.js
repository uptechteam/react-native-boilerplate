import { Navigation } from 'react-native-navigation';

import MainScreen from './containers/MainScreen';

export const initiateNavigatorScreen = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'MainScreen',
      title: 'MainScreen',
    },
    navigatorStyle: {
      navBarTitleTextCentered: true,
    },
    animationType: 'slide-down',
    appStyle: {
      orientation: 'portrait',
    },
    overrideBackPress: true,
  });
};

export function registerScreens(store, Provider) {
  Navigation.registerComponent('MainScreen', () => MainScreen, store, Provider);

  initiateNavigatorScreen();
}
