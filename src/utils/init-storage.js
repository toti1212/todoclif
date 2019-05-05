const fs = require('fs');
const path = require('path');

module.exports = async function initStorage(dir) {
  try {
    const initJson = JSON.stringify(
      { root: true, todo: [], done: [] },
      null,
      2
    );
    if (!fs.existsSync(dir)) {
      await fs.mkdirSync(dir, { recursive: true }, error => {
        if (error) throw error;
      });
    }
    await fs.writeFile(path.join(dir, './data.json'), initJson, error => {
      if (error) throw error;
    });
    return true;
  } catch (err) {
    console.log(err);
    return err;
  }
};
