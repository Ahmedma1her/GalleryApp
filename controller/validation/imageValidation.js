const Joi= require("joi")

const imageValidation = Joi.object({
    title: Joi.string().required()
})

module.exports = imageValidation
