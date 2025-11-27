import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/poppins/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knowli — Power in your choices",
  description: "Clear ingredients. Honest information. Confidence in what you buy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
