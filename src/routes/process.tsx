import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Process } from "@/components/site/Process";

const TITLE = "How Our Lamination Process Works | Sree Laminations";
const DESCRIPTION =
  "From enquiry to finished sheets — see how Sree Laminations handles your artwork, film selection, lamination and delivery.";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <Process />
    </PageShell>
  ),
});
