"use client";

import { useRouter } from "next/navigation";

type CheckinBottomBarProps = {
  onNext?: () => void;
  showBack?: boolean;
  nextLabel?: string;
  backLabel?: string;
};

export default function CheckinBottomBar({
  onNext,
  showBack = true,
  nextLabel = "Continue",
  backLabel = "Back",
}: CheckinBottomBarProps) {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t">
      <div className="max-w-3xl mx-auto flex gap-4 p-4">
        {showBack && (
          <button
            onClick={() => router.back()}
            className="flex-1 border rounded-lg py-3 font-medium hover:bg-gray-50"
          >
            {backLabel}
          </button>
        )}

        <button
          onClick={onNext}
          className="flex-1 bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700"
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}
