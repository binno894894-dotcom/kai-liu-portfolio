export interface LocalizedString {
  en: string;
  zh: string;
}

export interface AppScreenshotItem {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  image: string;
}

export interface AppFeatureCard {
  title: LocalizedString;
  subtitle: LocalizedString;
  icon: string;
}

export interface App {
  slug: string;
  name: string;
  tagline: LocalizedString;
  shortTagline: LocalizedString;
  description: LocalizedString;
  version: string;
  platform: string;
  icon: string;
  screenshots: string[];
  monoScreenshots?: AppScreenshotItem[];
  techScreenshots?: AppScreenshotItem[];
  capsuleScreenshot?: string;
  features: LocalizedString[];
  featureCards?: AppFeatureCard[];
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
    tagline: {
      en: 'A clean, beautiful Android device monitor with seamless dual-style theme switching.',
      zh: '一個簡潔、好看的 Android 裝置資訊工具，支援極簡黑白與科技風雙主題自由切換。'
    },
    shortTagline: {
      en: 'Minimalist device specs monitor',
      zh: '支援雙風格切換的極簡裝置工具'
    },
    description: {
      en: 'A minimalist Android device monitor crafted with Jetpack Compose. Features dual theme switching (Minimal Mono & Cyber Tech), real-time SOC processor usage, one-tap memory boost, bandwidth speed testing, dynamic home screen widgets, and an always-on status bar capsule.',
      zh: 'Device Box 是一款專注於極簡美學與實用性的 Android 裝置資訊工具。全新版本支援「極簡黑白」與「未來科技」雙風格切換，具備直覺的處理器規格監控、一鍵記憶體深度加速、即時網路頻寬測速、多規格桌面小工具（三星弧形環狀 / Widgy 風格）以及狀態列即時微型膠囊，讓使用者全方位優雅掌握手機狀態。'
    },
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
        title: {
          en: 'Core Specs & System Status',
          zh: '核心規格與系統狀態'
        },
        subtitle: {
          en: '01 / System Specs',
          zh: '01 / 系統規格監控'
        },
        description: {
          en: 'Real-time readings of SOC processor load, LPDDR5X RAM usage, battery status, and display metrics.',
          zh: '即時讀取 SOC 處理器負載比例、LPDDR5X 記憶體使用率、電池狀態與螢幕即時資訊。'
        },
        image: '/apps/device-box/mono-main.png'
      },
      {
        id: 'mono-02',
        title: {
          en: 'Speed Test & Deep Optimization',
          zh: '測速與記憶體深度優化'
        },
        subtitle: {
          en: '02 / Speed & Boost',
          zh: '02 / 測速與優化'
        },
        description: {
          en: 'One-tap deep memory release, combined with instant upload/download bandwidth, Ping, and Jitter testing.',
          zh: '提供一鍵深度加速釋放記憶體空間，並支援即時上下行頻寬與延遲（Ping / Jitter）品質檢測。'
        },
        image: '/apps/device-box/mono-speed.png'
      },
      {
        id: 'mono-03',
        title: {
          en: 'Minimalist Mono Home Widgets',
          zh: '極簡黑白桌面小工具'
        },
        subtitle: {
          en: '03 / Home Widgets',
          zh: '03 / 桌面小工具專區'
        },
        description: {
          en: 'Supports 2x1 compact cards, Samsung-inspired arc circular gauges, and Widgy-style widgets right on your home screen.',
          zh: '支援 2x1 小號卡片、三星弧形環狀儀表與 Widgy 風格綜合儀表，一鍵直接新增至主畫面。'
        },
        image: '/apps/device-box/mono-widgets.png'
      }
    ],
    techScreenshots: [
      {
        id: 'tech-01',
        title: {
          en: 'Cyberpunk Neon Live Monitor',
          zh: '霓虹科技即時監控'
        },
        subtitle: {
          en: '04 / CPU & Network Waveforms',
          zh: '04 / 處理器與網路波形'
        },
        description: {
          en: 'High-contrast neon tech aesthetic with dynamic thermal alerts, multi-core analysis, and live network throughput waveforms.',
          zh: '高對比霓虹科技配色，具備動態溫度色階警示、處理器多核心運作分析與即時網路流速折線圖。'
        },
        image: '/apps/device-box/tech-main.png'
      },
      {
        id: 'tech-02',
        title: {
          en: 'Dynamic Speed Test & Hardware Acceleration',
          zh: '動感測速與硬體加速'
        },
        subtitle: {
          en: '05 / Cyber Speed Test',
          zh: '05 / 科技風測速優化'
        },
        description: {
          en: 'Cyber cyan & vibrant green animations for high-speed network diagnostics and hardware optimization.',
          zh: '螢光青藍與活力綠的極速測速體驗，動態呈現寬頻上下行頻寬與記憶體優化狀態。'
        },
        image: '/apps/device-box/tech-speed.png'
      },
      {
        id: 'tech-03',
        title: {
          en: 'Cyber Tech Desktop Widgets',
          zh: '科技風多規格小工具'
        },
        subtitle: {
          en: '06 / Cyber Widgets',
          zh: '06 / 科技風小工具專區'
        },
        description: {
          en: 'Engineered for tech enthusiasts with striking neon highlights that elevate your home screen.',
          zh: '專為科技極客打造的桌面小工具，高亮青藍配色完美襯托桌面科技感。'
        },
        image: '/apps/device-box/tech-widgets.png'
      }
    ],
    capsuleScreenshot: '/apps/device-box/preview-capsule.png',
    featureCards: [
      {
        title: { en: 'Dual Theme Switcher', zh: '雙風格切換' },
        subtitle: { en: 'Minimal Mono & Cyber Tech themes', zh: '極簡黑白 / 霓虹科技隨心切換' },
        icon: 'palette'
      },
      {
        title: { en: 'Hardware Specs', zh: '裝置數據' },
        subtitle: { en: 'Real-time readings of SOC & core hardware', zh: '即時讀取核心硬體與 SOC 負載' },
        icon: 'cpu'
      },
      {
        title: { en: 'Speed & Boost', zh: '極速優化' },
        subtitle: { en: 'One-tap RAM acceleration & speed test', zh: '記憶體一鍵加速與頻寬測速' },
        icon: 'zap'
      },
      {
        title: { en: 'Privacy-First', zh: '隱私至上' },
        subtitle: { en: 'Fully local execution & privacy', zh: '純本地離線運行，隱私至上' },
        icon: 'shield'
      }
    ],
    features: [
      { en: 'Dual Theme Switcher (Minimal Mono / Cyber Tech)', zh: '支援風格切換（極簡黑白 / 霓虹科技）' },
      { en: 'Real-time SOC processor & hardware monitoring', zh: '核心硬體規格與處理器即時監控' },
      { en: 'One-tap deep memory boost & bandwidth speed test', zh: '一鍵記憶體加速與網路頻寬測速' },
      { en: 'Samsung curve gauge & Widgy-style home widgets', zh: '豐富桌面小工具（三星環狀 / Widgy 風格）' },
      { en: 'Dynamic micro indicator in the Android status bar', zh: '狀態列即時微型指標膠囊' },
      { en: 'Native & fluid architecture with Jetpack Compose', zh: '原生流暢（Jetpack Compose）' },
      { en: 'Privacy-focused: zero tracking, fully local', zh: '注重個人隱私，純本地運作' }
    ],
    technologies: ['Android', 'Kotlin', 'Jetpack Compose', 'Material 3'],
    downloadUrl: 'https://downloads.kkleon.com/DeviceBox.apk',
    githubUrl: 'https://github.com/binno894894-dotcom',
    playStoreUrl: '',
    releaseDate: '2026-09'
  },
  {
    slug: 'focus-now',
    name: 'FocusNow',
    tagline: {
      en: 'Stay focused. Lock distracting apps and flip your phone face-down to enter deep work.',
      zh: '專注當下。鎖定干擾應用，手機朝下蓋住立即進入深度專注。'
    },
    shortTagline: {
      en: 'App blocker & flip to focus',
      zh: '極簡應用鎖定與翻轉專注工具'
    },
    description: {
      en: 'A minimalist digital detox and productivity tool for Android. Select apps to lock during focus sessions, and leverage the physical gesture of placing your phone face-down to eliminate distractions effortlessly.',
      zh: '為 Android 使用者打造的極簡數位排毒與專注工具。自訂鎖定特定干擾 App，並支援「手機朝下翻轉」感應，以直覺的物理動作開啟無干擾專注時光。'
    },
    version: '1.0.0',
    platform: 'Android',
    icon: '/apps/focus-now-icon.png',
    screenshots: [
      '/apps/focus-now-icon.png'
    ],
    featureCards: [
      {
        title: { en: 'App Blocker', zh: '應用鎖定' },
        subtitle: { en: 'Restrict distracting apps during focus sessions', zh: '專注期間阻擋特定社群與干擾 App' },
        icon: 'lock'
      },
      {
        title: { en: 'Flip to Focus', zh: '翻轉專注' },
        subtitle: { en: 'Auto-trigger focus mode when placed face-down', zh: '手機朝下蓋住自動感應進入專注模式' },
        icon: 'smartphone'
      },
      {
        title: { en: 'Minimalist & Calming', zh: '極簡克制' },
        subtitle: { en: 'Clean and calming minimalist aesthetic', zh: '黑白極簡、沉浸專注美學' },
        icon: 'sparkles'
      },
      {
        title: { en: 'Insightful Stats', zh: '專注紀錄' },
        subtitle: { en: 'Lightweight focus duration tracking', zh: '輕量記錄每日專注時長' },
        icon: 'bar-chart'
      }
    ],
    features: [
      {
        en: 'App Blocker: Restrict access to distracting apps during focus sessions',
        zh: '應用鎖定：專注期間阻擋特定社群與干擾 App'
      },
      {
        en: 'Flip to Focus: Automatically trigger focus mode when phone is placed face-down',
        zh: '翻轉專注：手機朝下蓋住自動感應進入專注模式'
      },
      {
        en: 'Minimalist & Calming: Clean and focused monochrome aesthetic',
        zh: '極簡克制：黑白極簡、沉浸專注美學'
      },
      {
        en: 'Insightful Stats: Lightweight focus duration tracking',
        zh: '專注紀錄：輕量記錄每日專注時長'
      }
    ],
    technologies: ['Android', 'Kotlin', 'Jetpack Compose', 'SensorManager'],
    downloadUrl: 'https://downloads.kkleon.com/FocusNow.apk',
    githubUrl: 'https://github.com/binno894894-dotcom',
    playStoreUrl: '',
    releaseDate: '2026-09'
  }
];

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}
