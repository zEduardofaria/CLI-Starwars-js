const {Command, flags} = require('@oclif/command')

class VehicleCommand extends Command {
  async run() {
    const {flags} = this.parse(VehicleCommand)
    , name = flags.name
    , id = flags.id

    this.log(`Vehicle ${name} ${id}`)

    if (name) {
      swapiModule.getPeople({search: name}, function(data) {
        this.log(`All results that match ${name}`, data);
        })
    } else if (id) {
      swapiModule.getVehicle(id, function(data) {
        this.log(`Result of getVehicle/${id}`, data);
      });
    } else {
      swapiModule.getVehicles(function(data) {
        this.log("Result of getVehicles", data);
      });
    }
  }
}

VehicleCommand.description = `Describe the command here
...
Extra documentation goes here
`

VehicleCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = VehicleCommand

const { swapiModule } = require('swapi-wrapper')
