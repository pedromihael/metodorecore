'use client';
import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const staggerSelectors = [
      '.bio__inner > *',
      '.problema__card',
      '.para-quem__item',
      '.incluso__item',
      '.plano',
      '.video-card',
      '.homens__inner > *',
      '.hernia__inner > *',
    ];

    staggerSelectors.forEach(sel => {
      const grouped = new Map<Element, Element[]>();
      document.querySelectorAll(sel).forEach(el => {
        const p = el.parentElement!;
        if (!grouped.has(p)) grouped.set(p, []);
        grouped.get(p)!.push(el);
      });
      grouped.forEach(els =>
        els.forEach((el, i) => {
          el.classList.add('fade-in');
          (el as HTMLElement).style.setProperty('--i', String(i));
        })
      );
    });

    // Section-level fade-in for sections not covered by child stagger
    ['.carousel-section', '.metodo', '.hernia-umbilical', '.garantia'].forEach(sel => {
      document.querySelector(sel)?.classList.add('fade-in');
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
