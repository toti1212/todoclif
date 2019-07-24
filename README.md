# todoclif

A CLI to tracking your list of pending and no procrastinate anymore

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todoclif.svg)](https://npmjs.org/package/todoclif)
[![Downloads/week](https://img.shields.io/npm/dw/todoclif.svg)](https://npmjs.org/package/todoclif)
[![License](https://img.shields.io/npm/l/todoclif.svg)](https://github.com/toti1212/todoclif/blob/master/LICENSE)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

[![asciicast](https://asciinema.org/a/1vZPqGb8ml2iZxUwSo9tFmG30.svg)](https://asciinema.org/a/1vZPqGb8ml2iZxUwSo9tFmG30)

# Usage

<!-- usage -->

```shell
$ npm install -g todoclif

$ todo COMMAND
running command...

$ todo --help [COMMAND]

USAGE
$ todo COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`todo add <ITEM>`](#todo-add-item)
- [`todo clean <LIST_TYPE> <INDEX>`](#todo-clean)
- [`todo done (<INDEX> | all)`](#todo-done-index)
- [`todo edit [INDEX]`](#todo-edit-index)
- [`todo list [TYPE]`](#todo-list-type)
- [`todo help [COMMAND]`](#todo-help-command)

## `📝 todo add <ITEM>`

Add an item to complete in your todo list

```
USAGE
  $ todo add <ITEM>

ARGUMENTS
  ITEM  Item description

DESCRIPTION
  ...
  Example: todo add "Buy some ☕️ after work"

ALIASES
  $ todo a
```

_See code: [src/commands/add.js](https://github.com/toti1212/todoclif/blob/v0.0.0/src/commands/add.js)_

## `🧹 todo clean <LIST_TYPE> <INDEX>`

Clean items list

```
USAGE
  $ todo clean <LIST_TYPE> <INDEX>

OPTIONS
   a, all   all lists
   d, done  done list
   t, todo  todo list

DESCRIPTION
  ...
  Example:
  $ todo clean todo
  $ todo clean all
  $ todo clean done 1

ALIASES
  $ todo cl
  $ todo c
```

_See code: [src/commands/clean.js](https://github.com/toti1212/todoclif/blob/v0.0.0/src/commands/clean.js)_

## `✅ todo done (<INDEX> | all)`

Mark as done a pending item

```
USAGE
  $ todo done (<INDEX> | all)

ARGUMENTS
  INDEX  Todo item identifier
  all    Command to mark all items as done

DESCRIPTION
  ...
  Example:
  $ todo done 1
  $ todo done all

ALIASES
  $ todo d
```

_See code: [src/commands/done.js](https://github.com/toti1212/todoclif/blob/v0.0.0/src/commands/done.js)_

## `✍️ todo edit <ID> "<DESC>"`

Edit a todo item destription

```
USAGE
  $ todo edit <ID> "<DESC>"

ARGUMENTS
  ID    Item ID identifier
  DESC  New description

DESCRIPTION
  ...
  Example: todo edit 1 "The new description 🙈"

ALIASES
  $ todo e
```

_See code: [src/commands/done.js](https://github.com/toti1212/todoclif/blob/v0.0.0/src/commands/done.js)_

## `🏷 todo list (todo|done)`

List of pending and done items

```
USAGE
  $ todo list (todo|done)

ARGUMENTS
  TYPE  (todo|done) Items list. You can get pending or done items;

DESCRIPTION
  ...
  Example:
  $ todo list
  $ todo list todo
  $ todo list done

ALIASES
  $ todo ls
  $ todo l
```

_See code: [src/commands/list.js](https://github.com/toti1212/todoclif/blob/v0.0.0/src/commands/list.js)_

## `🆘 todo help [COMMAND]`

display help for todo

```
USAGE
  $ todo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

<!-- commandsstop -->
