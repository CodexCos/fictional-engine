import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio | Saurav KC",
  description:
    "Welcome to the portfolio of Saurav KC. Showcasing web development projects, and design.",
  keywords:
    "Portfolio, Web Developer, Projects, MERN Stack Developer, Web Developer, Full Stack Developer, JavaScript, React, Node.js, Express.js, MongoDB, Portfolio, Projects, Web Application, Frontend, Backend, Next.js, Redux, REST APIs, GitHub, JavaScript Developer, MERN Projects, Responsive Web Design, React Developer, Node Developer, Express Developer, MongoDB Projects",
  robots: "index, follow",
  openGraph: {
    title: "My Portfolio | Saurav KC",
    description:
      "Welcome to the portfolio of Saurav KC. Showcasing web development projects, and design.",
    url: "https://sauravkc8.com.np",
    siteName: "Saurav KC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LenisProvider>
        </ThemeProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
