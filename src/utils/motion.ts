export interface InViewOptions {
  delay?: number;
  duration?: number;
  amount?: number;
  y?: number;
  ease?: [number, number, number, number];
}

/**
 * Returns standard in-view motion props with reduced-motion awareness.
 * Spread onto a motion.* element: <motion.div {...inViewMotion(shouldReduceMotion, { delay: 0.1 })} />
 */
export const MOTION_CONFIG = {
  EASE: [0.33, 1, 0.68, 1] as [number, number, number, number],
  DURATION: 0.5,
  HERO_DURATION: 0.6,
};

export function inViewMotion(shouldReduceMotion: boolean | null, options: InViewOptions = {}) {
  const {
    delay = 0,
    duration = MOTION_CONFIG.DURATION,
    amount = 0.3,
    y = 20,
    ease = MOTION_CONFIG.EASE,
  } = options;

  return {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration, delay, ease },
    viewport: { once: true, amount },
    style: { willChange: 'transform, opacity' },
  } as const;
}



