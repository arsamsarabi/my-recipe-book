import express, { Request, Response } from 'express'

import { apiDebugger as log } from '../../utils/debuggers'
import controller from './controller'
import { validateNew, validateUpdate } from './middlewares'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const userId = req.user?._id || ''
  const ingredients = await controller.getIngredients(userId)
  return res.status(200).send({
    ok: true,
    data: ingredients,
    message: ingredients.length
      ? 'Ingredients successfully fetched!'
      : 'No Ingredients recorded!',
  })
})

router.post('/', [validateNew], async (req: Request, res: Response) => {
  const { name, image } = req.body

  try {
    const result = await controller.addIngredient({
      name,
      image,
      userId: req.user?._id,
    })
    return res.status(200).send(`Ingredient ${result.name} added!`)
  } catch (error) {
    log(error.message)
    return res.status(500).send('Unknown error')
  }
})

router.put('/', [validateUpdate], async (req: Request, res: Response) => {
  try {
    const result = await controller.updateIngredient(req.body)
    return res.status(200).send(`Ingredient ${result?.name} updated!`)
  } catch (error) {
    console.error(error)
    return res.status(500).send('Unknown error')
  }
})

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
