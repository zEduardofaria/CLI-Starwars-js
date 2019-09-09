const {Command, flags} = require('@oclif/command')
const { cli } = require('cli-ux')

const { getAxios } = require('../utils')
const People = require('../models/People')

class PeopleCommand extends Command {
  async run() {
    const { flags } = this.parse(PeopleCommand)
    , id = flags.id

    let data = null
    , command = true
    , next = 'http://swapi.co/api/people'
    , results = []

    if (id) {
      cli.action.start('Loading...')
      data = await getAxios(next + `/${id}`)
      cli.action.stop('Done') 

      cli.table([data], People, {
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
      
      cli.table(results, People, {
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

PeopleCommand.description = `Get People information
...
You can search for all People in the API, or search for a single one by the ID
`

PeopleCommand.flags = {
  id: flags.string({ description: 'Search for an ID' }),
  ...cli.table.flags()
}

PeopleCommand.examples = [
  '$ starwars people',
  '$ starwars people --id="4"',
  '$ starwars --filter="name=Luke"'
]

module.exports = PeopleCommand
