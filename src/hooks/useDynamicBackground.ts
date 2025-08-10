import { useEffect } from 'react';

type BgTriple = {
  from: string;
  via: string;
  to: string;
};

const setBgVars = (bg: BgTriple) => {
  const root = document.documentElement;
  root.style.setProperty('--bg-from', bg.from);
  root.style.setProperty('--bg-via', bg.via);
  root.style.setProperty('--bg-to', bg.to);
};

// 預設顏色（接近 Tailwind 的 50/40 濃度）
export const PRESET_BG: Record<string, BgTriple> = {
  // 更低飽和度，偏白系，避免過度繽紛
  hero: { from: '#f7fbff', via: '#ffffff', to: '#ffffff' },
  blue: { from: '#ffffff', via: '#ffffff', to: '#ffffff' },
  neutral: { from: '#ffffff', via: '#ffffff', to: '#ffffff' },
  green: { from: '#ffffff', via: '#ffffff', to: '#ffffff' },
  partner: { from: '#ffffff', via: '#ffffff', to: '#ffffff' },
  gray: { from: '#ffffff', via: '#ffffff', to: '#ffffff' },
};

export function useDynamicBackground() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-bg]'));
    if (sections.length === 0) return;

    // 初始化為第一個區塊
    const first = sections[0];
    const preset = PRESET_BG[first.dataset.bg || 'hero'];
    if (preset) setBgVars(preset);

    let raf = 0;
    let activeIndex = -1;
    let lastSwitch = 0;
    const HYSTERESIS = 0.18; // 18% 優勢才切換，避免邊界抖動
    const LOCK_MS = 150; // 切換後短暫鎖定，降低閃爍

    const update = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;
      let currentDistance = Number.POSITIVE_INFINITY;

      for (let i = 0; i < sections.length; i++) {
        const el = sections[i];
        const rect = el.getBoundingClientRect();
        const sectionCenter = window.scrollY + rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
        if (i === activeIndex) currentDistance = distance;
      }

      const now = performance.now();
      const shouldSwitch =
        activeIndex === -1 ||
        (bestIndex !== activeIndex &&
          bestDistance < currentDistance * (1 - HYSTERESIS) &&
          now - lastSwitch > LOCK_MS);

      if (shouldSwitch) {
        activeIndex = bestIndex;
        lastSwitch = now;
        const el = sections[activeIndex];
        const key = el.dataset.bg || '';
        const bg = PRESET_BG[key];
        if (bg) setBgVars(bg);
        else {
          const from = el.dataset.bgFrom || '#ffffff';
          const via = el.dataset.bgVia || '#ffffff';
          const to = el.dataset.bgTo || '#ffffff';
          setBgVars({ from, via, to });
        }
      }
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll as EventListener);
      window.removeEventListener('resize', onScroll as EventListener);
    };
  }, []);
}


