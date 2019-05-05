const { Command } = require('@oclif/command');
const addItem = require('../utils/add');

class AddCommand extends Command {
  async run() {
    const { args } = this.parse(AddCommand);
    if (args.ITEM === undefined) {
      this.error('You forgot the item description');
    }
    addItem(this.config.dataDir, args.ITEM);
    this.log(`Successfully added '${args.ITEM}' in your todo list`);
  }
}

AddCommand.description = `Add an item to complete in your todo list
...
Example: todo add "Buy some ☕️ after work"`;

// AddCommand.flags = {
//   index: flags.string({
//     char: 'i',
//     description: 'The position in the todo list you wanto to see it',
//   }),
// };

AddCommand.args = [
  {
    name: 'ITEM',
    require: true,
    description: 'Item description',
  },
];

module.exports = AddCommand;
