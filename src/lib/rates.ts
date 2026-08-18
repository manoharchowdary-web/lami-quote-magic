// ======================================================================
// RATE CARD — EDIT THIS FILE TO PUBLISH YOUR PRICES
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
  // A4
  { type: "Gloss", size: "A4 (8.3 x 11.7 in)", perSheet: null, note: "Rate on request" },
  { type: "Matt", size: "A4 (8.3 x 11.7 in)", perSheet: null, note: "Rate on request" },
  { type: "Gold", size: "A4 (8.3 x 11.7 in)", perSheet: null, note: "Rate on request" },
  { type: "3D", size: "A4 (8.3 x 11.7 in)", perSheet: null, note: "Rate on request" },
  // A3
  { type: "Gloss", size: "A3 (11.7 x 16.5 in)", perSheet: null, note: "Rate on request" },
  { type: "Matt", size: "A3 (11.7 x 16.5 in)", perSheet: null, note: "Rate on request" },
  { type: "Gold", size: "A3 (11.7 x 16.5 in)", perSheet: null, note: "Rate on request" },
  { type: "3D", size: "A3 (11.7 x 16.5 in)", perSheet: null, note: "Rate on request" },
  // 12 x 18 — published rates
  { type: "Gloss", size: "12 x 18 in", perSheet: 0.5, note: "50 paise per sheet" },
  { type: "Matt", size: "12 x 18 in", perSheet: 0.7, note: "70 paise per sheet" },
  { type: "Gold", size: "12 x 18 in", perSheet: 1.25, note: "₹1.25 per sheet" },
  { type: "3D", size: "12 x 18 in", perSheet: 1.0, note: "₹1 per sheet" },
  // 13 x 19
  { type: "Gloss", size: "13 x 19 in", perSheet: null, note: "Rate on request" },
  { type: "Matt", size: "13 x 19 in", perSheet: null, note: "Rate on request" },
  { type: "Gold", size: "13 x 19 in", perSheet: null, note: "Rate on request" },
  { type: "3D", size: "13 x 19 in", perSheet: null, note: "Rate on request" },
  // A2
  { type: "Gloss", size: "A2 (16.5 x 23.4 in)", perSheet: null, note: "Rate on request" },
  { type: "Matt", size: "A2 (16.5 x 23.4 in)", perSheet: null, note: "Rate on request" },
  { type: "Gold", size: "A2 (16.5 x 23.4 in)", perSheet: null, note: "Rate on request" },
  { type: "3D", size: "A2 (16.5 x 23.4 in)", perSheet: null, note: "Rate on request" },
  // 20 x 30
  { type: "Gloss", size: "20 x 30 in", perSheet: null, note: "Rate on request" },
  { type: "Matt", size: "20 x 30 in", perSheet: null, note: "Rate on request" },
  { type: "Gold", size: "20 x 30 in", perSheet: null, note: "Rate on request" },
  { type: "3D", size: "20 x 30 in", perSheet: null, note: "Rate on request" },
  // 22 x 28
  { type: "Gloss", size: "22 x 28 in", perSheet: null, note: "Rate on request" },
  { type: "Matt", size: "22 x 28 in", perSheet: null, note: "Rate on request" },
  { type: "Gold", size: "22 x 28 in", perSheet: null, note: "Rate on request" },
  { type: "3D", size: "22 x 28 in", perSheet: null, note: "Rate on request" },
  // 24 x 36
  { type: "Gloss", size: "24 x 36 in", perSheet: null, note: "Rate on request" },
  { type: "Matt", size: "24 x 36 in", perSheet: null, note: "Rate on request" },
  { type: "Gold", size: "24 x 36 in", perSheet: null, note: "Rate on request" },
  { type: "3D", size: "24 x 36 in", perSheet: null, note: "Rate on request" },
  // 30 x 40
  { type: "Gloss", size: "30 x 40 in", perSheet: null, note: "Rate on request" },
  { type: "Matt", size: "30 x 40 in", perSheet: null, note: "Rate on request" },
  { type: "Gold", size: "30 x 40 in", perSheet: null, note: "Rate on request" },
  { type: "3D", size: "30 x 40 in", perSheet: null, note: "Rate on request" },
  // Custom
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
