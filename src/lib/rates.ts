// ======================================================================
// RATE CARD — EDIT THIS FILE TO PUBLISH YOUR PRICES
// ----------------------------------------------------------------------
// No prices have been provided yet, so every rate below is `null`.
// While a rate is `null`, the website shows "Rate on request" instead of
// a number, and the calculator asks the customer to enquire.
//
// To publish a rate, replace `null` with your per-sheet rate in rupees,
// e.g.  perSheet: 3.5
// ======================================================================

export type RateRow = {
  /** Must match a value in `laminationTypes` (Gloss, Matt, Gold, 3D, Custom). */
  type: string;
  /** Sheet size this rate applies to. */
  size: string;
  /** Rate per sheet in INR. `null` = not published yet. */
  perSheet: number | null;
  /** Optional note shown next to the rate. */
  note?: string;
};

/** Minimum order charge in INR, or null if not published. */
export const minimumCharge: number | null = null;

export const currency = "₹";

export const rateCard: RateRow[] = [
  { type: "Gloss", size: "12 x 18 in", perSheet: null },
  { type: "Matt", size: "12 x 18 in", perSheet: null },
  { type: "Gold", size: "12 x 18 in", perSheet: null },
  { type: "3D", size: "12 x 18 in", perSheet: null },
  { type: "Custom", size: "As per artwork", perSheet: null, note: "Quoted after review" },
];

export const sheetSizes = Array.from(new Set(rateCard.map((r) => r.size)));

export function findRate(type: string, size: string): RateRow | undefined {
  return rateCard.find((r) => r.type === type && r.size === size);
}

export function formatRate(value: number | null): string {
  if (value === null) return "Rate on request";
  return `${currency}${value.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

/** True when at least one rate has been published. */
export const hasPublishedRates = rateCard.some((r) => r.perSheet !== null);
