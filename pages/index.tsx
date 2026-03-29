import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// 动态导入 Three.js 组件，禁用 SSR
const SphereGallery = dynamic(
  () => import('@/components/SphereGallery'),
  { ssr: false }
);

// 声明GSAP全局变量
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    SplitText: any;
  }
}

// 定义类型
export interface ConcertData {
  pageTitle: string;
  profileLabel: string;
  siteName: string;
  roles: string[];
  blogUrl: string;
  arrowUpLabel: string;
  arrowDownLabel: string;
  sectionSpacing: {
    lines: string[];
    highlightIndex: number;
  };
  travelerSection: {
    lines: string[];
  };
  sphereGallery: {
    images: string[];
  };
  yearCitySection: {
    headers: {
      year: string;
      city: string;
      location: string;
      date: string;
    };
    roundHeader: string;
    showMoreText: string;
    yearsFirstHalf: {
      year: string;
      details: {
        location: string;
        flag: string;
        date: string;
      }[];
    }[];
    yearsSecondHalf: {
      year: string;
      details: {
        location: string;
        flag: string;
        date: string;
      }[];
    }[];
  };
  brandSection: {
    quote: string;
  };
  projectListSection: {
    title: string;
    projects: {
      name: string;
      image: string;
    }[];
  };
  socialSection: {
    titleLine1: string;
    titleLine2: string;
    followText: string;
    images: string[];
    socialLinks: {
      icon: string;
      url: string;
    }[];
  };
}

// 导入数据
import { concertDataZH } from '../db/data_zh';
import { concertDataEN } from '../db/data_en';

const Home: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'zh' | 'en'>('zh');
  const [currentData, setCurrentData] = useState<ConcertData>(concertDataZH as ConcertData);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showMoreYears, setShowMoreYears] = useState(false);
  const [socialExpanded, setSocialExpanded] = useState(false);
  const [showProjectLeftSection, setShowProjectLeftSection] = useState(false);

  useEffect(() => {
    // 初始化语言
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('concertJourneyLang');
      if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
        setCurrentLanguage(savedLang as 'zh' | 'en');
        setCurrentData(savedLang === 'zh' ? concertDataZH as ConcertData : concertDataEN as ConcertData);
      } else {
        const browserLang = navigator.language.toLowerCase();
        const lang = browserLang.startsWith('zh') ? 'zh' : 'en';
        setCurrentLanguage(lang);
        setCurrentData(lang === 'zh' ? concertDataZH as ConcertData : concertDataEN as ConcertData);
      }

      // 等待 GSAP CDN 脚本加载完成后再初始化动画
      const initAnimations = () => {
        if (!window.gsap) {
          console.error('❌ GSAP 未加载');
          return;
        }
        
        console.log('✅ GSAP 加载成功，开始初始化动画');
        
        // 注册 ScrollTrigger 插件
        if (window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
          console.log('✅ ScrollTrigger 插件已注册');
        } else {
          console.error('❌ ScrollTrigger 未加载');
          return;
        }
        
        // 页面加载动画
        window.gsap.from('.profile-card', {
          duration: 1.5,
          y: 50,
          opacity: 0,
          ease: 'back.out(1.7)',
          delay: 0.3
        });

        window.gsap.from('.avatar-image', {
          duration: 1.2,
          scale: 0,
          opacity: 0,
          ease: 'back.out(1.7)',
          delay: 0.5
        });

        window.gsap.from('.role-item', {
          duration: 0.8,
          y: 20,
          opacity: 0,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 1
        });

        // section-spacing 完整动画序列
        const sectionTextSpans = document.querySelectorAll('.section-text span');
        const highlightBg = document.querySelector('.section-text .highlight-fill .highlight-bg');
        
        if (sectionTextSpans.length > 0) {
          window.gsap.set(sectionTextSpans, { y: 20, opacity: 0 });
          
          const sectionTimeline = window.gsap.timeline({
            repeat: -1,
            repeatDelay: 0
          });
          
          sectionTimeline.to(sectionTextSpans, 
            { 
              duration: 0.8, 
              y: 0, 
              opacity: 1, 
              stagger: 0.3, 
              ease: 'power2.out', 
              delay: 1.5
            }
          );
          
          if (highlightBg) {
            window.gsap.set(highlightBg, { width: '0%' });
            sectionTimeline.to(highlightBg, {
              width: '100%',
              duration: 3,
              ease: 'power2.out'
            });
          }
          
          sectionTimeline.to({}, { duration: 2 });
          
          if (highlightBg) {
            sectionTimeline.to(highlightBg, {
              width: '0%',
              duration: 0.3,
              ease: 'power2.in'
            });
          }
          
          sectionTimeline.to(sectionTextSpans, {
            y: -20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.in'
          });
        }

        // 行者区域三行文字滚动动画（词语级别交错动画）
        const travelerLines = document.querySelectorAll('.traveler-line');
        console.log('找到 traveler-line 元素数量:', travelerLines.length);
        
        if (travelerLines.length > 0) {
          const screenHeight = window.innerHeight;
          const isMobile = window.innerWidth <= 768;
          
          // 移动端和桌面端使用不同的字体大小计算
          const baseFontSize = isMobile ? 
            Math.min(screenHeight / 5, 60) * 2.4 : 
            Math.min(screenHeight / 3, 120) * 3;
          const fontSize = baseFontSize;
          
          console.log('初始化 traveler-section 动画，字体大小:', fontSize, '移动端:', isMobile);

          // 获取所有词语元素
          const line1Words = document.querySelectorAll('.line-1 .word');
          const line2Words = document.querySelectorAll('.line-2 .word');
          const line3Words = document.querySelectorAll('.line-3 .word');

          // 设置初始状态
          // 第一行词语从右下角出发
          window.gsap.set('.line-1', { position: 'absolute', width: '100%', height: '100%' });
          window.gsap.set(line1Words, { 
            left: () => window.innerWidth + 'px', 
            top: () => window.innerHeight + 'px',
            xPercent: -100,
            yPercent: -100,
            fontSize: fontSize + 'px',
            opacity: 0,
            filter: 'blur(10px)',
            position: 'absolute'
          });

          // 第二行词语从左下角出发
          window.gsap.set('.line-2', { position: 'absolute', width: '100%', height: '100%' });
          window.gsap.set(line2Words, { 
            left: '0px', 
            top: () => window.innerHeight + 'px',
            xPercent: 0,
            yPercent: -100,
            fontSize: fontSize + 'px',
            opacity: 0,
            filter: 'blur(10px)',
            position: 'absolute'
          });

          // 第三行词语从右下角出发
          window.gsap.set('.line-3', { position: 'absolute', width: '100%', height: '100%' });
          window.gsap.set(line3Words, { 
            left: () => window.innerWidth + 'px', 
            top: () => window.innerHeight + 'px',
            xPercent: -100,
            yPercent: -100,
            fontSize: fontSize + 'px',
            opacity: 0,
            filter: 'blur(10px)',
            position: 'absolute'
          });

          // 根据移动端调整滚动距离和位置 - 增加滚动距离让动画更流畅
          const scrollEnd = isMobile ? '+=3500' : '+=5000';
          const position1 = isMobile ? '18%' : '12%';
          const position2 = isMobile ? '46%' : '44%';
          const position3 = isMobile ? '74%' : '76%';
          const mergePosition = isMobile ? '48%' : '50%';
          
          // 移动端字体大小调整
          const midFontSize = (fontSize * (isMobile ? 0.6 : 0.5)) + 'px';
          const smallFontSize = (fontSize * (isMobile ? 0.35 : 0.25)) + 'px';

          // 创建滚动动画时间线
          const tl = window.gsap.timeline({
            scrollTrigger: {
              trigger: '.traveler-section',
              start: 'top top',
              end: scrollEnd,
              scrub: 1.5,               // 稍微增加 scrub 让动画更跟手
              pin: true
            }
          });

          // 第一步：三行词语分别从角落向上移动，均匀分布在屏幕垂直方向
          // 第一行词语移动到指定位置，每个词语错开动画
          line1Words.forEach((word, index) => {
            tl.to(word, {
              left: '50%',
              top: position1,
              xPercent: -50,
              yPercent: 0,
              opacity: 1,
              filter: 'blur(0px)',
              fontSize: midFontSize,
              duration: 2,               // 增加持续时间让动画更慢
              ease: 'power2.out'
            }, index * 0.15);            // 增加词语之间延迟
          });

          // 第二行词语移动到指定位置，每个词语错开动画
          line2Words.forEach((word, index) => {
            tl.to(word, {
              left: '50%',
              top: position2,
              xPercent: -50,
              yPercent: 0,
              opacity: 1,
              filter: 'blur(0px)',
              fontSize: midFontSize,
              duration: 2,
              ease: 'power2.out'
            }, 0.3 + index * 0.15);     // 增加起始延迟
          });

          // 第三行词语移动到指定位置，每个词语错开动画
          line3Words.forEach((word, index) => {
            tl.to(word, {
              left: '50%',
              top: position3,
              xPercent: -50,
              yPercent: 0,
              opacity: 1,
              filter: 'blur(0px)',
              fontSize: midFontSize,
              duration: 2,
              ease: 'power2.out'
            }, 0.6 + index * 0.15);     // 增加起始延迟
          });

          // 第二步：三行合并，只显示第一行，第二、三行淡出
          const mergeDelay = isMobile ? 3 : 4;     // 增加等待时间

          // 第一行向上移动到合并位置（居中显示）
          line1Words.forEach((word, index) => {
            tl.to(word, {
              top: mergePosition,
              fontSize: smallFontSize,
              duration: 1.5,            // 增加过渡时间
              ease: 'power2.inOut'       // 使用更平滑的缓动
            }, mergeDelay + index * 0.1);
          });

          // 第二行淡出并向上移动（不显示）
          line2Words.forEach((word, index) => {
            tl.to(word, {
              top: mergePosition,
              opacity: 0,
              duration: 1,
              ease: 'power2.inOut'
            }, mergeDelay + index * 0.1);
          });

          // 第三行淡出并向上移动（不显示）
          line3Words.forEach((word, index) => {
            tl.to(word, {
              top: mergePosition,
              opacity: 0,
              duration: 1,
              ease: 'power2.inOut'
            }, mergeDelay + index * 0.1);
          });

          // 第三步：第一行淡出
          tl.to(line1Words, {
            opacity: 0,
            duration: 1,                  // 增加淡出时间
            ease: 'power2.in'
          }, mergeDelay + 2);
        }

        // 品牌区域 SplitText 动画
        const brandSection = document.querySelector('.brand-section');
        const quoteEl = document.querySelector('.brand-section .quote');

        if (brandSection && quoteEl && window.SplitText) {
          // 使用 SplitText 将文字分割成字符
          const splitQuote = new window.SplitText(quoteEl, {
            type: 'chars,words',
            charsClass: 'char'
          });

          // 初始状态隐藏
          window.gsap.set(splitQuote.chars, {
            opacity: 0,
            y: 80,
            scale: 0,
            rotationX: -90,
            transformOrigin: 'center center'
          });

          // 创建时间线动画
          const brandTl = window.gsap.timeline({
            scrollTrigger: {
              trigger: brandSection,
              start: 'top 60%',
              toggleActions: 'play none none reverse'
            }
          });

          // 文字逐字弹跳出现
          brandTl.to(splitQuote.chars, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            ease: 'elastic.out(1, 0.5)',
            stagger: {
              amount: 1.5,
              from: 'random'
            }
          }, 0.2);

          // 添加波动效果
          brandTl.to(splitQuote.chars, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out',
            stagger: {
              each: 0.05,
              repeat: 1,
              yoyo: true
            }
          }, '-=0.5');

          // 文字发光效果
          brandTl.to(quoteEl, {
            textShadow: '0 0 30px rgba(72, 81, 173, 0.3), 0 0 60px rgba(245, 166, 35, 0.2)',
            duration: 1,
            ease: 'power2.out'
          }, '-=1');
        }
      };

      // 确保 DOM 和脚本都加载完成后再初始化
      const ensureGsapLoaded = () => {
        if (window.gsap) {
          console.log('GSAP 已存在，直接初始化');
          initAnimations();
        } else {
          console.log('等待 GSAP 加载...');
          let attempts = 0;
          const checkGsap = setInterval(() => {
            attempts++;
            if (window.gsap) {
              clearInterval(checkGsap);
              console.log('GSAP 加载完成，初始化动画');
              initAnimations();
            } else if (attempts > 50) {
              clearInterval(checkGsap);
              console.error('❌ GSAP 加载超时（5秒）');
              console.error('请检查网络连接和 CDN 链接');
            }
          }, 100);
        }
      };

      // 使用 setTimeout 确保在下一个事件循环中执行
      setTimeout(ensureGsapLoaded, 500);

      // 滚动事件监听
      const handleScroll = () => {
        setShowBackToTop(window.scrollY > 300);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // 项目列表图片显示交互
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkProjectImages = () => {
        const images = Array.from(document.querySelectorAll<HTMLImageElement>('.project-item-image'));
        const windowHeight = window.innerHeight;
        const centerThreshold = windowHeight * 0.5;

        // 先移除所有可见状态
        images.forEach(img => img.classList.remove('visible'));

        // 找到距离中心最近的图片
        const closestImage = images.reduce<{ image: HTMLImageElement | null; distance: number }>((acc, image) => {
          const rect = image.getBoundingClientRect();
          const imageCenter = rect.top + rect.height / 2;
          const distance = Math.abs(imageCenter - centerThreshold);
          return distance < acc.distance ? { image, distance } : acc;
        }, { image: null, distance: Infinity });

        if (closestImage.image && closestImage.distance < windowHeight * 0.3) {
          closestImage.image.classList.add('visible');
        }
      };

      window.addEventListener('scroll', checkProjectImages);
      window.addEventListener('load', checkProjectImages);

      return () => {
        window.removeEventListener('scroll', checkProjectImages);
        window.removeEventListener('load', checkProjectImages);
      };
    }
  }, []);

  // 年份城市列表展开/折叠交互（单选高亮）
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const yearCitySection = document.querySelector('.year-city-section');
      if (!yearCitySection) return;

      const handleYearRowClick = (e: Event) => {
        const target = e.target as HTMLElement;
        const yearRow = target.closest('.year-row') as HTMLElement;
        if (!yearRow) return;

        // 如果当前已经是激活状态，直接关闭
        if (yearRow.classList.contains('active')) {
          yearRow.classList.remove('active');
        } else {
          // 先移除所有行的高亮
          document.querySelectorAll('.year-city-section .year-row').forEach(r => r.classList.remove('active'));
          // 只给当前点击的行添加高亮
          yearRow.classList.add('active');
          
          // 滚动到当前行
          setTimeout(() => {
            yearRow.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      };

      yearCitySection.addEventListener('click', handleYearRowClick);

      return () => {
        yearCitySection.removeEventListener('click', handleYearRowClick);
      };
    }
  }, []);

  // 监听 traveler-section 进入视口并自动滚动5次
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const travelerSection = document.querySelector('.traveler-section');
      
      if (!travelerSection) return;

      let autoScrollCount = 0;
      let isAutoScrolling = false;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3 && !isAutoScrolling && autoScrollCount < 7) {
              isAutoScrolling = true;
              
              // 执行7次向下滚动
              const performAutoScroll = () => {
                if (autoScrollCount < 5) {
                  window.scrollBy({
                    top: 120,
                    behavior: 'smooth'
                  });
                  autoScrollCount++;
                  
                  setTimeout(() => {
                    performAutoScroll();
                  }, 100);
                } else {
                  isAutoScrolling = false;
                }
              };
              
              performAutoScroll();
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(travelerSection);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  // 监听 project-list-section 进入视口，延迟3秒后显示 project-left-section
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const projectListSection = document.querySelector('.project-list-section');
      
      if (!projectListSection) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.15 && !showProjectLeftSection) {
              // 延迟3秒后显示
              setTimeout(() => {
                setShowProjectLeftSection(true);
              }, 3000);
              
              // 断开观察器，避免重复触发
              observer.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(projectListSection);

      return () => {
        observer.disconnect();
      };
    }
  }, [showProjectLeftSection]);

  const handleLanguageChange = (lang: 'zh' | 'en') => {
    setCurrentLanguage(lang);
    setCurrentData(lang === 'zh' ? concertDataZH as ConcertData : concertDataEN as ConcertData);
    if (typeof window !== 'undefined') {
      localStorage.setItem('concertJourneyLang', lang);
    }
  };

  const handleBackToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container">
      <Head>
        <title>{currentData.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Layicr's personal concert journey record website" />
        <link rel="icon" href="/img/logo.jpg" />
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        {/* GSAP CDN */}
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/ScrollTrigger.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/SplitText.min.js"></script>
      </Head>

      {/* 语言切换器 */}
      <div className="language-switcher">
        <button 
          className={`lang-btn ${currentLanguage === 'zh' ? 'active' : ''}`} 
          onClick={() => handleLanguageChange('zh')}
        >
          中文
        </button>
        <button 
          className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`} 
          onClick={() => handleLanguageChange('en')}
        >
          EN
        </button>
      </div>

      {/* 背景圆圈 */}
      <div className="background-circles">
        <div className="logo-letter">L</div>
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      {/* 英雄区域 */}
      <section className="hero-section">
        <div className="profile-wrapper">
          <div className="orbit-container">
            <div className="avatar-section">
              <div className="avatar-container">
                <img src="/img/logo.jpg" alt="layicr" className="avatar-image" />
                <div className="status-dot"></div>
              </div>
              <div className="avatar-border"></div>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-label">{currentData.profileLabel}</div>
            <h1 className="profile-name">layicr</h1>
            <ul className="roles-list">
              {currentData.roles.map((role, index) => (
                <li 
                  key={index} 
                  className="role-item"
                  onClick={() => {
                    if (index === 0) {
                      const sectionSpacing = document.querySelector('.section-spacing');
                      if (sectionSpacing) {
                        sectionSpacing.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else if (index === 1) {
                      const travelerSection = document.querySelector('.traveler-section');
                      if (travelerSection) {
                        travelerSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else if (index === 2) {
                      const brandSection = document.querySelector('.brand-section');
                      if (brandSection) {
                        brandSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else if (index === 3) {
                      window.open(currentData.blogUrl, '_blank');
                    }
                  }}
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 故事区域 */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <p className="section-text">
            {currentData.sectionSpacing.lines.map((line, index) => (
              <React.Fragment key={index}>
                <span className={index === currentData.sectionSpacing.highlightIndex ? 'highlight-fill' : ''}>
                  <span className="highlight-bg"></span>
                  {line}
                </span>
                {index < currentData.sectionSpacing.lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </section>

      {/* 行者区域 */}
      <section className="traveler-section">
        <div className="traveler-intro">
          <div className="traveler-line line-1">
            <span className="word">{currentData.travelerSection.lines[0]}</span>
          </div>
          <div className="traveler-line line-2">
            <span className="word">{currentData.travelerSection.lines[1]}</span>
          </div>
          <div className="traveler-line line-3">
            <span className="word">{currentData.travelerSection.lines[2]}</span>
          </div>
        </div>
      </section>

      {/* Three.js 球形照片墙 */}
      <section className="sphere-gallery-section">
        <SphereGallery images={currentData.sphereGallery.images} />
        {/* 左侧向上箭头 */}
        <div
          className="sphere-arrow-up"
          onClick={() => {
            const travelerSection = document.querySelector('.section-spacing');
            if (travelerSection) {
              travelerSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5"/>
          </svg>
          <span className="arrow-label">{currentData.arrowUpLabel}</span>
        </div>
        {/* 右侧向下箭头 */}
        <div
          className="sphere-arrow-down"
          onClick={() => {
            const yearCity = document.querySelector('#year-city');
            if (yearCity) {
              yearCity.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
          <span className="arrow-label">{currentData.arrowDownLabel}</span>
        </div>
      </section>

      {/* 年份城市列表 */}
      <section className="year-city-section" id="year-city">
        <div className="year-city-container">
          <div className="year-city-header">
            <div></div>
            <div>{currentData.yearCitySection.headers.year}</div>
            <div>{currentData.yearCitySection.headers.city}</div>
          </div>

          {(() => {
            const renderYearItem = (yearItem: typeof currentData.yearCitySection.yearsFirstHalf[0], index: number) => {
              const cityCount = yearItem.details.length.toString();
              return (
                <React.Fragment key={index}>
                  <div className="year-row" data-year={yearItem.year}>
                    <div className="expand-icon">▼</div>
                    <div className="year">{yearItem.year}</div>
                    <div className="city">{cityCount}</div>
                  </div>
                <div className="race-details">
                  {yearItem.details.length > 0 && (
                    <div className="year-city-header race-detail-header">
                      <div>{currentData.yearCitySection.roundHeader}</div>
                      <div>{currentData.yearCitySection.headers.location}</div>
                      <div>{currentData.yearCitySection.headers.date}</div>
                    </div>
                  )}
                  {yearItem.details.map((detail, detailIndex) => (
                    <div className="race-row" key={detailIndex}>
                      <div className="round">{String(detailIndex + 1).padStart(2, '0')}</div>
                      <div className="location">
                        {detail.location}
                        <img src={`https://flagcdn.com/w80/${detail.flag}.png`} alt={`${detail.location} Flag`} />
                      </div>
                      <div className="date">{detail.date}</div>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            );
            };

            return (
              <>
                {currentData.yearCitySection.yearsFirstHalf.map((yearItem, index) => renderYearItem(yearItem, index))}
                
                {!showMoreYears && currentData.yearCitySection.yearsSecondHalf.length > 0 && (
                  <div 
                    className="show-more-btn"
                    onClick={() => setShowMoreYears(true)}
                  >
                    {currentData.yearCitySection.showMoreText}
                  </div>
                )}

                {showMoreYears && currentData.yearCitySection.yearsSecondHalf.map((yearItem, index) => renderYearItem(yearItem, index))}
              </>
            );
          })()}
        </div>
      </section>

      {/* 品牌区域 */}
      <section className="brand-section">
        <div className="quote-container">
          <div className="quote">{currentData.brandSection.quote}</div>
        </div>
      </section>

      {/* 项目列表区域 */}
      <section className="project-list-section">
        <div className="project-container">
          <div className={`project-left-section ${showProjectLeftSection ? 'visible' : ''}`}>
            <div className="project-main-title">{currentData.projectListSection.title}</div>
          </div>
          <div className="project-right-section">
            <ul className="project-list">
              {currentData.projectListSection.projects.map((project, index) => (
                <li className="project-item" key={index}>
                  <img src={project.image} alt={project.name} className="project-item-image" />
                  {project.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 社交区域 */}
      <section className="social-section">
        <div className="social-container">
          <h2 className="social-title">
            <span className="social-title-line1">{currentData.socialSection.titleLine1}</span>
            <span className="social-title-line2">{currentData.socialSection.titleLine2}</span>
          </h2>
          
          <div 
            className={`social-images-container ${socialExpanded ? 'expanded' : ''}`}
            onClick={() => setSocialExpanded(!socialExpanded)}
          >
            {currentData.socialSection.images.map((image, index) => (
              <div className="social-image-card" key={index}>
                <img src={image} alt={`Social ${index + 1}`} />
              </div>
            ))}
          </div>
          
          <div className="social-follow-text">{currentData.socialSection.followText}</div>
          <div className="social-links">
            {currentData.socialSection.socialLinks.map((link, index) => (
              <a href={link.url} className="social-link" key={index}>
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 版本区域 */}
      <footer className="footer-section">
        <div className="footer-content">© {currentData.siteName}</div>
      </footer>

      {/* 回到顶部按钮 */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        id="backToTop" 
        title="返回顶部"
        onClick={handleBackToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default Home;