
const { flags } = require('@oclif/command')
const axios = require('axios')
const { cli } = require('cli-ux')

const getAxios = (url) => axios.get(url).then(({ data }) => data)

const getById = async (url, model, id) => {
  cli.action.start('Loading...')

  data = await getAxios(`http://swapi.co/api/${url}/${id}`)

  cli.action.stop('Done') 

  cli.table([data], model, {
    printLine: this.log,
    ...flags
  })
}

const getAll = async (url, model) => {
  let data = null
  , command = true
  , next = `http://swapi.co/api/${url}`
  , results = []

  while (next && command) {
    cli.action.start('Loading...')

    data = await getAxios(next)
    results = data['results']
    next = data.next

    cli.action.stop('Done') 
    
    cli.table(results, model, {
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

module.exports = { getAxios, getById, getAll }