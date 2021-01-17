import express, { Request, Response } from 'express'

import controller from './controller'
import { createUserReturnObject } from './helpers'

const router = express.Router()

router.get('/me', async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(500).send({
      ok: false,
      data: null,
      message: 'User not logged in',
    })
  }

  try {
    const me = await controller.getMe(req.user._id)

    if (me === null) {
      return res.status(500).send({
        ok: false,
        data: null,
        message: 'Unknown error',
      })
    }

    return res.status(200).send({
      ok: true,
      data: createUserReturnObject(me),
      message: 'Success!',
    })
  } catch (error) {
    return res.status(500).send({
      ok: false,
      data: null,
      message: 'Unknown error',
    })
  }
})

export default router
