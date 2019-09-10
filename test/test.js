const expect = require('chai').expect;
const Pilot = require('../src/commands/pilot');
const Film = require('../src/commands/film');
const Hello = require('../src/commands/hello');
const People = require('../src/commands/people');
const Planet = require('../src/commands/planet');
const Specie = require('../src/commands/specie');
const Starship = require('../src/commands/starship');
const Vehicle = require('../src/commands/vehicle');

describe('Check for all Starwars CLI commands', () => {
  it('Pilot command response', async () => {
    const response = await Pilot.run();

    expect(response).to.not.be.undefined;
    expect(response).to.not.be.null;
  }).timeout(30000);

  it('Film command response', async () => {
    const response = await Film.run();

    expect(response).to.not.be.undefined;
    expect(response).to.not.be.null;
  }).timeout(30000);

  it('Hello command response', async () => {
    const response = await Hello.run();

    expect(response).to.not.be.undefined;
    expect(response).to.not.be.null;
  }).timeout(30000);

  it('People command response', async () => {
    const response = await People.run();

    expect(response).to.not.be.undefined;
    expect(response).to.not.be.null;
  }).timeout(30000);

  it('Planet command response', async () => {
    const response = await Planet.run();

    expect(response).to.not.be.undefined;
    expect(response).to.not.be.null;
  }).timeout(30000);

  it('Specie command response', async () => {
    const response = await Specie.run();

    expect(response).to.not.be.undefined;
    expect(response).to.not.be.null;
  }).timeout(30000);

  it('Starship command response', async () => {
    const response = await Starship.run();

    expect(response).to.not.be.undefined;
    expect(response).to.not.be.null;
  }).timeout(30000);

  it('Vehicle command response', async () => {
    const response = await Vehicle.run();

    expect(response).to.not.be.undefined;
    expect(response).to.not.be.null;
  }).timeout(30000);
});
