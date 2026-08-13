import { Clock, Layers, ShieldCheck, Users } from "lucide-react";

const items = [
  {
    icon: Layers,
    title: "Five finish options",
    body: "Gloss, Matt, Gold, 3D and custom finishes handled under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Careful quality checks",
    body: "Sheets are inspected for bubbles, lifting edges and clean trimming before packing.",
  },
  {
    icon: Clock,
    title: "Reliable turnaround",
    body: "Timelines are confirmed with your quote so you can plan your delivery.",
  },
  {
    icon: Users,
    title: "Small and bulk orders",
    body: "From a handful of cards to bulk print runs for local businesses and printers.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
        Why customers choose Sree Lamination
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15">
              <Icon className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
