; 
'use stric'

const { Schema, model } = require('mongoose')

const AlumnoSchema = new Schema ({

        nombre : String,
        apellido: String,
        email: String,
        passw: String,
        img: String,
        originalFilename : String,
        ipath : String

   

})


module.exports = model('alumnos', AlumnoSchema);