import { useMemo, useState } from "react";
import { Calculator, Info } from "lucide-react";
import { laminationTypes } from "@/lib/site";
import {
  currency,
  findRate,
  formatRate,
  hasPublishedRates,
  minimumCharge,
  rateCard,
  sheetSizes,
} from "@/lib/rates";

export function Rates() {
  const [type, setType] = useState<string>(laminationTypes[0].value);
  const [size, setSize] = useState<string>(sheetSizes[0] ?? "");
  const [qty, setQty] = useState<number>(100);

  const row = useMemo(() => findRate(type, size), [type, size]);

  const total = useMemo(() => {
    if (!row || row.perSheet === null || !qty || qty < 1) return null;
    const raw = row.perSheet * qty;
    return minimumCharge !== null ? Math.max(raw, minimumCharge) : raw;
  }, [row, qty]);

  return (
    <section id="rates" className="scroll-mt-20 bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-foil">
            Rates
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            See your rate on the spot
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pick your finish, sheet size and quantity to get an instant estimate — no waiting for a
            callback.
          </p>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* Rate table */}
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Lamination rate card per sheet</caption>
              <thead className="bg-secondary/60">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Finish</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Sheet size</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">Per sheet</th>
                </tr>
              </thead>
              <tbody>
                {rateCard.map((r) => (
                  <tr key={`${r.type}-${r.size}`} className="border-t border-border/60">
                    <td className="px-4 py-3 font-medium">{r.type}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r.size}</td>
                    <td className="px-4 py-3 text-right">
                      <span
                        className={
                          r.perSheet === null
                            ? "text-muted-foreground"
                            : "font-semibold text-gold-foil"
                        }
                      >
                        {formatRate(r.perSheet)}
                      </span>
                      {r.note ? (
                        <span className="block text-xs text-muted-foreground">{r.note}</span>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="flex items-start gap-2 border-t border-border/60 px-4 py-3 text-xs text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {hasPublishedRates
                ? "Rates are indicative and may vary with artwork, film availability and finishing work."
                : "[PLACEHOLDER — rates not published yet. Share your per-sheet rates and they will appear here automatically.]"}
            </p>
          </div>

          {/* Calculator */}
          <div className="rounded-2xl border border-border bg-background p-6 shadow-soft">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold">
              <Calculator className="h-5 w-5 text-accent" aria-hidden="true" />
              Instant estimate
            </h3>

            <div className="mt-5 space-y-4">
              <div>
                <label htmlFor="rate-type" className="text-sm font-medium">Finish</label>
                <select
                  id="rate-type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                >
                  {laminationTypes.map((t) => (
                    <option key={t.value} value={t.value}>{t.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="rate-size" className="text-sm font-medium">Sheet size</label>
                <select
                  id="rate-size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                >
                  {sheetSizes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="rate-qty" className="text-sm font-medium">Quantity (sheets)</label>
                <input
                  id="rate-qty"
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-secondary/60 p-4" aria-live="polite">
              {total !== null ? (
                <>
                  <p className="text-sm text-muted-foreground">Estimated total</p>
                  <p className="font-display text-3xl font-semibold text-gold-foil">
                    {currency}
                    {total.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Indicative only. Final amount confirmed after we see the artwork.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-medium">Rate on request</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    This finish and size is not priced online yet — send an enquiry or call us and we
                    will confirm the rate right away.
                  </p>
                </>
              )}
            </div>

            <a
              href="#enquiry"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
