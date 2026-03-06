import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const allPassengers = [
    { id: "1", name: "ALEX HUUM", type: "ADT", seat: "12A", nationality: "TH", countryCode: "+66", phone: "811234567", countryName: "Thailand" },
    { id: "2", name: "Somsee Kuum", type: "ADT", seat: "12B", nationality: "US", countryCode: "+1", phone: "5551234567", countryName: "United States" },
    { id: "3", name: "John Doe", type: "CHD", seat: "13C", nationality: "GB", countryCode: "+44", phone: "7123456789", countryName: "United Kingdom" },
    { id: "4", name: "Jane Smith", type: "INF", seat: "13D", nationality: "CA", countryCode: "+1", phone: "4169876543", countryName: "Canada" },
  ];

  const { searchParams } = new URL(request.url);
  const idsParam = searchParams.get("ids");

  if (idsParam) {
    const requestedIds = idsParam.split(",");
    const filteredPassengers = allPassengers.filter((passenger) =>
      requestedIds.includes(passenger.id),
    );
    return NextResponse.json(filteredPassengers);
  }

  return NextResponse.json(allPassengers);
}
