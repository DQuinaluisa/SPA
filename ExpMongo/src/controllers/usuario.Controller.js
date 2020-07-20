; 
'use stric'

const Usuario = require('../models/usuario.model'),
      path    = require('path'),
      bcrypt  = require('bcrypt'),
      jwt     = require('jsonwebtoken'),
     { ObjectId } = require("mongodb")



async function getOne (req, res) {
    const _id = req.params.id
    try {
       const user = await Usuario.findOne({_id})
        res.json(user)
        console.log(user)
    } catch (error) {
        return res.status(400).json({
            msg: 'No se pudo conectar',
            error,
            token: req.token
        })
    }
}

async function getFull (req, res) {
    try {
       const users = await Usuario.find()
        res.json(users)
       
    } catch (error) {
        return res.status(400).json({
            msg: 'No se pudo conectar',
            error,
            token: req.token
        })
    }

}

async function crearOne (req, res) {
    const usuario = req.body.usuario
    console.log(usuario) 
    try {
        const user = await Usuario.create(usuario)
        res.status(200).json(user);
        
    } catch (error) {
        return res.status(400).json({
            msg: 'No se pudo crear',
            error
        })
    }
  

}




async function crearFull (req, res) {
    const array = req.body.array;
    try {
        const user = await Usuario.insertMany(array);
        res.json(user)
    } catch (error) {
        return res.status(400).json({
            msg: 'No se pudo crear',
            error,
            token: req.token
        })
    }
}

async function eliminar (req, res) {
    const _id = req.params.id;
    try {
        const user = await Usuario.findByIdAndDelete({_id});
        if(!user) {
            return res.status(400).json({
                msg : 'Este Usuario no existe',
                error
            })
        }
        res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({
            msg: 'No se pudo eliminar',
            error,
            token: req.token
        })
    }
}

async function updateOne (req, res) {
    const _id  = req.params.id;
    const body = req.body;
    try {
        const user = await Usuario.findOneAndUpdate(_id, body);
        res.json(user);
    } catch (error) {
        return res.status(400).json({
            msg: 'No se pudo actualizar',
            error,
            token: req.token
        })
    }
}

async function login (req, res) {    
    const usuario = req.body.usuario
    console.log(usuario)
     const user =  await  Usuario.findOne({'nickname' : usuario.nickname})          
   try {
    if(user){
        const contra =  bcrypt.compareSync(usuario.passw, user.passw ) 
        if(contra) {
            console.log('si vale la contraseña')
            console.log(user.passw )
            const token = jwt.sign({'nickname': usuario.nickname}, process.env.KEY_JWT, {
                algorithm: 'HS256',
                expiresIn:  60000 // parseInt(process.env.TIEMPO)
            })
            console.log(token)
            res.status(200).json({      
                token
            })
        }else {
            return res.status(400).json({
                msg: 'Contraseña incorrecta'    
            })
        } 
      
    }else if(!user) {
        return res.status(400).json({
            msg: 'Usuario no encontrado'       
        })
    }
   } catch (error) {
    return res.status(400).json({
        msg: 'No se pudo crear',
        error
    })
   }
   
}





module.exports = {
    getOne,
    getFull,
    crearOne,
    crearFull,
    eliminar,
    updateOne,
    login
}
