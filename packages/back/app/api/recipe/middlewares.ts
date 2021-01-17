import { Request, Response } from 'express'

import joiValidation from './validation'

export const validateRecipe = (req: Request, res: Response, next: any) => {
  const { error } = joiValidation(req.body)
  if (error) return res.status(400).send(error.details.map((e) => e.message))
  return next()
}

export const buildRecipeObjectToPost = (
  req: Request,
  _: Response,
  next: any
) => {
  const recipe = {
    title: req.body.title,
    ingredients: req.body.ingredients,
    books: req.body.books,
    steps: req.body.steps,
    tags: req.body.tags,
    difficulty: req.body.difficulty,
    prepTime: req.body.prepTime,
    cookTime: req.body.cookTime,
    serves: req.body.serves,
    image: req.body.image,
    description: req.body.description,
    creator: req.body.userId,
  }
  req.body.recipe = recipe
  next()
}
