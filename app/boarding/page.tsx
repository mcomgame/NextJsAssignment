"use client";

import { useRouter } from "next/navigation";
import CheckinTopNav from "@/components/CheckinTopNav";
import CheckinBottomBar from "@/components/CheckinBottomBar";
import BoardingPassCard, { BoardingPass } from "@/components/BoardingPassCard";

const boardingPasses: BoardingPass[] = [
  {
    passengerName: "ALEX HUUM",
    pnr: "ABC123",
    passengerType: "ADT",

    fromCode: "BKK",
    fromAirport: "Suvarnabhumi Airport, Bangkok",

    toCode: "SIN",
    toAirport: "Changi International Airport, Singapore",

    flightNumber: "QL123",

    seat: "12A",
    zone: "1",
    seq: "023",

    boardingTime: "21:14",

    departureTime: "14:54",
    departureDate: "Thu · 19 Feb 2026",

    arrivalTime: "17:54",
    arrivalDate: "Fri · 20 Feb 2026",

    terminal: "1",
    gate: "40",

    barcode: "testbarcode123",
  },
];

export default function BoardingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Top */}
      <CheckinTopNav step={5} totalSteps={5} />

      {/* Content */}
      <BoardingPassCard passes={boardingPasses} />

      {/* Bottom */}
      <CheckinBottomBar
        showBack={false}
        nextLabel="Done"
        onNext={() => {
          router.replace("/register");
        }}
      />
    </div>
  );
}
