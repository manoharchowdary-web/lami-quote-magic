import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, Calculator } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { laminationTypes } from "@/lib/site";
import { calculateEstimate, formatRate, sheetSizes } from "@/lib/rates";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  lamination_type: z.enum(["Gloss", "Matt", "Gold", "3D", "Custom"], {
    message: "Select a lamination type",
  }),
  size: z.string().min(1, "Select a sheet size"),
  quantity: z.coerce.number().min(1, "Quantity must be at least 1").optional(),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      lamination_type: "Gloss",
      size: sheetSizes[0] ?? "12 x 18 in",
      quantity: undefined,
      message: "",
    },
  });

  const type = watch("lamination_type");
  const size = watch("size");
  const qty = watch("quantity");

  const estimate = useMemo(() => {
    if (!qty || qty < 1) return null;
    return calculateEstimate(type, size, qty);
  }, [type, size, qty]);

  const onSubmit = async (values: FormValues) => {
    try {
      const quantityText = [values.size, values.quantity ? `${values.quantity} sheets` : null]
        .filter(Boolean)
        .join(" — ");

      const { error } = await supabase.from("enquiries").insert({
        name: values.name,
        phone: values.phone,
        email: values.email || null,
        lamination_type: values.lamination_type,
        quantity: quantityText || null,
        message: values.message || null,
      });

      if (error) throw error;

      setSubmitted(true);
      reset();
      toast.success("Enquiry sent", {
        description: "Thank you — we will get back to you with a quote shortly.",
      });
    } catch (err) {
      console.error("Enquiry submit failed", err);
      toast.error("Could not send your enquiry", {
        description: "Please try again, or call us directly.",
      });
    }
  };

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring";

  return (
    <section id="enquiry" className="bg-ink-gradient text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:py-24">
        <div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Get a <span className="text-gold-foil">quote</span>
          </h2>
          <p className="mt-4 max-w-md text-ink-foreground/75">
            Pick your finish, sheet size and quantity to see an instant estimate, then send your
            enquiry.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ink-foreground/75">
            <li>• Gloss, Matt, Gold, 3D or a custom finish</li>
            <li>• Small quantities and bulk runs welcome</li>
            <li>• Your details are only used to reply to this enquiry</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-card p-6 text-card-foreground shadow-lift sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-start gap-4 py-6">
              <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden="true" />
              <h3 className="text-xl font-semibold">Enquiry received</h3>
              <p className="text-sm text-muted-foreground">
                Thank you for contacting Sree Lamination. We will get back to you with a quote.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name *
                  </label>
                  <input
                    id="name"
                    className={fieldClass}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={fieldClass}
                    placeholder="Mobile number"
                    aria-invalid={!!errors.phone}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email (optional)
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={fieldClass}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lamination_type" className="text-sm font-medium">
                    Lamination type *
                  </label>
                  <select
                    id="lamination_type"
                    className={fieldClass}
                    aria-invalid={!!errors.lamination_type}
                    {...register("lamination_type")}
                  >
                    {laminationTypes.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.value}
                      </option>
                    ))}
                  </select>
                  {errors.lamination_type && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.lamination_type.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="size" className="text-sm font-medium">
                    Sheet size *
                  </label>
                  <select
                    id="size"
                    className={fieldClass}
                    aria-invalid={!!errors.size}
                    {...register("size")}
                  >
                    {sheetSizes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.size && (
                    <p className="mt-1 text-xs text-destructive">{errors.size.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="quantity" className="text-sm font-medium">
                    Quantity (sheets) *
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    min={1}
                    className={fieldClass}
                    placeholder="e.g. 500"
                    aria-invalid={!!errors.quantity}
                    {...register("quantity", { valueAsNumber: true })}
                  />
                  {errors.quantity && (
                    <p className="mt-1 text-xs text-destructive">{errors.quantity.message}</p>
                  )}
                </div>
              </div>

              {/* Live estimate */}
              <div
                className="rounded-xl bg-secondary/60 p-4"
                aria-live="polite"
              >
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Calculator className="h-4 w-4 text-accent" aria-hidden="true" />
                  Estimated total
                </div>
                {estimate !== null ? (
                  <p className="mt-1 font-display text-3xl font-semibold text-gold-foil">
                    {formatRate(estimate)}
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-muted-foreground">
                    Enter a quantity to see the estimated price.
                  </p>
                )}
                <p className="mt-1 text-xs text-muted-foreground">
                  Indicative only — final amount confirmed after artwork review.
                </p>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium">
                  Details (optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={fieldClass}
                  placeholder="Tell us about your job"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                {isSubmitting ? "Sending…" : "Send enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
