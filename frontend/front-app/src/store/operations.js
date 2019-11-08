// ACTIONS EXPORT /////////////////////////////////////////////

const req = require.context('.', true, /\.\/.+\/operations\.js$/);

req.keys().forEach(key => {
  const operations = req(key);

  Object.keys(operations).forEach(name => {
    module.exports[name] = operations[name];
  });
});
