import Joi from '@hapi/joi'

const newBookSchema = Joi.object({
  title: Joi.string().min(2).max(50).required(),
  image: Joi.string(),
  description: Joi.string(),
  creator: Joi.string().required(),
})

const validateNewBook = (book: any) => newBookSchema.validate(book)

const updateBookSchema = Joi.object({
  _id: Joi.string().required(),
  title: Joi.string().min(2).max(50),
  image: Joi.string(),
  description: Joi.string(),
  users: Joi.array().items(Joi.string()),
  recipes: Joi.array().items(Joi.string()),
  creator: Joi.string(),
})

const validateUpdateBook = (book: any) => updateBookSchema.validate(book)

export { validateNewBook, validateUpdateBook }
