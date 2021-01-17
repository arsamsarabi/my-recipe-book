import express, { Request, Response } from 'express'

import { apiDebugger as log } from '../../utils/debuggers'
import controller from './controller'
import { validateRecipe, buildRecipeObjectToPost } from './middlewares'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const userId = req.params.userId
  const ingredients = await controller.getRecipes(userId)
  res.send(ingredients)
})

router.post(
  '/',
  [validateRecipe, buildRecipeObjectToPost],
  async (req: Request, res: Response) => {
    try {
      const result = await controller.addRecipe(
        req.params.userId,
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
  '/:id',
  [validateRecipe, buildRecipeObjectToPost],
  async (req: Request, res: Response) => {
    try {
      const result = await controller.updateRecipe(
        req.params.id,
        req.body.recipe
      )
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
