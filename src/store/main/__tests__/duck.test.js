import { ActionsObservable } from 'redux-observable';
import configureStore from 'redux-mock-store';

import reducer, {
  initApp,
  SET_APP_OPENED_TIMES,
  initAppEpic,
  restoreAppOpenedCountObservable,
  increaseAppOpenedCountObservable,
} from '../duck';

const TEST_STORE_DATA = 1;
const TEST_DATA = 2;

jest.mock('../methods', () => {
  return {
    getAppOpenedTimes: jest.fn()
      .mockImplementation(() => new Promise(resolve => resolve(2))),
    setAppOpenedTimes: jest.fn()
      .mockImplementation(() => new Promise(resolve => resolve())),
  };
});

describe('restoreAppOpenedCountObservable', () => {
  it('should emit SET_APP_OPENED_TIMES action with app openedcount in payload', () => {
    const expectedOutputActionType = SET_APP_OPENED_TIMES;

    return restoreAppOpenedCountObservable()
      .toPromise()
      .then(({ type, payload }) => {
        expect(type).toEqual(expectedOutputActionType);
        expect(payload).toBeInstanceOf(Object);
        expect(payload.appOpenedTimes).toEqual(TEST_DATA);
      });
  });
});

describe('increaseAppOpenedCountObservable', () => {
  it('should emit SET_APP_OPENED_TIMES action with app opened count in payload', () => {
    const expectedOutputActionType = SET_APP_OPENED_TIMES;
    const mockStore = configureStore();
    const getState = {
      mainStore: {
        appOpenedTimes: TEST_STORE_DATA,
      },
    };

    const store = mockStore(getState);
    return increaseAppOpenedCountObservable(store)
      .toPromise()
      .then(({ type, payload }) => {
        expect(type).toEqual(expectedOutputActionType);
        expect(payload).toBeInstanceOf(Object);
        expect(payload.appOpenedTimes).toEqual(TEST_DATA);
      });
  });
});

describe('initApp', () => {
  it('should emit SET_APP_OPENED_TIMES action with app opened count in payload', () => {
    const expectedOutputActionType = SET_APP_OPENED_TIMES;
    const mockStore = configureStore();
    const getState = {
      mainStore: {
        appOpenedTimes: TEST_STORE_DATA,
      },
    };

    const store = mockStore(getState);
    const action$ = ActionsObservable.of(initApp());
    return initAppEpic(action$, store)
      .toPromise()
      .then(({ type, payload }) => {
        expect(type).toEqual(expectedOutputActionType);
        expect(payload).toBeInstanceOf(Object);
        expect(payload.appOpenedTimes).toEqual(TEST_DATA);
      });
  });
});
