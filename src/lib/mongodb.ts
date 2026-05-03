import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "dbseeagency";

let cachedClient: MongoClient | null = null;

export async function getMongoClient() {
  if (!uri) {
    throw new Error(
      "MONGODB_URI is not defined. Please add it to your .env.local file."
    );
  }

  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

export async function getMongoDb() {
  const client = await getMongoClient();
  return client.db(dbName);
}
