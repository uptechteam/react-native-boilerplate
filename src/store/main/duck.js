import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Rx';

import {
  getAppOpenedTimes,
  setAppOpenedTimes,
} from './methods';

/*
  Action types
*/
const INIT_APP = 'uptech/main/INIT_APP';
export const SET_APP_OPENED_TIMES = 'uptech/main/SET_APP_OPENED_TIMES';

/*
  Initial state
*/
const initialState = {
  appOpenedTimes: 0,
};

/*
  Reducer
*/
export function mainStore(state = initialState, action = {}) {
  switch (action.type) {
    case SET_APP_OPENED_TIMES:
      return {
        ...state,
        appOpenedTimes: action.payload.appOpenedTimes,
      };

    default: {
      return state;
    }
  }
}

/*
  Action creators
*/
export function initApp() {
  return {
    type: INIT_APP,
  };
}

/*
  Epics
*/
export const initAppEpic = (action$, store) => {
  return action$
    .ofType(INIT_APP)
    .flatMap(() => Observable.concat(
      restoreAppOpenedCountObservable(),
      increaseAppOpenedCountObservable(store),
    ));
};


/*
  Export Observables
*/

export const restoreAppOpenedCountObservable = () => (
  Observable.defer(() => (
    Observable.fromPromise(getAppOpenedTimes())
      .map(appOpenedTimes => ({
        type: SET_APP_OPENED_TIMES,
        payload: {
          appOpenedTimes,
        },
      }))
  ))
);

export const increaseAppOpenedCountObservable = store => (
  Observable.defer(() => {
    const appOpenedTimes = store.getState().mainStore.appOpenedTimes + 1;
    return Observable.fromPromise(setAppOpenedTimes(appOpenedTimes))
      .mapTo({
        type: SET_APP_OPENED_TIMES,
        payload: {
          appOpenedTimes,
        },
      });
  })
);


/*
  Export Epics
*/
export const mainEpic = combineEpics(
  initAppEpic,
);
