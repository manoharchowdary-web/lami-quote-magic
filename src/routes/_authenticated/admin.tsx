import { useEffect, useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, RefreshCw, LogOut, Mail, Phone, ShieldAlert, IndianRupee, Send } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Enquiry Inbox | Sree Laminations" },
      {
        name: "description",
        content: "Review, track and manage customer lamination enquiries submitted on the website.",
      },
      { property: "og:title", content: "Enquiry Inbox | Sree Laminations" },
      {
        property: "og:description",
        content: "Review, track and manage customer lamination enquiries submitted on the website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

type Enquiry = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  lamination_type: string;
  quantity: string | null;
  message: string | null;
  status: string;
  admin_notes: string | null;
  created_at: string;
  quoted_amount: number | null;
  quote_note: string | null;
  quoted_at: string | null;
};

const statuses = ["new", "contacted", "quoted", "closed"] as const;

function QuoteBox({ enquiry, onSaved }: { enquiry: Enquiry; onSaved: () => void }) {
  const [open, setOpen] = useState(enquiry.quoted_amount !== null);
  const [amount, setAmount] = useState(
    enquiry.quoted_amount !== null ? String(enquiry.quoted_amount) : ""
  );
  const [note, setNote] = useState(enquiry.quote_note ?? "");
  const [saving, setSaving] = useState(false);

  const send = async () => {
    const value = Number(amount);
    if (!Number.isFinite(value) || value <= 0) {
      toast.error("Enter a valid quote amount");
      return;
    }
    setSaving(true);
    const { error } = await supabase
      .from("enquiries")
      .update({
        quoted_amount: value,
        quote_note: note.trim() || null,
        quoted_at: new Date().toISOString(),
        status: "quoted",
      })
      .eq("id", enquiry.id);
    setSaving(false);
    if (error) {
      toast.error("Could not save the quote", { description: error.message });
      return;
    }
    toast.success("Quote confirmed", { description: "Status updated to quoted." });
    onSaved();
  };

  const waText = encodeURIComponent(
    `Hello ${enquiry.name}, your quote from Sree Laminations for ${enquiry.lamination_type} lamination${
      enquiry.quantity ? ` (${enquiry.quantity})` : ""
    } is ₹${amount || "___"}.${note.trim() ? ` ${note.trim()}` : ""}`
  );
  const waNumber = enquiry.phone.replace(/\D/g, "").replace(/^0+/, "");

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
      >
        <IndianRupee className="h-3.5 w-3.5" /> Send quote
      </button>
    );
  }

  return (
    <div className="mt-4 rounded-xl border border-border bg-secondary/40 p-4">
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label htmlFor={`amt-${enquiry.id}`} className="text-xs font-medium">
            Quote amount (₹)
          </label>
          <input
            id={`amt-${enquiry.id}`}
            type="number"
            min={1}
            step="0.01"
            value={amount}
            onChange={(ev) => setAmount(ev.target.value)}
            className="mt-1 w-36 rounded-lg border border-input bg-background px-3 py-2 text-sm"
            placeholder="e.g. 1250"
          />
        </div>
        <div className="min-w-[12rem] flex-1">
          <label htmlFor={`note-${enquiry.id}`} className="text-xs font-medium">
            Note to customer (optional)
          </label>
          <input
            id={`note-${enquiry.id}`}
            value={note}
            onChange={(ev) => setNote(ev.target.value)}
            className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
            placeholder="Delivery in 2 days, artwork approved"
          />
        </div>
        <button
          type="button"
          onClick={send}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground disabled:opacity-70"
        >
          {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
          Confirm quote
        </button>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
        <a
          href={`https://wa.me/91${waNumber}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-3 py-1.5 font-medium hover:bg-secondary"
        >
          Send on WhatsApp
        </a>
        {enquiry.email && (
          <a
            href={`mailto:${enquiry.email}?subject=${encodeURIComponent("Your quote from Sree Laminations")}&body=${waText}`}
            className="rounded-full border border-border px-3 py-1.5 font-medium hover:bg-secondary"
          >
            Send by email
          </a>
        )}
        {enquiry.quoted_at && (
          <span className="text-muted-foreground">
            Quoted ₹{enquiry.quoted_amount} on {new Date(enquiry.quoted_at).toLocaleString("en-IN")}
          </span>
        )}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-muted-foreground underline underline-offset-4"
        >
          Close
        </button>
      </div>
    </div>
  );
}


function AdminPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null));
  }, []);

  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["enquiries"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Enquiry[];
    },
  });

  const signOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  const setStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("enquiries").update({ status }).eq("id", id);
    if (error) {
      toast.error("Could not update status", { description: error.message });
      return;
    }
    toast.success(`Marked as ${status}`);
    queryClient.invalidateQueries({ queryKey: ["enquiries"] });
  };

  const noAccess = isError && !isLoading && (data?.length ?? 0) === 0;

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo.url} alt="Sree Laminations logo" className="h-8 w-8 object-contain" width={32} height={32} />
            <span className="font-display text-base font-semibold">
              Sree <span className="text-gold-foil">Laminations</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="hidden text-sm text-muted-foreground sm:inline">{email}</span>
            <button
              type="button"
              onClick={() => refetch()}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:bg-secondary"
              aria-label="Refresh enquiries"
            >
              <RefreshCw className={`h-4 w-4 ${isFetching ? "animate-spin" : ""}`} />
            </button>
            <button
              type="button"
              onClick={signOut}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="font-display text-3xl font-semibold">Enquiry inbox</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Every &ldquo;Send enquiry&rdquo; submission from the website lands here.
        </p>

        {isLoading && (
          <div className="mt-10 flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading enquiries…
          </div>
        )}

        {isError && (
          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 font-semibold">
              <ShieldAlert className="h-5 w-5 text-destructive" /> Could not load enquiries
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {error instanceof Error ? error.message : "Unknown error."}
            </p>
          </div>
        )}

        {!isLoading && !isError && (data?.length ?? 0) === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            No enquiries yet. New customer requests will appear here automatically.
          </div>
        )}

        {!noAccess && (
          <ul className="mt-8 space-y-4">
            {(data ?? []).map((e) => (
              <li key={e.id} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-lg font-semibold">{e.name}</p>
                    <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <a href={`tel:${e.phone}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
                        <Phone className="h-3.5 w-3.5" /> {e.phone}
                      </a>
                      {e.email && (
                        <a href={`mailto:${e.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
                          <Mail className="h-3.5 w-3.5" /> {e.email}
                        </a>
                      )}
                    </p>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                    {new Date(e.created_at).toLocaleString("en-IN")}
                  </span>
                </div>

                <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">Lamination</dt>
                    <dd className="font-medium">{e.lamination_type}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">Size / quantity</dt>
                    <dd className="font-medium">{e.quantity ?? "—"}</dd>
                  </div>
                </dl>

                {e.message && (
                  <p className="mt-4 rounded-xl bg-secondary/60 p-3 text-sm">{e.message}</p>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {statuses.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStatus(e.id, s)}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition-colors ${
                        e.status === s
                          ? "bg-primary text-primary-foreground"
                          : "border border-border hover:bg-secondary"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                  <QuoteBoxTrigger enquiry={e} />
                </div>

              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
