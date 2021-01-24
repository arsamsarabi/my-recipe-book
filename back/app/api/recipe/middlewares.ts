import { Request, Response } from 'express'

import { validateNewRecipe, validateUpdateRecipe } from './validation'
import { RecipeDocument } from '../../db/models/Recipe'

export const validateNew = (req: Request, res: Response, next: any) => {
  const { error } = validateNewRecipe(req.body)
  if (error) return res.status(400).send(error.details.map((e) => e.message))
  return next()
}

export const validateUpdate = (req: Request, res: Response, next: any) => {
  const { error } = validateUpdateRecipe(req.body)
  if (error) return res.status(400).send(error.details.map((e) => e.message))
  return next()
}

export const buildRecipeObjectToPost = (
  req: Request,
  _: Response,
  next: any
) => {
  const recipe: Partial<RecipeDocument> = {}
  if (req.body._id) recipe._id = req.body._id
  if (req.body.title) recipe.title = req.body.title
  if (req.body.ingredients) recipe.ingredients = req.body.ingredients
  if (req.body.books) recipe.books = req.body.books
  if (req.body.steps) recipe.steps = req.body.steps
  if (req.body.tags) recipe.tags = req.body.tags
  if (req.body.difficulty) recipe.difficulty = req.body.difficulty
  if (req.body.prepTime) recipe.prepTime = req.body.prepTime
  if (req.body.cookTime) recipe.cookTime = req.body.cookTime
  if (req.body.serves) recipe.serves = req.body.serves
  if (req.body.image) recipe.image = req.body.image
  if (req.body.description) recipe.description = req.body.description
  if (req.body.userId) recipe.creator = req.body.userId
  req.body.recipe = recipe
  next()
}
