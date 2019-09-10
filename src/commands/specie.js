const { Command, flags } = require('@oclif/command');
const { cli } = require('cli-ux');

const { getAllWithPagination, getById } = require('../utils');
const Species = require('../models/Species');

class SpecieCommand extends Command {
  async run() {
    const { flag } = this.parse(SpecieCommand);
    const { id, test } = flag;

    if (id) {
      return getById('species', Species, id);
    }

    return getAllWithPagination('species', Species, test);
  }
}

SpecieCommand.description = `Get Species information
...
You can search for all Species in the API, or search for a single one by the ID
`;

SpecieCommand.flags = {
  id: flags.string({ description: 'Search for an ID' }),
  test: flags.boolean({ char: 't', description: 'Indicates that its a mocha call' }),
  ...cli.table.flags(),
};

SpecieCommand.examples = [
  '$ starwars specie',
  '$ starwars specie --id="3"',
  '$ starwars --filter="name=Wookie"',
];

module.exports = SpecieCommand;
