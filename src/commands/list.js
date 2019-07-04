const chalk = require('chalk');
const { Command } = require('@oclif/command');
const Storage = require('../utils/storage');

class ListCommand extends Command {
  async run() {
    const { args } = this.parse(ListCommand);

    const storage = Storage.getInstance(this.config);
    const data = await storage.read();

    const dataEmpty = () => chalk.yellow('Empty lists 📭');

    const dataTodo = () => {
      if (!data.todo.length) {
        return dataEmpty();
      }
      let resultTodo = '';
      data.todo.map(
        (item, idx) =>
          (resultTodo += chalk.red(`[${idx + 1}] - ${item.desc}\n`))
      );
      return resultTodo;
    };

    const dataDone = () => {
      if (!data.done.length) {
        return dataEmpty();
      }
      let resultDone = '';
      data.done.map(
        (item, idx) =>
          (resultDone += chalk.green(`[${idx + 1}] - ${item.desc}\n`))
      );
      return resultDone;
    };

    // TODO: Can check in a list of possibles values. Review Args.
    if (args.TYPE === 'todo') {
      return console.log(`Todo  📆\n${dataTodo()}`);
    }

    if (args.TYPE === 'done') {
      return console.log(`Done  ✅\n${dataDone()}`);
    }

    if (!data.todo.length && !data.done.length) {
      return console.log(dataEmpty());
    }

    console.log(`Todo  📆\n${dataTodo()}\n\nDone  ✅\n${dataDone()}`);
  }
}

ListCommand.description = `🏷\tList of to do and done items`;

ListCommand.args = [
  {
    name: 'TYPE',
    require: true,
    description: `Items list. You can get to do or done items;`,
    options: ['todo', 'done'],
  },
];

module.exports = ListCommand;
