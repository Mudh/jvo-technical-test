import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducer from './reducers';

const middlewares = [ReduxThunk];
const appliedMiddlewares = applyMiddleware(...middlewares);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
  : [];

const enhancers = compose(
  appliedMiddlewares,
  ...devTools
);

const store = createStore(reducer, enhancers);

export default store;
