import express from 'express'

import auth from './auth'
import book from './book'
import ingredient from './ingredient'
import recipe from './recipe'
import user from './user'

const router = express.Router()

router.use('/auth', auth)
router.use('/book', book)
router.use('/ingredient', ingredient)
router.use('/recipe', recipe)
router.use('/user', user)

export default router
