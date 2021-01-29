import jwt from 'jsonwebtoken'
import config from 'config'

export const authMiddleware = (req: any, res: any, next: any) => {
  debugger;
  const token = req.header(config.get('const.authHeader'))
  if (!token) return res.status(401).send('Access denied. Token not found')

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'))
    req.user = decoded
    next()
  } catch (error) {
    return res.status(400).send('Invalid token.')
  }
}
