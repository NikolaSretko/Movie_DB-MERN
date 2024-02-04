const multer = require('multer');
const path = require('path')

// Speichere die hochgeladenen Dateien im 'uploads/'-Verzeichnis
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
