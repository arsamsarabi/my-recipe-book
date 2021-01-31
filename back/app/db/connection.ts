import mongoose from 'mongoose'

import { dbDebugger as log } from '../utils'

const { NODE_ENV, MONGO_USER, MONGO_PASSWORD, MONGO_DB_NAME } = process.env

const DB_URI =
  NODE_ENV === 'development'
    ? `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@mrb-dev-cluster.nczdq.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority`
    : 'PROD_DB'

const mongooseConfig = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}

mongoose
  .connect(DB_URI, mongooseConfig)
  .then(() => log('  ☁️  Connected to MongoDB on the cloud  ☁️  '))
  .catch((error) => log('Could not connect to MongoDB', error))
