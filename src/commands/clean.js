const { cli } = require('cli-ux');
const { Command } = require('@oclif/command');
const Storage = require('../utils/storage');
const CONSTANTS = require('../utils/constants');

class CleanCommand extends Command {
  async run() {
    const { args } = this.parse(CleanCommand);

    if (args.LIST_TYPE === undefined) {
      this.error('Which list do you want to clean?');
    }

    // Get the flag
    const all_items = args.LIST_TYPE.default === 'all';

    // Confirm
    const prompt_msg = `🤔 Are you sure you want to delete ${
      all_items
        ? 'ALL items'
        : `all ${args.LIST_TYPE.default.toUpperCase()} items`
    }? \(Yes/No)`;
    let input = await cli.confirm(prompt_msg);
    if (!input) return false;

    // Delete sections
    const storage = Storage.getInstance(this.config);
    let data = await storage.read();

    all_items
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
