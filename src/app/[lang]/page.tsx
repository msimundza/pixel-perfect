import './styles.css';
import { getDictionary } from '../../dictionaries';
import { Locale } from '@/i18n-config';
import { Main } from './components/Main/Main';

export default async function Page(
  props: {
    params: Promise<{ lang: Locale }>;
  }
) {
  const params = await props.params;

  const {
    lang
  } = params;

  const dictionary = await getDictionary(lang);

  return <Main dictionary={dictionary} lang={lang} />;
}
