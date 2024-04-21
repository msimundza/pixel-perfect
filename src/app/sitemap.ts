import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pixelperfect.hr',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://pixelperfect.hr/en',
          hr: 'https://pixelperfect.hr/hr',
        },
      },
    },
  ];
}
