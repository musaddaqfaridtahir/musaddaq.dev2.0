import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Musaddaq Farid Tahir — Solo Professional Developer | musaddaq.dev",
  description:
    "Engineered for Speed, Built for Scale. Transforming complex business problems into high-performance web applications using modern tech stacks. From initial architecture to VPS deployment.",
  keywords: [
    "Musaddaq Farid Tahir",
    "musaddaq.dev",
    "Full Stack Developer",
    "Next.js Developer",
    "Software Engineer",
    "VPS Deployment Specialist",
    "React Developer",
  ],
  authors: [{ name: "Musaddaq Farid Tahir" }],
  openGraph: {
    title: "Musaddaq Farid Tahir — Full Stack Developer & Systems Architect",
    description:
      "Engineered for Speed, Built for Scale. High-performance web applications, modern tech stacks & VPS deployment.",
    url: "https://musaddaq.dev",
    siteName: "musaddaq.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
