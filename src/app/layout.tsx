import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Profil Desa & KKN",
  description: "Website profil desa dan showcase program KKN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${playfair.variable} ${jakarta.variable} antialiased font-jakarta bg-cream text-charcoal flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
