const {Command, flags} = require('@oclif/command')

const { getAll } = require('../utils')

class PilotCommand extends Command {
  async run() {
    const people = await getAll('people')
    const vehicles = await getAll('vehicles')

    for (const personIndex in people) {
      if (person[personIndex].vehicles.length) {

      }
    }
    
    this.log('people', people)
    this.log('people', vehicles)
  }
}

PilotCommand.description = `Describe the command here
...
Extra documentation goes here
`

PilotCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = PilotCommand
