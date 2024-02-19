import './styles.css';
import { getDictionary } from '../../dictionaries';
import { Locale } from '@/i18n-config';
import { Main } from './components/Main/Main';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return <Main dictionary={dictionary} lang={lang} />;
}
