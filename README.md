starwars
========

This is a cool CLI for Smarttbot

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
<!-- [![Version](https://img.shields.io/npm/v/starwars.svg)](https://npmjs.org/package/starwars) -->
<!-- [![Downloads/week](https://img.shields.io/npm/dw/starwars.svg)](https://npmjs.org/package/starwars) -->
<!-- [![License](https://img.shields.io/npm/l/starwars.svg)](https://github.com/CLI-Starwars-js/starwars/blob/master/package.json) -->

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ git clone https://github.com/zEduardofaria/CLI-Starwars-js.git

$ cd CLI-Starwars-js

$ npm install

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
* [`starwars film`](#starwars-film)
* [`starwars hello`](#starwars-hello)
* [`starwars help [COMMAND]`](#starwars-help-command)
* [`starwars people`](#starwars-people)
* [`starwars pilot`](#starwars-pilot)
* [`starwars planet`](#starwars-planet)
* [`starwars specie`](#starwars-specie)
* [`starwars starship`](#starwars-starship)
* [`starwars vehicle`](#starwars-vehicle)

## `starwars film`

Get Films information

```
USAGE
  $ starwars film

OPTIONS
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-separated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=foo
  --id=id            Search for an ID
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --sort=sort        property to sort by (prepend '-' for descending)

DESCRIPTION
  ...
  You can search for all Films in the API, or search for a single one by the ID

EXAMPLES
  $ starwars film
  $ starwars film --id="1"
  $ starwars --filter="title=New"
```

_See code: [src/commands/film.js](https://github.com/CLI-Starwars-js/starwars/blob/v0.0.0/src/commands/film.js)_

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

## `starwars people`

Get People information

```
USAGE
  $ starwars people

OPTIONS
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-separated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=foo
  --id=id            Search for an ID
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --sort=sort        property to sort by (prepend '-' for descending)

DESCRIPTION
  ...
  You can search for all People in the API, or search for a single one by the ID

EXAMPLES
  $ starwars people
  $ starwars people --id="4"
  $ starwars --filter="name=Luke"
```

_See code: [src/commands/people.js](https://github.com/CLI-Starwars-js/starwars/blob/v0.0.0/src/commands/people.js)_

## `starwars pilot`

Search for the best pilots of the galaxy!

```
USAGE
  $ starwars pilot

OPTIONS
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-separated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=foo
  --id=id            Search for an ID
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --sort=sort        property to sort by (prepend '-' for descending)

DESCRIPTION
  ...
  This command brings pilot's vehicle information, including name and max atmosphering speed
```

_See code: [src/commands/pilot.js](https://github.com/CLI-Starwars-js/starwars/blob/v0.0.0/src/commands/pilot.js)_

## `starwars planet`

Get Planets information

```
USAGE
  $ starwars planet

OPTIONS
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-separated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=foo
  --id=id            Search for an ID
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --sort=sort        property to sort by (prepend '-' for descending)

DESCRIPTION
  ...
  You can search for all Planets in the API, or search for a single one by the ID

EXAMPLES
  $ starwars planet
  $ starwars planet --id="1"
  $ starwars --filter="name=Sand"
```

_See code: [src/commands/planet.js](https://github.com/CLI-Starwars-js/starwars/blob/v0.0.0/src/commands/planet.js)_

## `starwars specie`

Get Species information

```
USAGE
  $ starwars specie

OPTIONS
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-separated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=foo
  --id=id            Search for an ID
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --sort=sort        property to sort by (prepend '-' for descending)

DESCRIPTION
  ...
  You can search for all Species in the API, or search for a single one by the ID

EXAMPLES
  $ starwars specie
  $ starwars specie --id="3"
  $ starwars --filter="name=Wookie"
```

_See code: [src/commands/specie.js](https://github.com/CLI-Starwars-js/starwars/blob/v0.0.0/src/commands/specie.js)_

## `starwars starship`

Get Starships information

```
USAGE
  $ starwars starship

OPTIONS
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-separated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=foo
  --id=id            Search for an ID
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --sort=sort        property to sort by (prepend '-' for descending)

DESCRIPTION
  ...
  You can search for all Starships in the API, or search for a single one by the ID

EXAMPLES
  $ starwars starship
  $ starwars starship --id="9"
  $ starwars --filter="name=Death"
```

_See code: [src/commands/starship.js](https://github.com/CLI-Starwars-js/starwars/blob/v0.0.0/src/commands/starship.js)_

## `starwars vehicle`

Get vehicles information

```
USAGE
  $ starwars vehicle

OPTIONS
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-separated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=foo
  --id=id            Search for an ID
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --sort=sort        property to sort by (prepend '-' for descending)

DESCRIPTION
  ...
  You can search for all vehicles in the API, or search for a single one by the ID

EXAMPLES
  $ starwars vehicle
  $ starwars vehicle --id="4"
  $ starwars --filter="name=Sand"
```

_See code: [src/commands/vehicle.js](https://github.com/CLI-Starwars-js/starwars/blob/v0.0.0/src/commands/vehicle.js)_
<!-- commandsstop -->
