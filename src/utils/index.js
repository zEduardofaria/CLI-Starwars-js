
const axios = require('axios')

exports.getAxios = (url) => axios.get(url).then(async ({ data }) => data)