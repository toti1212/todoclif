const fs = require('fs');
const path = require('path');

module.exports = async function checkStorage(opts) {
  try {
    if (fs.existsSync(opts.dataDir)) {
      await fs.readFileSync(path.join(opts.dataDir, './data.json'), err => {
        if (err) throw err;
      });
      return true;
    }
  } catch (err) {
    return false;
  }
};
