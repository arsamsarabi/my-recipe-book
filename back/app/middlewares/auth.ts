import jwt from 'jsonwebtoken'
import config from 'config'

export const authMiddleware = (req: any, res: any, next: any) => {
  const token = req.header(config.get('const.authHeader'))
  if (!token) return res.status(401).send('Access denied. Token not found')

  try {
    req.user = jwt.verify(token, config.get('jwtPrivateKey'))
    next()
  } catch (error) {
    return res.status(400).send('Invalid token.')
  }
}
