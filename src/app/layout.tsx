import type { Metadata } from "next";
import "./globals.scss";
import { Vazirmatn } from 'next/font/google';

const vazir = Vazirmatn({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
}); 

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazir.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
