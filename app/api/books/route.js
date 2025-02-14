import { NextResponse } from "next/server";
import books from "../db.js";

export async function GET() {
  return NextResponse.json(books);
}
