const { Command } = require('@oclif/command');
const CONSTANTS = require('../utils/constants');
const chalk = require('chalk');
const Storage = require('../utils/storage');

class EditCommand extends Command {
  async run() {
    const { args } = this.parse(EditCommand);

    const item_id = parseInt(args.ID);

    if (!item_id || item_id <= 0) {
      this.error(CONSTANTS.EDIT_INCORRECT_ID);
    }

    if (!args.DESC) {
      this.error(CONSTANTS.EDIT_EMPTY_DESC);
    }

    const storage = Storage.getInstance(this.config);
    let data = await storage.read();
    try {
      data.todo[item_id - 1].desc = args.DESC;
      storage.write(data);
      this.log(chalk.green(CONSTANTS.EDIT_SUCCESSFULLY_EDITED));
    } catch (error) {
      this.error(CONSTANTS.EDIT_INCORRECT_ID);
    }
  }
}

EditCommand.description = `✍️\tEdit a todo item destription
...
Example: todo edit 1 "The new description 🙈"
`;
EditCommand.usage = `edit [ITEM ID] "[NEW DESRIPTION]"`;
EditCommand.aliases = ['e'];
EditCommand.args = [
  {
    name: 'ID',
    require: true,
    description: 'Item ID identifier',
  },
  {
    name: 'DESC',
    require: true,
    description: 'New description',
  },
];

module.exports = EditCommand;
