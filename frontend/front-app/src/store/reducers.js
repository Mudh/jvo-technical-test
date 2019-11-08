import { combineReducers } from 'redux';

// REDUCERS EXPORT /////////////////////////////////////////////

const reducers = {};

const req = require.context('.', true, /\.\/.+\/reducers\.js$/);

req.keys().forEach(key => {
  const storeName = key.replace(/\.\/(.+)\/.+$/, '$1');
  reducers[storeName] = req(key).default;
});

export default combineReducers(reducers);
