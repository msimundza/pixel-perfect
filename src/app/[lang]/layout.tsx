import type { Metadata } from 'next';
import { Chakra_Petch } from 'next/font/google';
import './globals.css';
import { i18n, type Locale } from '../../i18n-config';
import { getDictionary } from '@/dictionaries';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const {
    metadata: {
      title,
      description,
      openGraph: { title: ogTitle, description: ogDescription },
    },
  } = await getDictionary(params.lang);
  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: 'https://www.pixelperfect.hr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.2707e4a7.webp&w=256&q=75',
          width: 256,
          height: 256,
          alt: title,
        },
      ],
    },
    metadataBase: new URL('https://www.pixelperfect.hr'),
    alternates: {
      canonical: 'https://www.pixelperfect.hr',
      languages: {
        en: 'https://www.pixelperfect.hr/en',
        hr: 'https://www.pixelperfect.hr/hr',
      },
    },
    category: 'Technology, Software, Web Development, Split, Croatia',
    keywords: [
      'web development',
      'software development',
      'technology',
      'digital solutions',
      'web design',
      'Split',
      'Croatia',
      'Hrvatska',
    ],
    authors: {
      name: 'Pixel Perfect',
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: 'MlMd9LJ0ZGttasFqs5gDh3vzlf_vu9D2Rh4HlbNLCRQ',
    },
  };
}

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
