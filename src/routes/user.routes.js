import { Router } from 'express'
import { createUser } from '../controllers/user.controller.js'
import { isAdmin, verifyToken } from '../middlewares/authJwt.js'

const router = Router()

router.post('/', [verifyToken, isAdmin], createUser)

export default router
