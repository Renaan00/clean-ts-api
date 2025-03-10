import { MongoHelper } from '../infra/db/mondb/helpers/mongo-helper'
import env from './config/env'

MongoHelper.connect()
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => { console.log(`Server running at http://localhost:${env.port}`) })
  })
  .catch(console.error)
