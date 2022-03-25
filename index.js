exports.StringAPI = async function({strings = [], apiPort = 80}) {
  const axios = require('axios')
  const APIUpdater = await axios.get('https://registry.npmjs.org/rstringapi')
  const stableVersion = APIUpdater.data['dist-tags'].latest
  const version = require('./package.json').version
  if (stableVersion !== version && !version.includes('dev')) {
    console.log('\x1b[92m[StringAPI Updater]\x1b[31m Please update StringAPI\x1b[33m https://www.npmjs.com/package/rstringapi\x1b[0m')
  } else if (version.includes('dev')) {
    console.log('\x1b[92m[StringAPI Updater]\x1b[31m You are using\x1b[33m DEV\x1b[31m version\x1b[0m')
  }
  const express = require('express')
  const app = express()
    app.get('/', async (req, res) => {
      const strings_ = strings
      const randomstring = strings[Math.floor(Math.random() * strings_.length)]
      res.header("Access-Control-Allow-Origin", "*")
      res.json({
        string: randomstring
      })
    })
    
    app.listen(options.apiPort)
    console.log(`\x1b[92m[StringAPI]\x1b[0m Running on port \x1b[33m${apiPort}\x1b[0m!`)
}
