import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import '@globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const lore = LocalFont({
  src: './fonts/LORE-Regular.woff2',
  variable: '--font-lore',
});

export const metadata: Metadata = {
  title: 'Personal site',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${lore.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
