import { AsyncStorage } from 'react-native';
import { APP_OPENED_TIMES_KEY } from './constants';

export const setAppOpenedTimes = async (appOpenedTimes) => {
  await AsyncStorage.setItem(APP_OPENED_TIMES_KEY, JSON.stringify(appOpenedTimes));
};

export const getAppOpenedTimes = async () => {
  return JSON.parse(await AsyncStorage.getItem(APP_OPENED_TIMES_KEY));
};
