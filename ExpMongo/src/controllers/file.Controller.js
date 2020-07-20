;
'use strict'

const files = require('../models/file.model'),
      fs = require('fs'),
      path = require('path'),
      { unlink } = require('fs-extra')


     async function imagenAdd (req, res) {
        let file = req.body
        
        const img =  await files.create(file);
        console.log(img)
        res.status(200).send(img)
    
    }

    
async function getImg (req, res) {
    const img = await files.find().lean().exec();
    res.status(200).send({ img })
}

async function eliminarFoto (req, res) {
    const { id } = req.params
    const img = await files.findByIdAndDelete(id)
    await unlink(path.resolve( img.path ))
    return res.json(img);
}

async function editarFoto (req, res) {
    const { id } = req.params;
    const body = req.body;
    const img = await files.findByIdAndUpdate(id, body)
     //   await unlink(path.resolve(img.path)) 
    
    return res.json({
        msg: 'Actualizada',
        img
    })
}



     module.exports = {
        imagenAdd,
        getImg,
        eliminarFoto,
        editarFoto
     }