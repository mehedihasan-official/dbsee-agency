import { getMongoDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";

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
