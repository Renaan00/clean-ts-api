import { Router } from 'express'
import { adaptRouter } from '../adapters/express/express-route-adapter'
import { makeSignupController } from '../factories/signup/signup-factory'

export default (router: Router): void => {
  router.post('/signup', adaptRouter(makeSignupController()))
}
