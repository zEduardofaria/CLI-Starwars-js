const { Command, flags } = require('@oclif/command');

class HelloCommand extends Command {
  async run() {
    const { flags } = this.parse(HelloCommand);
    const { name } = flags || 'world';

    this.log(`Hello ${name}!`);

    return `Hello ${name}!`;
  }
}

HelloCommand.description = `Say hello for someone, or for everyone!

If you want to say hello for someone, try something like this two examples:

$ starwars hello -n=Eduardo
$ starwars hello --name=Eduardo
`;

HelloCommand.flags = {
  name: flags.string({
    char: 'n',
    description: 'Name to say hello',
  }),
  test: flags.boolean({ char: 't', description: 'Indicates that its a mocha call' }),
};

module.exports = HelloCommand;
