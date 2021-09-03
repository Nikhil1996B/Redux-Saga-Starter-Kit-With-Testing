import {
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
} from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { History } from 'history';
import { createReducer } from '../reducers/reducers';

export function configureAppStore(
  initialState: {} = {},
  history: History
) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;


  // ======================================================
  // Middleware Configuration
  // ======================================================
  // Create the store with saga middleware
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];


  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[];


  // ======================================================
  // Store Instantiation
  // ======================================================
  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== 'production' ||
      process.env.PUBLIC_URL.length > 0,
    enhancers,
  });

  return store;
}
