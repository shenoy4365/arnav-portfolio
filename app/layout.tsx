import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "https://arnavshenoy.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Arnav Shenoy",
    template: "%s | Arnav Shenoy",
  },
  description:
    "Arnav Shenoy is a high school researcher at William Fremd High School specializing in machine learning, computational biology, and neuroscience. Computational biology research intern at Carnegie Mellon University, with research at UCLA School of Medicine and Southcoast Health (Brown-affiliated).",
  keywords: [
    "Arnav Shenoy",
    "arnavshenoy",
    "Arnav Shenoy portfolio",
    "Arnav Shenoy CMU",
    "Arnav Shenoy UCLA",
    "Arnav Shenoy researcher",
    "machine learning researcher",
    "computational biology",
    "neuroscience researcher",
    "high school researcher",
    "Carnegie Mellon University research intern",
    "UCLA School of Medicine",
    "Southcoast Health",
    "William Fremd High School",
    "glioblastoma research",
    "computational neuroscience",
    "deep learning",
    "bioinformatics",
    "AI research",
  ],
  authors: [{ name: "Arnav Shenoy", url: baseUrl }],
  creator: "Arnav Shenoy",
  publisher: "Arnav Shenoy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: baseUrl,
    title: "Arnav Shenoy — ML & Computational Biology Researcher",
    description:
      "High school researcher at CMU, UCLA, and Southcoast Health working on machine learning, computational biology, and neuroscience.",
    siteName: "Arnav Shenoy",
    firstName: "Arnav",
    lastName: "Shenoy",
  },
  twitter: {
    card: "summary",
    title: "Arnav Shenoy — ML & Computational Biology Researcher",
    description:
      "High school researcher at CMU, UCLA, and Southcoast Health working on machine learning, computational biology, and neuroscience.",
    creator: "@arnavshenoy",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arnav Shenoy",
  url: baseUrl,
  sameAs: [
    "https://github.com/shenoy4365",
    "https://linkedin.com/in/arnav-shenoy",
  ],
  jobTitle: "Computational Biology Research Intern",
  worksFor: {
    "@type": "Organization",
    name: "Carnegie Mellon University",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "William Fremd High School",
  },
  knowsAbout: [
    "Machine Learning",
    "Computational Biology",
    "Neuroscience",
    "Deep Learning",
    "Bioinformatics",
    "Computer Vision",
  ],
  description:
    "High school student researcher specializing in machine learning, computational biology, and neuroscience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light')document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
