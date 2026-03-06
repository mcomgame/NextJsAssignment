"use client";

import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

type Props = {
  value: string;
};

export default function Barcode({ value }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, value, {
        format: "CODE128",
        width: 2,
        height: 60,
        displayValue: false,
      });
    }
  }, [value]);

  return <svg ref={svgRef}></svg>;
}
