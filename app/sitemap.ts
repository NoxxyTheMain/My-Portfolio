import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://my-portfolio-wc9h.vercel.app";
  const paths = ["", "/about", "/contact", "/skills", "/education", "/experience", "/work", "/writing"];
  const now = new Date();
  return paths.map((path, index) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: index === 0 ? 1 : 0.8
  }));
}
