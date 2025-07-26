import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Life Moves",
  description: "7-Day Somatic Challenge - Feel Better in Your Body",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-body ">
      <body
        className={`${poppins.variable} ${lato.variable} antialiased font-body  text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
