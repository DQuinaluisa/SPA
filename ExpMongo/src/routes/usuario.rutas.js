const express = require('express');
const router = express.Router();
const storage  = require('../middlaware/multer');
const passwordControl = require('../middlaware/password');
const autentificarControl = require('../middlaware/auth');
const { getOne, getFull, crearOne, crearFull, eliminar, updateOne, login } = require('../controllers/usuario.Controller');


router.get('/user/:id', getOne);
router.get('/user', [autentificarControl.autentica ], getFull );
router.post('/user', [passwordControl.codificarPassword], crearOne);
router.post('/users', [autentificarControl.autentica ], crearFull);
router.delete('/user/:id', [autentificarControl.autentica ], eliminar);
router.put('/user/:id', [autentificarControl.autentica ], updateOne);
 
router.post('/login', login);




module.exports = router;