; 
'use stric'

const { Schema, model } = require('mongoose')

const ImagenSchema = new Schema ({

    filename:  String,
    path :     String,
    originalname: String

})


module.exports = model('imagen', ImagenSchema);