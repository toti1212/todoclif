todo-bash
=========

A bash app to tracking your list of pending and no procrastinate anymore

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todo-bash.svg)](https://npmjs.org/package/todo-bash)
[![Downloads/week](https://img.shields.io/npm/dw/todo-bash.svg)](https://npmjs.org/package/todo-bash)
[![License](https://img.shields.io/npm/l/todo-bash.svg)](https://github.com/toti1212/todo-bash/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todo-bash
$ todo COMMAND
running command...
$ todo (-v|--version|version)
todo-bash/0.0.0 darwin-x64 node-v8.11.4
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todo list [TYPE]`](#todo-list-type)
* [`todo add [ITEM]`](#todo-add-item)
* [`todo done [INDEX]`](#todo-done-index)
* [`todo help [COMMAND]`](#todo-help-command)

## `todo list [TYPE]`

🏷	List of pending and done items

```
USAGE
  $ todo list [TYPE]

ARGUMENTS
  TYPE  (pending|done) Items list. You can get pending or done items;
```

_See code: [src/commands/list.js](https://github.com/toti1212/todo-bash/blob/v0.0.0/src/commands/list.js)_
<!-- commandsstop -->

## `todo add [ITEM]`

📝	Add an item to complete in your todo list

```
USAGE
  $ todo add [ITEM]

ARGUMENTS
  ITEM  Item description

DESCRIPTION
  ...
  Example: todo add "Buy some ☕️ after work"
```

_See code: [src/commands/add.js](https://github.com/toti1212/todo-bash/blob/v0.0.0/src/commands/add.js)_

## `todo done [INDEX]`

✅	Mark as done a pending item

```
USAGE
  $ todo done [INDEX]

ARGUMENTS
  INDEX  Todo item identifier

DESCRIPTION
  ...
  Example: todo done 1
```

_See code: [src/commands/done.js](https://github.com/toti1212/todo-bash/blob/v0.0.0/src/commands/done.js)_

## `todo help [COMMAND]`

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
