const { cli } = require('cli-ux');
const { Command } = require('@oclif/command');
const chalk = require('chalk');
const CONSTANTS = require('../utils/constants');
const Storage = require('../utils/storage');

class DoneCommand extends Command {
  async run() {
    const { args } = this.parse(DoneCommand);
    const storage = Storage.getInstance(this.config);

    const data = await storage.read();

    if (!isNaN(args.INDEX)) {
      const item = data.todo[args.INDEX - 1];
      if (item) {
        data.todo.splice(args.INDEX - 1, 1);
        data.done.push(item);
        storage.write(data);

        this.log(chalk.green(CONSTANTS.DONE_ITEM_MARKED(args.INDEX)));
      } else {
        this.log(chalk.yellow(CONSTANTS.DONE_INCORRECT_INDEX(args.INDEX)));
      }
    } else if (args.INDEX === 'all') {
      // Confirm
      let input = await cli.confirm(CONSTANTS.DONE_PROMPT_MSG);
      if (!input) return false;

      data.done = data.done.concat(data.todo);
      data.todo = CONSTANTS.DEFAULT_DATA.todo;
      storage.write(data);
      this.log(chalk.green(CONSTANTS.DONE_ALL_MARKED));
    } else {
      this.log(chalk.yellow(CONSTANTS.DONE_INCORRECT_INDEX(args.INDEX)));
    }
  }
}

// Command config
DoneCommand.aliases = ['d'];
DoneCommand.args = [
  {
    name: 'INDEX',
    description: 'Todo item identifier',
    require: true,
  },
];
DoneCommand.description = `✅  Mark as done a pending item
...
Example:
$ todo done 1
$ todo done all
`;
DoneCommand.usage = 'done (<INDEX> | all)';

module.exports = DoneCommand;
