import { NextResponse } from "next/server";

export async function GET() {
  const passengers = [
    { id: "1", name: "ALEX HUUM", type: "ADT", seat: "12A" },
    { id: "2", name: "Somsee Kuum", type: "ADT", seat: "12B" },
  ];

  return NextResponse.json(passengers);
}
