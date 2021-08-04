import supertest from 'supertest'
import { app } from './app'

describe('App tests', () => {
  it('will hit the status endpoint', async () => {

    const response = await supertest(app)
      .get('/')
      .expect(200)

    expect(response.body).toEqual({ status: 'ok' })
  })
})
