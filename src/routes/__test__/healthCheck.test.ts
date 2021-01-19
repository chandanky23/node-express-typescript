import request from 'supertest'
import app from '../../app'

it("checks the health", async () => {
  const res = await request(app).get('/api/ping').send().expect(200)

  expect(res.body.status).toEqual('pong')
})