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
    tagline: '一個簡潔、好看的 Android 裝置資訊工具，讓使用者更容易了解自己的手機。',
    shortTagline: '觀察手機數據的極簡工具',
    description:
      'Device Box 是一款專注於極簡美學與實用性的 Android 裝置資訊工具。有別於充滿干擾廣告與繁瑣列表的傳統系統檢視工具，Device Box 採用現代 Jetpack Compose 原生架構打造，將複雜的硬體參數與系統狀態重新梳理為優雅、直覺的卡片視圖，讓每位使用者都能輕鬆掌握手機核心規格。',
    version: '1.0.0',
    platform: 'Android',
    icon: '/apps/device-box-icon.png',
    screenshots: [
      '/apps/device-box/screenshot-1.png',
      '/apps/device-box/screenshot-4.png',
      '/apps/device-box/screenshot-3.png'
    ],
    features: [
      '觀察手機 / 裝置資料',
      '介面好看',
      '使用簡單',
      '原生流暢（Jetpack Compose）',
      '無干擾廣告，注重隱私'
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
