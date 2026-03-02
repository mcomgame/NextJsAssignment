"use client";

import { useState } from "react";

type BookingCardProps = {
  onSubmit: (data: { lastName: string; pnr: string }) => void;
  loading?: boolean;
};

export default function BookingCard({
  onSubmit,
  loading = false,
}: BookingCardProps) {
  const [lastName, setLastName] = useState("");
  const [pnr, setPnr] = useState("");

  const handleClick = () => {
    onSubmit({ lastName, pnr });
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

        <button onClick={handleClick} className="booking-button">
          {loading ? "Loading..." : "Retrieve Booking"}
        </button>

        <div className="booking-tip">
          <strong>Tip:</strong> Online check-in opens 24 hours before departure
          and closes 2 hours before departure.
        </div>
      </div>
    </div>
  );
}
