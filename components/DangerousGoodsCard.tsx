"use client";

export default function DangerousGoodsCard() {
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        
        {/* Header */}
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold">
            Dangerous Goods Declaration
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            A mandatory safety and legal declaration as required by Thai law (CAAT/AOT).
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-5 text-gray-700">
          
          <p className="text-red-600 font-semibold text-lg">
            For the safety of the flight, the transport of specific hazardous items is strictly forbidden.
          </p>

          <p>
            By continuing, you confirm that you and those in your booking are NOT carrying the following Dangerous Goods in your carry-on or checked baggage, which are prohibited under all circumstances:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Explosives (e.g., Fireworks, Flares, Ammunition, Toy Caps, Gunpowder).
            </li>
            <li>
              Flammable Items (e.g., Flammable Gases, Gasoline, Lighter Fluid, Aerosol Paints, Strike-Anywhere Matches).
            </li>
            <li>
              Corrosives & Poisons (e.g., Acids, Bleach, Pesticides, Toxic or Infectious Substances).
            </li>
            <li>
              Lithium Battery-Powered Vehicles (e.g., Hoverboards, Self-Balancing Wheels, Mini-Segways are forbidden in all baggage).
            </li>
            <li>
              Other items like Tear Gas, Pepper Spray, or Radioactive Material.
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}