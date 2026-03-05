"use client";

import { useRouter } from "next/navigation";
import CheckinTopNav from "@/components/CheckinTopNav";
import CheckinBottomBar from "@/components/CheckinBottomBar";
import DangerousGoodsCard from "@/components/DangerousGoodsCard";

export default function CheckinPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Top */}
      <CheckinTopNav step={4} totalSteps={5} />

      {/* Content */}
      <DangerousGoodsCard />

      {/* Bottom */}
      <CheckinBottomBar
        onNext={() => {
          router.push("/declaration");
        }}
      />
    </div>
  );
}
