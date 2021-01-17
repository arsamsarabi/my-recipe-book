import express, { Request, Response } from 'express'

import { apiDebugger as log } from '../../utils/debuggers'
import controller from './controller'
import { validateIngredient } from './middlewares'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const userId = req.params.userId
  const ingredients = await controller.getIngredients(userId)
  res.send(ingredients)
})

router.post('/', [validateIngredient], async (req: Request, res: Response) => {
  const { name, image, userId } = req.params
  try {
    const result = await controller.addIngredient({ name, image, userId })
    return res.status(200).send(`Ingredient ${result.name} added!`)
  } catch (error) {
    log(error.message)
    return res.status(500).send('Unknown error')
  }
})

router.put(
  '/:id',
  [validateIngredient],
  async (req: Request, res: Response) => {
    const { id, name, image, userId } = req.params

    try {
      const result = await controller.updateIngredient(id, {
        name,
        image,
        userId,
      })
      return res.status(200).send(`Ingredient ${result?.name} updated!`)
    } catch (error) {
      console.error(error)
      return res.status(500).send('Unknown error')
    }
  }
)

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const result = await controller.removeIngredient(id)
    return res.status(200).send(`Ingredient ${result?.name} deleted!`)
  } catch (error) {
    console.error(error)
    return res.status(500).send('Unknown error')
  }
})

export default router
