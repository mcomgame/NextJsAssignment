"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import CheckinTopNav from "@/components/CheckinTopNav";
import CheckinBottomBar from "@/components/CheckinBottomBar";
import PassengerDetails from "@/components/PassengerDetails";

type Passenger = {
  id: string;
  name: string;
  nationality: string;
  countryCode: string;
  phone: string;
  countryName: string;
};

export default function PassengerDetailsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedPassengerDetails, setSelectedPassengerDetails] = useState<
    Passenger[]
  >([]);

  useEffect(() => {
    const selectedIdsParam = searchParams.get("selectedIds");
    if (selectedIdsParam) {
      try {
        const decodedIds: string[] = JSON.parse(
          decodeURIComponent(selectedIdsParam),
        );
        if (Array.isArray(decodedIds) && decodedIds.length > 0) {
          // Fetch passenger details from mock API using the decoded IDs
          fetch(`/api/passengers?ids=${decodedIds.join(",")}`)
            .then((res) => res.json())
            .then((data: Passenger[]) => {
              // Assuming the API returns an array of Passenger objects
              setSelectedPassengerDetails(data);
            })
            .catch((error) =>
              console.error("Failed to fetch passenger details:", error),
            );
        }
      } catch (error) {
        console.error("Failed to parse selectedIds from URL:", error);
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Top */}
      <CheckinTopNav step={3} totalSteps={5} />

      {/* Content */}
      <PassengerDetails
        passengers={selectedPassengerDetails}
        onChange={(updated) => setSelectedPassengerDetails(updated)}
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
