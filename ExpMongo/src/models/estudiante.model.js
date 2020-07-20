;
'use stric'

const { Schema, model } = require('mongoose');


const EstudianteSchema = new Schema ({

    nombre: String,
    apellido: String,
    email: String,
    passw: String,
    imagePath: String


})


module.exports = model('estudiante', EstudianteSchema);