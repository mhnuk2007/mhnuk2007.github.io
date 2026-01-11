import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://mhnuk2007.github.io'),
  title: "Mohan Lal | Full-Stack Developer & Cloud-Native Architect",
  description: "Self-taught Full-Stack Developer specializing in Java, Spring Boot, Angular, and cloud-native architectures. Building intelligent, scalable systems with AWS, Azure, and AI integrations.",
  keywords: ["Full-Stack Developer", "Java Developer", "Spring Boot", "Angular", "AWS", "Cloud-Native", "AI", "DevOps"],
  authors: [{ name: "Mohan Lal", url: "https://mhnuk2007.github.io" }],
  creator: "Mohan Lal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mhnuk2007.github.io/",
    title: "Mohan Lal | Full-Stack Developer & Cloud-Native Architect",
    description: "Building intelligent, scalable systems without boundaries",
    siteName: "Mohan Lal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohan Lal | Full-Stack Developer",
    description: "Building intelligent, scalable systems without boundaries",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohan Lal',
    url: 'https://mhnuk2007.github.io',
    image: 'https://mhnuk2007.github.io/myphoto.png',
    sameAs: [
      'https://github.com/mhnuk2007',
      'https://www.linkedin.com/in/mhnuk2007/'
    ],
    jobTitle: 'Full-Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance / Open to Work'
    }
  }

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="XxlM4WYjht7yWIOupK_FfJ-69vi7BhFQc8aaYk-kKyY"
        />
        <meta name="theme-color" content="#020617" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-slate-950 text-slate-200`}>
        {children}
      </body>
    </html>
  );
}
