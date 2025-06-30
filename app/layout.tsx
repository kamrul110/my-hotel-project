import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "El Aurassi Hotel - DAYF Booking",
  description: "Book your stay at El Aurassi Hotel with panoramic Mediterranean views",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-sans antialiased`}
        style={{ fontFamily: '"DM Sans", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
