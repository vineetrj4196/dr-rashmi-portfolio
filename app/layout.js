import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Rashmi H | Ayurvedic Consultant",
  description:
    "Dr. Rashmi H is an experienced Ayurvedic consultant specializing in women’s health, reproductive wellness, and pregnancy care.",
  keywords: [
    "Ayurvedic doctor",
    "Women health Ayurveda",
    "Pregnancy care Ayurveda",
    "PCOS treatment Ayurveda",
    "Dr Rashmi H",
  ],
  openGraph: {
    title: "Dr. Rashmi H | Ayurvedic Consultant",
    description:
      "Holistic Ayurvedic care for women’s health, fertility, and pregnancy.",
    url: "https://yourdomain.com",
    siteName: "Dr. Rashmi H",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
