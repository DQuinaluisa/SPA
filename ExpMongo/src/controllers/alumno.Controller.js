;
'use strict'

const alumnos = require('../models/alumno.model'),
      fs = require('fs'),
      path = require('path'),
      { unlink } = require('fs-extra')




       async function imagenAdd (req, res){
        console.log(req.body)
        let file = req.files.photo

            const url =  await file.path.split('\\')
            const urlFile = await (url[url.length -1])
            const data = {
              "img" : urlFile,
               "nombre" : req.body.nombre,
                "apellido" : req.body.apellido, 
                 "email": req.body.email, 
                 "passw": req.body.passw}
            alumnos.create([data], ()=>{
                res.status(200)      
            });
            return res.status(200).json({
                transsaction: true,
                data: urlFile,
                msg: urlFile.length
            })
        
    }
  


      async function ver (req, res) {
              const { id } = req.params
              const img = await alumnos.find().lean().exec();
              res.status(200).send({ img })

      }

      async function verOne (req, res) {
        const { id } = req.params
        const img = await alumnos.findById(id ).lean().exec();
        res.status(200).send({ img })

}

async function eliminarEstudiante (req, res) {
  const { id } = req.params
  const img = await alumnos.findByIdAndDelete(id)

  if(img) {
     await unlink(path.resolve(img.img)) 
  }

  return res.json(img);
}


      module.exports = {
        imagenAdd,
        ver,
        eliminarEstudiante
  
     }