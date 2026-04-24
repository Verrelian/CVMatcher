import express from 'express'
import { authenticate } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.get('/me', authenticate, (req, res) => {
    res.json({
        message: 'User authenticated',
        user: req.user
    })
})

export default router