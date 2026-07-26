'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { saveContentAction, logoutAction } from './actions';
import type { SiteContent, CardItem, Plano, Affiliate, ProofItem, CarouselImage } from '@/types/content';

// ─── Color tokens ─────────────────────────────────────────────────────────────

const C = {
  bg: '#F4F4F5',
  white: '#FFFFFF',
  border: '#E4E4E7',
  text: '#18181B',
  muted: '#71717A',
  subtle: '#A1A1AA',
  crimson: '#A63028',
  crimsonBg: '#FEF2F0',
  amber: '#B45309',
  green: '#166534',
  red: '#991B1B',
  redBg: '#FEF2F2',
  redBorder: '#FECACA',
} as const;

// ─── Sidebar structure ────────────────────────────────────────────────────────

const SECTION_LABELS: Record<string, string> = {
  colors: 'Paleta de Cores',
  nav: 'Navegação',
  affiliates: 'Afiliados',
  hero: 'Hero',
  bio: 'Sobre Tatiéli',
  problema: 'Problemas',
  metodo: 'O Método',
  videos: 'Vídeos',
  carousel: 'Galeria',
  paraQuem: 'Para Quem É',
  hernia: 'Hérnia Cervical',
  herniaUmbilical: 'Hérnia Umbilical',
  homens: 'Para Homens',
  incluso: 'O Que Está Incluso',
  oferta: 'Planos / Compra',
  garantia: 'Garantia',
  footer: 'Rodapé',
};

const SIDEBAR_GROUPS = [
  {
    label: 'CONFIGURAÇÕES',
    items: ['colors', 'nav', 'affiliates'],
  },
  {
    label: 'SEÇÕES',
    items: ['hero', 'bio', 'problema', 'metodo', 'videos', 'carousel', 'paraQuem', 'hernia', 'herniaUmbilical', 'homens', 'incluso', 'oferta', 'garantia', 'footer'],
  },
];

// ─── Utilities ────────────────────────────────────────────────────────────────

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return mobile;
}

function getChangedSections(saved: SiteContent, curr: SiteContent): string[] {
  return (Object.keys(SECTION_LABELS) as (keyof SiteContent)[])
    .filter(k => JSON.stringify(saved[k]) !== JSON.stringify(curr[k]))
    .map(k => SECTION_LABELS[k]);
}

// ─── Field components ─────────────────────────────────────────────────────────

const inputBase: React.CSSProperties = {
  width: '100%', padding: '9px 12px', background: C.white, border: `1px solid ${C.border}`,
  borderRadius: 8, color: C.text, fontSize: 14, fontFamily: 'inherit', outline: 'none',
  boxSizing: 'border-box',
};
const labelBase: React.CSSProperties = {
  display: 'block', fontSize: 11, color: C.muted, marginBottom: 6,
  fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em',
};
const cardBase: React.CSSProperties = {
  background: C.white, border: `1px solid ${C.border}`, borderRadius: 10, padding: 18, marginBottom: 14,
};
const btnAdd: React.CSSProperties = {
  padding: '8px 16px', background: 'transparent', border: `1px dashed ${C.border}`,
  borderRadius: 8, color: C.muted, cursor: 'pointer', fontSize: 13, fontFamily: 'inherit',
};
const btnRemove: React.CSSProperties = {
  padding: '4px 10px', background: 'transparent', border: `1px solid ${C.border}`,
  borderRadius: 6, color: C.red, cursor: 'pointer', fontSize: 13, fontFamily: 'inherit', flexShrink: 0,
};

function Field({ label, value, onChange, type = 'text', rows = 3, mono = false }: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; rows?: number; mono?: boolean;
}) {
  const style: React.CSSProperties = { ...inputBase, ...(mono ? { fontFamily: 'monospace', fontSize: 13 } : {}) };
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={labelBase}>{label}</label>
      {type === 'textarea'
        ? <textarea value={value} onChange={e => onChange(e.target.value)} style={{ ...style, resize: 'vertical', lineHeight: 1.5 }} rows={rows} />
        : <input type={type} value={value} onChange={e => onChange(e.target.value)} style={style} />
      }
    </div>
  );
}

function ParagraphsEditor({ items, onChange }: { items: string[]; onChange: (v: string[]) => void }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={labelBase}>Parágrafos</label>
      {items.map((p, i) => (
        <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <textarea value={p} onChange={e => onChange(items.map((x, j) => j === i ? e.target.value : x))}
            style={{ ...inputBase, flex: 1, resize: 'vertical', lineHeight: 1.5 }} rows={3} />
          <button onClick={() => onChange(items.filter((_, j) => j !== i))} style={btnRemove}>✕</button>
        </div>
      ))}
      <button onClick={() => onChange([...items, ''])} style={btnAdd}>+ Parágrafo</button>
    </div>
  );
}

function StringListEditor({ label, items, onChange }: { label: string; items: string[]; onChange: (v: string[]) => void }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={labelBase}>{label}</label>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <textarea value={item} onChange={e => onChange(items.map((x, j) => j === i ? e.target.value : x))}
            style={{ ...inputBase, flex: 1, resize: 'vertical', lineHeight: 1.5 }} rows={2} />
          <button onClick={() => onChange(items.filter((_, j) => j !== i))} style={btnRemove}>✕</button>
        </div>
      ))}
      <button onClick={() => onChange([...items, ''])} style={btnAdd}>+ Item</button>
    </div>
  );
}

function CardListEditor({ label, items, onChange }: { label: string; items: CardItem[]; onChange: (v: CardItem[]) => void }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={labelBase}>{label}</label>
      {items.map((card, i) => (
        <div key={i} style={cardBase}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 12, color: C.muted }}>Card {i + 1}</span>
            <button onClick={() => onChange(items.filter((_, j) => j !== i))} style={btnRemove}>✕ Remover</button>
          </div>
          <Field label="Título" value={card.title} onChange={v => onChange(items.map((c, j) => j === i ? { ...c, title: v } : c))} />
          <Field label="Texto" value={card.body} type="textarea" onChange={v => onChange(items.map((c, j) => j === i ? { ...c, body: v } : c))} />
        </div>
      ))}
      <button onClick={() => onChange([...items, { title: '', body: '' }])} style={btnAdd}>+ Card</button>
    </div>
  );
}

// ─── Image uploader ───────────────────────────────────────────────────────────

function ImageUploader({ label, currentSrc, folder, onUploaded }: {
  label: string;
  currentSrc: string;
  folder: string;
  onUploaded: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('folder', folder);
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.url) onUploaded(data.url);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={labelBase}>{label}</label>
      {currentSrc && (
        <img src={currentSrc} alt="" style={{
          display: 'block', width: '100%', maxWidth: 240, height: 160,
          objectFit: 'cover', borderRadius: 8, marginBottom: 10,
          border: `1px solid ${C.border}`,
        }} />
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={() => inputRef.current?.click()} disabled={uploading} style={{
          padding: '7px 14px', background: C.white, border: `1px solid ${C.border}`,
          borderRadius: 8, color: C.text, cursor: 'pointer', fontSize: 13, fontFamily: 'inherit',
        }}>
          {uploading ? 'Enviando...' : 'Trocar foto'}
        </button>
        {currentSrc && (
          <span style={{ fontSize: 12, color: C.muted, wordBreak: 'break-all' }}>{currentSrc}</span>
        )}
      </div>
      <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} style={{ display: 'none' }} />
    </div>
  );
}

// ─── Carousel image editor ────────────────────────────────────────────────────

function CarouselImageEditor({ images, onChange }: {
  images: CarouselImage[];
  onChange: (v: CarouselImage[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleAdd = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    setUploading(true);
    try {
      const results: CarouselImage[] = [];
      for (const file of files) {
        const fd = new FormData();
        fd.append('file', file);
        fd.append('folder', 'pacientes');
        const res = await fetch('/api/upload', { method: 'POST', body: fd });
        const data = await res.json();
        if (data.url) {
          results.push({ src: data.url, label: '', type: 'depois' });
        }
      }
      onChange([...images, ...results]);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  const update = (i: number, patch: Partial<CarouselImage>) =>
    onChange(images.map((img, j) => j === i ? { ...img, ...patch } : img));

  return (
    <div style={{ marginBottom: 16 }}>
      <label style={labelBase}>Fotos do carrossel</label>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, marginBottom: 14 }}>
        {images.map((img, i) => (
          <div key={i} style={{ ...cardBase, padding: 12 }}>
            <img src={img.src} alt="" style={{
              width: '100%', height: 140, objectFit: 'cover',
              borderRadius: 6, marginBottom: 8, display: 'block',
            }} />
            <input
              type="text"
              placeholder="Label (ex: Paciente 1)"
              value={img.label}
              onChange={e => update(i, { label: e.target.value })}
              style={{ ...inputBase, marginBottom: 6, fontSize: 12 }}
            />
            <div style={{ display: 'flex', gap: 6, alignItems: 'center', justifyContent: 'space-between' }}>
              <select
                value={img.type}
                onChange={e => update(i, { type: e.target.value as 'antes' | 'depois' })}
                style={{ ...inputBase, flex: 1, fontSize: 12 }}
              >
                <option value="antes">Antes</option>
                <option value="depois">Depois</option>
              </select>
              <button onClick={() => onChange(images.filter((_, j) => j !== i))} style={{ ...btnRemove, padding: '4px 8px' }}>✕</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => inputRef.current?.click()} disabled={uploading} style={btnAdd}>
        {uploading ? 'Enviando...' : '+ Adicionar fotos'}
      </button>
      <input ref={inputRef} type="file" accept="image/*" multiple onChange={handleAdd} style={{ display: 'none' }} />
    </div>
  );
}

// ─── Section renderers ────────────────────────────────────────────────────────

type SP = { content: SiteContent; set: (fn: (d: SiteContent) => void) => void };

function ColorsSection({ content, set }: SP) {
  const VARS: { key: keyof SiteContent['colors']; label: string; desc: string; isColor: boolean }[] = [
    { key: 'crimson',   label: 'Vermelho principal', desc: 'CTAs, botões, destaques', isColor: true },
    { key: 'crimsonDk', label: 'Vermelho escuro',    desc: 'Hover, variante escura',  isColor: true },
    { key: 'rose',      label: 'Rosa',               desc: 'Acentos, bordas',         isColor: true },
    { key: 'roseLt',    label: 'Rosa claro',         desc: 'Badges, fundos suaves',   isColor: true },
    { key: 'cream',     label: 'Creme',              desc: 'Texto principal',          isColor: true },
    { key: 'creamDk',   label: 'Creme escuro',       desc: 'Fundos secundários',       isColor: true },
    { key: 'warmBg',    label: 'Fundo quente',       desc: 'Fundo padrão do site',    isColor: true },
    { key: 'dark',      label: 'Escuro',             desc: 'Seções escuras, nav',     isColor: true },
    { key: 'mid',       label: 'Médio',              desc: 'Texto secundário',        isColor: true },
    { key: 'radius',    label: 'Border radius',      desc: 'Arredondamento (ex: 12px)', isColor: false },
  ];
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
        {VARS.map(({ key, label, desc, isColor }) => (
          <div key={key} style={cardBase}>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{label}</span>
            <p style={{ fontSize: 11, color: C.muted, margin: '2px 0 10px' }}>{desc}</p>
            {isColor ? (
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input type="color" value={content.colors[key]}
                  onChange={e => set(d => { d.colors[key] = e.target.value; })}
                  style={{ width: 36, height: 36, borderRadius: 6, cursor: 'pointer', border: `1px solid ${C.border}`, padding: 2, background: 'white' }} />
                <input type="text" value={content.colors[key]}
                  onChange={e => set(d => { d.colors[key] = e.target.value; })}
                  style={{ ...inputBase, flex: 1, fontFamily: 'monospace', fontSize: 13 }} />
              </div>
            ) : (
              <input type="text" value={content.colors[key]}
                onChange={e => set(d => { d.colors[key] = e.target.value; })}
                style={{ ...inputBase, fontFamily: 'monospace', fontSize: 13 }} placeholder="12px" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function NavSection({ content, set }: SP) {
  return (
    <div>
      <Field label="Texto do botão CTA" value={content.nav.ctaText} onChange={v => set(d => { d.nav.ctaText = v; })} />
      <Field label="Link do botão CTA" value={content.nav.ctaLink} onChange={v => set(d => { d.nav.ctaLink = v; })} />
    </div>
  );
}

function HeroSection({ content, set }: SP) {
  return (
    <div>
      <ImageUploader
        label="Foto do hero"
        currentSrc={content.hero.imageSrc}
        folder="hero"
        onUploaded={url => set(d => { d.hero.imageSrc = url; })}
      />
      <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '4px 0 20px' }} />
      <Field label="Tag" value={content.hero.tag} onChange={v => set(d => { d.hero.tag = v; })} />
      <div style={{ background: C.bg, borderRadius: 8, padding: '12px 16px', marginBottom: 16 }}>
        <p style={{ fontSize: 12, color: C.muted, margin: 0 }}>Título em 3 partes — a parte em itálico (vermelho) fica no meio. Use \\n para quebrar linha.</p>
      </div>
      <Field label="Título — antes do itálico" value={content.hero.titleBefore} type="textarea" rows={2} onChange={v => set(d => { d.hero.titleBefore = v; })} />
      <Field label="Título — parte em itálico" value={content.hero.titleEm} onChange={v => set(d => { d.hero.titleEm = v; })} />
      <Field label="Título — após o itálico" value={content.hero.titleAfter} onChange={v => set(d => { d.hero.titleAfter = v; })} />
      <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '4px 0 20px' }} />
      <Field label="Subtítulo" value={content.hero.subtitle} type="textarea" rows={2} onChange={v => set(d => { d.hero.subtitle = v; })} />
      <Field label="Texto do botão" value={content.hero.ctaText} onChange={v => set(d => { d.hero.ctaText = v; })} />
      <Field label="Link do botão" value={content.hero.ctaLink} onChange={v => set(d => { d.hero.ctaLink = v; })} />
      <Field label="Nota abaixo do botão" value={content.hero.note} onChange={v => set(d => { d.hero.note = v; })} />
      <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '4px 0 20px' }} />
      <label style={labelBase}>Estatísticas de prova</label>
      {content.hero.proof.map((item: ProofItem, i: number) => (
        <div key={i} style={{ ...cardBase, display: 'flex', gap: 12 }}>
          <div style={{ flex: '0 0 90px' }}>
            <Field label="Número" value={item.num} onChange={v => set(d => { d.hero.proof[i].num = v; })} />
          </div>
          <div style={{ flex: 1 }}>
            <Field label="Label (\\n = quebra)" value={item.label} type="textarea" rows={2} onChange={v => set(d => { d.hero.proof[i].label = v; })} />
          </div>
        </div>
      ))}
    </div>
  );
}

function BioSection({ content, set }: SP) {
  return (
    <div>
      <Field label="Tag" value={content.bio.tag} onChange={v => set(d => { d.bio.tag = v; })} />
      <Field label="Título" value={content.bio.heading} onChange={v => set(d => { d.bio.heading = v; })} />
      <ParagraphsEditor items={content.bio.paragraphs} onChange={v => set(d => { d.bio.paragraphs = v; })} />
      <Field label='Citação (as aspas " " são adicionadas automaticamente)' value={content.bio.quote} type="textarea" rows={3} onChange={v => set(d => { d.bio.quote = v; })} />
      <Field label="Autor da citação" value={content.bio.quoteAuthor} onChange={v => set(d => { d.bio.quoteAuthor = v; })} />
    </div>
  );
}

function ProblemaSection({ content, set }: SP) {
  return (
    <div>
      <Field label="Tag" value={content.problema.tag} onChange={v => set(d => { d.problema.tag = v; })} />
      <Field label="Título (\\n = quebra de linha)" value={content.problema.heading} type="textarea" rows={2} onChange={v => set(d => { d.problema.heading = v; })} />
      <Field label="Lead" value={content.problema.lead} type="textarea" onChange={v => set(d => { d.problema.lead = v; })} />
      <CardListEditor label="Cards" items={content.problema.cards} onChange={v => set(d => { d.problema.cards = v; })} />
    </div>
  );
}

function MetodoSection({ content, set }: SP) {
  return (
    <div>
      <Field label="Tag" value={content.metodo.tag} onChange={v => set(d => { d.metodo.tag = v; })} />
      <Field label="Título" value={content.metodo.heading} type="textarea" rows={2} onChange={v => set(d => { d.metodo.heading = v; })} />
      <ParagraphsEditor items={content.metodo.paragraphs} onChange={v => set(d => { d.metodo.paragraphs = v; })} />
      <CardListEditor label="Pilares" items={content.metodo.pillars} onChange={v => set(d => { d.metodo.pillars = v; })} />
      <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '4px 0 20px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
        <ImageUploader
          label="Foto — Antes"
          currentSrc={content.metodo.beforeImageSrc}
          folder="pacientes"
          onUploaded={url => set(d => { d.metodo.beforeImageSrc = url; })}
        />
        <ImageUploader
          label="Foto — Depois"
          currentSrc={content.metodo.afterImageSrc}
          folder="pacientes"
          onUploaded={url => set(d => { d.metodo.afterImageSrc = url; })}
        />
      </div>
    </div>
  );
}

function VideosSection({ content, set }: SP) {
  return (
    <div>
      <Field label="Tag" value={content.videos.tag} onChange={v => set(d => { d.videos.tag = v; })} />
      <Field label="Título" value={content.videos.heading} onChange={v => set(d => { d.videos.heading = v; })} />
      <Field label="Lead" value={content.videos.lead} type="textarea" onChange={v => set(d => { d.videos.lead = v; })} />
      <p style={{ fontSize: 12, color: C.muted }}>Arquivos de vídeo gerenciados em <code>/public/pacientes/</code>.</p>
    </div>
  );
}

function CarouselSection({ content, set }: SP) {
  return (
    <div>
      <Field label="Tag" value={content.carousel.tag} onChange={v => set(d => { d.carousel.tag = v; })} />
      <Field label="Título" value={content.carousel.heading} onChange={v => set(d => { d.carousel.heading = v; })} />
      <Field label="Lead" value={content.carousel.lead} type="textarea" onChange={v => set(d => { d.carousel.lead = v; })} />
      <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '4px 0 20px' }} />
      <CarouselImageEditor
        images={content.carousel.images ?? []}
        onChange={v => set(d => { d.carousel.images = v; })}
      />
    </div>
  );
}

function ParaQuemSection({ content, set }: SP) {
  return (
    <div>
      <Field label="Tag" value={content.paraQuem.tag} onChange={v => set(d => { d.paraQuem.tag = v; })} />
      <Field label="Título" value={content.paraQuem.heading} type="textarea" rows={2} onChange={v => set(d => { d.paraQuem.heading = v; })} />
      <Field label="Lead" value={content.paraQuem.lead} type="textarea" onChange={v => set(d => { d.paraQuem.lead = v; })} />
      <StringListEditor label="Itens (retângulos com frases)" items={content.paraQuem.items} onChange={v => set(d => { d.paraQuem.items = v; })} />
    </div>
  );
}

function HerniaSection({ content, set }: SP) {
  return (
    <div>
      <Field label="Tag" value={content.hernia.tag} onChange={v => set(d => { d.hernia.tag = v; })} />
      <Field label="Título" value={content.hernia.heading} type="textarea" rows={2} onChange={v => set(d => { d.hernia.heading = v; })} />
      <ParagraphsEditor items={content.hernia.paragraphs} onChange={v => set(d => { d.hernia.paragraphs = v; })} />
      <CardListEditor label="Cards (losangos)" items={content.hernia.cards} onChange={v => set(d => { d.hernia.cards = v; })} />
    </div>
  );
}

function HerniaUmbilicalSection({ content, set }: SP) {
  return (
    <div>
      <Field label="Tag" value={content.herniaUmbilical.tag} onChange={v => set(d => { d.herniaUmbilical.tag = v; })} />
      <Field label="Título" value={content.herniaUmbilical.heading} type="textarea" rows={2} onChange={v => set(d => { d.herniaUmbilical.heading = v; })} />
      <ParagraphsEditor items={content.herniaUmbilical.paragraphs} onChange={v => set(d => { d.herniaUmbilical.paragraphs = v; })} />
      <Field label="Legenda das fotos" value={content.herniaUmbilical.caption} type="textarea" onChange={v => set(d => { d.herniaUmbilical.caption = v; })} />
      <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '4px 0 20px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
        <ImageUploader
          label="Foto 1 (frente)"
          currentSrc={content.herniaUmbilical.image1Src}
          folder="pacientes"
          onUploaded={url => set(d => { d.herniaUmbilical.image1Src = url; })}
        />
        <ImageUploader
          label="Foto 2 (lateral)"
          currentSrc={content.herniaUmbilical.image2Src}
          folder="pacientes"
          onUploaded={url => set(d => { d.herniaUmbilical.image2Src = url; })}
        />
      </div>
    </div>
  );
}

function HomensSection({ content, set }: SP) {
  return (
    <div>
      <ImageUploader
        label="Foto da seção"
        currentSrc={content.homens.imageSrc}
        folder="pacientes"
        onUploaded={url => set(d => { d.homens.imageSrc = url; })}
      />
      <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '4px 0 20px' }} />
      <Field label="Tag" value={content.homens.tag} onChange={v => set(d => { d.homens.tag = v; })} />
      <Field label="Título" value={content.homens.heading} type="textarea" rows={2} onChange={v => set(d => { d.homens.heading = v; })} />
      <ParagraphsEditor items={content.homens.paragraphs} onChange={v => set(d => { d.homens.paragraphs = v; })} />
      <CardListEditor label="Cards" items={content.homens.cards} onChange={v => set(d => { d.homens.cards = v; })} />
    </div>
  );
}

function InclusoSection({ content, set }: SP) {
  return (
    <div>
      <Field label="Tag" value={content.incluso.tag} onChange={v => set(d => { d.incluso.tag = v; })} />
      <Field label="Título" value={content.incluso.heading} onChange={v => set(d => { d.incluso.heading = v; })} />
      <CardListEditor label="Itens" items={content.incluso.items} onChange={v => set(d => { d.incluso.items = v; })} />
    </div>
  );
}

function OfertaSection({ content, set }: SP) {
  const up = (i: number, fn: (p: Plano) => Plano) =>
    set(d => { d.oferta.planos = d.oferta.planos.map((p, j) => j === i ? fn(p) : p); });
  return (
    <div>
      <Field label="Tag" value={content.oferta.tag} onChange={v => set(d => { d.oferta.tag = v; })} />
      <Field label="Título" value={content.oferta.heading} onChange={v => set(d => { d.oferta.heading = v; })} />
      <Field label="Lead" value={content.oferta.lead} onChange={v => set(d => { d.oferta.lead = v; })} />
      <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '4px 0 20px' }} />
      {content.oferta.planos.map((plano: Plano, i: number) => (
        <div key={i} style={{ ...cardBase, marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <span style={{ fontWeight: 600, color: C.text }}>{plano.name || `Plano ${i + 1}`}</span>
            {content.oferta.planos.length > 1 && (
              <button onClick={() => set(d => { d.oferta.planos = d.oferta.planos.filter((_, j) => j !== i); })} style={btnRemove}>✕ Remover</button>
            )}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            <Field label="Nome do plano" value={plano.name} onChange={v => up(i, p => ({ ...p, name: v }))} />
            <div style={{ marginBottom: 16 }}>
              <label style={labelBase}>Badge (cor)</label>
              <select value={plano.badgeColor} onChange={e => up(i, p => ({ ...p, badgeColor: e.target.value as Plano['badgeColor'] }))}
                style={{ ...inputBase }}>
                <option value="blue">Azul</option>
                <option value="gold">Dourado</option>
                <option value="green">Verde</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            <Field label="Preço (só o número)" value={plano.price} onChange={v => up(i, p => ({ ...p, price: v }))} />
            <Field label="Período / descrição" value={plano.period} onChange={v => up(i, p => ({ ...p, period: v }))} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <input type="checkbox" id={`feat-${i}`} checked={plano.featured}
              onChange={e => up(i, p => ({ ...p, featured: e.target.checked }))} />
            <label htmlFor={`feat-${i}`} style={{ color: C.text, fontSize: 14, cursor: 'pointer' }}>Exibir como destaque</label>
          </div>
          {plano.featured && (
            <Field label="Label do destaque (ex: Mais escolhido)" value={plano.featuredLabel} onChange={v => up(i, p => ({ ...p, featuredLabel: v }))} />
          )}
          <StringListEditor label="Itens inclusos" items={plano.items} onChange={v => up(i, p => ({ ...p, items: v }))} />
          <Field label="Texto do botão" value={plano.ctaText} onChange={v => up(i, p => ({ ...p, ctaText: v }))} />
          <Field label="Link do botão" value={plano.ctaLink} onChange={v => up(i, p => ({ ...p, ctaLink: v }))} />
          <Field label="Nota de rodapé (opcional)" value={plano.footnote} onChange={v => up(i, p => ({ ...p, footnote: v }))} />
        </div>
      ))}
      <button onClick={() => set(d => {
        d.oferta.planos.push({ name: 'Novo Plano', badgeColor: 'blue', price: '0', period: '', featured: false, featuredLabel: '', items: [], ctaText: 'Comprar', ctaLink: '', footnote: '' });
      })} style={btnAdd}>+ Adicionar plano</button>
      <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '20px 0' }} />
      <Field label="Nota abaixo dos planos" value={content.oferta.note} onChange={v => set(d => { d.oferta.note = v; })} />
    </div>
  );
}

function GarantiaSection({ content, set }: SP) {
  return (
    <div>
      <Field label="Tag" value={content.garantia.tag} onChange={v => set(d => { d.garantia.tag = v; })} />
      <Field label="Número de dias" value={content.garantia.days} onChange={v => set(d => { d.garantia.days = v; })} />
      <Field label="Título" value={content.garantia.heading} onChange={v => set(d => { d.garantia.heading = v; })} />
      <Field label="Texto" value={content.garantia.body} type="textarea" rows={4} onChange={v => set(d => { d.garantia.body = v; })} />
    </div>
  );
}

function FooterSection({ content, set }: SP) {
  return (
    <div>
      <Field label="Copyright" value={content.footer.copyright} onChange={v => set(d => { d.footer.copyright = v; })} />
      <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '4px 0 20px' }} />
      <Field label="WhatsApp (link completo)" value={content.footer.whatsapp} onChange={v => set(d => { d.footer.whatsapp = v; })} />
      <Field label="WhatsApp (texto exibido)" value={content.footer.whatsappDisplay} onChange={v => set(d => { d.footer.whatsappDisplay = v; })} />
      <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '4px 0 20px' }} />
      <Field label="Instagram (link)" value={content.footer.instagram} onChange={v => set(d => { d.footer.instagram = v; })} />
      <Field label="Instagram (@ handle)" value={content.footer.instagramHandle} onChange={v => set(d => { d.footer.instagramHandle = v; })} />
      <hr style={{ border: 'none', borderTop: `1px solid ${C.border}`, margin: '4px 0 20px' }} />
      <Field label="TikTok (link)" value={content.footer.tiktok} onChange={v => set(d => { d.footer.tiktok = v; })} />
      <Field label="TikTok (@ handle)" value={content.footer.tiktokHandle} onChange={v => set(d => { d.footer.tiktokHandle = v; })} />
    </div>
  );
}

function AffiliatesSection({ content, set }: SP) {
  return (
    <div>
      <p style={{ fontSize: 13, color: C.muted, marginBottom: 20, lineHeight: 1.5 }}>
        Quando alguém acessa o site com <code>?afiliado=username</code>, os botões do plano principal são redirecionados para o link do afiliado.
      </p>
      {content.affiliates.map((aff: Affiliate, i: number) => (
        <div key={i} style={{ ...cardBase, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
          <div style={{ flex: '1 1 160px' }}>
            <Field label="Username (param da URL)" value={aff.username} onChange={v => set(d => { d.affiliates[i].username = v; })} />
          </div>
          <div style={{ flex: '2 1 240px' }}>
            <Field label="Link Kiwify (com afid)" value={aff.link} onChange={v => set(d => { d.affiliates[i].link = v; })} />
          </div>
          <button style={{ ...btnRemove, alignSelf: 'flex-start', marginTop: 24 }}
            onClick={() => set(d => { d.affiliates = d.affiliates.filter((_, j) => j !== i); })}>✕</button>
        </div>
      ))}
      <button onClick={() => set(d => { d.affiliates.push({ username: '', link: '' }); })} style={btnAdd}>+ Adicionar afiliado</button>
    </div>
  );
}

// ─── Confirm modal ────────────────────────────────────────────────────────────

function ConfirmModal({ changes, onConfirm, onCancel, saving }: {
  changes: string[];
  onConfirm: () => void;
  onCancel: () => void;
  saving: boolean;
}) {
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999, padding: 24,
    }}>
      <div style={{
        background: C.white, borderRadius: 12, padding: '28px 32px',
        maxWidth: 480, width: '100%', boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
      }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 8 }}>Confirmar publicação</h2>
        <p style={{ fontSize: 14, color: C.muted, marginBottom: 20 }}>
          As seguintes seções serão atualizadas no site:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: 24 }}>
          {changes.map((c, i) => (
            <li key={i} style={{
              padding: '8px 12px', background: C.bg, borderRadius: 6,
              fontSize: 14, color: C.text, marginBottom: 6,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ color: C.crimson, fontWeight: 600 }}>✓</span> {c}
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <button onClick={onCancel} disabled={saving} style={{
            padding: '9px 20px', background: 'transparent', border: `1px solid ${C.border}`,
            borderRadius: 8, color: C.muted, cursor: 'pointer', fontSize: 14, fontFamily: 'inherit',
          }}>Cancelar</button>
          <button onClick={onConfirm} disabled={saving} style={{
            padding: '9px 24px', background: C.crimson, border: 'none',
            borderRadius: 8, color: '#FFFFFF', fontWeight: 600, cursor: 'pointer', fontSize: 14, fontFamily: 'inherit',
            opacity: saving ? 0.6 : 1,
          }}>
            {saving ? 'Publicando...' : 'Publicar agora'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({ active, setActive, dirty, onClose }: {
  active: string;
  setActive: (s: string) => void;
  dirty: Record<string, boolean>;
  onClose?: () => void;
}) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: '100%', overflowY: 'auto', padding: '12px 0',
    }}>
      {SIDEBAR_GROUPS.map(group => (
        <div key={group.label}>
          <div style={{
            padding: '10px 20px 4px',
            fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
            color: C.subtle, textTransform: 'uppercase',
          }}>
            {group.label}
          </div>
          {group.items.map(key => (
            <button key={key} onClick={() => { setActive(key); onClose?.(); }} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              width: '100%', padding: '8px 20px',
              background: active === key ? C.crimsonBg : 'none',
              border: 'none',
              borderLeft: `3px solid ${active === key ? C.crimson : 'transparent'}`,
              color: active === key ? C.crimson : C.muted,
              cursor: 'pointer', textAlign: 'left',
              fontSize: 13, fontFamily: 'inherit',
              fontWeight: active === key ? 600 : 400,
              transition: 'all 0.12s',
            }}>
              {SECTION_LABELS[key]}
              {dirty[key] && <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.amber, flexShrink: 0 }} />}
            </button>
          ))}
          <div style={{ height: 12 }} />
        </div>
      ))}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const isMobile = useIsMobile();
  const [content, setContent] = useState<SiteContent | null>(null);
  const [savedContent, setSavedContent] = useState<SiteContent | null>(null);
  const [active, setActive] = useState('colors');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: 'ok' | 'err' } | null>(null);

  useEffect(() => {
    fetch('/api/content').then(r => r.json()).then((data: SiteContent) => {
      setContent(data);
      setSavedContent(JSON.parse(JSON.stringify(data)));
    });
  }, []);

  const set = useCallback((fn: (d: SiteContent) => void) => {
    setContent(prev => {
      if (!prev) return prev;
      const next: SiteContent = JSON.parse(JSON.stringify(prev));
      fn(next);
      return next;
    });
  }, []);

  const dirtyBySection = !content || !savedContent ? {} :
    Object.fromEntries(
      Object.keys(SECTION_LABELS).map(k => [
        k,
        JSON.stringify((savedContent as never)[k]) !== JSON.stringify((content as never)[k]),
      ])
    );

  const isDirty = Object.values(dirtyBySection).some(Boolean);

  const changedSections = content && savedContent ? getChangedSections(savedContent, content) : [];

  const discard = () => {
    if (!savedContent) return;
    setContent(JSON.parse(JSON.stringify(savedContent)));
  };

  const confirmPublish = async () => {
    if (!content) return;
    setSaving(true);
    try {
      await saveContentAction(content);
      setSavedContent(JSON.parse(JSON.stringify(content)));
      setShowConfirm(false);
      showToast('Publicado com sucesso!', 'ok');
    } catch {
      showToast('Erro ao salvar. Tente novamente.', 'err');
    } finally {
      setSaving(false);
    }
  };

  const showToast = (msg: string, type: 'ok' | 'err') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  if (!content) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: C.bg, fontFamily: 'Inter, sans-serif' }}>
        <p style={{ color: C.muted }}>Carregando conteúdo...</p>
      </div>
    );
  }

  const props: SP = { content, set };

  const renderSection = () => {
    switch (active) {
      case 'colors':          return <ColorsSection {...props} />;
      case 'nav':             return <NavSection {...props} />;
      case 'hero':            return <HeroSection {...props} />;
      case 'bio':             return <BioSection {...props} />;
      case 'problema':        return <ProblemaSection {...props} />;
      case 'metodo':          return <MetodoSection {...props} />;
      case 'videos':          return <VideosSection {...props} />;
      case 'carousel':        return <CarouselSection {...props} />;
      case 'paraQuem':        return <ParaQuemSection {...props} />;
      case 'hernia':          return <HerniaSection {...props} />;
      case 'herniaUmbilical': return <HerniaUmbilicalSection {...props} />;
      case 'homens':          return <HomensSection {...props} />;
      case 'incluso':         return <InclusoSection {...props} />;
      case 'oferta':          return <OfertaSection {...props} />;
      case 'garantia':        return <GarantiaSection {...props} />;
      case 'footer':          return <FooterSection {...props} />;
      case 'affiliates':      return <AffiliatesSection {...props} />;
      default: return null;
    }
  };

  const SIDEBAR_WIDTH = 224;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: C.bg, fontFamily: 'Inter, sans-serif', color: C.text }}>

      {/* Header */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 16px', height: 56, background: C.white,
        borderBottom: `1px solid ${C.border}`, flexShrink: 0, gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {isMobile && (
            <button onClick={() => setDrawerOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: C.muted, padding: 4 }}>
              ☰
            </button>
          )}
          <img src="/logo/LOGO_RECORE_4_transparent-branco.PNG" alt="ReCore"
            style={{ height: 28, filter: 'sepia(1) saturate(3) hue-rotate(330deg) brightness(0.6)' }} />
          {!isMobile && <span style={{ fontSize: 12, color: C.subtle, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Admin</span>}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {isDirty && !isMobile && (
            <span style={{ fontSize: 12, color: C.amber }}>● Não salvo</span>
          )}
          {isDirty && (
            <button onClick={discard} style={{
              padding: '7px 14px', background: 'transparent', border: `1px solid ${C.border}`,
              borderRadius: 8, color: C.muted, cursor: 'pointer', fontSize: 13, fontFamily: 'inherit',
            }}>Descartar</button>
          )}
          <button onClick={() => isDirty && setShowConfirm(true)} style={{
            padding: '7px 18px', background: isDirty ? C.crimson : C.border, border: 'none',
            borderRadius: 8, color: isDirty ? '#FFF' : C.subtle, fontWeight: 600,
            cursor: isDirty ? 'pointer' : 'default', fontSize: 13, fontFamily: 'inherit',
            transition: 'all 0.15s',
          }}>
            Publicar
          </button>
          <form action={logoutAction}>
            <button type="submit" style={{
              padding: '7px 14px', background: 'transparent', border: `1px solid ${C.border}`,
              borderRadius: 8, color: C.muted, cursor: 'pointer', fontSize: 13, fontFamily: 'inherit',
            }}>Sair</button>
          </form>
        </div>
      </header>

      {/* Body */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden', position: 'relative' }}>

        {/* Desktop sidebar */}
        {!isMobile && (
          <aside style={{
            width: SIDEBAR_WIDTH, flexShrink: 0,
            background: C.white, borderRight: `1px solid ${C.border}`,
            overflowY: 'auto',
          }}>
            <Sidebar active={active} setActive={setActive} dirty={dirtyBySection} />
          </aside>
        )}

        {/* Mobile drawer overlay */}
        {isMobile && drawerOpen && (
          <>
            <div onClick={() => setDrawerOpen(false)} style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.35)', zIndex: 100,
            }} />
            <aside style={{
              position: 'fixed', top: 0, left: 0, bottom: 0, width: 260, zIndex: 101,
              background: C.white, borderRight: `1px solid ${C.border}`,
              overflowY: 'auto', boxShadow: '4px 0 24px rgba(0,0,0,0.12)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', borderBottom: `1px solid ${C.border}` }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.text }}>Seções</span>
                <button onClick={() => setDrawerOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: C.muted }}>✕</button>
              </div>
              <Sidebar active={active} setActive={setActive} dirty={dirtyBySection} onClose={() => setDrawerOpen(false)} />
            </aside>
          </>
        )}

        {/* Main content */}
        <main style={{ flex: 1, minWidth: 0, overflowY: 'auto', padding: isMobile ? 16 : 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 24 }}>
            {SECTION_LABELS[active]}
          </h2>
          {renderSection()}
          <div style={{ height: 48 }} />
        </main>
      </div>

      {/* Confirm modal */}
      {showConfirm && (
        <ConfirmModal
          changes={changedSections}
          onConfirm={confirmPublish}
          onCancel={() => setShowConfirm(false)}
          saving={saving}
        />
      )}

      {/* Toast */}
      {toast && (
        <div style={{
          position: 'fixed', bottom: 24, right: 24, padding: '12px 20px',
          background: toast.type === 'ok' ? C.green : C.red,
          color: '#FFF', borderRadius: 8, fontSize: 14, zIndex: 9999,
          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        }}>
          {toast.msg}
        </div>
      )}
    </div>
  );
}
