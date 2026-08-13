import { Check } from "lucide-react";
import { laminationTypes } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Our services
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          Choose the finish that suits your print
        </h2>
        <p className="mt-4 text-muted-foreground">
          Pricing depends on sheet size, quantity and film type. Share your requirement in the
          enquiry form and we will send you a quote.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {laminationTypes.map((s) => (
          <article
            key={s.value}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              {s.value}
            </span>
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {s.description}
            </p>
            <ul className="mt-4 space-y-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#enquiry"
              className="mt-5 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
            >
              Request pricing →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
