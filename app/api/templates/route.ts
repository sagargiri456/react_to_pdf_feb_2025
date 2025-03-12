import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Ensure you import your Prisma client

export async function GET() {
  try {
    const templates = await prisma.templates.findMany();
    return NextResponse.json(templates);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch templates" }, { status: 500 });
  }
}
