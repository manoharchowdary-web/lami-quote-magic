import workshopImage from "@/assets/workshop.jpg";

const steps = [
  {
    title: "Share your requirement",
    body: "Send the sheet size, quantity and the finish you need through the enquiry form or a quick call.",
  },
  {
    title: "Get a quote",
    body: "We review the job and reply with pricing and an expected turnaround time.",
  },
  {
    title: "Lamination & finishing",
    body: "Your sheets are laminated with clean, bubble-free film and checked before packing.",
  },
  {
    title: "Collect or dispatch",
    body: "Pick up your finished sheets or arrange dispatch as agreed.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <img
            src={workshopImage}
            alt="Operator feeding a printed sheet into a roll lamination machine"
            width={1200}
            height={912}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            A simple, four-step process
          </h2>
          <ol className="mt-8 space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
