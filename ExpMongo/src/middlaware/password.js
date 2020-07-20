;
'use strict'

const  bcrypt = require('bcrypt')

let codificarPassword = (req, res, next) => {
    let usuario = req.body.usuario || null
    if(!usuario || usuario.passw == '' || !usuario.passw)
    {
        console.log('Usuario no valido')
        return res.status(200).send('Usuario o contraseña invalidas')
    }else {
        let codificarPassword = bcrypt.hashSync(usuario.passw, bcrypt.genSaltSync(10))
        if(codificarPassword) {
            req.body.usuario.passw = codificarPassword
            req.body.usuario.createAt = new Date()
            next()
            
        }else {
            return res.status(200).send('contraseña invalidos')
        }
    }
}

module.exports = {
    codificarPassword
}