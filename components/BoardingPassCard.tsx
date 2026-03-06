import Barcode from "./Barcode";

export interface BoardingPass {
  passengerName: string;
  pnr: string;
  passengerType: string;

  fromCode: string;
  fromAirport: string;

  toCode: string;
  toAirport: string;

  flightNumber: string;

  seat: string;
  zone: string;
  seq: string;

  boardingTime: string;

  departureTime: string;
  departureDate: string;

  arrivalTime: string;
  arrivalDate: string;

  terminal: string;
  gate: string;

  barcode: string;
}

type Props = {
  passes: BoardingPass[];
};

export default function BoardingPassCard({ passes }: Props) {
  return (
    <div className="flex flex-col gap-8 items-center justify-between px-6 py-4">
      {passes.map((data, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-2xl border"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-600 to-sky-500 text-white px-6 py-4 flex justify-between">
            <div className="font-semibold">✈ Qoomlee</div>
            <div className="text-sm">Boarding Pass</div>
          </div>

          <div className="p-6 space-y-6">
            {/* Passenger */}
            <div className="flex justify-between">
              <div>
                <div className="text-xs text-gray-400">PASSENGER</div>
                <div className="font-semibold text-lg">
                  {data.passengerName}
                </div>
                <div className="text-sm text-gray-500">
                  {data.passengerType} · PNR: {data.pnr}
                </div>
              </div>

              <div className="flex gap-6 text-right">
                <div>
                  <div className="text-xs text-gray-400">Terminal</div>
                  <div className="font-semibold">{data.terminal}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Gate</div>
                  <div className="font-semibold">{data.gate}</div>
                </div>
              </div>
            </div>

            {/* Route */}
            <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">{data.fromAirport}</div>
                <div className="text-3xl font-bold text-sky-600">
                  {data.fromCode}
                </div>
              </div>

              <div className="text-center text-gray-400 text-sm">
                ✈ {data.flightNumber}
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-400">{data.toAirport}</div>
                <div className="text-3xl font-bold text-sky-600">
                  {data.toCode}
                </div>
              </div>
            </div>

            {/* Info Row */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-xs text-gray-400">Seat</div>
                <div className="font-semibold">{data.seat}</div>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <div className="text-xs text-gray-400">Zone / Seq</div>
                <div className="font-semibold">
                  {data.zone} / {data.seq}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <div className="text-xs text-gray-400">Boarding</div>
                <div className="font-semibold text-sky-600">
                  {data.boardingTime}
                </div>
              </div>
            </div>

            {/* Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-xs text-gray-400">Departure</div>
                <div className="text-xl font-semibold">
                  {data.departureTime}
                </div>
                <div className="text-xs text-gray-400">
                  {data.departureDate}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <div className="text-xs text-gray-400">Arrival</div>
                <div className="text-xl font-semibold">{data.arrivalTime}</div>
                <div className="text-xs text-gray-400">{data.arrivalDate}</div>
              </div>
            </div>

            {/* Barcode */}
            <div className="border rounded-lg p-4 text-center">
              <div className="flex justify-center">
                <Barcode value={data.barcode} />
              </div>

              <div className="text-xs text-gray-400 mt-2">
                Scan at security and boarding gate
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
