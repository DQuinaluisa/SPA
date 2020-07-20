; 
'use stric'

const { Schema, model } = require('mongoose')

const FileSchema = new Schema ({

        nombre : String,
        originalFilename : String,
        fileName : String

   

})


module.exports = model('files', FileSchema);