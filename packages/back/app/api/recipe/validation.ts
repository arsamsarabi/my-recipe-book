import Joi from '@hapi/joi'

const schema = Joi.object({
  title: Joi.string().min(2).max(50).required(),
  ingredients: Joi.array().items(
    Joi.object({
      ingredient: Joi.string().required(),
      amount: Joi.string().required(),
    })
  ),
  books: Joi.array().items(Joi.string()),
  steps: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  difficulty: Joi.number(),
  prepTime: Joi.number(),
  cookTime: Joi.number(),
  serves: Joi.number(),
  image: Joi.string(),
  description: Joi.string(),
})

const joiValidation = (book: any) => schema.validate(book)

export default joiValidation
