const fs = require('fs');
const path = require('path');
const CONSTANTS = require('../utils/constants');

let instance = null;

class Storage {
  constructor(config) {
    if (!instance) {
      this.dataDir = config.dataDir;
      this.fileName = './data.json';
      this.fullPath = path.join(this.dataDir, this.fileName);
      instance = this;
    }

    return instance;
  }

  async read() {
    return JSON.parse(await fs.readFileSync(this.fullPath));
  }

  async checkInit() {
    try {
      const initJson = JSON.stringify(CONSTANTS.DEFAULT_DATA, null, 2);
      if (!fs.existsSync(this.dataDir)) {
        await fs.mkdirSync(this.dataDir, { recursive: true }, error => {
          if (error) throw error;
        });
      }
      if (!fs.existsSync(this.fullPath)) {
        await fs.writeFileSync(this.fullPath, initJson, error => {
          if (error) throw error;
        });
      }
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async write(data) {
    await fs.writeFileSync(
      this.fullPath,
      JSON.stringify(data),
      'utf8',
      error => {
        if (error) throw error;
      }
    );
  }

  static getInstance(config) {
    if (instance === null) {
      instance = new Storage(config);
    }
    return instance;
  }
}

module.exports = Storage;
