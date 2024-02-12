import 'server-only';

interface Dictionary {
  [key: string]: string;
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  hr: () => import('./dictionaries/hr.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  if (!dictionaries[locale]) {
    throw new Error(`Locale not supported: ${locale}`);
  }
  return dictionaries[locale]();
};
