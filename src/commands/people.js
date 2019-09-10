const {Command, flags} = require('@oclif/command')
const { cli } = require('cli-ux')

const { getById, getAllWithPagination } = require('../utils')
const People = require('../models/People')

class PeopleCommand extends Command {
  async run() {
    const { flags } = this.parse(PeopleCommand)
    , id = flags.id
    , test = flags.test

    if (id) {
      return getById('people', People, id)
    }

    return getAllWithPagination('people', People, test)
  }
}

PeopleCommand.description = `Get People information
...
You can search for all People in the API, or search for a single one by the ID
`

PeopleCommand.flags = {
  id: flags.string({ description: 'Search for an ID' }),
  test: flags.boolean({char: 't', description: 'Indicates that its a mocha call'}),
  ...cli.table.flags()
}

PeopleCommand.examples = [
  '$ starwars people',
  '$ starwars people --id="4"',
  '$ starwars --filter="name=Luke"'
]

module.exports = PeopleCommand
