const chalk = require('chalk');
const { Command } = require('@oclif/command');
const Storage = require('../utils/storage');

class ListCommand extends Command {
  async run() {
    const { args } = this.parse(ListCommand);

    const storage = Storage.getInstance(this.config);
    const data = await storage.read();

    const dataEmpty = () => chalk.yellow('Empty lists 📭')

    const dataTodo = () => {
      if (!data.todo.length) {
        return dataEmpty();
      }
      return data.todo.map(item => chalk.red(`[${item.id}] - ${item.desc}`));
    };

    const dataDone = () => {
      if (!data.done.length) {
        return dataEmpty();
      }
      return data.done.map(item => chalk.green(`[${item.id}] - ${item.desc}`));
    };




    // TODO: Can check in a list of possibles values. Review Args.
    if (args.TYPE === 'pending') {
      return console.log(`Pending: \n${dataTodo()}`);
    }

    if (args.TYPE === 'done') {
      return console.log(`Done: \n${dataDone()}`);
    }

    if (!data.todo.length && !data.done.length) {
      return console.log(dataEmpty());
    }

    console.log(`Pending: \n ${dataTodo()}\nDone: \n ${dataDone()}`);
  }
}

ListCommand.description = `🏷\tList of pending and done items`;

ListCommand.args = [
  {
    name: 'TYPE',
    require: true,
    description: `Items list. You can get pending or done items;`,
    options: ['pending', 'done'],
  },
];

module.exports = ListCommand;
