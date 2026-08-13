import { ArrowRight, Phone, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-lamination.jpg";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-gradient text-ink-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Sheet lamination specialists
          </p>

          <h1 className="mt-5 font-display text-4xl leading-[1.05] font-semibold sm:text-5xl md:text-6xl">
            Premium <span className="text-gold-foil">Gloss, Matt, Gold &amp; 3D</span> lamination
            finishing
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
            Sree Lamination provides professional sheet lamination with clean edges, bubble-free
            film and dependable turnaround for printers, designers and local businesses.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`tel:${site.phones[0]}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-6 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {site.phones[0]}
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-ink-foreground/15 pt-6 text-sm">
            {[
              ["Finishes", "5 options"],
              ["Orders", "Small & bulk"],
              ["Quote", "Same-day reply"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-ink-foreground/60">{k}</dt>
                <dd className="mt-1 font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-ink-foreground/15 shadow-lift">
            <img
              src={heroImage}
              alt="Stack of glossy laminated printed sheets in navy and gold reflecting workshop light"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
