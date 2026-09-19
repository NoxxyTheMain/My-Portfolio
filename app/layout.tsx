import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "./components";

export const metadata: Metadata = {
  title: "Allan Senteu — Writer, Builder & Technology Explorer",
  description: "The portfolio of Allan Senteu: software development, technology writing, and a growing interest in cybersecurity.",
  keywords: ["Allan Senteu", "Allan Senteu developer", "technology writer", "software developer", "cybersecurity"],
  openGraph: {
    title: "Allan Senteu — Writer, Builder & Technology Explorer",
    description: "I build digital experiences, write about technology, and explore the systems underneath.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteNav />{children}</body></html>;
}
