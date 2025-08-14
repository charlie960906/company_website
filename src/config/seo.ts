export type RouteMeta = {
  title: string;
  description: string;
};

export const DEFAULT_META: RouteMeta = {
  title: 'HYJdevelop - 頁面未找到 (404)',
  description: '抱歉，您要尋找的頁面不存在。請返回首頁或聯絡我們獲取協助。',
};

export const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: 'HYJdevelop - 創新科技與社群平台',
    description:
      '我們的產品將各地的人與人聯繫在一起，為大家創造機會並發出聲音，我們正在努力，建立一個安全、自由、開放的社群',
  },
  '/service': {
    title: 'HYJdevelop - 服務條款',
    description:
      '查看 HYJdevelop 的服務條款與支援資訊，確保您的體驗安全與順暢。',
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
    title: 'HYJdevelop - 網路安全與資料保護',
    description:
      'HYJdevelop 採用業界最先進的安全技術，全方位保護您的資料安全和隱私。',
  },
  '/freedom': {
    title: 'HYJdevelop - 表達自由與社群保護',
    description:
      'HYJdevelop 致力於保護每個人的表達自由權利，同時確保社群環境的安全與和諧。',
  },
  // '/hosting' 已永久轉址至 /partner
  '/rules': {
    title: 'HYJdevelop - 社群守則',
    description: '查看 HYJdevelop 的社群守則，維護健康的社群環境。',
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
  '/tutorgo': {
    title: 'HYJdevelop - Tutor Go 家教媒合（規劃中）',
    description: 'Tutor Go 為 SLRC 的未來版本，打造安全、透明的家教媒合平台。',
  },
};
