"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CheckinTopNav from "@/components/CheckinTopNav";
import CheckinBottomBar from "@/components/CheckinBottomBar";
import CheckinCard from "@/components/CheckinCard";

type Passenger = {
  id: string;
  name: string;
  type: string;
  seat: string;
};

export default function CheckinPage() {
  const router = useRouter();

  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/passengers")
      .then((res) => res.json())
      .then((data) => setPassengers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Top */}
      <CheckinTopNav step={2} totalSteps={5} />

      {/* Content */}
      <CheckinCard passengers={passengers} onSelectionChange={setSelected} />

      {/* Bottom */}
      <CheckinBottomBar
        onNext={() => {
          const selectedIdsQuery = encodeURIComponent(JSON.stringify(selected));
          router.push(`/passengerDetails?selectedIds=${selectedIdsQuery}`);
        }}
      />
    </div>
  );
}
