import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Bio from '@/components/Bio';
import Problema from '@/components/Problema';
import Metodo from '@/components/Metodo';
import Videos from '@/components/Videos';
import Carousel from '@/components/Carousel';
import ParaQuem from '@/components/ParaQuem';
import Hernia from '@/components/Hernia';
import HerniaUmbilical from '@/components/HerniaUmbilical';
import Homens from '@/components/Homens';
import Incluso from '@/components/Incluso';
import Oferta from '@/components/Oferta';
import Garantia from '@/components/Garantia';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';
import { getContent } from '@/lib/getContent';

export const revalidate = 0;

export default async function Home() {
  const content = await getContent();
  return (
    <>
      <Nav content={content.nav} />
      <Hero content={content.hero} />
      <Bio content={content.bio} />
      <Problema content={content.problema} />
      <Metodo content={content.metodo} />
      <Videos content={content.videos} />
      <Carousel content={content.carousel} />
      <ParaQuem content={content.paraQuem} />
      <Hernia content={content.hernia} />
      <HerniaUmbilical content={content.herniaUmbilical} />
      <Homens content={content.homens} />
      <Incluso content={content.incluso} />
      <Oferta content={content.oferta} affiliates={content.affiliates} />
      <Garantia content={content.garantia} />
      <Footer content={content.footer} />
      <ScrollAnimations />
    </>
  );
}
