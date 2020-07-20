; 
'use stric'

const imagen = require('../models/imagen.model'),
      path   = require('path'),
      fs   = require('fs-extra'),
     { unlink }  = require('fs-extra'),
      { ObjectId } = require("mongodb")

      
      


async function imagenAdd (req, res) {
    const img = new imagen();
    img.filename = req.body.filename;
    img.path =  req.file.filename;
    img.originalname = req.originalname;
    await img.save();
    console.log(img)
    res.status(200).send(img)

}


async function getImg (req, res) {
    const img = await imagen.find().lean().exec();
    res.status(200).send({ img })
}

async function getOneImg (req, res) {
    const { id } = req.params;
    const  img = await imagen.findById(id);
    res.json(img);
}


async function eliminarImg (req, res) {
    const { id } = req.params
    const img = await imagen.findByIdAndDelete(id)
    if(img) {
        await fs.unlink(path.resolve(img.imagePath)) 
     }
    return res.json(img);
    
}


async function editarImg (req, res) {
    const { id } = req.params;
    const img =  await imagen.findByIdAndUpdate(id)
    console.log(img);
    const editar =  await unlink(path.resolve('./src/public/' + img.path))
    
    await img.save();
    console.log(img)
    return  res.json({
        msg: 'Actualizada',
        img,
        editar
    })
 
 }

 module.exports = {
    imagenAdd,
    getImg,
    eliminarImg,
    editarImg,
    getOneImg
}
