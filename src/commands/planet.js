const { Command, flags } = require('@oclif/command')
const { cli } = require('cli-ux')

const { getAxios } = require('../utils')
const Planets = require('../models/Planets')

class PlanetCommand extends Command {
  async run() {
    const { flags } = this.parse(PlanetCommand)
    , id = flags.id

    let data = null
    , command = true
    , next = 'http://swapi.co/api/planets'
    , results = []

    if (id) {
      cli.action.start('Loading...')
      data = await getAxios(next + `/${id}`)
      cli.action.stop('Done') 

      cli.table([data], Planets, {
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
      
      cli.table(results, Planets, {
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
  }
}

PlanetCommand.description = `Get Planets information
...
You can search for all Planets in the API, or search for a single one by the ID
`

PlanetCommand.flags = {
  id: flags.string({ description: 'Search for an ID' }),
  ...cli.table.flags()
}

PlanetCommand.examples = [
  '$ starwars planet',
  '$ starwars planet --id="1"',
  '$ starwars --filter="name=Sand"'
]

module.exports = PlanetCommand
