import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.example.com"),
  title: "Vanguard Architectural Solutions | Exterior & Facade Specialists",
  description:
    "Vanguard Architectural Solutions provides modern outdoor blinds, structural glazing, ACP cladding and fuel station canopy solutions.",
  keywords: [
    "architectural solutions",
    "exterior blinds",
    "structural glazing",
    "ACP cladding",
    "fuel station canopies",
    "commercial facade",
  ],
  openGraph: {
    title: "Vanguard Architectural Solutions",
    description:
      "Simple, practical and modern architectural exterior solutions.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vanguard Architectural Solutions",
    url: "https://www.example.com",
    description:
      "Exterior, facade and architectural infrastructure solutions.",
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}