"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BookingCard from "@/components/BookingCard";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleBooking = async ({
    lastName,
    pnr,
  }: {
    lastName: string;
    pnr: string;
  }) => {
    setLoading(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lastName, pnr }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/checkin");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return <BookingCard onSubmit={handleBooking} loading={loading} />;
}
