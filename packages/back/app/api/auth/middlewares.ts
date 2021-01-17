import { Request, Response } from 'express'

import User from '../../db/models/User'
import joi from './validation'

export const validateLogin = async (req: Request, res: Response, next: any) => {
  const { error } = joi.validateLogin(req.body)
  if (error) return res.status(400).send(error.details.map((e) => e.message))

  return next()
}

export const validateRegister = async (
  req: Request,
  res: Response,
  next: any
) => {
  const { error } = joi.validateRegister(req.body)
  if (error) return res.status(400).send(error.details.map((e) => e.message))

  const user = await User.findOne({ email: req.body.email })
  if (user) return res.status(400).send('Email already registered.')

  return next()
}
