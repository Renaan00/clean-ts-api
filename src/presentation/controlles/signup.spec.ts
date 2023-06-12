import { SignUpController } from './signup'

describe('SignUpController Test', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
