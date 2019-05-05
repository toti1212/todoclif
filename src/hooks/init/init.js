const checkStorage = require('../../utils/check-storage');

module.exports = async function(opts) {
  const result = await checkStorage(opts.config);
  if (!result)
    console.warn('No database exists. Maybe you need to run init command \n');
};
