const { Command } = require('@oclif/command');
const chalk = require('chalk');
const Storage = require('../utils/storage');

class AddCommand extends Command {
  async run() {
    const { args } = this.parse(AddCommand);
    if (args.ITEM === undefined) {
      this.error('You forgot the item description');
    }
    const storage = Storage.getInstance(this.config);
    const data = await storage.read();

    // TODO: Make more complex item for filter and tag
    // Simle item
    const item = {
      desc: args.ITEM,
    };

    data.todo.push(item);

    await storage.write(data);
    this.log(
      chalk.green(`Successfully added '${args.ITEM}' in your todo list  ✅`)
    );
  }
}

AddCommand.description = `📝\tAdd an item to complete in your todo list
...
Example: todo add "Buy some ☕️ after work"`;

AddCommand.args = [
  {
    name: 'ITEM',
    require: true,
    description: 'Item description',
  },
];

module.exports = AddCommand;
