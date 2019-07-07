const { cli } = require('cli-ux');
const { Command } = require('@oclif/command');
const CONSTANTS = require('../utils/constants');
const Storage = require('../utils/storage');

class CleanCommand extends Command {
  async run() {
    const { args } = this.parse(CleanCommand);

    if (args.LIST_TYPE === undefined) {
      this.error(CONSTANTS.CLEAN_EMPTY_LIST);
    }

    // Get the flag
    const is_all_lists = args.LIST_TYPE.default === 'all';

    // Confirm
    const prompt_msg = CONSTANTS.CLEAN_PROMPT_MSG(
      is_all_lists,
      args.LIST_TYPE.default.toUpperCase()
    );
    let input = await cli.confirm(prompt_msg);
    if (!input) return false;

    // Delete sections
    const storage = Storage.getInstance(this.config);
    let data = await storage.read();

    is_all_lists
      ? (data = CONSTANTS.DEFAULT_DATA)
      : (data[args.LIST_TYPE.default] = []);

    await storage.write(data);
  }
}

CleanCommand.description = `🧹  Clean items list
...
Example: todo clean --all
`;

CleanCommand.usage = `clean [FLAG]`;

CleanCommand.args = [
  {
    name: 'LIST_TYPE',
    require: true,
    description: 'List to remove items',
    parse: input => ({ default: input, short: input.charAt(0) }),
    options: ['todo', 'done', 'all'],
  },
];

module.exports = CleanCommand;
