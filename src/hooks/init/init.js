const Storage = require('../../utils/storage');

module.exports = async function (opts) {
  const storage = Storage.getInstance(opts.config);
  const result = storage.checkInit();
  if (!result)
    console.warn('No database exists. Maybe you need to run init command \n');
};
