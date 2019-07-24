const { cli } = require('cli-ux');
const { Command } = require('@oclif/command');
const chalk = require('chalk');
const CONSTANTS = require('../utils/constants');
const Storage = require('../utils/storage');

class CleanCommand extends Command {
  async run() {
    const { args } = this.parse(CleanCommand);

    if (args.LIST_TYPE === undefined) {
      this.error(CONSTANTS.CLEAN_EMPTY_LIST);
    }

    const storage = Storage.getInstance(this.config);
    let data = await storage.read();

    const listName = args.LIST_TYPE.default;
    const isListNameAll = listName === 'all';

    if (isNaN(args.INDEX)) {
      const promptMsg = CONSTANTS.CLEAN_PROMPT_MSG(
        isListNameAll,
        listName.toUpperCase()
      );

      // Confirmation
      let input = await cli.confirm(promptMsg);
      if (!input) return false;

      // Change the items
      if (isListNameAll) data = CONSTANTS.DEFAULT_DATA;
      else {
        data[listName] = [];
      }
    } else if (!isListNameAll === false) {
      const item = data[listName][args.INDEX - 1];

      if (item) {
        data[listName].splice(args.INDEX - 1, 1);
      } else {
        this.log(
          chalk.yellow(CONSTANTS.CLEAN_INCORRECT_INDEX(args.INDEX, listName))
        );
        return;
      }
    } else {
      this.log(chalk.yellow(CONSTANTS.CLEAN_ALL_LIST_BAD_INDEX));
      return;
    }
    await storage.write(data);
  }
}

CleanCommand.description = `🧹\tClean items list
...
Example:
$ todo clean todo
$ todo clean all
$ todo clean done 1
`;

CleanCommand.usage = 'clean [LIST_TYPE] [INDEX]';

CleanCommand.args = [
  {
    name: 'LIST_TYPE',
    require: true,
    description: 'List to remove items',
    parse: input => ({ default: input, short: input.charAt(0) }),
    options: ['todo', 'done', 'all'],
  },

  {
    name: 'INDEX',
    require: false,
    description: 'Item index',
  },
];

module.exports = CleanCommand;
