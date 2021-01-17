import express from 'express'

import api from './api'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { title: 'My recipe book', message: 'Hello World 👋🏻🌍!' })
})

router.use('/api', api)

export default router
