import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // mock validation
  if (!body.lastName || !body.pnr) {
    return NextResponse.json(
      { success: false, message: "Missing data" },
      { status: 400 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Booking retrieved",
  });
}
