import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';

import { rootEpic, rootReducer } from './index';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = [
  epicMiddleware,
  logger,
];

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    applyMiddleware(...middleware),
  );
}
