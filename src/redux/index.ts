import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from '../sagas/rootSaga';
import { rootReducer } from '@src/redux/rootReducer';

const sagaMiddleWare = createSagaMiddleware();
const createDebugger = require('redux-flipper').default;

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare, createDebugger()),
);

sagaMiddleWare.run(rootSaga);
