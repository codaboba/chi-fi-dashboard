import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggingMiddleware from 'redux-logger';
import reducer from './reducer';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggingMiddleware)
);

export default store;
