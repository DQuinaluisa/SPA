;
'use stric'

const  estudiante  = require('../models/estudiante.model'), 
       path        = require('path'),
       { ObjectId } = require('mongodb'),
       fs          = require('fs-extra'),
       { unlink }  = require('fs-extra')


/*async function crearEstudiante (req, res) {
    const img = new estudiante();
    img.nombre = req.body.nombre;
    img.apellido = req.body.apellido;
    img.email = req.body.email;
    img.passw = req.body.passw;
    img.imagen = '/img/upload/' + req.file.filename;
    await img.save();
    console.log(img)
    
    return res.json(img)
}*/


async function crearEst(req, res) {
    const { nombre, apellido, email, passw } = req.body;
    
    const imagen = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        passw: passw,
        imagePath:   req.file.path
    };
    const est =  new estudiante(imagen);
    await est.save();
    console.log(est)

    return res.json({
        msg: 'creada',
        est
    })
}

async function getEstudiante (req, res) {
    const img = await estudiante.find().lean().exec();
    return res.status(200).send({img})
}

async function getEstudiantes (req, res) {
    const { id } = req.params;
    const img = await estudiante.findById(id);
    return res.status(200).json(img);
}

async function eliminarEstudiante (req, res) {
    const { id } = req.params
    const img = await estudiante.findByIdAndDelete(id)

    if(img) {
       await fs.unlink(path.resolve(img.imagePath)) 
    }

    return res.json(img);
}

async function editarEstudiante (req, res) {
    const { id } = req.params;
    const body = req.body;
    const img = await estudiante.findByIdAndUpdate(id, body)
    if(img) {
        await fs.unlink(path.resolve(img.imagePath)) 
     }
    return res.json({
        msg: 'Actualizada',
        img
    })
}


module.exports = {
    //crearEstudiante,
    crearEst,
    getEstudiante,
    getEstudiantes,
    eliminarEstudiante,
    editarEstudiante

}