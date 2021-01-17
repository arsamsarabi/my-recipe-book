import Joi from '@hapi/joi'

const schema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  image: Joi.string(),
  userId: Joi.string().required(),
})

const joiValidation = (ingredient: any) => schema.validate(ingredient)

export default joiValidation
