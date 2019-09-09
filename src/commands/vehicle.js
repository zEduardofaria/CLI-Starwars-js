const {Command, flags} = require('@oclif/command')
const { cli } = require('cli-ux')

const { getAllWithPagination, getById } = require('../utils')
const Vehicles = require('../models/Vehicles')

class VehicleCommand extends Command {
  async run() {
    const { flags } = this.parse(VehicleCommand)
    , id = flags.id

    if (id) {
      return getById('vehicles', Vehicles, id)
    }
    

    return getAllWithPagination('vehicles', Vehicles)
  }
}

VehicleCommand.description = `Get vehicles information
...
You can search for all vehicles in the API, or search for a single one by the ID
`

VehicleCommand.flags = {
  id: flags.string({ description: 'Search for an ID' }),
  ...cli.table.flags()
}

VehicleCommand.examples = [
  '$ starwars vehicle',
  '$ starwars vehicle --id="4"',
  '$ starwars --filter="name=Sand"'
]

module.exports = VehicleCommand
