import { Request, Response } from 'express'

import { validateNewBook, validateUpdateBook } from './validation'

export const validateNew = (req: Request, res: Response, next: any) => {
  const { error } = validateNewBook(req.body)
  if (error) return res.status(400).send(error.details.map((e) => e.message))
  return next()
}

export const validateUpdate = (req: Request, res: Response, next: any) => {
  const { error } = validateUpdateBook(req.body)
  if (error) return res.status(400).send(error.details.map((e) => e.message))
  return next()
}
