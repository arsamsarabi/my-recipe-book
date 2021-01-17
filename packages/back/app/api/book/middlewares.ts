import { Request, Response } from 'express'

import joiValidation from './validation'

export const validateBook = (req: Request, res: Response, next: any) => {
  const { error } = joiValidation(req.body)
  if (error) return res.status(400).send(error.details.map((e) => e.message))
  return next()
}
