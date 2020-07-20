; 
'use stric'

const mongoose  = require('mongoose'),
      Schema    = mongoose.Schema,
      { model } = require('mongoose')


const UsuarioSchema = new Schema ({

    nombre   : String,
    apellido : String,
    nickname : String,
    email    : String,
    passw    : String


});



module.exports = model('usuarios', UsuarioSchema);