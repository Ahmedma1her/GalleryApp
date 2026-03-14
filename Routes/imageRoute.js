const express = require("express")
const router = express.Router()
const { UploadImage } = require("../controller/imageController.js")

router.post("/upload", UploadImage)

module.exports = router
