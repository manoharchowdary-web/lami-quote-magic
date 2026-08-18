// ====================================================================== 
// RATE CARD — EDIT THIS FILE TO PUBLISH YOUR PRICES
// ====================================================================== 

export type RateRow = {
  /** Must match a value in `laminationTypes` (Gloss, Matt, Gold, 3D, Custom). */
  type: string;
  /** Sheet size this rate applies to. */
  size: string;
  /** Rate per 100 square inches in INR. `null` = not published yet. */
  perSheet: number | null;
  /** Optional note shown next to the rate. */
  note?: string;
};

/** Minimum order charge in INR, or null if not published. */
export const minimumCharge: number | null = null;

export const currency = "₹";

export const rateCard: RateRow[] = [
  // 11.5 x 18
  { type: "Gloss", size: "11.5 x 18 in", perSheet: 0.5, note: "50 paise per 100 sq in" },
  { type: "Matt", size: "11.5 x 18 in", perSheet: 0.7, note: "70 paise per 100 sq in" },
  { type: "Gold", size: "11.5 x 18 in", perSheet: 1.25, note: "₹1.25 per 100 sq in" },
  { type: "3D", size: "11.5 x 18 in", perSheet: 1.0, note: "₹1 per 100 sq in" },
  // 12 x 18
  { type: "Gloss", size: "12 x 18 in", perSheet: 0.5, note: "50 paise per 100 sq in" },
  { type: "Matt", size: "12 x 18 in", perSheet: 0.7, note: "70 paise per 100 sq in" },
  { type: "Gold", size: "12 x 18 in", perSheet: 1.25, note: "₹1.25 per 100 sq in" },
  { type: "3D", size: "12 x 18 in", perSheet: 1.0, note: "₹1 per 100 sq in" },
  // 12.5 x 18
  { type: "Gloss", size: "12.5 x 18 in", perSheet: 0.5, note: "50 paise per 100 sq in" },
  { type: "Matt", size: "12.5 x 18 in", perSheet: 0.7, note: "70 paise per 100 sq in" },
  { type: "Gold", size: "12.5 x 18 in", perSheet: 1.25, note: "₹1.25 per 100 sq in" },
  { type: "3D", size: "12.5 x 18 in", perSheet: 1.0, note: "₹1 per 100 sq in" },
  // 13 x 19
  { type: "Gloss", size: "13 x 19 in", perSheet: 0.5, note: "50 paise per 100 sq in" },
  { type: "Matt", size: "13 x 19 in", perSheet: 0.7, note: "70 paise per 100 sq in" },
  { type: "Gold", size: "13 x 19 in", perSheet: 1.25, note: "₹1.25 per 100 sq in" },
  { type: "3D", size: "13 x 19 in", perSheet: 1.0, note: "₹1 per 100 sq in" },
  // 14.5 x 20
  { type: "Gloss", size: "14.5 x 20 in", perSheet: 0.5, note: "50 paise per 100 sq in" },
  { type: "Matt", size: "14.5 x 20 in", perSheet: 0.7, note: "70 paise per 100 sq in" },
  { type: "Gold", size: "14.5 x 20 in", perSheet: 1.25, note: "₹1.25 per 100 sq in" },
  { type: "3D", size: "14.5 x 20 in", perSheet: 1.0, note: "₹1 per 100 sq in" },
  // 15.5 x 20
  { type: "Gloss", size: "15.5 x 20 in", perSheet: 0.5, note: "50 paise per 100 sq in" },
  { type: "Matt", size: "15.5 x 20 in", perSheet: 0.7, note: "70 paise per 100 sq in" },
  { type: "Gold", size: "15.5 x 20 in", perSheet: 1.25, note: "₹1.25 per 100 sq in" },
  { type: "3D", size: "15.5 x 20 in", perSheet: 1.0, note: "₹1 per 100 sq in" },
  // 17.5 x 23
  { type: "Gloss", size: "17.5 x 23 in", perSheet: 0.5, note: "50 paise per 100 sq in" },
  { type: "Matt", size: "17.5 x 23 in", perSheet: 0.7, note: "70 paise per 100 sq in" },
  { type: "Gold", size: "17.5 x 23 in", perSheet: 1.25, note: "₹1.25 per 100 sq in" },
  { type: "3D", size: "17.5 x 23 in", perSheet: 1.0, note: "₹1 per 100 sq in" },
  // 17.5 x 25
  { type: "Gloss", size: "17.5 x 25 in", perSheet: 0.5, note: "50 paise per 100 sq in" },
  { type: "Matt", size: "17.5 x 25 in", perSheet: 0.7, note: "70 paise per 100 sq in" },
  { type: "Gold", size: "17.5 x 25 in", perSheet: 1.25, note: "₹1.25 per 100 sq in" },
  { type: "3D", size: "17.5 x 25 in", perSheet: 1.0, note: "₹1 per 100 sq in" },
  // 19.5 x 28
  { type: "Gloss", size: "19.5 x 28 in", perSheet: 0.5, note: "50 paise per 100 sq in" },
  { type: "Matt", size: "19.5 x 28 in", perSheet: 0.7, note: "70 paise per 100 sq in" },
  { type: "Gold", size: "19.5 x 28 in", perSheet: 1.25, note: "₹1.25 per 100 sq in" },
  { type: "3D", size: "19.5 x 28 in", perSheet: 1.0, note: "₹1 per 100 sq in" },
  // 19.5 x 36
  { type: "Gloss", size: "19.5 x 36 in", perSheet: 0.5, note: "50 paise per 100 sq in" },
  { type: "Matt", size: "19.5 x 36 in", perSheet: 0.7, note: "70 paise per 100 sq in" },
  { type: "Gold", size: "19.5 x 36 in", perSheet: 1.25, note: "₹1.25 per 100 sq in" },
  { type: "3D", size: "19.5 x 36 in", perSheet: 1.0, note: "₹1 per 100 sq in" },
  // Custom
  { type: "Custom", size: "As per artwork", perSheet: null, note: "Quoted after review" },
];

export const sheetSizes = Array.from(new Set(rateCard.map((r) => r.size)));

export function findRate(type: string, size: string): RateRow | undefined {
  return rateCard.find((r) => r.type === type && r.size === size);
}

/** Extract width and height in inches from a size string like "17.5 x 23 in". */
export function parseSizeDimensions(size: string): { width: number; height: number } | null {
  const match = size.match(/([\d.]+)\s*x\s*([\d.]+)\s*in/i);
  if (!match) return null;
  const width = parseFloat(match[1]!);
  const height = parseFloat(match[2]!);
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) return null;
  return { width, height };
}

/**
 * Calculate an area-based estimate.
 * Formula: width * height * ratePer100SqIn / 100 * quantity
 * Returns null for non-dimensional sizes (e.g. Custom) or unpublished rates.
 */
export function calculateEstimate(
  type: string,
  size: string,
  quantity: number
): number | null {
  const row = findRate(type, size);
  if (!row || row.perSheet === null || !quantity || quantity < 1) return null;
  const dims = parseSizeDimensions(size);
  if (!dims) return null;
  const area = dims.width * dims.height;
  const perSheet = (area * row.perSheet) / 100;
  const raw = perSheet * quantity;
  return minimumCharge !== null ? Math.max(raw, minimumCharge) : raw;
}

export function formatRate(value: number | null): string {
  if (value === null) return "Rate on request";
  return `${currency}${value.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

/** True when at least one rate has been published. */
export const hasPublishedRates = rateCard.some((r) => r.perSheet !== null);
