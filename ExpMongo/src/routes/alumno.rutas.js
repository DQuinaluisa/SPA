;
'use strict'

const express = require('express'),
multiParty = require('connect-multiparty')

let api = express.Router(),
    alumnoController  = require('../controllers/alumno.Controller'),
    galeriaMiddlaware = multiParty({ uploadDir: './uploads' }),
    fileMiddlaware    = multiParty({ uploadDir: './uploads' })

  api.post('/estudiante',  fileMiddlaware,  alumnoController.imagenAdd),
  //api.get('/file_galeria/:urlFile',   alumnoController.verFileGaleria)
  api.get('/verA',   alumnoController.ver ),
  api.delete('/dlt/:id',   alumnoController.eliminarEstudiante ),
  //api.put('/editar/:id',   alumnoController.editarFoto)


  module.exports = api