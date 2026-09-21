export interface AppScreenshotItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface App {
  slug: string;
  name: string;
  tagline: string;
  shortTagline?: string;
  description: string;
  version: string;
  platform: string;
  icon: string;
  screenshots: string[];
  monoScreenshots?: AppScreenshotItem[];
  techScreenshots?: AppScreenshotItem[];
  capsuleScreenshot?: string;
  features: string[];
  technologies: string[];
  downloadUrl: string;
  githubUrl: string;
  playStoreUrl?: string;
  releaseDate: string;
}

export const apps: App[] = [
  {
    slug: 'device-box',
    name: 'Device Box',
    tagline: '一個簡潔、好看的 Android 裝置資訊工具，支援極簡黑白與科技風雙主題自由切換。',
    shortTagline: '支援雙風格切換的極簡裝置工具',
    description:
      'Device Box 是一款專注於極簡美學與實用性的 Android 裝置資訊工具。全新版本支援「極簡黑白」與「未來科技」雙風格切換，具備直覺的處理器規格監控、一鍵記憶體深度加速、即時網路頻寬測速、多規格桌面小工具（三星弧形環狀 / Widgy 風格）以及狀態列即時微型膠囊，讓使用者全方位優雅掌握手機狀態。',
    version: '1.0.0',
    platform: 'Android',
    icon: '/apps/device-box-icon.png',
    screenshots: [
      '/apps/device-box/mono-main.png',
      '/apps/device-box/mono-speed.png',
      '/apps/device-box/mono-widgets.png',
      '/apps/device-box/tech-main.png',
      '/apps/device-box/tech-speed.png',
      '/apps/device-box/tech-widgets.png',
      '/apps/device-box/preview-capsule.png'
    ],
    monoScreenshots: [
      {
        id: 'mono-01',
        title: '核心規格與系統狀態',
        subtitle: '01 / 系統規格監控',
        description: '即時讀取 SOC 處理器負載比例、LPDDR5X 記憶體使用率、電池狀態與螢幕即時資訊。',
        image: '/apps/device-box/mono-main.png'
      },
      {
        id: 'mono-02',
        title: '測速與記憶體深度優化',
        subtitle: '02 / 測速與優化',
        description: '提供一鍵深度加速釋放記憶體空間，並支援即時上下行頻寬與延遲（Ping / Jitter）品質檢測。',
        image: '/apps/device-box/mono-speed.png'
      },
      {
        id: 'mono-03',
        title: '極簡黑白桌面小工具',
        subtitle: '03 / 桌面小工具專區',
        description: '支援 2x1 小號卡片、三星弧形環狀儀表與 Widgy 風格綜合儀表，一鍵直接新增至主畫面。',
        image: '/apps/device-box/mono-widgets.png'
      }
    ],
    techScreenshots: [
      {
        id: 'tech-01',
        title: '霓虹科技即時監控',
        subtitle: '04 / 處理器與網路波形',
        description: '高對比霓虹科技配色，具備動態溫度色階警示、處理器多核心運作分析與即時網路流速折線圖。',
        image: '/apps/device-box/tech-main.png'
      },
      {
        id: 'tech-02',
        title: '動感測速與硬體加速',
        subtitle: '05 / 科技風測速優化',
        description: '螢光青藍與活力綠的極速測速體驗，動態呈現寬頻上下行頻寬與記憶體優化狀態。',
        image: '/apps/device-box/tech-speed.png'
      },
      {
        id: 'tech-03',
        title: '科技風多規格小工具',
        subtitle: '06 / 科技風小工具專區',
        description: '專為科技極客打造的桌面小工具，高亮青藍配色完美襯托桌面科技感。',
        image: '/apps/device-box/tech-widgets.png'
      }
    ],
    capsuleScreenshot: '/apps/device-box/preview-capsule.png',
    features: [
      '支援風格切換（極簡黑白 / 霓虹科技）',
      '核心硬體規格與處理器即時監控',
      '一鍵記憶體加速與網路頻寬測速',
      '豐富桌面小工具（三星環狀 / Widgy 風格）',
      '狀態列即時微型指標膠囊',
      '原生流暢（Jetpack Compose）',
      '無廣告干擾，注重隱私'
    ],
    technologies: ['Android', 'Kotlin', 'Jetpack Compose', 'Material 3'],
    downloadUrl: 'https://downloads.kkleon.com/DeviceKit.apk',
    githubUrl: 'https://github.com/binno894894-dotcom',
    playStoreUrl: '',
    releaseDate: '2026-09'
  }
];

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}
