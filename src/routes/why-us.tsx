import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { WhyUs } from "@/components/site/WhyUs";

const TITLE = "Why Choose Sree Laminations | Quality Sheet Lamination";
const DESCRIPTION =
  "Careful handling, consistent finishing and clear pricing — the reasons print shops and customers choose Sree Laminations.";

export const Route = createFileRoute("/why-us")({
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
      <WhyUs />
    </PageShell>
  ),
});
