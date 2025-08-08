import { Users, Target, Heart, CalendarDays, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className='min-h-screen pb-24'>
      {/* Hero Section */}
      <section className='min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative py-12 overflow-hidden'>
        <h1 className='text-5xl md:text-7xl font-bold mb-8 text-gray-800'>
          社群發展
        </h1>
        <p className='text-gray-700 max-w-2xl mx-auto mb-1'>
          我們致力於建立一個充滿活力、互助成長的技術社群，
        </p>
        <p className='text-gray-700 max-w-2xl mx-auto mb-1'>
          為每位成員提供優質的學習環境和發展機會。
        </p>
        <div className='animate-bounce absolute bottom-12 mid transform -translate-x-1/2'>
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
      </section>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto'>
        <div className='text-center p-6'>
          <div className='bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
            <Users className='w-8 h-8 text-blue-600' />
          </div>
          <h3 className='text-xl font-bold mb-2'>社群願景</h3>
          <p className='text-gray-600'>打造台灣最優質的技術學習社群</p>
        </div>

        <div className='text-center p-6'>
          <div className='bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
            <Target className='w-8 h-8 text-green-600' />
          </div>
          <h3 className='text-xl font-bold mb-2'>發展目標</h3>
          <p className='text-gray-600'>培育更多優秀的技術人才</p>
        </div>

        <div className='text-center p-6'>
          <div className='bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
            <Heart className='w-8 h-8 text-purple-600' />
          </div>
          <h3 className='text-xl font-bold mb-2'>核心價值</h3>
          <p className='text-gray-600'>開放、分享、互助、成長</p>
        </div>
      </div>

      <div className='max-w-4xl mx-auto px-4'>
        <h2 className='text-2xl font-bold mt-2 mb-6 text-center'>重要發展時間</h2>
        {(() => {
          type TimelineItem = { date: string; title: string; description?: string; year: number };
          const timelineItems: TimelineItem[] = [
            { date: '2024-12-14', title: '購買 HYJdevelop.com 為 HYJdevelop 的網域', year: 2024 },
            { date: '2024-07-26', title: 'HYJdevelop 網頁論壇啟用', year: 2024 },
            { date: '2024', title: '使用 HTML 開發 HYJdevelop 網頁', description: '預計 2026 年第二季上線', year: 2024 },
            { date: '2024-05-15', title: 'HYJdevelop 網頁與 SLRC 網頁合併', year: 2024 },
            { date: '2024-02-29', title: 'HYJdevelop 粉專上線', year: 2024 },
            { date: '2023-12-27', title: 'SLRC 成員超過 50 人', description: 'IG 粉絲超過 50 人', year: 2023 },
            { date: '2023-12-23', title: 'HYJdevelop 官網上線', year: 2023 },
            { date: '2023-12-15', title: 'SLRC 官網上線', year: 2023 },
            { date: '2023-12-03', title: 'HYJdevelop IG 上線', year: 2023 },
            { date: '2023-12-01', title: 'SLRC 粉專和 IG 上線', year: 2023 },
            { date: '2023-11-01', title: '學生學習資源社群 SLRC 正式對外開放加入', year: 2023 },
            { date: '2023-09-20', title: 'SLRC 標誌產生', year: 2023 },
            { date: '2023-08-14', title: '進行 SLRC 社群內測', year: 2023 },
            { date: '2023-07-11', title: '提出學生學習資源社群 SLRC', year: 2023 },
            { date: '2023-06-09', title: '開始進行 Discord 群組改造', year: 2023 },
            { date: '2023-05-10', title: '將「會考討論群」的加入連結放在個人網頁中，對外開放', year: 2023 },
            { date: '2023-05-02', title: '黃宥鈞的個人網頁正式上線', year: 2023 },
            { date: '2023-04-17', title: 'HYJdevelop 官網開始設計', year: 2023 },
            { date: '2023-04-16', title: '黃宥鈞在 11:04 決定並創立 HYJdevelop，並第一次將名稱放在個人網頁上', year: 2023 },
            { date: '2023-04-13', title: '使用 Google Site 建立個人網頁', year: 2023 },
            { date: '2023-01-20', title: '擁有 2TB 儲存空間，將資料從 Discord 移到資料庫上，並開始使用分享連結', year: 2023 },
            { date: '2023-01-01', title: 'HYJdevelop 新一年的願景', description: '1. 社群超過 300 人 2. 合作夥伴越來越多 3. 服務品質越來越好', year: 2023 },
            { date: '2022-07-10', title: '建立 Discord「會考討論群」，僅開放部分朋友加入', year: 2022 },
            { date: '2022-04-08', title: '因為疫情線上上課開始接觸 Discord', year: 2022 },
          ];

          const groupByYear = (items: TimelineItem[]) =>
            items.reduce<Record<number, TimelineItem[]>>((map, i) => {
              map[i.year] ||= [];
              map[i.year].push(i);
              return map;
            }, {});

          const grouped = groupByYear(timelineItems);
          const years = Object.keys(grouped)
            .map(Number)
            .sort((a, b) => b - a);

          return (
            <div>
              {years.map(year => (
                <div key={year} className='mb-10'>
                  <h3 className='text-xl font-bold mb-4 flex items-center'>
                    <CalendarDays className='w-6 h-6 text-blue-600 mr-2' />
                    {year} 年
                  </h3>
                  <div className='relative border-l border-gray-200 pl-6'>
                    {grouped[year]
                      .slice()
                      .sort((a, b) => (a.date > b.date ? -1 : 1))
                      .map((item, idx) => (
                        <div key={`${item.date}-${idx}`} className='mb-6'>
                          <div className='absolute -left-2 mt-1 w-3 h-3 bg-blue-600 rounded-full'></div>
                          <div className='text-sm text-gray-500 flex items-center mb-1'>
                            <Clock className='w-4 h-4 mr-1' />
                            <span>{item.date}</span>
                          </div>
                          <h4 className='font-semibold text-gray-900'>{item.title}</h4>
                          {item.description ? (
                            <p className='text-gray-600 mt-1'>{item.description}</p>
                          ) : null}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default About;
