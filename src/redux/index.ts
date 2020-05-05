import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas/rootSaga';
import { rootReducer } from '@src/redux/rootReducer';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);

sagaMiddleWare.run(rootSaga);
