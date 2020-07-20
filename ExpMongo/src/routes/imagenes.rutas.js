const express = require('express');
const router = express.Router();
const storage  = require('../middlaware/multer');

const { imagenAdd, getImg, eliminarImg, editarImg, getOneImg }   = require('../controllers/imagen.Controller');

router.delete('/img/:id', eliminarImg );
router.put('/img/:id', editarImg );
router.get('/img', getImg );
router.get('/img/:id', getOneImg );
router.post('/img', storage.single('file'), imagenAdd);



module.exports = router;