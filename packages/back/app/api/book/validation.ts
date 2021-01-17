import Joi from '@hapi/joi'

const schema = Joi.object({
  title: Joi.string().min(2).max(50).required(),
  image: Joi.string(),
  description: Joi.string(),
  userId: Joi.string().required(),
})

const joiValidation = (book: any) => schema.validate(book)

export default joiValidation
