import { rootReducer } from './reducers/rootReducer';
import { rootSaga } from './sagas/rootSaga';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(rootSaga);

export type T_RootState = ReturnType<typeof store.getState>;
export type T_Dispatch = typeof store.dispatch;

export { store };
