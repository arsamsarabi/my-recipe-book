import Joi from '@hapi/joi'

const newIngredientSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  image: Joi.any(),
})

const validateNewIngredient = (ingredient: any) =>
  newIngredientSchema.validate(ingredient)

const updateIngredientSchema = Joi.object({
  id: Joi.string(),
  name: Joi.string().min(3).max(50),
  image: Joi.any(),
})

const validateUpdateIngredient = (ingredient: any) =>
  updateIngredientSchema.validate(ingredient)

export { validateNewIngredient, validateUpdateIngredient }
