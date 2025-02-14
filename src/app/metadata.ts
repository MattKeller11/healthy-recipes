import { Metadata } from "next";

export const appMetadata: Metadata = {
  metadataBase: new URL(""),
  title: {
    default: "Healthy Recipes",
    template: "%s | Healthy Recipes",
  },
  description:
    "Eating healthy doesn't have to be so hard. These recipes give a foundation for learning and eating healthy while maintaining great flavor.",
  keywords: [
    "eating",
    "recipes",
    "healthy",
    "food",
    "consumption",
    "recommendations",
  ],
  openGraph: {
    title: "Healthy Recipes",
    description:
      "Eating healthy doesn't have to be so hard. These recipes give a foundation for learning and eating healthy while maintaining great flavor.",

    url: "",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy Recipes",
    description:
      "Eating healthy doesn't have to be so hard. These recipes give a foundation for learning and eating healthy while maintaining great flavor.",
  },
};
