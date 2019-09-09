const { Command, flags } = require('@oclif/command')
const { cli } = require('cli-ux')

const { getAxios } = require('../utils')
const Films = require('../models/Films')

class FilmCommand extends Command {
  async run() {
    const { flags } = this.parse(FilmCommand)
    , id = flags.id

    let data = null
    , command = true
    , next = 'http://swapi.co/api/films'
    , results = []

    if (id) {
      cli.action.start('Loading...')
      data = await getAxios(next + `/${id}`)
      cli.action.stop('Done') 

      cli.table([data], Films, {
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
      
      cli.table(results, Films, {
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

FilmCommand.description = `Get Films information
...
You can search for all Films in the API, or search for a single one by the ID
`

FilmCommand.flags = {
  id: flags.string({ description: 'Search for an ID' }),
  ...cli.table.flags()
}

FilmCommand.examples = [
  '$ starwars film',
  '$ starwars film --id="1"',
  '$ starwars --filter="title=New"'
]

module.exports = FilmCommand
