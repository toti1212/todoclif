const { Command } = require('@oclif/command');
const chalk = require('chalk');
const Storage = require('./storage');

const list = async (type) => {
  const storage = Storage.getInstance(this.config);
  const data = await storage.read();

  const dataEmpty = () => chalk.yellow(CONSTANTS.LIST_EMPTY);

  if (type === 'todo') {
    if (!data.todo.length) {
      return dataEmpty();
    }
    let resultTodo = '';
    data.todo.map(
      (item, idx) =>
        (resultTodo += chalk.red(`[${idx + 1}] - ${item.desc}\n`))
    );
    return resultTodo;
  }
    
  if (type === 'done') {
    if (!data.done.length) {
      return dataEmpty();
    }
    let resultDone = '';
    data.done.map(
      (item, idx) =>
        (resultDone += chalk.green(`[${idx + 1}] - ${item.desc}\n`))
    );
    return resultDone;
  }
}

module.exports = list



