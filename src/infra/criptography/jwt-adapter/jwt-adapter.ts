import jwt from 'jsonwebtoken'
import { Encrypter } from '../../../data/protocols/criptography/encrypter'

export class JwtAdapter implements Encrypter {
  private readonly secret: string

  constructor (secret: string) {
    this.secret = secret
  }

  async encrypt (value: string): Promise<string> {
    return await new Promise((resolve, reject) => {
      jwt.sign({ id: value }, this.secret, (err: any, token: string) => {
        if (err || !token) reject(err)
        resolve(token)
      })
    })
  }
}
