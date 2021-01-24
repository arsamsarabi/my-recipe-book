import express, { Request, Response } from 'express'
import config from 'config'

import controller from './controller'
import { validateLogin, validateRegister } from './middlewares'

const router = express.Router()

router.post('/login', validateLogin, async (req: Request, res: Response) => {
  try {
    const user = await controller.loginUser(req.body.email, req.body.password)
    const token = user.generateAuthToken()

    return res.status(200).send({
      ok: true,
      data: token,
      message: 'Successful login!',
    })
  } catch (error) {
    return res.status(500).send({
      ok: false,
      data: null,
      message: error.message,
    })
  }
})

router.post(
  '/register',
  validateRegister,
  async (req: Request, res: Response) => {
    try {
      const user = await controller.registerUser(req.body)
      const token = user.generateAuthToken()

      return res
        .header(config.get('const.authHeader'), token)
        .status(200)
        .send({
          ok: true,
          data: token,
          message: `${user.firstName} successfully registered.`,
        })
    } catch (error) {
      return res.status(500).send({
        ok: false,
        data: null,
        message: 'Unknown error',
      })
    }
  }
)

export default router
