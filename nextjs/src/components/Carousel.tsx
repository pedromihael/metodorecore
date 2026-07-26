'use client';
import { useRef } from 'react';
import type { SiteContent, CarouselImage } from '@/types/content';

function CarouselItem({ src, label, type }: CarouselImage) {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={src} alt={`${label} — ${type}`} />
      <div className="carousel-item__cap">
        <strong>{label}</strong>
        <span className={`badge badge--${type}`}>{type === 'antes' ? 'Antes' : 'Depois'}</span>
      </div>
    </div>
  );
}

export default function Carousel({ content }: { content: SiteContent['carousel'] }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const items = content.images ?? [];
  const allItems = items.length > 0 ? [...items, ...items] : [];

  const onMouseDown = (e: React.MouseEvent) => {
    const outer = outerRef.current!;
    drag.current = { isDown: true, startX: e.pageX - outer.offsetLeft, scrollLeft: outer.scrollLeft };
    trackRef.current!.style.animationPlayState = 'paused';
  };
  const onMouseLeaveOrUp = () => {
    drag.current.isDown = false;
    trackRef.current!.style.animationPlayState = 'running';
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!drag.current.isDown) return;
    e.preventDefault();
    const outer = outerRef.current!;
    outer.scrollLeft = drag.current.scrollLeft - (e.pageX - outer.offsetLeft - drag.current.startX) * 1.4;
  };

  return (
    <section className="section carousel-section">
      <div className="container">
        <span className="tag">{content.tag}</span>
        <h2>{content.heading}</h2>
        <p className="carousel-section__lead">{content.lead}</p>
      </div>
      <div
        className="carousel-track-outer"
        ref={outerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeaveOrUp}
        onMouseUp={onMouseLeaveOrUp}
        onMouseMove={onMouseMove}
      >
        <div className="carousel-track" ref={trackRef}>
          {allItems.map((item, i) => (
            <CarouselItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
