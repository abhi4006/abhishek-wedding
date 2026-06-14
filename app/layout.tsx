import type { Metadata, Viewport } from "next";

import "@fontsource/hind/400.css";
import "@fontsource/hind/600.css";
import "@fontsource/hind/700.css";
import "@fontsource/rozha-one/400.css";
import "./globals.css";

const siteUrl = "https://abhi4006.github.io/abhishek-wedding/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "अभिषेक का शुभ विवाह | अभिषेक संग कंचन",
  description:
    "वर पक्ष की ओर से अभिषेक एवं कंचन के शुभ विवाह का स्नेहिल आमंत्रण।",
  applicationName: "अभिषेक का शुभ विवाह",
  manifest: "/abhishek-wedding/manifest.webmanifest",
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "अभिषेक का शुभ विवाह | अभिषेक संग कंचन",
    description: "वर पक्ष की ओर से 03 जुलाई 2026 के शुभ विवाह का स्नेहिल आमंत्रण।",
    type: "website",
    url: siteUrl,
    siteName: "अभिषेक का शुभ विवाह",
    locale: "hi_IN",
    images: [
      {
        url: `${siteUrl}wedding-card-floral.jpeg`,
        alt: "अभिषेक संग कंचन शुभ विवाह"
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6f1d1b"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
