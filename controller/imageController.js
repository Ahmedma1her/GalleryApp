const Image = require("../models/images")
const upload = require("../middleware/imageMiddleware.js")
const imageValidation = require("./validation/imageValidation.js")

const UploadImage = (req, res) => {
    upload(req, res, async (err) => {
        if (err) return res.status(400).json({ 
            success: false,
             message: err.message })

        try {
            const { error, value } = imageValidation.validate(req.body)
            if (error) return res.status(400).json({ success: false, message: error.message })

            if (!req.file) return res.status(400).json({ success: false, message: "Image is required" })

            const image = new Image({ title: value.title, image: req.file.path })
            await image.save()

            res.status(201).json({ success: true, message: "Image uploaded successfully", data: image })
        } catch (error) {
            res.status(500).json({ success: false, message: error.message })
        }
    })
}

module.exports = { UploadImage }
