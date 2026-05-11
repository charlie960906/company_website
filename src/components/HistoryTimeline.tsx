import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

type TimelineEventWithYear = TimelineEvent & { year: number };

const allEvents: TimelineEvent[] = [
  {
    date: '2022-07-10',
    title: '建立 Discord「會考討論群」，僅開放部分朋友加入',
    image: '/logo.png',
    imageAlt: '建立 Discord 會考討論群',
  },
  {
    date: '2023-04-16',
    title: '黃宥鈞創立HYJdevelop',
    image: '/logo.png',
    imageAlt: '黃宥鈞創立 HYJdevelop',
  },
  {
    date: '2023-04-17',
    title: 'HYJdevelop 官網開始設計(Google site)',
    image: '/logo.png',
    imageAlt: 'HYJdevelop 官網設計',
  },
  {
    date: '2023-05-10',
    title: '將「會考討論群」的加入連結放在個人網頁中，對外開放',
    image: '/logo.png',
    imageAlt: '會考討論群 開放加入',
  },
  {
    date: '2023-06-09',
    title: '開始進行 Discord 群組改造',
    image: '/logo.png',
    imageAlt: 'Discord 群組改造',
  },
  {
    date: '2023-07-11',
    title: '提出學生學習資源社群 SLRC（後續延伸為 TutorGo）',
    image: '/logo.png',
    imageAlt: 'SLRC 與 TutorGo 提案',
  },
  {
    date: '2023-08-14',
    title: '進行 SLRC 社群內測',
    image: '/logo.png',
    imageAlt: 'SLRC 社群內測',
  },
  {
    date: '2023-09-20',
    title: 'SLRC 視覺標誌產生',
    image: '/logo.png',
    imageAlt: 'SLRC 視覺標誌',
  },
  {
    date: '2023-11-01',
    title: '學生學習資源社群 SLRC 正式對外開放加入',
    image: '/logo.png',
    imageAlt: 'SLRC 對外開放',
  },
  {
    date: '2023-12-01',
    title: 'SLRC 粉專和 IG 上線',
    image: '/logo.png',
    imageAlt: 'SLRC 粉專與 IG 上線',
  },
  {
    date: '2023-12-03',
    title: 'HYJdevelop IG 上線',
    image: '/logo.png',
    imageAlt: 'HYJdevelop IG 上線',
  },
  {
    date: '2023-12-15',
    title: 'SLRC 官網上線(Google site)',
    image: '/logo.png',
    imageAlt: 'SLRC 官網上線',
  },
  {
    date: '2023-12-23',
    title: 'HYJdevelop 官網上線',
    image: '/logo.png',
    imageAlt: 'HYJdevelop 官網上線',
  },
  {
    date: '2023-12-27',
    title: 'SLRC 成員超過 50 人',
    description: 'IG 粉絲超過 50 人',
    image: '/logo.png',
    imageAlt: 'SLRC 會員超過 50 人',
  },
  {
    date: '2024-02-16',
    title: '使用 React 開發 HYJdevelop 網頁',
    description: '預計2025第三季上線',
    image: '/logo.png',
    imageAlt: 'React 開發 HYJdevelop 網頁',
  },
  {
    date: '2024-02-29',
    title: 'HYJdevelop 粉專上線',
    image: '/logo.png',
    imageAlt: 'HYJdevelop 粉專上線',
  },
  {
    date: '2024-05-15',
    title: 'HYJdevelop 網頁與 SLRC 網頁合併',
    image: '/logo.png',
    imageAlt: 'HYJdevelop 與 SLRC 網頁合併',
  },
  {
    date: '2024-12-14',
    title: '購買 HYJdevelop.com 為 HYJdevelop 的網域',
    image: '/logo.png',
    imageAlt: '購買 HYJdevelop.com 網域',
  },
  {
    date: '2025-03-20',
    title: 'HYJdevelop React版官方網站上線',
    description: '使用React製作的 HYJdevelop 官方網頁上線取代 Goolge site 版本',
    image: '/logo.png',
    imageAlt: 'HYJdevelop React 官方網站上線',
  },
  {
    date: '2025-08-10',
    title: 'TutorGo 計畫',
    description: '以低摩擦媒合、雙向評價、認證與時段管理，打造更安心透明的家教媒合平台',
    image: '/logo.png',
    imageAlt: 'TutorGo 計畫',
  },
];

const HistoryTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [knobPosition, setKnobPosition] = useState(0);
  const [progressPosition, setProgressPosition] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isDragging, setIsDragging] = useState(false);

  const timelineRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  const dragPositionRef = useRef<number | null>(null);

  const sortedEvents = useMemo((): TimelineEventWithYear[] =>
    [...allEvents]
      .map(event => ({
        ...event,
        year: new Date(event.date).getFullYear(),
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    []
  );

  const parseDate = (s: string) =>
    /^\d{4}$/.test(s)
      ? new Date(Number(s), 0, 1).getTime()
      : new Date(s).getTime();
  const eventTimes = useMemo(
    () => sortedEvents.map(e => parseDate(e.date)),
    [sortedEvents]
  );
  const years = useMemo(() => sortedEvents.map(e => e.year), [sortedEvents]);
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const minEventTime = useMemo(() => Math.min(...eventTimes), [eventTimes]);
  const maxEventTime = useMemo(() => Math.max(...eventTimes), [eventTimes]);
  const timeSpan = useMemo(
    () => Math.max(maxEventTime - minEventTime, 1),
    [maxEventTime, minEventTime]
  );
  const timelinePadding = useMemo(
    () => Math.max(timeSpan * 0.08, 1000 * 60 * 60 * 24 * 30),
    [timeSpan]
  );
  const timelineStart = useMemo(
    () => minEventTime - timelinePadding,
    [minEventTime, timelinePadding]
  );
  const timelineEnd = useMemo(
    () => maxEventTime + timelinePadding,
    [maxEventTime, timelinePadding]
  );
  const endYear = useMemo(
    () => Math.max(currentYear, ...years),
    [currentYear, years]
  );
  const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
  const positionFromTime = (t: number) =>
    clamp01((t - timelineStart) / (timelineEnd - timelineStart));
  const yearPosition = (y: number) =>
    clamp01(positionFromTime(new Date(y, 0, 1).getTime()));
  // const timeFromPosition = (p: number) => timelineStart + p * (timelineEnd - timelineStart);

  useEffect(() => {
    if (!eventTimes.length) return;
    const initialPosition = positionFromTime(eventTimes[0]);
    setKnobPosition(initialPosition);
    setProgressPosition(initialPosition);
  }, [eventTimes]);

  const indexFromPosition = useCallback(
    (p: number) => {
      const target = timelineStart + p * (timelineEnd - timelineStart);
      let nearest = 0;
      let best = Infinity;
      for (let i = 0; i < eventTimes.length; i++) {
        const d = Math.abs(eventTimes[i] - target);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      return nearest;
    },
    [eventTimes, timelineStart, timelineEnd]
  );

  useEffect(() => {
    // 桌面顯示 3 張、行動顯示 1 張
    const update = () => setVisibleCount(window.innerWidth >= 1024 ? 3 : 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // 讓被選取的卡片置中（或盡量置中）
  const maxStartIndex = Math.max(sortedEvents.length - visibleCount, 0);
  const desiredStart = currentIndex - Math.floor(visibleCount / 2);
  const trackStartIndex = Math.max(0, Math.min(maxStartIndex, desiredStart));

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const rect = timelineRef.current?.getBoundingClientRect();
    if (!rect) return;
    const position = clamp01((e.clientX - rect.left) / rect.width);
    dragPositionRef.current = position;
    setKnobPosition(position);
    setProgressPosition(position);
  };

  // Touch support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const rect = timelineRef.current?.getBoundingClientRect();
    if (!rect) return;
    const touch = e.touches[0];
    const position = clamp01((touch.clientX - rect.left) / rect.width);
    dragPositionRef.current = position;
    setKnobPosition(position);
    setProgressPosition(position);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !timelineRef.current) return;
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        const rect = timelineRef.current!.getBoundingClientRect();
        const position = clamp01((e.clientX - rect.left) / rect.width);
        dragPositionRef.current = position;
        setKnobPosition(position);
        setProgressPosition(position);
        rafId.current = null;
      });
    },
    [isDragging]
  );

  const finishDrag = useCallback(() => {
    if (dragPositionRef.current === null) {
      setIsDragging(false);
      return;
    }
    const idx = indexFromPosition(dragPositionRef.current);
    animateToIndex(idx);
    dragPositionRef.current = null;
    setIsDragging(false);
  }, [indexFromPosition]);

  const handleMouseUp = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    finishDrag();
  }, [finishDrag]);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging || !timelineRef.current) return;
      if (rafId.current !== null) return;
      const touch = e.touches[0];
      rafId.current = requestAnimationFrame(() => {
        const rect = timelineRef.current!.getBoundingClientRect();
        const position = clamp01((touch.clientX - rect.left) / rect.width);
        dragPositionRef.current = position;
        setKnobPosition(position);
        setProgressPosition(position);
        rafId.current = null;
      });
    },
    [isDragging]
  );

  const handleTouchEnd = useCallback(() => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    finishDrag();
  }, [finishDrag]);

  const handleTimelineClick = (e: React.MouseEvent) => {
    const rect = timelineRef.current?.getBoundingClientRect();
    if (!rect) return;
    const position = clamp01((e.clientX - rect.left) / rect.width);
    const idx = indexFromPosition(position);
    animateToIndex(idx);
  };

  // Swipe support for card track (mobile/tablet)
  const trackTouchStartX = useRef<number | null>(null);
  const trackTouchStartY = useRef<number | null>(null);
  const trackTouchLastX = useRef<number | null>(null);
  const isTrackSwiping = useRef<boolean>(false);

  const handleTrackTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    trackTouchStartX.current = t.clientX;
    trackTouchStartY.current = t.clientY;
    trackTouchLastX.current = t.clientX;
    isTrackSwiping.current = false;
  };

  const handleTrackTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (trackTouchStartX.current === null || trackTouchStartY.current === null)
      return;
    const t = e.touches[0];
    const dx = t.clientX - trackTouchStartX.current;
    const dy = t.clientY - trackTouchStartY.current;
    // 決定是否進入水平滑動狀態，避免與垂直滾動衝突
    if (
      !isTrackSwiping.current &&
      Math.abs(dx) > 10 &&
      Math.abs(dx) > Math.abs(dy)
    ) {
      isTrackSwiping.current = true;
      e.preventDefault();
    }
    if (isTrackSwiping.current) {
      e.preventDefault();
      trackTouchLastX.current = t.clientX;
    }
  };

  const handleTrackTouchEnd = () => {
    if (
      trackTouchStartX.current !== null &&
      trackTouchLastX.current !== null &&
      isTrackSwiping.current
    ) {
      const dx = trackTouchLastX.current - trackTouchStartX.current;
      const swipeThreshold = 50; // px
      if (Math.abs(dx) > swipeThreshold) {
        if (dx < 0) {
          goNext();
        } else {
          goPrev();
        }
      }
    }
    trackTouchStartX.current = null;
    trackTouchStartY.current = null;
    trackTouchLastX.current = null;
    isTrackSwiping.current = false;
  };

  const easeOutBack = (t: number, s = 0.9) => {
    const c1 = s;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  };

  const animateToIndex = (idx: number, duration = 500) => {
    const to = positionFromTime(eventTimes[idx]);
    const from = knobPosition;
    const start = performance.now();
    setCurrentIndex(idx);
    if (rafId.current) cancelAnimationFrame(rafId.current);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = easeOutBack(t);
      const next = from + (to - from) * eased;
      setKnobPosition(next);
      setProgressPosition(next);
      if (t < 1) rafId.current = requestAnimationFrame(tick);
      else rafId.current = null;
    };
    rafId.current = requestAnimationFrame(tick);
  };

  const goPrev = () => {
    if (isDragging) return;
    const nextIndex = Math.max(0, currentIndex - 1);
    animateToIndex(nextIndex);
  };
  const goNext = () => {
    if (isDragging) return;
    const nextIndex = Math.min(sortedEvents.length - 1, currentIndex + 1);
    animateToIndex(nextIndex);
  };

  useEffect(() => {
    if (!isDragging) return;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [
    isDragging,
    handleMouseMove,
    handleMouseUp,
    handleTouchMove,
    handleTouchEnd,
  ]);

  const startYear = Math.min(...years);
  const endYearLabel = endYear;
  const yearLabels = Array.from(
    { length: endYearLabel - startYear + 1 },
    (_, i) => startYear + i
  );
  const isYearActive = (y: number) => {
    const pos = yearPosition(y);
    return progressPosition + 0.0001 >= pos;
  };

  return (
    <div className='w-full max-w-full sm:max-w-7xl mx-auto px-2 sm:px-4 mb-10 sm:mb-16'>
      {/* 事件卡片滑動（左右箭頭與卡片同一行） */}
      <div className='mb-8 sm:mb-12 px-2 sm:px-6 md:px-10'>
        <div className='flex items-center gap-2 sm:gap-4 md:gap-6'>
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className='w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-md sm:shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-150 disabled:opacity-50 disabled:cursor-not-allowed touch-target'
          >
            <ChevronLeft className='w-5 h-5 sm:w-6 sm:h-6 text-gray-600' />
          </button>

          <div
            className='flex-1 overflow-x-hidden overflow-y-visible w-full max-w-full sm:max-w-5xl mx-auto py-1 sm:py-2 px-0 sm:px-4 md:px-8'
            onTouchStart={handleTrackTouchStart}
            onTouchMove={handleTrackTouchMove}
            onTouchEnd={handleTrackTouchEnd}
          >
            <div
              className='flex transition-transform duration-500 ease-out overflow-visible'
              style={{
                transform: `translateX(-${trackStartIndex * (100 / visibleCount)}%)`,
              }}
            >
              {sortedEvents.map((event, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={`${event.date}-${idx}`}
                    className='w-full md:w-1/3 shrink-0 px-2 sm:px-4 overflow-visible'
                  >
                    <div
                      className={`relative h-full flex flex-col bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 transform-gpu transition-all duration-300 overflow-visible ${
                        isActive
                          ? 'z-10 md:glow-pulse ring-2 sm:ring-4 ring-blue-100'
                          : 'z-0'
                      }`}
                      onClick={() => animateToIndex(idx)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          animateToIndex(idx);
                        }
                      }}
                      tabIndex={0}
                      role='button'
                      aria-label={`查看 ${event.title} 的詳細資訊`}
                    >
                      <div
                        className={`w-full h-24 sm:h-32 md:h-36 rounded-xl mb-4 sm:mb-5 overflow-hidden ${
                          event.image
                            ? 'bg-gray-100'
                            : idx % 3 === 0
                              ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                              : idx % 3 === 1
                                ? 'bg-gradient-to-br from-pink-500 to-orange-500'
                                : 'bg-gradient-to-br from-green-500 to-blue-600'
                        }`}
                      >
                        {event.image ? (
                          <img
                            src={event.image}
                            alt={event.imageAlt ?? event.title}
                            className='w-full h-full object-cover'
                          />
                        ) : (
                          <div className='w-full h-full' />
                        )}
                      </div>
                      <div className='space-y-3'>
                        <h3 className='text-base sm:text-lg font-bold text-gray-900 leading-tight break-anywhere'>
                          {event.title}
                        </h3>
                        {event.description && (
                          <p className='text-gray-600 text-xs sm:text-sm leading-relaxed break-anywhere'>
                            {event.description}
                          </p>
                        )}
                        <div className='mt-auto text-xs md:text-sm font-medium text-blue-600'>
                          {event.date}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={goNext}
            disabled={currentIndex === sortedEvents.length - 1}
            className='w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-md sm:shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-150 disabled:opacity-50 disabled:cursor-not-allowed touch-target'
          >
            <ChevronRight className='w-5 h-5 sm:w-6 sm:h-6 text-gray-600' />
          </button>
        </div>
      </div>

      {/* 完整事件時間線 */}
      <div className='w-full max-w-full sm:max-w-7xl mx-auto'>
        <div className='relative px-4 sm:px-6'>
          <div
              ref={timelineRef}
              className='w-full h-2 bg-gray-200 rounded-full cursor-pointer relative'
              onClick={handleTimelineClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // 創建一個模擬的滑鼠事件
                  const mockEvent = { stopPropagation: () => {} } as React.MouseEvent;
                  handleTimelineClick(mockEvent);
                }
              }}
              tabIndex={0}
              role='slider'
              aria-label='時間軸進度控制'
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progressPosition * 100}
            >
            <div
              className='absolute top-0 left-0 h-full bg-blue-600 rounded-full'
              style={{ width: `${progressPosition * 100}%` }}
            />

            {sortedEvents.map((_, idx) => {
              const left = positionFromTime(eventTimes[idx]) * 100;
              const active = idx <= currentIndex;
              return (
                <div
                  key={idx}
                  className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                    active ? 'bg-blue-600' : 'bg-gray-400'
                  } hover:scale-110 transition-transform duration-100 cursor-pointer`}
                  style={{ left: `${left}%` }}
                  onClick={e => {
                    e.stopPropagation();
                    animateToIndex(idx);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      animateToIndex(idx);
                    }
                  }}
                  tabIndex={0}
                  role='button'
                  aria-label={`跳轉到 ${sortedEvents[idx].title}`}
                />
              );
            })}

            <div
              className={`${
                isDragging
                  ? 'transition-none'
                  : 'transition-transform duration-100'
              } absolute top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full shadow-lg cursor-grab active:cursor-grabbing hover:scale-110`}
              style={{ left: `${knobPosition * 100}%` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') {
                  e.preventDefault();
                  const newIndex = Math.max(0, currentIndex - 1);
                  animateToIndex(newIndex);
                } else if (e.key === 'ArrowRight') {
                  e.preventDefault();
                  const newIndex = Math.min(sortedEvents.length - 1, currentIndex + 1);
                  animateToIndex(newIndex);
                }
              }}
              tabIndex={0}
              role='slider'
              aria-label='拖拽控制點，使用方向鍵控制'
              aria-valuemin={0}
              aria-valuemax={sortedEvents.length - 1}
              aria-valuenow={currentIndex}
            >
              <div className='absolute inset-0.5 sm:inset-1 bg-white rounded-full flex items-center justify-center'>
                <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full' />
              </div>
            </div>
          </div>

          <div className='relative mt-4 sm:mt-6 h-8'>
            {yearLabels.map((y, index) => {
              const isFirst = index === 0;
              const isLast = index === yearLabels.length - 1;
              const left = yearPosition(y) * 100;
              return (
                <div
                  key={y}
                  className={`absolute top-0 text-base sm:text-lg font-bold ${isYearActive(y) ? 'text-blue-600' : 'text-gray-900'} ${isFirst ? 'translate-x-0' : isLast ? 'translate-x-[-100%]' : '-translate-x-1/2'}`}
                  style={{ left: `${left}%` }}
                >
                  {y}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTimeline;
