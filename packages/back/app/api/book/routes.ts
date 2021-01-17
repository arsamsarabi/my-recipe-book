import express, { Request, Response } from 'express'

import { apiDebugger as log } from '../../utils/debuggers'
import controller from './controller'
import { validateBook } from './middlewares'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const userId = req.params.userId
  const ingredients = await controller.getBooks(userId)
  res.send(ingredients)
})

router.post('/', [validateBook], async (req: Request, res: Response) => {
  const { title, image, description, userId } = req.params
  try {
    const result = await controller.addBook(userId, {
      title,
      image,
      description,
    })
    return res.status(200).send(`Book ${result.title} added!`)
  } catch (error) {
    log(error.message)
    return res.status(500).send('Unknown error')
  }
})

router.put('/:id', [validateBook], async (req: Request, res: Response) => {
  const { id, title, image, description } = req.params

  try {
    const result = await controller.updateBook(id, {
      title,
      image,
      description,
    })

    return res.status(200).send(`Book ${result?.title} updated!`)
  } catch (error) {
    console.error(error)
    return res.status(500).send('Unknown error')
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const result = await controller.removeBook(id)
    return res.status(200).send(`Book ${result?.title} deleted!`)
  } catch (error) {
    console.error(error)
    return res.status(500).send('Unknown error')
  }
})

export default router
