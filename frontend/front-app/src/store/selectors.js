const upperFirst = require("lodash/upperFirst");

const req = require.context(".", true, /\.\/.+\/selectors\.js$/);

req.keys().forEach(key => {
  const storeName = key.replace(/\.\/(.+)\/.+$/, "$1");
  const fromName = `from${upperFirst(storeName)}`;
  const selectors = req(key);

  module.exports[fromName] = {};

  Object.keys(selectors).forEach(name => {
    module.exports[fromName][name] = selectors[name];
  });
});
