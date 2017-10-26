import { Alert } from 'react-native';
// import { AUTH_DATA_STORAGE_KEY } from './constants'; // for token based authorization

const handleNetworkError = () => {
  Alert.alert(
    'Internet connection error',
    'Please check your internet connection and try again',
  );
};

const handleHTTPErrors = (res) => {
  if (res.ok) return res;
  return res.json().then((err) => { throw err; });
};

// for testing purposes only
// make api work like it is completes with error (for example 500 error)
const fakeHandleHTTPErrors = (res) => {
  return res.json().then((err) => { throw err; });
};

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export default (url, options) => {
  // const { token } = JSON.parse(await AsyncStorage.getItem(AUTH_DATA_STORAGE_KEY) || '{}'); // for token based authorization

  let authAddedOptions = options;
  if (typeof options !== 'object') {
    authAddedOptions = {};
  }
  if (typeof authAddedOptions.headers !== 'object') {
    authAddedOptions.headers = {};
  }
  // if (token) { // for token based authorization
  //   defaultHeaders.Authorization = token;
  // }
  authAddedOptions.headers = {
    ...defaultHeaders,
    ...authAddedOptions.headers,
  };
  return fetch(url, authAddedOptions).then(handleHTTPErrors, handleNetworkError);
};
