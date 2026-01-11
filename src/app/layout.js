import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

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
  title: "Mohan Lal | Full-Stack Developer & Cloud-Native Architect",
  description: "Self-taught Full-Stack Developer specializing in Java, Spring Boot, Angular, and cloud-native architectures. Building intelligent, scalable systems with AWS, Azure, and AI integrations.",
  keywords: ["Full-Stack Developer", "Java Developer", "Spring Boot", "Angular", "AWS", "Cloud-Native", "AI", "DevOps"],
  authors: [{ name: "Mohan Lal" }],
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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="XxlM4WYjht7yWIOupK_FfJ-69vi7BhFQc8aaYk-kKyY"
        />
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
