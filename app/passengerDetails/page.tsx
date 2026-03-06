"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import CheckinTopNav from "@/components/CheckinTopNav";
import CheckinBottomBar from "@/components/CheckinBottomBar";
import PassengerDetails from "@/components/PassengerDetails";

export default function CheckinPage() {
  const router = useRouter();
  // const [selected, setSelected] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const selectedIdsParam = searchParams.get("selectedIds");

  const passengerList = [
    {
      id: "1",
      name: "Alex Huum",
      nationality: "TH",
      countryCode: "+66",
      phone: "811234567",
      countryName: "Thailand",
    },
    {
      id: "2",
      name: "Somsee Kuum",
      nationality: "US",
      countryCode: "+1",
      phone: "5551234567",
      countryName: "United States",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Top */}
      <CheckinTopNav step={3} totalSteps={5} />

      {/* Content */}
      <PassengerDetails
        passengers={passengerList}
        onChange={(updated) => setPassengerList(updated)}
      />

      {/* Bottom */}
      <CheckinBottomBar
        onNext={() => {
          router.push("/declaration");
        }}
      />
    </div>
  );
}

function setPassengerList(
  updated: {
    id: string;
    nationality: string;
    countryCode: string;
    phone: string;
    countryName: string;
  }[],
) {
  // Update the passenger list in state or context
  console.log("Updated passenger list:", updated);
}
