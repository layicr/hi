# Layicr - 个人网站

[English](README_en.md) | 简体中文

一个基于 Next.js 的个人网站，支持简体、英文、繁体切换，包含丰富的动画效果和 3D 交互体验。

## 技术栈

- **框架**: Next.js 14.1.0
- **UI 库**: React 18.2.0
- **样式**: Tailwind CSS v4.2.2 
- **3D 渲染**: Three.js + @react-three/fiber + @react-three/drei
- **动画**: GSAP 3.14.2
- **语言**: TypeScript 5.3.3

## 功能特性

### 多语言支持
- 支持简体中文、英文、繁体中文三种语言切换
- 所有文本内容均支持三种语言显示

### 页面模块

1. **Hero Section** - 主视觉区域，展示个人角色标签
2. **Section Spacing** - 文字展示区域，带高亮效果
3. **Traveler Section** - 旅行者主题区域
4. **Sphere Gallery** - 3D 球体画廊（使用 Three.js），支持缩略图和原图切换
5. **Year City Section** - 年份城市时间线，记录旅程足迹，支持展开/折叠
6. **Brand Section** - 个人品牌区域
7. **Project Section** - 项目列表展示
8. **Social Section** - 社交图片和链接展示
9. **Footer** - 页脚信息

## 项目结构

```
hi3/
├── components/          # React 组件
│   ├── BackToTop.tsx        # 返回顶部按钮
│   ├── BrandSection.tsx     # 品牌区域
│   ├── ErrorBoundary.tsx    # 错误边界
│   ├── Footer.tsx           # 页脚
│   ├── HeroSection.tsx      # 主视觉
│   ├── LanguageSwitcher.tsx # 语言切换器
│   ├── Loading.tsx          # 加载组件
│   ├── ProjectSection.tsx   # 项目区域
│   ├── SectionSpacing.tsx   # 文字展示区域
│   ├── SocialSection.tsx    # 社交区域
│   ├── SphereGallery.tsx    # 3D 球体画廊
│   ├── TravelerSection.tsx  # 旅行者区域
│   └── YearCitySection.tsx  # 年份城市时间线
├── db/                  # 数据文件
│   ├── constants.ts     # 常量配置（画廊图片、社交图片、社交链接）
│   ├── data_en.ts       # 英文数据
│   ├── data_zh_cn.ts    # 简体中文数据
│   └── data_zh_tw.ts    # 繁体中文数据
├── hooks/               # 自定义 Hooks
│   ├── animations/      # 动画相关 Hooks
│   │   ├── index.ts
│   │   ├── useBrandAnimation.ts
│   │   ├── useHeroAnimations.ts
│   │   ├── useProjectImageVisibility.ts
│   │   ├── useSectionSpacingAnimation.ts
│   │   ├── useTravelerAnimation.ts
│   │   └── useTravelerAutoAnimation.ts
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
│   │   ├── logo.jpg
│   │   └── projects/    # 项目图片
│   └── js/
│       └── analytics.js
├── styles/              # 样式文件
│   └── globals.css
├── types/               # TypeScript 类型定义
│   └── index.ts
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
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