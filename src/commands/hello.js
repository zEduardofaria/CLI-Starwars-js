const { Command, flags } = require('@oclif/command')

class HelloCommand extends Command {
  async run() {
    const { flags } = this.parse(HelloCommand)
    const name = flags.name || 'world'
    
    this.log(`Hello ${name}!`)
  }
}

HelloCommand.description = `Say hello for someone, or for everyone!

If you want to say hello for someone, try something like this two examples:

$ starwars hello -n=Eduardo
$ starwars hello --name=Eduardo
`

HelloCommand.flags = {
  name: flags.string({ 
    char: 'n', 
    description: 'Name to say hello' 
  }),
}

module.exports = HelloCommand
