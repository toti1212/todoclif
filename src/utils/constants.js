module.exports = {
  DEFAULT_DATA: { root: true, todo: [], done: [] },
  // add
  ADD_EMPTY_ITEM: 'You forgot the item description',
  SUCESSFULLY_ADDED: item =>
    `✅ Successfully added '${item}' in your todo list`,
  // clean
  CLEAN_EMPTY_LIST: 'Which list do you want to clean?',
  CLEAN_PROMPT_MSG: (is_all_lists, list) =>
    `🤔 Are you sure you want to delete ${
      is_all_lists ? 'ALL items' : `all ${list} items`
    }? \(Yes/No)`,
  // done
  DONE_INCORRECT_INDEX: index =>
    `⚠️  Does not exists an item with ID '${index}'`,
  // list
  LIST_EMPTY: '📭 Empty lists',
  LIST_TODOS: todos => `📆 Todo\n${todos()}`,
  LIST_DONES: dones => `✅ Done\n${dones()}`,
};
