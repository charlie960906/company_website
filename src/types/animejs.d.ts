declare module 'animejs' {
  interface AnimeAnimation {
    currentValue: number;
  }

  interface AnimeInstance {
    animations: AnimeAnimation[];
  }

  interface AnimeParams {
    update?: (animation: AnimeInstance) => void;
    [key: string]: unknown;
  }

  interface AnimeTimeline {
    add(params: AnimeParams, offset?: number | string): AnimeTimeline;
  }

  interface Anime {
    (params: AnimeParams): AnimeInstance;
    stagger(value: number): unknown;
    timeline(params?: AnimeParams): AnimeTimeline;
  }

  const anime: Anime;
  export default anime;
}