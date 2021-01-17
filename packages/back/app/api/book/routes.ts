import express, { Request, Response } from 'express'

import { apiDebugger as log } from '../../utils/debuggers'
import controller from './controller'
import { validateNew, validateUpdate } from './middlewares'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  const userId = req.user?._id || ''
  const books = await controller.getBooks(userId)
  return res.status(200).send({
    ok: true,
    data: books,
    message: books.length
      ? 'Books successfully fetched!'
      : 'No Books recorded!',
  })
})

router.post('/', [validateNew], async (req: Request, res: Response) => {
  try {
    const result = await controller.addBook(req.user?._id as string, req.body)
    return res.status(200).send(`Book ${result.title} added!`)
  } catch (error) {
    log(error.message)
    return res.status(500).send('Unknown error')
  }
})

router.put('/', [validateUpdate], async (req: Request, res: Response) => {
  try {
    const result = await controller.updateBook(req.body)
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
