"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingCard() {
  const router = useRouter();
  const [lastName, setLastName] = useState("");
  const [pnr, setPnr] = useState("");

  const handleBooking = async () => {
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
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <h2 className="booking-title">Retrieve Your Booking</h2>

        <div className="booking-field">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="booking-input"
          />
        </div>

        <div className="booking-field">
          <label>Booking reference (PNR)</label>
          <input
            type="text"
            placeholder="ABC123 OR 1234567890123"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
            className="booking-input"
          />
        </div>

        <button onClick={handleBooking} className="booking-button">
          Retrieve Booking
        </button>

        <div className="booking-tip">
          <strong>Tip:</strong> Online check-in opens 24 hours before departure
          and closes 2 hours before departure.
        </div>
      </div>
    </div>
  );
}
