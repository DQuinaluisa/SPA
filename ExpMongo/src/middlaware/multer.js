const multer = require('multer');
const  path  = require('path');

const uuid = require('uuid/v4');

const storage = multer.diskStorage({
    destination:  'uploads', 
    filename: (req, file, cb) => {
        cb(null,uuid()+path.extname(file.originalname)+'.jpg');
    }
});


module.exports = multer({storage});