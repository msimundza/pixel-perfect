import type { Metadata } from 'next';
import { Chakra_Petch } from 'next/font/google';
import './globals.css';
import { i18n, type Locale } from '../../i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

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
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body
        className={`${chakra.className} grid place-items-center min-h-screen text-white overflow-x-hidden `}
      >
        <main className="overflow-x-hidden w-screen">{children}</main>
      </body>
    </html>
  );
}
