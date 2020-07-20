;
'use strict'

const express = require('express'),
multiParty = require('connect-multiparty')

let api = express.Router(),
    filesControl = require('../controllers/file.Controller'),
    galeriaMiddlaware = multiParty({ uploadDir: './uploads' })


  api.post('/upload_galeria', galeriaMiddlaware, filesControl.imagenAdd),
  //api.get('/file_galeria/:urlFile', filesControl.verFileGaleria)
  api.get('/ver', filesControl.getImg ),
  api.delete('/borrar/:id', filesControl.eliminarFoto ),
  api.put('/editar/:id', filesControl.editarFoto)


  module.exports = api