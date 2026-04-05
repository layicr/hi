# Layicr - 个人网站

一个基于 Next.js 的个人网站，支持简体英文繁体切换，包含丰富的动画效果和 3D 交互体验。

## 技术栈

- **框架**: Next.js 14.1.0
- **UI 库**: React 18.2.0
- **样式**: [Tailwind CSS](https://tailwindcss.com/) v4.2.2 (CSS-based 配置)
- **3D 渲染**: Three.js + @react-three/fiber + @react-three/drei
- **动画**: GSAP 3.14.2
- **语言**: TypeScript 5.3.3

## 功能特性

### 多语言支持
- 支持简体英文繁体切换
- 所有文本内容支持显示

### 页面模块

1. **Hero Section** - 主视觉区域，展示个人角色标签
2. **Section Spacing** - 文字展示区域，带高亮效果
3. **Traveler Section** - 旅行者主题区域
4. **Sphere Gallery** - 3D 球体画廊（使用 Three.js）
5. **Year City Section** - 年份城市时间线，记录旅程足迹
6. **Brand Section** - 个人品牌区域
7. **Project Section** - 项目列表展示
8. **Social Section** - 最近动态社交
9. **Footer** - 页脚信息

## 项目结构

```
hi3/
├── components/          # React 组件
│   ├── BackToTop.tsx
│   ├── BrandSection.tsx
│   ├── ErrorBoundary.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Loading.tsx
│   ├── ProjectSection.tsx
│   ├── SectionSpacing.tsx
│   ├── SocialSection.tsx
│   ├── SphereGallery.tsx
│   ├── TravelerSection.tsx
│   └── YearCitySection.tsx
├── db/                  # 数据文件
│   ├── constants.ts     # 常量配置（社交图片、链接等）
│   ├── data_zh.ts       # 中文数据
│   └── data_en.ts       # 英文数据
├── hooks/               # 自定义 Hooks
│   ├── animations/      # 动画相关 Hooks
│   ├── useAnimations.ts
│   ├── useIntersectionObserver.ts
│   ├── useLanguageInit.ts
│   ├── useProjectVisibility.ts
│   ├── useTravelerAutoScroll.ts
│   └── useYearCityInteraction.ts
├── pages/               # Next.js 页面
│   ├── _app.tsx
│   └── index.tsx
├── public/              # 静态资源
│   ├── img/
│   │   ├── social/      # 社交图片
│   │   └── logo.jpg
│   └── js/
│       └── analytics.js
├── styles/              # 样式文件
│   └── globals.css
├── types/               # TypeScript 类型定义
│   └── index.ts
└── package.json
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 生产构建
> 项目使用静态导出模式，构建产物在 `out` 目录中。
```bash
npm run build
npx serve@latest out
```