const fs = require('fs');
const path = require('path');
const { Command } = require('@oclif/command');

module.exports = async function addItem(dir, desc) {
  if (!desc) throw new Error('No description for this item');
  let data = JSON.parse(await fs.readFileSync(path.join(dir, './data.json')));

  const item = {
    id: data.todo.length + 1 || 0,
    desc,
  };

  data.todo.push(item);

  await fs.writeFileSync(
    path.join(dir, './data.json'),
    JSON.stringify(data),
    'utf8',
    error => {
      if (error) throw error;
    }
  );
  return true;
};
