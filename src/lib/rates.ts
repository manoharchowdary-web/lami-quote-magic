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
  // 11.5 x 18
  { type: "Gloss", size: "11.5 x 18 in", perSheet: 0.5, note: "50 paise per sheet" },
  { type: "Matt", size: "11.5 x 18 in", perSheet: 0.7, note: "70 paise per sheet" },
  { type: "Gold", size: "11.5 x 18 in", perSheet: 1.25, note: "₹1.25 per sheet" },
  { type: "3D", size: "11.5 x 18 in", perSheet: 1.0, note: "₹1 per sheet" },
  // 12 x 18
  { type: "Gloss", size: "12 x 18 in", perSheet: 0.5, note: "50 paise per sheet" },
  { type: "Matt", size: "12 x 18 in", perSheet: 0.7, note: "70 paise per sheet" },
  { type: "Gold", size: "12 x 18 in", perSheet: 1.25, note: "₹1.25 per sheet" },
  { type: "3D", size: "12 x 18 in", perSheet: 1.0, note: "₹1 per sheet" },
  // 12.5 x 18
  { type: "Gloss", size: "12.5 x 18 in", perSheet: 0.5, note: "50 paise per sheet" },
  { type: "Matt", size: "12.5 x 18 in", perSheet: 0.7, note: "70 paise per sheet" },
  { type: "Gold", size: "12.5 x 18 in", perSheet: 1.25, note: "₹1.25 per sheet" },
  { type: "3D", size: "12.5 x 18 in", perSheet: 1.0, note: "₹1 per sheet" },
  // 13 x 19
  { type: "Gloss", size: "13 x 19 in", perSheet: 0.5, note: "50 paise per sheet" },
  { type: "Matt", size: "13 x 19 in", perSheet: 0.7, note: "70 paise per sheet" },
  { type: "Gold", size: "13 x 19 in", perSheet: 1.25, note: "₹1.25 per sheet" },
  { type: "3D", size: "13 x 19 in", perSheet: 1.0, note: "₹1 per sheet" },
  // 14.5 x 20
  { type: "Gloss", size: "14.5 x 20 in", perSheet: 0.5, note: "50 paise per sheet" },
  { type: "Matt", size: "14.5 x 20 in", perSheet: 0.7, note: "70 paise per sheet" },
  { type: "Gold", size: "14.5 x 20 in", perSheet: 1.25, note: "₹1.25 per sheet" },
  { type: "3D", size: "14.5 x 20 in", perSheet: 1.0, note: "₹1 per sheet" },
  // 15.5 x 20
  { type: "Gloss", size: "15.5 x 20 in", perSheet: 0.5, note: "50 paise per sheet" },
  { type: "Matt", size: "15.5 x 20 in", perSheet: 0.7, note: "70 paise per sheet" },
  { type: "Gold", size: "15.5 x 20 in", perSheet: 1.25, note: "₹1.25 per sheet" },
  { type: "3D", size: "15.5 x 20 in", perSheet: 1.0, note: "₹1 per sheet" },
  // 17.5 x 23
  { type: "Gloss", size: "17.5 x 23 in", perSheet: 0.5, note: "50 paise per sheet" },
  { type: "Matt", size: "17.5 x 23 in", perSheet: 0.7, note: "70 paise per sheet" },
  { type: "Gold", size: "17.5 x 23 in", perSheet: 1.25, note: "₹1.25 per sheet" },
  { type: "3D", size: "17.5 x 23 in", perSheet: 1.0, note: "₹1 per sheet" },
  // 17.5 x 25
  { type: "Gloss", size: "17.5 x 25 in", perSheet: 0.5, note: "50 paise per sheet" },
  { type: "Matt", size: "17.5 x 25 in", perSheet: 0.7, note: "70 paise per sheet" },
  { type: "Gold", size: "17.5 x 25 in", perSheet: 1.25, note: "₹1.25 per sheet" },
  { type: "3D", size: "17.5 x 25 in", perSheet: 1.0, note: "₹1 per sheet" },
  // 19.5 x 28
  { type: "Gloss", size: "19.5 x 28 in", perSheet: 0.5, note: "50 paise per sheet" },
  { type: "Matt", size: "19.5 x 28 in", perSheet: 0.7, note: "70 paise per sheet" },
  { type: "Gold", size: "19.5 x 28 in", perSheet: 1.25, note: "₹1.25 per sheet" },
  { type: "3D", size: "19.5 x 28 in", perSheet: 1.0, note: "₹1 per sheet" },
  // 19.5 x 36
  { type: "Gloss", size: "19.5 x 36 in", perSheet: 0.5, note: "50 paise per sheet" },
  { type: "Matt", size: "19.5 x 36 in", perSheet: 0.7, note: "70 paise per sheet" },
  { type: "Gold", size: "19.5 x 36 in", perSheet: 1.25, note: "₹1.25 per sheet" },
  { type: "3D", size: "19.5 x 36 in", perSheet: 1.0, note: "₹1 per sheet" },
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
