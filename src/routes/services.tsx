import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Services } from "@/components/site/Services";

const TITLE = "Lamination Services | Sree Laminations";
const DESCRIPTION =
  "Gloss, Matt, Gold, 3D and custom sheet lamination services from Sree Laminations with clean finishing on every sheet.";

export const Route = createFileRoute("/services")({
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
      <Services />
    </PageShell>
  ),
});
