;
'use strict'
const fs = require('fs'),
path = require('path'),
{ unlink } = require('fs-extra')

async function add (req, res){
    let file = req.files.photo
    res.status(200).send(file )
}


module.exports = {
    add
}