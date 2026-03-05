"use client";

import { useState, useEffect } from "react";

export type Passenger = {
  id: string;
  name: string;
  nationality: string;
  countryCode: string;
  phone: string;
  countryName: string;
};

type Props = {
  passengers: Passenger[];
  onChange: (updated: Passenger[]) => void;
};

export default function PassengerDetails({ passengers, onChange }: Props) {
  const [data, setData] = useState<Passenger[]>(passengers);

  useEffect(() => {
    setData(passengers);
  }, [passengers]);

  const updatePassenger = (
    index: number,
    field: keyof Passenger,
    value: string,
  ) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    setData(updated);
    onChange(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Fixed Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 z-10">
          <h2 className="text-xl font-semibold">Passenger Details</h2>
          <p className="text-gray-500 text-sm">
            Enter required information for each passenger
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {data.map((p, index) => (
            <div key={p.id} className="border rounded-xl p-5 space-y-4">
              <div className="font-semibold text-gray-800">
                {index + 1}. {p.name.toUpperCase()}
              </div>

              {/* Nationality */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nationality
                </label>
                <input
                  type="text"
                  value={p.nationality}
                  onChange={(e) =>
                    updatePassenger(index, "nationality", e.target.value)
                  }
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>

                <div className="flex gap-3">
                  <input
                    type="text"
                    value={p.countryCode}
                    onChange={(e) =>
                      updatePassenger(index, "countryCode", e.target.value)
                    }
                    className="w-24 border rounded-lg px-3 py-3"
                  />

                  <input
                    type="text"
                    value={p.phone}
                    onChange={(e) =>
                      updatePassenger(index, "phone", e.target.value)
                    }
                    className="flex-1 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>

                <div className="text-sm text-gray-500 mt-2">
                  {p.countryName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
