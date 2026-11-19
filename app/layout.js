
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://skfabricators.in"),

  title: {
    default:
      "SK Fabricators | Custom Gates, ACP Cladding & Architectural Exteriors",
    template: "%s | SK Fabricators",
  },

  description:
    "SK Fabricators specializes in custom fabrication, designer main gates, ACP cladding, aluminium facades, glass structures, outdoor blinds, petrol bunk canopies and commercial exterior solutions.",

  keywords: [
    // Brand keywords
    "Fabricator",
    "Fabricators",
    "SK Fabricators",
    "SK Fabricator",
    "SK Fabricators in Bangalore",
    "SK Fabricators near me",
    "SK Fabricator in Bangalore",
    "SK Fabricators India",
    "SK Fabrication",
    "SK Fabrications",
    "SK Fabrication in Bangalore",
    "SK Fabrications in Bangalore",

    // Gate fabrication
    "custom main gates",
    "designer main gates",
    "modern metal gates",
    "laser cut gates",
    "automatic gates",
    "residential gate fabrication",
    "commercial gate fabrication",
    "MS gate fabrication",
    "steel gate manufacturers",

    // Exterior and facade
    "architectural exterior works",
    "building exterior design",
    "exterior elevation works",
    "modern building facade",
    "commercial facade solutions",
    "architectural facade contractors",
    "exterior cladding contractors",

    // ACP and aluminium
    "ACP cladding works",
    "ACP sheet installation",
    "ACP elevation design",
    "aluminium composite panel cladding",
    "aluminium facade works",
    "aluminium louvers",
    "aluminium exterior solutions",

    // Glass works
    "structural glazing",
    "glass facade works",
    "commercial glass facade",
    "building glass installation",
    "glass and ACP facade",

    // Blinds
    "outdoor blinds",
    "balcony blinds",
    "balcony outdoor blinds",
    "weatherproof outdoor blinds",
    "motorized outdoor blinds",
    "pergola blinds",

    // Petrol bunk works
    "petrol bunk canopy fabrication",
    "petrol pump canopy structure",
    "fuel station canopy design",
    "petrol bunk construction",
    "fuel station structures",
    "petrol pump exterior branding",

    // Commercial fabrication
    "metal fabrication services",
    "custom fabrication works",
    "commercial fabrication contractors",
    "architectural metal works",
    "industrial fabrication services",
    "signage fabrication",
    "3D glow sign boards",
    "commercial exterior solutions",
  ],


  icons: {
  icon: [
    { url: "/favicon.ico", type: "image/x-icon" },
  ],
  shortcut: "/favicon.ico",
  apple: "/logo.png",
},

  // Canonical URL
  alternates: {
    canonical: "/",
  },

  // Social media sharing preview
  openGraph: {
    title:
      "SK Fabricators | Custom Gates, ACP Cladding & Architectural Exteriors",

    description:
      "Discover custom gates, architectural facades, ACP cladding, outdoor blinds, glass structures and petrol bunk canopy solutions by SK Fabricators.",

    url: "https://skfabricators.in",
    siteName: "SK Fabricators",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SK Fabricators - Architectural and Fabrication Solutions",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // Twitter sharing preview
  twitter: {
    card: "summary_large_image",
    title:
      "SK Fabricators | Architectural & Fabrication Solutions",
    description:
      "Custom gates, exterior works, ACP cladding, glass facades and fuel station structures.",
    images: ["/og-image.png"],
  },

  // Google indexing settings
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SK Fabricators",
    url: "https://skfabricators.in",

    logo: "https://skfabricators.in/logo.png",

    description:
      "SK Fabricators provides custom gates, architectural exteriors, ACP cladding, outdoor blinds, glass facades and fuel station structures.",
  };

  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </body>
    </html>
  );
}
