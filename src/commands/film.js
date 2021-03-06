const { Command, flags } = require('@oclif/command');
const { cli } = require('cli-ux');

const { getAllWithPagination, getById } = require('../utils');
const Films = require('../models/Films');

class FilmCommand extends Command {
  async run() {
    const { flags } = this.parse(FilmCommand);
    const { id, test } = flags;

    if (id) {
      return getById('films', Films, id);
    }

    return getAllWithPagination('films', Films, test);
  }
}

FilmCommand.description = `Get Films information
...
You can search for all Films in the API, or search for a single one by the ID
`;

FilmCommand.flags = {
  id: flags.string({ description: 'Search for an ID' }),
  test: flags.boolean({ char: 't', description: 'Indicates that its a mocha call' }),
  ...cli.table.flags(),
};

FilmCommand.examples = [
  '$ starwars film',
  '$ starwars film --id="1"',
  '$ starwars --filter="title=New"',
];

module.exports = FilmCommand;
