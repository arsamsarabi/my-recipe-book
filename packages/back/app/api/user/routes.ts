import express, { Request, Response } from 'express'

import { authMiddleware } from '../../middlewares'
import controller from './controller'

const router = express.Router()

router.get('/me', authMiddleware, async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(500).send({
      ok: false,
      data: null,
      message: 'User not logged in',
    })
  }

  try {
    const me = await controller.getMe(req.user._id)
    return me
  } catch (error) {
    return res.status(500).send({
      ok: false,
      data: null,
      message: 'Unknown error',
    })
  }
})

export default router
