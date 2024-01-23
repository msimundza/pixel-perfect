import type { Metadata } from 'next';
import { Chakra_Petch } from 'next/font/google';
import './globals.css';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Pixel Perfect',
  description: 'Created by @msimundza',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={chakra.className}>{children}</body>
    </html>
  );
}
