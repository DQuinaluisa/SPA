;
'use strict'

const port = process.env.PORT || 3000,
      app  = require('./app'),
      { appConfig, db } = require('../config'),
      connetDb = require('../db/data')
      connetDb(db);
      app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))