export type ProofItem = { num: string; label: string };
export type CardItem = { title: string; body: string; theme?: string };
export type Affiliate = { username: string; link: string };
export type CarouselImage = { src: string; label: string; type: 'antes' | 'depois' };

export type Plano = {
  name: string;
  badgeColor: 'blue' | 'gold' | 'green';
  price: string;
  period: string;
  featured: boolean;
  featuredLabel: string;
  items: string[];
  ctaText: string;
  ctaLink: string;
  footnote: string;
};

export type SiteContent = {
  colors: {
    crimson: string;
    crimsonDk: string;
    rose: string;
    roseLt: string;
    cream: string;
    creamDk: string;
    warmBg: string;
    dark: string;
    mid: string;
    radius: string;
  };
  nav: {
    ctaText: string;
    ctaLink: string;
  };
  hero: {
    tag: string;
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    note: string;
    proof: ProofItem[];
    imageSrc: string;
  };
  bio: {
    tag: string;
    heading: string;
    paragraphs: string[];
    quote: string;
    quoteAuthor: string;
  };
  problema: {
    tag: string;
    heading: string;
    lead: string;
    cards: CardItem[];
  };
  metodo: {
    tag: string;
    heading: string;
    paragraphs: string[];
    pillars: CardItem[];
    beforeImageSrc: string;
    afterImageSrc: string;
  };
  videos: {
    tag: string;
    heading: string;
    lead: string;
  };
  carousel: {
    tag: string;
    heading: string;
    lead: string;
    images: CarouselImage[];
  };
  paraQuem: {
    tag: string;
    heading: string;
    lead: string;
    items: string[];
  };
  hernia: {
    tag: string;
    heading: string;
    paragraphs: string[];
    cards: CardItem[];
  };
  herniaUmbilical: {
    tag: string;
    heading: string;
    paragraphs: string[];
    caption: string;
    image1Src: string;
    image2Src: string;
  };
  homens: {
    tag: string;
    heading: string;
    paragraphs: string[];
    cards: CardItem[];
    imageSrc: string;
  };
  incluso: {
    tag: string;
    heading: string;
    items: CardItem[];
  };
  oferta: {
    tag: string;
    heading: string;
    lead: string;
    planos: Plano[];
    note: string;
  };
  garantia: {
    tag: string;
    days: string;
    heading: string;
    body: string;
  };
  footer: {
    copyright: string;
    whatsapp: string;
    whatsappDisplay: string;
    instagram: string;
    instagramHandle: string;
    tiktok: string;
    tiktokHandle: string;
  };
  affiliates: Affiliate[];
};
