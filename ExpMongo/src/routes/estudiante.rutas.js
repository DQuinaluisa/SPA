const express = require('express');
const router = express.Router();
const storage  = require('../middlaware/multer');
const { crearEstudiante, getEstudiante, getEstudiantes,
        eliminarEstudiante, editarEstudiante, crearEst } = require('../controllers/estudiante.Controller');


//router.post('/std', crearEstudiante);
router.post('/std', storage.single('file'), crearEst );
router.get('/upl', getEstudiante);
router.get('/std/:id', getEstudiantes);
router.delete('/std/:id', eliminarEstudiante);
router.put('/std/:id', editarEstudiante);

module.exports = router;  