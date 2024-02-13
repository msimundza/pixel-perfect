import './styles.css';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
import ProjectShowcase from './components/ProjectsShowcase/ProjectsShowcase';
import Footer from './components/Footer/Footer';
import { ContactForm } from './components/ContactForm/ContactForm';
import About from './components/About/About';
import { getDictionary } from '../../dictionaries';
import { BlowoutText } from './components/BlowoutText/BlowoutText';
import TypewriterSection from './components/TypewriterSection/TypewriterSection';
import { Locale } from '@/i18n-config';
import Header from './components/Header/Header';

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <section className="bg-white text-black min-h-screen w-screen relative">
        <Header language={lang} />
        <BlowoutText dictionary={dictionary} />
      </section>
      <section className="min-h-screen w-screen">
        <TypewriterSection />
      </section>
      <section id="about" className="min-h-screen w-screen bg-white text-black">
        <About />
      </section>
      <section
        className="min-h-screen w-screen bg-black py-12 px-4"
        id="projects"
      >
        <ProjectShowcase />
      </section>
      <section
        className="min-h-screen w-screen flex place-items-center bg-white py-12 px-4"
        id="contact-me"
      >
        <ContactForm />
      </section>
      <ScrollIndicator />
      <Footer />
    </>
  );
}
