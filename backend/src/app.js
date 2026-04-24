import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/', (req, res) => {
  res.send('API Running...')
})

export default app