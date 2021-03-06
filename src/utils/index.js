
const { flags } = require('@oclif/command');
const axios = require('axios');
const { cli } = require('cli-ux');

const getAxios = (url) => axios.get(url).then(({ data }) => data);

const getById = async (url, model, id) => {
  cli.action.start('Waiting for swapi...');

  const data = await getAxios(`http://swapi.co/api/${url}/${id}`);

  cli.action.stop('Done');

  cli.table([data], model, {
    printLine: this.log,
    ...flags,
  });
};

const getAllWithPagination = async (url, model, test) => {
  let data = null;
  let command = true;
  let next = `http://swapi.co/api/${url}`;
  let results = [];

  while (next && command) {
    cli.action.start('Waiting for swapi...');

    data = await getAxios(next);
    results = data.results;
    next = data.next;

    cli.action.stop('Done');

    cli.table(results, model, {
      printLine: this.log,
      ...flags,
    });

    if (next && results.length >= 10 && !test) {
      command = await cli.confirm('Next page? (y/n)');
    } else {
      next = null;
    }

    if (!command) { command = false; }
  }

  return results;
};

const getAll = async (url) => {
  let next = `http://swapi.co/api/${url}`;
  let results = [];

  while (next) {
    const data = await getAxios(next);
    results = results.concat(data.results);
    next = data.next;
  }

  return results;
};

module.exports = {
  getAxios, getById, getAllWithPagination, getAll,
};
