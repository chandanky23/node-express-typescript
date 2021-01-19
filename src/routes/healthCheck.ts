import express from 'express'

const router = express.Router()

router.get('/api/ping', (req, res) => {
  res.send({status: 'pong'})
})

export { router as healthCheckRouter }