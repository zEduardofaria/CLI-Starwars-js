const expect = require('chai').expect
const Pilot = require('../src/commands/pilot')

 describe('The starwars pilots CLI', () => {
    it('should print the correct output', async () => {
        const response = await Pilot.run()

        console.log('TYPEOF response ', typeof response)
        // console.log('response ', response)

        expect(response).to.not.be.undefined

        done()
  })
})