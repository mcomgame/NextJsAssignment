"use client";

import { useRouter } from "next/navigation";

type CheckinTopNavProps = {
  step: number;
  totalSteps: number;
};

export default function CheckinTopNav({
  step,
  totalSteps,
}: CheckinTopNavProps) {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 bg-white border-b">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Close Button */}
        <button
          onClick={() => router.push("/register")}
          className="text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <div className="text-center">
          <div className="font-semibold">Check-in</div>
          <div className="text-sm text-gray-500">
            Step {step} of {totalSteps}
          </div>
        </div>

        {/* Empty spacer for symmetry */}
        <div className="w-6" />
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200">
        <div
          className="h-1 bg-blue-500 transition-all"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}
