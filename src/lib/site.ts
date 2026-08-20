// Central place for business details.
// TODO: Replace the values marked [PLACEHOLDER] with the real business details.

export const site = {
  name: "Sree Lamination",
  tagline: "Gloss, Matt, Gold & 3D sheet lamination",
  phones: ["9966643111", "7799330008", "9441024401"],
  email: "srikanthkothapally1981@gmail.com",
  address: "[PLACEHOLDER — add full shop address]",
  hours: "[PLACEHOLDER — add working hours]",
  mapsUrl: "", // TODO: paste a Google Maps link
};

export const laminationTypes = [
  {
    value: "Gloss",
    title: "Gloss Lamination",
    description:
      "High-shine film that deepens colours and adds a bright, reflective finish to printed sheets.",
    bullets: ["Vivid colour pop", "Wipe-clean surface", "Great for covers & boxes"],
  },
  {
    value: "Matt",
    title: "Matt Lamination",
    description:
      "Smooth, non-reflective finish with a soft premium feel and reduced glare.",
    bullets: ["Elegant soft touch", "No glare under light", "Ideal for menus & cards"],
  },
  {
    value: "Gold",
    title: "Gold Lamination",
    description:
      "Metallic gold finishing that gives invitations, labels and packaging a luxury look.",
    bullets: ["Metallic foil effect", "Premium presentation", "Wedding & festive work"],
  },
  {
    value: "3D",
    title: "3D Lamination",
    description:
      "Textured, depth-effect lamination that makes designs stand out on the shelf.",
    bullets: ["Eye-catching texture", "Depth & dimension", "Strong shelf presence"],
  },
  {
    value: "Custom",
    title: "Custom Finish",
    description:
      "Have something specific in mind? Share your requirement and we will advise the right finish.",
    bullets: ["Tell us your artwork", "Sheet size & quantity", "We suggest the finish"],
  },
] as const;
