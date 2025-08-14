

type ScrollHintPosition = 'default' | 'tight';

interface ScrollHintProps {
  position?: ScrollHintPosition; // 'default' -> bottom-12, 'tight' -> bottom-4
  hiddenOnMobile?: boolean; // 若為 true，於手機隱藏（hidden sm:block）
  className?: string; // 額外客製樣式
}

const positionClassMap: Record<ScrollHintPosition, string> = {
  default: 'bottom-12',
  tight: 'bottom-4',
};

export default function ScrollHint({
  position = 'default',
  hiddenOnMobile = false,
  className = '',
}: ScrollHintProps) {
  const bottomClass = positionClassMap[position] ?? positionClassMap.default;
  const visibilityClass = hiddenOnMobile ? 'hidden sm:block' : '';

  return (
    <div
      className={`animate-bounce motion-reduce:animate-none absolute left-1/2 transform -translate-x-1/2 ${bottomClass} ${visibilityClass} ${className}`.trim()}
      aria-hidden='true'
    >
      <svg
        className='w-8 h-8 text-gray-400'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        viewBox='0 0 22 22'
        stroke='currentColor'
      >
        <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
      </svg>
    </div>
  );
}


