const multer = require("multer")
const path = require("path")

const uploadDir = path.resolve("uploads")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir)
    },
    filename: (req, file, cb) => {
        const safeName = Date.now() + path.extname(path.basename(file.originalname))
        const fullPath = path.normalize(path.join(uploadDir, safeName))
        if (!fullPath.startsWith(uploadDir)) {
            return cb(new Error("Invalid file path"))
        }
        cb(null, safeName)
    }
})

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/
    const isValid = allowedTypes.test(path.extname(file.originalname).toLowerCase())
    isValid ? cb(null, true) : cb(new Error("Only image files are allowed"))
}

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } })

module.exports = upload.single("image")
