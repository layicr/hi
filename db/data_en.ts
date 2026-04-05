import { ConcertData } from '@/types';
import { generateGalleryImages, SOCIAL_IMAGES, SOCIAL_LINKS } from './constants';

export const concertDataEN: ConcertData = {
  pageTitle: 'Layicr',
  seoDescription: 'layicr personal website',
  seoKeywords: 'layicr,lyc.la,travel,brand,personal website',
  seoAuthor: 'Layicr',
  seoUrl: 'http://hi.lyc.la',
  profileLabel: 'My name is:',
  siteName: 'Layicr',
  roles: ['Manifesto?   xuān yán?', 'Boundless Traveler', 'Personal Consultant', 'iblog'],
  blogUrl: 'http://b.lyc.la',
  arrowUpLabel: 'Up',
  arrowDownLabel: 'Down',
  sectionSpacing: {
    lines: [
      'To be honest,',
      'The elusive honesty forces us to grow.',
      'A touch of blue,',
      'Footprints on the road will never stop.'
    ],
    highlightIndex: 3
  },
  travelerSection: {
    lines: [
      'BOUNDLESS TRAVELER',
      'EXPLORATION ALONG THE PATH',
      'GUIDED BY THE ORIGINAL ASPIRATION'
    ]
  },
  sphereGallery: {
    images: generateGalleryImages()
  },
  yearCitySection: {
    headers: {
      year: 'Year',
      city: 'City',
      location: 'Location',
      date: 'Date'
    },
    roundHeader: 'Round',
    showMoreText: 'More',
    yearsFirstHalf: [
      {
        year: '2026',
        details: [
          { location: 'Guangdong . Qingyuan', flag: 'cn', date: '01.01' },
          { location: 'Guangdong . Qingyuan . Li Ronghao Concert', flag: 'cn', date: '01.01' },
          { location: 'Jiangxi . Nanchang', flag: 'cn', date: '01.01' },
          { location: 'Jiangxi . Nanchang . Wu Bai Concert', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2025',
        details: [
          { location: 'Guangxi . Nanning . Steve Chou Concert', flag: 'cn', date: '11.01' },
          { location: 'Guangxi . Nanning . G.E.M. Concert', flag: 'cn', date: '11.01' },
          { location: 'Guangxi . Liuzhou', flag: 'cn', date: '06.01' },
          { location: 'Guangxi . Liujiang', flag: 'cn', date: '06.01' },
          { location: 'Guangdong . Shenzhen', flag: 'cn', date: '05.01' },
          { location: 'Guangdong . Shenzhen . Stefanie Sun Concert', flag: 'cn', date: '05.01' }
        ]
      },
      {
        year: '2024',
        details: [
          { location: 'Guangdong . Foshan', flag: 'cn', date: '12.01' },
          { location: 'Guangdong . Foshan . Richie Jen Concert', flag: 'cn', date: '12.01' },
          { location: 'Guangdong . Jiangmen', flag: 'cn', date: '06.01' }
        ]
      }
    ],
    yearsSecondHalf: [
      {
        year: '2023',
        details: [
          { location: 'Jiangsu . Wuxi', flag: 'cn', date: '10.01' }
        ]
      },
      {
        year: '2022',
        details: [
          { location: 'Zhejiang . Huzhou', flag: 'cn', date: '02.01' }
        ]
      },
      {
        year: '2021',
        details: [
          { location: 'Fujian . Fuzhou', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Fuzhou Changle International Airport', flag: 'cn', date: '12.01' }
        ]
      },
      {
        year: '2020',
        details: [
          { location: 'Zhejiang . Ningbo', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Jinjiang', flag: 'cn', date: '12.01' }
        ]
      },
      {
        year: '2019',
        details: [
          { location: 'Guangxi . Nanning', flag: 'cn', date: '08.01' },
          { location: 'Guangxi . Yong River', flag: 'cn', date: '08.01' },
          { location: 'Guangxi . Nanning Wuxu International Airport', flag: 'cn', date: '08.01' },
          { location: 'Shanxi . Jinzhong', flag: 'cn', date: '03.01' },
          { location: 'Shanxi . Pingyao Ancient City', flag: 'cn', date: '03.01' }
        ]
      },
      {
        year: '2018',
        details: [
          { location: 'Shanxi . Taiyuan', flag: 'cn', date: '12.01' },
          { location: 'Shanxi . Taiyuan Wusu International Airport', flag: 'cn', date: '12.01' },
          { location: 'Anhui . Hefei', flag: 'cn', date: '01.01' },
          { location: 'Anhui . Hefei Xinqiao International Airport', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2017',
        details: [
          { location: 'Taiwan . Taipei', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . New Taipei', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taoyuan', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taichung', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Tainan', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Kaohsiung', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Pingtung', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Kenting', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taitung', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Hualien', flag: 'cn', date: '09.01' },
          { location: 'Taiwan . Taoyuan International Airport', flag: 'cn', date: '09.01' },
          { location: 'Inner Mongolia . Hohhot', flag: 'cn', date: '08.01' },
          { location: 'Ningxia . Yinchuan', flag: 'cn', date: '08.01' },
          { location: 'Ningxia . Zhongwei', flag: 'cn', date: '08.01' }
        ]
      },
      {
        year: '2016',
        details: [
          { location: 'Beijing . Gubei Water Town', flag: 'cn', date: '12.01' },
          { location: "Beijing . Bird's Nest . Eason Chan Concert", flag: 'cn', date: '10.01' },
          { location: 'Shaanxi . Xian', flag: 'cn', date: '09.01' },
          { location: 'Shaanxi . Xian . Mayday Concert', flag: 'cn', date: '09.01' },
          { location: 'Hebei . Zhangjiakou', flag: 'cn', date: '08.01' },
          { location: 'Hebei . Sky Road Grassland', flag: 'cn', date: '08.01' },
          { location: 'Beijing . Yanqing', flag: 'cn', date: '08.01' },
          { location: 'Beijing . Longqing Gorge', flag: 'cn', date: '08.01' },
          { location: 'Thailand . Bangkok', flag: 'th', date: '01.01' },
          { location: 'Thailand . Pattaya', flag: 'th', date: '01.01' },
          { location: 'Thailand . Suvarnabhumi International Airport', flag: 'th', date: '01.01' }
        ]
      },
      {
        year: '2015',
        details: [
          { location: 'Fujian . Quanzhou', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Shishi', flag: 'cn', date: '12.01' },
          { location: 'Fujian . Quanzhou Jinjiang Airport', flag: 'cn', date: '12.01' },
          { location: 'Qinghai . Xining', flag: 'cn', date: '07.01' },
          { location: 'Qinghai . Chaka Salt Lake', flag: 'cn', date: '07.01' },
          { location: 'Qinghai . Qinghai Lake', flag: 'cn', date: '07.01' },
          { location: 'Qinghai . Menyuan', flag: 'cn', date: '07.01' },
          { location: 'Tibet . Sichuan-Tibet Highway 318', flag: 'cn', date: '07.01' },
          { location: 'Tibet . Lhasa', flag: 'cn', date: '07.01' },
          { location: 'Tibet . Nyingchi', flag: 'cn', date: '07.01' },
          { location: 'Tibet . Tanggula Pass', flag: 'cn', date: '07.01' },
          { location: 'Tibet . Basum Lake', flag: 'cn', date: '07.01' },
          { location: 'Tibet . Shannan', flag: 'cn', date: '07.01' },
          { location: 'Tibet . Lhamo La-tso', flag: 'cn', date: '07.01' },
          { location: 'Tibet . Yarlung Tsangpo River', flag: 'cn', date: '07.01' },
          { location: 'Tibet . Yamdrok Lake', flag: 'cn', date: '07.01' },
          { location: 'South Korea . Seoul', flag: 'kr', date: '04.01' },
          { location: 'South Korea . Jeju Island', flag: 'kr', date: '04.01' },
          { location: 'South Korea . Incheon International Airport', flag: 'kr', date: '04.01' },
          { location: 'South Korea . Jeju International Airport', flag: 'kr', date: '04.01' }
        ]
      },
      {
        year: '2014',
        details: [
          { location: 'Zhejiang . Jiaxing', flag: 'cn', date: '07.01' },
          { location: 'Zhejiang . Xitang', flag: 'cn', date: '07.01' },
          { location: 'Macao', flag: 'mo', date: '06.01' },
          { location: 'Hunan . Changsha', flag: 'cn', date: '03.01' },
          { location: 'Hunan . Zhangjiajie', flag: 'cn', date: '03.01' },
          { location: 'Hunan . Fenghuang Ancient City', flag: 'cn', date: '03.01' }
        ]
      },
      {
        year: '2013',
        details: [
          { location: 'Sichuan . Chengdu', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Chengdu Shuangliu International Airport', flag: 'cn', date: '10.01' },
          { location: 'Henan . Dengfeng', flag: 'cn', date: '10.01' },
          { location: 'Henan . Shaolin Temple', flag: 'cn', date: '10.01' },
          { location: 'Henan . Luoyang', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Mianyang', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Jiangyou', flag: 'cn', date: '10.01' },
          { location: 'Sichuan . Aba', flag: 'cn', date: '08.01' },
          { location: 'Sichuan . Jiuzhaigou', flag: 'cn', date: '08.01' },
          { location: 'Sichuan . Wenchuan', flag: 'cn', date: '08.01' },
          { location: 'Tianjin', flag: 'cn', date: '05.01' },
          { location: 'Tianjin . Tianjin Binhai International Airport', flag: 'cn', date: '05.01' },
          { location: 'Guangdong . Guangzhou', flag: 'cn', date: '04.01' },
          { location: 'Guangdong . Guangzhou Baiyun International Airport', flag: 'cn', date: '04.01' },
          { location: 'Zhejiang . Shaoxing', flag: 'cn', date: '03.01' },
          { location: 'Zhejiang . Hangzhou', flag: 'cn', date: '03.01' },
          { location: 'Zhejiang . Hangzhou Xiaoshan International Airport', flag: 'cn', date: '03.01' },
          { location: 'Hainan . Haikou', flag: 'cn', date: '03.01' },
          { location: 'Hainan . Haikou Meilan International Airport', flag: 'cn', date: '03.01' },
          { location: 'Jiangsu . Suzhou', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Kunshan', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Tongli', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Zhouzhuang', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Luzhi', flag: 'cn', date: '01.01' },
          { location: 'Jiangsu . Jinxi', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2012',
        details: [
          { location: 'Henan . Kaifeng', flag: 'cn', date: '10.01' },
          { location: 'Henan . Xuchang', flag: 'cn', date: '10.01' },
          { location: 'Shanxi . Xinzhou', flag: 'cn', date: '09.01' },
          { location: 'Shanxi . Wutai Mountain', flag: 'cn', date: '09.01' },
          { location: 'Shanxi . Datong', flag: 'cn', date: '09.01' },
          { location: 'Shanxi . Hengshan', flag: 'cn', date: '09.01' },
          { location: 'Shanxi . Hanging Temple', flag: 'cn', date: '09.01' },
          { location: 'Fujian . Xiamen', flag: 'cn', date: '08.01' },
          { location: 'Fujian . Gulangyu', flag: 'cn', date: '08.01' },
          { location: 'Fujian . Xiamen Gaoqi International Airport', flag: 'cn', date: '08.01' },
          { location: 'Hebei . Tangshan', flag: 'cn', date: '08.01' },
          { location: 'Hebei . Shijiazhuang', flag: 'cn', date: '07.01' },
          { location: 'Hebei . Shijiazhuang Zhengding International Airport', flag: 'cn', date: '07.01' },
          { location: 'Liaoning . Shenyang', flag: 'cn', date: '04.01' },
          { location: 'Liaoning . Benxi', flag: 'cn', date: '04.01' }
        ]
      },
      {
        year: '2011',
        details: [
          { location: 'Shandong . Jinan', flag: 'cn', date: '11.01' },
          { location: 'Shandong . Qingdao', flag: 'cn', date: '11.01' },
          { location: 'Shandong . Jinan Yaoqiang International Airport', flag: 'cn', date: '11.01' },
          { location: 'Henan . Zhengzhou', flag: 'cn', date: '07.01' },
          { location: 'Shanghai', flag: 'cn', date: '06.01' },
          { location: 'Shanghai . Shanghai Pudong International Airport', flag: 'cn', date: '06.01' },
          { location: 'Shanghai . Shanghai Hongqiao International Airport', flag: 'cn', date: '06.01' },
          { location: 'Guangdong . Zhuhai', flag: 'cn', date: '01.01' },
          { location: 'Guangdong . Zhuhai Sanzao International Airport', flag: 'cn', date: '01.01' },
          { location: 'Guangxi . Guilin', flag: 'cn', date: '01.01' },
          { location: 'Guangxi . Guilin Liangjiang International Airport', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2010',
        details: [
          { location: 'Xinjiang . Altay', flag: 'cn', date: '09.01' },
          { location: 'Xinjiang . Burqin', flag: 'cn', date: '09.01' },
          { location: 'Xinjiang . Kanas', flag: 'cn', date: '09.01' },
          { location: 'Xinjiang . Hemu Village', flag: 'cn', date: '09.01' },
          { location: 'Xinjiang . Karamay', flag: 'cn', date: '09.01' },
          { location: 'Xinjiang . Wuerhe', flag: 'cn', date: '09.01' },
          { location: 'Xinjiang . Urumqi', flag: 'cn', date: '08.01' },
          { location: 'Xinjiang . Urumqi Diwopu International Airport', flag: 'cn', date: '08.01' },
          { location: 'Beijing . Changping', flag: 'cn', date: '07.01' },
          { location: 'Chongqing', flag: 'cn', date: '06.01' },
          { location: 'Chongqing Jiangbei International Airport', flag: 'cn', date: '06.01' },
          { location: 'Jiangsu . Nanjing', flag: 'cn', date: '05.01' },
          { location: 'Hebei . Baoding', flag: 'cn', date: '04.01' },
          { location: 'Shandong . Binzhou', flag: 'cn', date: '03.01' },
          { location: 'Beijing . Beijing Capital International Airport', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2005',
        details: [
          { location: 'Beijing', flag: 'cn', date: '12.01' }
        ]
      }
    ]
  },
  brandSection: {
    quote: 'Personal Consultant, gathering capabilities, innovating for the new.'
  },
  projectListSection: {
    title: 'Gathering Strength, Breaking Boundaries',
    projects: [
      { name: 'Scrum Master', image: '/img/projects/001.png' },
      { name: 'PM', image: '/img/projects/002.png' },
      { name: 'TOBTOC-PD', image: '/img/projects/003.png' },
      { name: 'Archive Expert', image: '/img/projects/005.png' },
      { name: 'Web Development Engineer', image: '/img/projects/008.png' },
      { name: 'Data Development Engineer', image: '/img/projects/006.png' },
      { name: 'Desktop Development Engineer', image: '/img/projects/009.png' },
      { name: 'Data System Implementation', image: '/img/projects/011.jpg' },
      { name: 'Data Governance Implementation', image: '/img/projects/012.png' },
      { name: 'Service Governance Implementation', image: '/img/projects/013.png' },
      { name: 'General Archive Implementation', image: '/img/projects/014.png' },
      { name: 'Smart Project Implementation', image: '/img/projects/015.png' },
      { name: 'Hardware & Software System Implementation', image: '/img/projects/017.png' },
    ]
  },
  socialSection: {
    titleLine1: "What's Up",
    titleLine2: 'On Socials',
    followText: 'Follow layicr on social media',
    images: SOCIAL_IMAGES,
    socialLinks: SOCIAL_LINKS
  }
};
