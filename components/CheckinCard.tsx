"use client";

import { useState } from "react";

export type CheckinCardItem = {
  id: string;
  name: string;
  type: string;
  seat: string;
};

type CheckinCardProps = {
  passengers: CheckinCardItem[];
};

export default function CheckinCard({ passengers }: CheckinCardProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <div className="max-w-3xl mx-auto p-6 space-y-4">
          {/* Header */}
          <h2 className="text-xl font-semibold">Select Passengers</h2>
          <p className="text-gray-500">Choose passengers for check-in</p>

          {/* Cards */}
          <div className="space-y-4">
            {passengers.map((passenger) => {
              const selected = selectedIds.includes(passenger.id);

              return (
                <div
                  key={passenger.id}
                  onClick={() => toggleSelect(passenger.id)}
                  className={`
                relative cursor-pointer rounded-2xl border p-5 transition-all
                ${
                  selected
                    ? "border-blue-500 ring-2 ring-blue-400"
                    : "border-gray-300 hover:border-blue-300"
                }
              `}
                >
                  {/* Check mark corner */}
                  {selected && (
                    <div className="absolute right-0 top-0">
                      <div className="h-0 w-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-blue-500 rounded-tr-2xl" />
                      <div className="absolute right-2 top-1 text-white text-sm">
                        ✓
                      </div>
                    </div>
                  )}

                  <div className="font-semibold text-lg text-gray-800">
                    {passenger.name}
                  </div>

                  <div className="mt-2 flex items-center gap-3 text-sm text-gray-600">
                    <span className="rounded-md bg-gray-200 px-2 py-1 font-medium">
                      {passenger.type}
                    </span>
                    <span>Seat {passenger.seat}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
