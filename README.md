starwars
========

This is a cool CLI for Smarttbot

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/starwars.svg)](https://npmjs.org/package/starwars)
[![Downloads/week](https://img.shields.io/npm/dw/starwars.svg)](https://npmjs.org/package/starwars)
[![License](https://img.shields.io/npm/l/starwars.svg)](https://github.com/CLI-Starwars-js/starwars/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g starwars
$ starwars COMMAND
running command...
$ starwars (-v|--version|version)
starwars/0.0.0 linux-x64 node-v10.15.0
$ starwars --help [COMMAND]
USAGE
  $ starwars COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`starwars hello`](#starwars-hello)
* [`starwars help [COMMAND]`](#starwars-help-command)
* [`starwars vehicle`](#starwars-vehicle)

## `starwars hello`

Say hello for someone, or for everyone!

```
USAGE
  $ starwars hello

OPTIONS
  -n, --name=name  Name to say hello

DESCRIPTION
  If you want to say hello for someone, try something like this two examples:

  $ starwars hello -n=Eduardo
  $ starwars hello --name=Eduardo
```

_See code: [src/commands/hello.js](https://github.com/CLI-Starwars-js/starwars/blob/v0.0.0/src/commands/hello.js)_

## `starwars help [COMMAND]`

display help for starwars

```
USAGE
  $ starwars help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `starwars vehicle`

Describe the command here

```
USAGE
  $ starwars vehicle

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/vehicle.js](https://github.com/CLI-Starwars-js/starwars/blob/v0.0.0/src/commands/vehicle.js)_
<!-- commandsstop -->
