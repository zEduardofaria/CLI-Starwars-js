const { Command, flags } = require('@oclif/command')
const { cli } = require('cli-ux')

const { getAxios } = require('../utils')
const Species = require('../models/Species')

class SpecieCommand extends Command {
  async run() {
    const { flags } = this.parse(SpecieCommand)
    , id = flags.id

    let data = null
    , command = true
    , next = 'http://swapi.co/api/species'
    , results = []

    if (id) {
      cli.action.start('Loading...')
      data = await getAxios(next + `/${id}`)
      cli.action.stop('Done') 

      cli.table([data], Species, {
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
      
      cli.table(results, Species, {
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

SpecieCommand.description = `Get Species information
...
You can search for all Species in the API, or search for a single one by the ID
`

SpecieCommand.flags = {
  id: flags.string({ description: 'Search for an ID' }),
  ...cli.table.flags()
}

SpecieCommand.examples = [
  '$ starwars specie',
  '$ starwars specie --id="3"',
  '$ starwars --filter="name=Wookie"'
]

module.exports = SpecieCommand
