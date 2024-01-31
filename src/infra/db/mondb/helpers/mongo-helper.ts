import { Collection, MongoClient } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

export const MongoHelper = {
  mongoServer: null as MongoMemoryServer | null,
  client: null as MongoClient | null,

  async connect (): Promise<void> {
    this.mongoServer = await MongoMemoryServer.create()
    this.client = await MongoClient.connect(this.mongoServer.getUri(), {})
  },

  async disconnect (): Promise<void> {
    if (this.mongoServer) {
      await this.mongoServer.stop()
    }
    if (this.client) {
      await this.client.close()
    }
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  }
}
