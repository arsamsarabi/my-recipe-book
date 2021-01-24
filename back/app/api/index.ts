import express from 'express'

import auth from './auth'
import book from './book'
import ingredient from './ingredient'
import recipe from './recipe'
import user from './user'
import { authMiddleware } from '../middlewares'

const router = express.Router()

router.use('/auth', auth)
router.use('/book', [authMiddleware], book)
router.use('/ingredient', [authMiddleware], ingredient)
router.use('/recipe', [authMiddleware], recipe)
router.use('/user', [authMiddleware], user)

export default router
