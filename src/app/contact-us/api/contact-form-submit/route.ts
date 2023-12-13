import { connectToDatabase } from "@/app/(common)/_lib/db/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const client = await connectToDatabase();
    // Insert
    return NextResponse.json({
      props: { message: "Connected to MongoDB!" },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      props: { message: "Error connecting to MongoDB" },
    });
  }
}
