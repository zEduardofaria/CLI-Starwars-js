const {Command, flags} = require('@oclif/command')
const { cli } = require('cli-ux')

const { getAxios } = require('../utils')
const Starships = require('../models/Starships')

class StarshipCommand extends Command {
  async run() {
    const { flags } = this.parse(StarshipCommand)
    , id = flags.id

    let data = null
    , command = true
    , next = 'http://swapi.co/api/starships'
    , results = []

    if (id) {
      cli.action.start('Loading...')
      data = await getAxios(next + `/${id}`)
      cli.action.stop('Done') 

      cli.table([data], Starships, {
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
      
      cli.table(results, Starships, {
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
