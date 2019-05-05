const { Command } = require('@oclif/command');
const initStorage = require('../utils/init-storage');

class InitCommand extends Command {
  async run() {
    const result = await initStorage(this.config.dataDir);
    if (result) console.log('Todo app init successfully');
  }
}

InitCommand.description = `Initialize the database to save tasks`;

module.exports = InitCommand;
