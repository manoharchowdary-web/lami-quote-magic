import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Rates } from "@/components/site/Rates";

const TITLE = "Lamination Rates & Instant Estimate | Sree Laminations";
const DESCRIPTION =
  "See Sree Laminations rates per 100 square inches for Gloss, Matt, Gold and 3D lamination, and calculate your total instantly by size and quantity.";

export const Route = createFileRoute("/rates")({
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
      <Rates />
    </PageShell>
  ),
});
