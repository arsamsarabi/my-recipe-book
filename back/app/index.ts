import './db/connection'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import config from 'config'
import cors from 'cors'

import { appDebugger as log } from './utils'
import routes from './routes'

const { NODE_ENV = 'development' } = process.env
const port: number = config.get('port')

if (!config.get('jwtPrivateKey')) {
  log('FATAL ERROR: jwtPrivateKey is not defined.')
  process.exit(1)
}

const app = express()

app.use(cors())

app.set('view engine', 'pug')
app.set('views', './views') // default path

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(helmet())
if (NODE_ENV === 'development') {
  app.use(morgan('tiny'))
}

// Configuration
log(`Application name: ${config.get('name')}`)
log(`Mail Server: ${config.get('mail.host')}`)
log(`Mail password: ${config.get('mail.password')}`)

app.use('/', routes)

app.listen(port, '0.0.0.0', () => {
  console.log(` ✨  Magic happens on port ${port}  ✨ `)
})
