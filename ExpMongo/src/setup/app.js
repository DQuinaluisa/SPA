;

'use stric'
require('dotenv').config();
const  express  = require('express'),
       app = express(),
       path = require('path'),
       { join } = require('path'),
     morgan = require('morgan'),
     multer = require('multer'),
     uuid  = require('uuid/v4'),
     cors  = require('cors'),
      connetDb = require('../db/data'),
      bodyParser = require('body-parser'),
      usuarioRutas = require('../routes/usuario.rutas'),  
      imagenesRutas = require('../routes/imagenes.rutas'),
      estudianteRutas = require('../routes/estudiante.rutas'),
      fileRutas = require('../routes/file.ruta'),
      alunmoRutas = require('../routes/alumno.rutas'),
      { appConfig, db } = require('../config')
      connetDb(db);
       
app.use(morgan('dev')),
//app.use(express.urlencoded({extended: false})),
app.use(bodyParser.urlencoded({ extended: false })),
app.use(bodyParser.json()),
//app.use('/imagenes', express.static(path.resolve('imagenes'))),

corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

     /* storage = multer.diskStorage({
      destination:  path.join(__dirname, 'uploads') , 
      filename: (req, file, cb) => {
          cb(null,uuid()+path.extname(file.originalname)+'.jpg');
      }
  });
  
app.use(multer({storage: storage}).single('file'))*/


app.use('/uploads', express.static(path.resolve('uploads')));

app.use(cors(corsOptions))
app.use(cors())

app.use('/api', usuarioRutas),
app.use('/api', imagenesRutas),
app.use('/api', estudianteRutas),
app.use('/api', fileRutas),
app.use('/api', alunmoRutas)


module.exports = app;