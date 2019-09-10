const { Command, flags } = require('@oclif/command')
const Fuse = require('fuse.js')
const { cli } = require('cli-ux')

const { getAll } = require('../utils')
const Pilots = require('../models/Pilots')

class PilotCommand extends Command {
  async run() {
    cli.action.start('Waiting for swapi...')
    const people = await getAll('people')
    , vehicles = await getAll('vehicles')
    cli.action.stop('Done')

    cli.action.start('Structuring data...')
    const pilots = []
    , options = {
      threshold: 0.0,
      keys: [
        "url",
      ]
    }
    , fuse = new Fuse(vehicles, options);
    
    let searchResult
    , nextPerson
    , bestVehicle

    for (const personIndex in people) {
      if (people[personIndex].vehicles.length) {
        nextPerson = people[personIndex]
        bestVehicle = null

        for (const vehicle of people[personIndex].vehicles) {
          searchResult = fuse.search(vehicle)

          if (!bestVehicle || searchResult[0].max_atmosphering_speed > bestVehicle.max_atmosphering_speed)
            bestVehicle = searchResult[0]

        }

        pilots.push({ 
          pilot: nextPerson.name, 
          vehicle: bestVehicle.name,
          max_atmosphering_speed: bestVehicle.max_atmosphering_speed
        })
      }
    }

    cli.action.stop('Done')

    cli.table(pilots, Pilots, {
        printLine: this.log,
        ...flags
      })
    
    
    return pilots
  }

}

PilotCommand.description = `Search for the best pilots of the galaxy!
...
This command brings pilot's vehicle information, including name and max atmosphering speed
`

PilotCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

PilotCommand.examples = [
  '$ starwars pilot',
]

module.exports = PilotCommand
