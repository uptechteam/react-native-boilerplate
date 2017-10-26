import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import { mainStore, mainEpic } from './main/duck';

export const rootEpic = combineEpics(
  mainEpic,
);

export const rootReducer = combineReducers({
  mainStore,
});
