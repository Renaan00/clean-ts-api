export default async (): Promise<void> => {
  process.env.MONGO_URI = await global.__MONGOD__.getUri()
}
