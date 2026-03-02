"use client";

import { useState } from "react";
import CheckinTopNav from "@/components/CheckinTopNav";
import CheckinBottomBar from "@/components/CheckinBottomBar";
import CheckinCard from "@/components/CheckinCard";

export default function CheckinPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const passengers = [
    { id: "1", name: "ALEX HUUM", type: "ADT", seat: "12A" },
    { id: "2", name: "Somsee Kuum", type: "ADT", seat: "12B" },
  ];

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Top */}
      <CheckinTopNav step={2} totalSteps={5} />

      {/* Content */}
      <CheckinCard passengers={passengers} />

      {/* Bottom */}
      <CheckinBottomBar
        onNext={() => {
          console.log("Go next page later");
        }}
      />
    </div>
  );
}
