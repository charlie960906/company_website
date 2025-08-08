export type RouteMeta = {
  title: string;
  description: string;
};

export const DEFAULT_META: RouteMeta = {
  title: 'HYJdevelop - 頁面未找到 (404)',
  description:
    '抱歉，您要尋找的頁面不存在。請返回首頁或聯絡我們獲取協助。',
};

export const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: 'HYJdevelop - 創新科技與社群平台',
    description:
      '我們的產品將各地的人與人聯繫在一起，為大家創造機會並發出聲音，我們正在努力，建立一個安全、自由、開放的社群',
  },
  '/shop': {
    title: 'HYJdevelop - 線上商城',
    description: 'HYJdevelop 線上商城，即將推出，敬請期待我們的創新產品！',
  },
  '/service': {
    title: 'HYJdevelop - 服務條款',
    description: '查看 HYJdevelop 的服務條款與支援資訊，確保您的體驗安全與順暢。',
  },
  '/database': {
    title: 'HYJdevelop - 媒體庫',
    description: '探索 HYJdevelop 的媒體庫，獲取豐富的資源與資訊。',
  },
  '/updates': {
    title: 'HYJdevelop - 最新資訊',
    description: '查看 HYJdevelop 的最新更新與公告。',
  },
  '/terms': {
    title: 'HYJdevelop - 品牌使用準則',
    description: '了解 HYJdevelop 的品牌使用準則與規範。',
  },
  '/privacy': {
    title: 'HYJdevelop - 資料和隱私',
    description: '了解 HYJdevelop 的安全與隱私政策，保障您的權益。',
  },
  '/security': {
    title: 'HYJdevelop - 安全和表達自由',
    description: 'HYJdevelop 致力於安全即是自由，了解我們的保護措施。',
  },
  '/hosting': {
    title: 'HYJdevelop - 雲端服務',
    description: '了解 HYJdevelop 提供的雲端服務。',
  },
  '/slrc': {
    title: 'HYJdevelop - SLRC 學生學習資訊社群',
    description: '探索 SLRC 的活動與資訊。',
  },
  '/forum': {
    title: 'HYJdevelop - 論壇',
    description: '加入 HYJdevelop 的論壇，與社群互動與交流。',
  },
  '/rules': {
    title: 'HYJdevelop - 社群守則',
    description: '查看 HYJdevelop 的社群守則，維護健康的社群環境。',
  },
  '/about': {
    title: 'HYJdevelop - 歷史發展',
    description: '了解 HYJdevelop 的歷史發展。',
  },
  '/contact': {
    title: 'HYJdevelop - 聯絡我們',
    description: '聯絡 HYJdevelop 的方式',
  },
  '/join': {
    title: 'HYJdevelop - 加入我們',
    description: '加入 HYJdevelop 的團隊，參與新創之旅。',
  },
  '/admin': {
    title: 'HYJdevelop - 主管團隊',
    description: '探索 HYJdevelop 的管理團隊',
  },
  '/partner': {
    title: 'HYJdevelop - 成為合作夥伴',
    description: '成為 HYJdevelop 的合作夥伴，共同開創美好未來。',
  },
};


