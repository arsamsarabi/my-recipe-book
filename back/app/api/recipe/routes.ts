import express, { Request, Response } from 'express'

import { apiDebugger as log } from '../../utils/debuggers'
import controller from './controller'
import {
  validateNew,
  validateUpdate,
  buildRecipeObjectToPost,
} from './middlewares'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const userId = req.user?._id || ''
  const recipes = await controller.getRecipes(userId)
  return res.status(200).send({
    ok: true,
    data: recipes,
    message: recipes.length
      ? 'Recipes successfully fetched!'
      : 'No Recipes recorded!',
  })
})

router.post(
  '/',
  [validateNew, buildRecipeObjectToPost],
  async (req: Request, res: Response) => {
    try {
      const result = await controller.addRecipe(
        req.user?._id as string,
        req.body.recipe
      )
      return res.status(200).send(`Recipe ${result.title} added!`)
    } catch (error) {
      log(error.message)
      return res.status(500).send('Unknown error')
    }
  }
)

router.put(
  '/',
  [validateUpdate, buildRecipeObjectToPost],
  async (req: Request, res: Response) => {
    try {
      const result = await controller.updateRecipe(req.body.recipe)
      return res.status(200).send(`Recipe ${result?.title} updated!`)
    } catch (error) {
      console.error(error)
      return res.status(500).send('Unknown error')
    }
  }
)

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const result = await controller.removeRecipe(id)
    return res.status(200).send(`Recipe ${result?.title} deleted!`)
  } catch (error) {
    console.error(error)
    return res.status(500).send('Unknown error')
  }
})

export default router
