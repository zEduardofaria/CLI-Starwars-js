const {Command, flags} = require('@oclif/command')
const { cli } = require('cli-ux')

const { getAllWithPagination, getById } = require('../utils')
const Starships = require('../models/Starships')

class StarshipCommand extends Command {
  async run() {
    const { flags } = this.parse(StarshipCommand)
    , id = flags.id

    if (id) {
      return getById('starships', Starships, id)
    }

    return getAllWithPagination('starships', Starships)
  }
}

StarshipCommand.description = `Get Starships information
...
You can search for all Starships in the API, or search for a single one by the ID
`

StarshipCommand.flags = {
  id: flags.string({ description: 'Search for an ID' }),
  ...cli.table.flags()
}

StarshipCommand.examples = [
  '$ starwars starship',
  '$ starwars starship --id="9"',
  '$ starwars --filter="name=Death"'
]

module.exports = StarshipCommand
