const { Command } = require('@oclif/command');
const chalk = require('chalk');
const CONSTANTS = require('../utils/constants');
const list = require('../utils/list');
class ListCommand extends Command {
  async run() {
    const { args } = this.parse(ListCommand);

    // TODO: Can check in a list of possibles values. Review Args.
    if (args.TYPE === 'todo') {
      const dataTodo = await list('todo');
      return this.log(CONSTANTS.LIST_TODOS(dataTodo));
    }

    if (args.TYPE === 'done') {
      const dataDone = await list('done');
      return this.log(CONSTANTS.LIST_DONES(dataDone));
    }

    const dataTodo = await list('todo');
    const dataDone = await list('done');

    if (!dataTodo && !dataDone) {
      return this.log(dataTodo);
    }

    this.log(
      `${CONSTANTS.LIST_TODOS(dataTodo)}\n\n${CONSTANTS.LIST_DONES(dataDone)}`
    );
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
