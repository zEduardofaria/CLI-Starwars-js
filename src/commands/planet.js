const { Command, flags } = require('@oclif/command');
const { cli } = require('cli-ux');

const { getAllWithPagination, getById } = require('../utils');
const Planets = require('../models/Planets');

class PlanetCommand extends Command {
  async run() {
    const { flag } = this.parse(PlanetCommand);
    const { id, test } = flag;

    if (id) {
      return getById('planets', Planets, id);
    }

    return getAllWithPagination('planets', Planets, test);
  }
}

PlanetCommand.description = `Get Planets information
...
You can search for all Planets in the API, or search for a single one by the ID
`;

PlanetCommand.flags = {
  id: flags.string({ description: 'Search for an ID' }),
  test: flags.boolean({ char: 't', description: 'Indicates that its a mocha call' }),
  ...cli.table.flags(),
};

PlanetCommand.examples = [
  '$ starwars planet',
  '$ starwars planet --id="1"',
  '$ starwars --filter="name=Sand"',
];

module.exports = PlanetCommand;
