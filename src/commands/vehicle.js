const {Command, flags} = require('@oclif/command')
const { cli } = require('cli-ux')

const { getAxios } = require('../utils')
const Vehicles = require('../models/Vehicles')

class VehicleCommand extends Command {
  async run() {
    const { flags } = this.parse(VehicleCommand)
    , id = flags.id

    let data = null
    , command = true
    , next = 'http://swapi.co/api/vehicles'
    , results = []

    if (id) {
      cli.action.start('Loading...')
      data = await getAxios(next + `/${id}`)
      cli.action.stop('Done') 

      cli.table([data], Vehicles, {
        printLine: this.log,
        ...flags
      })

      return 
    }
    

    while (next && command) {
      cli.action.start('Loading...')

      data = await getAxios(next)
      results = data['results']
      next = data.next

      cli.action.stop('Done') 
      
      cli.table(results, Vehicles, {
        printLine: this.log,
        ...flags
      })

      if (next && results.length >= 10)
        command = await cli.confirm('Next page? (y/n)')
        else 
        next = null
        
      if (!command)
        command = false
    }
    // }
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
