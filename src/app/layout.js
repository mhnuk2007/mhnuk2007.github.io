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
  metadataBase: new URL("https://mhnuk2007.github.io"),

  title: {
    default: "Mohan Lal | Java Full-Stack Developer | Spring Boot",
    template: "%s | Mohan Lal",
  },

  description:
      "Mohan Lal is a Java Full-Stack Developer specializing in Java, Spring Boot, microservices, Jakarta EE, Jakarta NoSQL, cloud-native applications, Docker, Kubernetes, AWS, and AI-powered applications.",

  keywords: [
    "Mohan Lal",
    "mhnuk2007",
    "Java Full-Stack Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Spring Boot Engineer",
    "Java Backend Developer",
    "Java Microservices Developer",
    "Spring Framework",
    "Spring Security",
    "Jakarta EE",
    "Jakarta NoSQL",
    "Eclipse JNoSQL",
    "Microservices",
    "REST APIs",
    "Docker",
    "Kubernetes",
    "AWS",
    "Terraform",
    "PostgreSQL",
    "Spring AI",
    "AI Engineering",
    "Open Source Contributor",
  ],

  authors: [
    {
      name: "Mohan Lal",
      url: "https://mhnuk2007.github.io/",
    },
  ],

  creator: "Mohan Lal",
  publisher: "Mohan Lal",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mhnuk2007.github.io/",
    title: "Mohan Lal | Java Full-Stack Developer | Spring Boot",
    description:
        "Java, Spring Boot, microservices, Jakarta EE, cloud-native development, and open-source contributions.",
    siteName: "Mohan Lal",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohan Lal | Java Full-Stack Developer",
    description:
        "Java, Spring Boot, microservices, Jakarta EE, cloud-native development, and open-source contributions.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohan Lal",
  url: "https://mhnuk2007.github.io/",
  image: "https://mhnuk2007.github.io/myphoto.png",
  sameAs: [
    "https://github.com/mhnuk2007",
    "https://www.linkedin.com/in/mhnuk2007/",
  ],
  jobTitle: "Java Full-Stack Developer",
};

export default function RootLayout({ children }) {
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
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd),
            }}
        />
      </head>

      <body
          className={`${inter.variable} ${jetbrainsMono.variable} bg-slate-950 text-slate-200`}
      >
      {children}
      </body>
      </html>
  );
}
