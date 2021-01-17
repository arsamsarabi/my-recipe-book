import mongoose from 'mongoose'
import config from 'config'

import { dbDebugger as log } from '../utils'

const dbUrl: string = config.get('db.url')
const mongooseConfig = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}

console.log(dbUrl)

mongoose
  .connect(dbUrl, mongooseConfig)
  .then(() => log(`Connected to MongoDB on ${dbUrl}`))
  .catch((error) => log('Could not connect to MongoDB', error))
