/**
 * Form Submission API Route
 *
 * Handles POST requests to save form submissions to MongoDB.
 * Used by contact forms, call request forms, and other form components.
 *
 * Endpoint: POST /api/forms
 *
 * @file API route for form submission handling
 * @author DBSEE Agency
 */

import { getMongoDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";

/**
 * POST Handler - Receives and saves form submissions
 *
 * Expected request body:
 * ```json
 * {
 *   "type": "contact" | "call-request" | ... (optional, defaults to "contact"),
 *   "name": "John Doe" (required),
 *   "email": "john@example.com" (required),
 *   "phone": "+1234567890" (optional),
 *   "service": "Social Media Management" (optional),
 *   "bestTime": "Morning" (optional),
 *   "message": "Inquiry details" (optional)
 * }
 * ```
 *
 * Returns:
 * - Success (200): { success: true, id: "<mongodb_id>" }
 * - Validation Error (400): { error: "validation message" }
 * - Server Error (500): { error: "Unable to save form submission.", details: "error info" }
 *
 * @async
 * @param {Request} request - Incoming HTTP request with form data
 * @returns {Promise<NextResponse>} JSON response with status and data
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, name, email, phone, service, bestTime, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    const db = await getMongoDb();
    const collection = db.collection("formSubmissions");

    const result = await collection.insertOne({
      type: type || "contact",
      name,
      email,
      phone: phone || null,
      service: service || null,
      bestTime: bestTime || null,
      message: message || "",
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      id: result.insertedId.toString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to save form submission.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
