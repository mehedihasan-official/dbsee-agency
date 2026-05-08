/**
 * MongoDB Database Connection Module
 *
 * This module manages the connection to MongoDB database used for:
 * - Storing form submissions (contact forms, call requests)
 * - Managing application data
 *
 * Implementation Details:
 * - Uses connection pooling with cached client to improve performance
 * - Connects on first request and reuses the connection
 * - Environment variables: MONGODB_URI (connection string), MONGODB_DB (database name)
 *
 * @file MongoDB connection utilities
 * @author DBSEE Agency
 */

import { MongoClient } from "mongodb";

// MongoDB connection URI from environment variables
const uri = process.env.MONGODB_URI;

// Database name (defaults to "dbseeagency" if not specified)
const dbName = process.env.MONGODB_DB || "dbseeagency";

/**
 * Cached MongoDB client instance
 * This stores the connection across multiple requests to avoid creating
 * new connections repeatedly (performance optimization for serverless)
 */
let cachedClient: MongoClient | null = null;

/**
 * Establishes and returns a MongoDB client connection
 * Uses caching to reuse the connection across multiple requests
 * This is important for serverless environments like Vercel
 *
 * @async
 * @returns {Promise<MongoClient>} Cached or new MongoDB client instance
 * @throws {Error} If MONGODB_URI environment variable is not defined
 *
 * @example
 * const client = await getMongoClient();
 * // Use client for database operations
 */
export async function getMongoClient() {
  // Check if environment variable is configured
  if (!uri) {
    throw new Error(
      "MONGODB_URI is not defined. Please add it to your .env.local file.",
    );
  }

  // Return cached client if already connected
  if (cachedClient) {
    return cachedClient;
  }

  // Create new client and connect
  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client;
}

/**
 * Gets the MongoDB database instance
 * Returns the connected database object ready for collection operations
 *
 * @async
 * @returns {Promise<Db>} MongoDB database instance
 *
 * @example
 * const db = await getMongoDb();
 * const collection = db.collection('forms');
 * await collection.insertOne({ name: 'John' });
 */
export async function getMongoDb() {
  const client = await getMongoClient();
  return client.db(dbName);
}
