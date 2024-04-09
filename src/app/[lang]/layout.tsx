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
  title:
    'Pixel Perfect: Web Site Design and Development, SEO, and Everything in Between.',
  description:
    'Pixel Perfect: Unleashing Digital Potential with Custom Web Solutions and SEO Excellence.',
  openGraph: {
    title:
      'Pixel Perfect: Web Site Design and Development, SEO, and Everything in Between.',
    description:
      'Pixel Perfect: Unleashing Digital Potential with Custom Web Solutions and SEO Excellence.',
    images: [
      {
        url: 'https://www.pixelperfect.hr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.2707e4a7.webp&w=256&q=75',
        width: 1200,
        height: 630,
        alt: 'Pixel Perfect: Web Site Design and Development, SEO, and Everything in Between.',
      },
    ],
  },
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
