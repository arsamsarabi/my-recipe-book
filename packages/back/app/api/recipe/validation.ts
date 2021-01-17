import Joi from '@hapi/joi'

const newRecipeSchema = Joi.object({
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
  creator: Joi.string().required(),
})

const validateNewRecipe = (book: any) => newRecipeSchema.validate(book)

const updateRecipeSchema = Joi.object({
  _id: Joi.string().required(),
  title: Joi.string().min(2).max(50),
  ingredients: Joi.array().items(
    Joi.object({
      ingredient: Joi.string(),
      amount: Joi.string(),
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

const validateUpdateRecipe = (book: any) => updateRecipeSchema.validate(book)

export { validateNewRecipe, validateUpdateRecipe }
