import { ConcertData } from '@/types';
import { generateGalleryImages,SOCIAL_IMAGES, SOCIAL_LINKS } from './constants';

export const concertDataZHTW: ConcertData = {
  pageTitle: 'Layicr',
  seoDescription: 'layicr 個人網站',
  seoKeywords: 'layicr,lyc.la,旅行,品牌,個人網站',
  seoAuthor: 'Layicr',
  seoUrl: 'http://hi.lyc.la',
  profileLabel: '我的名字是:',
  siteName: 'Layicr',
  roles: ['宣言？   xuān yán？', '行者無疆', '個性顧問', 'iblog'],
  blogUrl: 'http://b.lyc.la',
  arrowUpLabel: '向上',
  arrowDownLabel: '向下',
  sectionSpacing: {
    lines: [
      '說真的，',
      '似有若無的坦蕩，強迫我們成長。',
      '一抹藍，',
      '路上的腳印，永遠不會停歇。'
    ],
    highlightIndex: 3
  },
  travelerSection: {
    lines: [
      '行者無疆',
      '探索為途',
      '初心為引'
    ]
  },
  sphereGallery: {
    images: generateGalleryImages()
  },
  yearCitySection: {
    headers: {
      year: '年份',
      city: '城市',
      location: '地點',
      date: '日期'
    },
    roundHeader: '序號',
    showMoreText: '更多',
    yearsFirstHalf: [
      {
        year: '2026',
        details: [
          { location: '廣東 . 清遠', flag: 'cn', date: '01.01' },
          { location: '廣東 . 清遠 . 李榮浩演唱會', flag: 'cn', date: '01.01' },
          { location: '江西 . 南昌', flag: 'cn', date: '01.01' },
          { location: '江西 . 南昌 . 伍佰演唱會', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2025',
        details: [
          { location: '廣西 . 南寧 . 周傳雄演唱會', flag: 'cn', date: '11.01' },
          { location: '廣西 . 南寧 . 鄧紫棋演唱會', flag: 'cn', date: '11.01' },
          { location: '廣西 . 柳州', flag: 'cn', date: '06.01' },
          { location: '廣西 . 柳江', flag: 'cn', date: '06.01' },
          { location: '廣東 . 深圳', flag: 'cn', date: '05.01' },
          { location: '廣東 . 深圳 . 孫燕姿演唱會', flag: 'cn', date: '05.01' }
        ]
      },
      {
        year: '2024',
        details: [
          { location: '廣東 . 佛山', flag: 'cn', date: '12.01' },
          { location: '廣東 . 佛山 . 任賢齊演唱會', flag: 'cn', date: '12.01' },
          { location: '廣東 . 江門', flag: 'cn', date: '06.01' }
        ]
      }
    ],
    yearsSecondHalf: [
      {
        year: '2023',
        details: [
          { location: '江蘇 . 無錫', flag: 'cn', date: '10.01' }
        ]
      },
      {
        year: '2022',
        details: [
          { location: '浙江 . 湖州', flag: 'cn', date: '02.01' }
        ]
      },
      {
        year: '2021',
        details: [
          { location: '福建 . 福州', flag: 'cn', date: '12.01' },
          { location: '福建 . 福州長樂國際機場', flag: 'cn', date: '12.01' }
        ]
      },
      {
        year: '2020',
        details: [
          { location: '浙江 . 寧波', flag: 'cn', date: '12.01' },
          { location: '福建 . 晉江', flag: 'cn', date: '12.01' }
        ]
      },
      {
        year: '2019',
        details: [
          { location: '廣西 . 南寧', flag: 'cn', date: '08.01' },
          { location: '廣西 . 邕江', flag: 'cn', date: '08.01' },
          { location: '廣西 . 南寧吳圩國際機場', flag: 'cn', date: '08.01' },
          { location: '山西 . 晉中', flag: 'cn', date: '03.01' },
          { location: '山西 . 平遙古城', flag: 'cn', date: '03.01' }
        ]
      },
      {
        year: '2018',
        details: [
           { location: '山西 . 太原', flag: 'cn', date: '12.01' },
           { location: '山西 . 太原武宿國際機場', flag: 'cn', date: '12.01' },
           { location: '安徽 . 合肥', flag: 'cn', date: '01.01' },
           { location: '安徽 . 合肥新橋國際機場', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2017',
        details: [
          { location: '臺灣 . 臺北', flag: 'cn', date: '09.01' },
          { location: '臺灣 . 新北', flag: 'cn', date: '09.01' },
          { location: '臺灣 . 桃園', flag: 'cn', date: '09.01' },
          { location: '臺灣 . 臺中', flag: 'cn', date: '09.01' },
          { location: '臺灣 . 臺南', flag: 'cn', date: '09.01' },
          { location: '臺灣 . 高雄', flag: 'cn', date: '09.01' },
          { location: '臺灣 . 屏東', flag: 'cn', date: '09.01' },
          { location: '臺灣 . 墾丁', flag: 'cn', date: '09.01' },
          { location: '臺灣 . 臺東', flag: 'cn', date: '09.01' },
          { location: '臺灣 . 花蓮', flag: 'cn', date: '09.01' },
          { location: '臺灣 . 臺北桃園國際機場', flag: 'cn', date: '09.01' },
          { location: '內蒙古 . 呼和浩特', flag: 'cn', date: '08.01' },
          { location: '寧夏 . 銀川', flag: 'cn', date: '08.01' },
          { location: '寧夏 . 中衛', flag: 'cn', date: '08.01' }
        ]
      },
      {
        year: '2016',
        details: [
          { location: '北京 . 古北水鎮', flag: 'cn', date: '12.01' },
          { location: '北京 . 鳥巢 . 陳奕迅演唱會', flag: 'cn', date: '10.01' },
          { location: '陝西 . 西安', flag: 'cn', date: '09.01' },
          { location: '陝西 . 西安 . 五月天演唱會', flag: 'cn', date: '09.01' },
          { location: '河北 . 張家口', flag: 'cn', date: '08.01' },
          { location: '河北 . 天路草原', flag: 'cn', date: '08.01' },
          { location: '北京 . 延慶', flag: 'cn', date: '08.01' },
          { location: '泰國 . 曼谷', flag: 'th', date: '01.01' },
          { location: '泰國 . 芭堤雅', flag: 'th', date: '01.01'},
          { location: '泰國 . 素萬那普國際機場', flag: 'th', date: '01.01' }
        ]
      },
      {
        year: '2015',
        details: [
          { location: '福建 . 泉州', flag: 'cn', date: '12.01' },
          { location: '福建 . 石獅', flag: 'cn', date: '12.01' },
          { location: '福建 . 泉州晉江機場', flag: 'cn', date: '12.01' },
          { location: '青海 . 西寧', flag: 'cn', date: '07.01' },
          { location: '青海 . 茶卡鹽湖', flag: 'cn', date: '07.01' },
          { location: '青海 . 青海湖', flag: 'cn', date: '07.01' },
          { location: '青海 . 門源', flag: 'cn', date: '07.01' },
          { location: '西藏 . 拉薩', flag: 'cn', date: '07.01' },
          { location: '西藏 . 林芝', flag: 'cn', date: '07.01' },
          { location: '西藏 . 唐古拉山口', flag: 'cn', date: '07.01' },
          { location: '西藏 . 巴松措', flag: 'cn', date: '07.01' },
          { location: '西藏 . 山南', flag: 'cn', date: '07.01' },
          { location: '西藏 . 拉姆拉錯', flag: 'cn', date: '07.01' },
          { location: '西藏 . 雅魯藏布江', flag: 'cn', date: '07.01' },
          { location: '西藏 . 羊卓雍措', flag: 'cn', date: '07.01' },
          { location: '韓國 . 首爾', flag: 'kr', date: '04.01' },
          { location: '韓國 . 濟州島', flag: 'kr', date: '04.01' },
          { location: '韓國 . 仁川國際機場', flag: 'kr', date: '04.01' },
          { location: '韓國 . 濟州國際機場', flag: 'kr', date: '04.01' }
        ]
      },
      {
        year: '2014',
        details: [
          { location: '浙江 . 嘉興', flag: 'cn', date: '07.01' },
          { location: '浙江 . 西塘', flag: 'cn', date: '07.01' },
          { location: '澳門', flag: 'mo', date: '06.01' },
          { location: '湖南 . 長沙', flag: 'cn', date: '03.01' },
          { location: '湖南 . 張家界', flag: 'cn', date: '03.01' },
          { location: '湖南 . 鳳凰古城', flag: 'cn', date: '03.01' }
        ]
      },
      {
        year: '2013',
        details: [
          { location: '四川 . 成都', flag: 'cn', date: '10.01' },
          { location: '四川 . 成都雙流國際機場', flag: 'cn', date: '10.01' }, 
          { location: '河南 . 登封', flag: 'cn', date: '10.01' },
          { location: '河南 . 少林寺', flag: 'cn', date: '10.01' },
          { location: '河南 . 洛陽', flag: 'cn', date: '10.01' },
          { location: '四川 . 綿陽', flag: 'cn', date: '10.01' },
          { location: '四川 . 江油', flag: 'cn', date: '10.01' },
          { location: '四川 . 阿壩', flag: 'cn', date: '08.01' },
          { location: '四川 . 九寨溝', flag: 'cn', date: '08.01' },
          { location: '四川 . 汶川', flag: 'cn', date: '08.01' },
          { location: '天津', flag: 'cn', date: '05.01' },
          { location: '天津 . 天津濱海國際機場', flag: 'cn', date: '05.01' },
          { location: '廣東 . 廣州', flag: 'cn', date: '04.01' },
          { location: '廣東 . 廣州白雲國際機場', flag: 'cn', date: '04.01' },
          { location: '浙江 . 紹興', flag: 'cn', date: '03.01' },
          { location: '浙江 . 杭州', flag: 'cn', date: '03.01' },
          { location: '浙江 . 杭州蕭山國際機場', flag: 'cn', date: '03.01' },
          { location: '海南 . 海口', flag: 'cn', date: '03.01' },
          { location: '海南 . 海口美蘭國際機場', flag: 'cn', date: '03.01' },
          { location: '江蘇 . 蘇州', flag: 'cn', date: '01.01' },
          { location: '江蘇 . 昆山', flag: 'cn', date: '01.01' },
          { location: '江蘇 . 同里', flag: 'cn', date: '01.01' },
          { location: '江蘇 . 周莊', flag: 'cn', date: '01.01' },
          { location: '江蘇 . 甪直', flag: 'cn', date: '01.01' },
          { location: '江蘇 . 錦溪', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2012',
        details: [
          { location: '河南 . 開封', flag: 'cn', date: '10.01' },
          { location: '河南 . 許昌', flag: 'cn', date: '10.01' },
          { location: '山西 . 忻州', flag: 'cn', date: '09.01' },
          { location: '山西 . 五臺山', flag: 'cn', date: '09.01' },
          { location: '山西 . 大同', flag: 'cn', date: '09.01' },
          { location: '山西 . 恆山', flag: 'cn', date: '09.01' },
          { location: '山西 . 懸空寺', flag: 'cn', date: '09.01' },
          { location: '福建 . 廈門', flag: 'cn', date: '08.01' },
          { location: '福建 . 鼓浪嶼', flag: 'cn', date: '08.01' },
          { location: '福建 . 廈門高崎國際機場', flag: 'cn', date: '08.01' },
          { location: '河北 . 唐山', flag: 'cn', date: '08.01' },
          { location: '河北 . 石家莊', flag: 'cn', date: '07.01' },
          { location: '河北 . 石家莊正定國際機場', flag: 'cn', date: '07.01' },
          { location: '遼寧 . 瀋陽', flag: 'cn', date: '04.01' },
          { location: '遼寧 . 本溪', flag: 'cn', date: '04.01' }
        ]
      },
      {
        year: '2011',
        details: [
          { location: '山東 . 濟南', flag: 'cn', date: '11.01' },
          { location: '山東 . 青島', flag: 'cn', date: '11.01' },
          { location: '山東 . 濟南遙牆國際機場', flag: 'cn', date: '11.01' },
          { location: '河南 . 鄭州', flag: 'cn', date: '07.01' },
          { location: '上海', flag: 'cn', date: '06.01' },
          { location: '上海 . 上海浦東國際機場', flag: 'cn', date: '06.01' },
          { location: '上海 . 上海虹橋國際機場', flag: 'cn', date: '06.01' },
          { location: '廣東 . 珠海', flag: 'cn', date: '01.01' },
          { location: '廣東 . 珠海三灶國際機場', flag: 'cn', date: '01.01' },
          { location: '廣西 . 桂林', flag: 'cn', date: '01.01' },
          { location: '廣西 . 桂林兩江國際機場', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2010',
        details: [
          { location: '新疆 . 阿勒泰', flag: 'cn', date: '09.01' },
          { location: '新疆 . 布爾津', flag: 'cn', date: '09.01' },
          { location: '新疆 . 喀納斯', flag: 'cn', date: '09.01' },
          { location: '新疆 . 禾木村', flag: 'cn', date: '09.01' },
          { location: '新疆 . 克拉瑪依', flag: 'cn', date: '09.01' },
          { location: '新疆 . 烏爾禾', flag: 'cn', date: '09.01' },
          { location: '新疆 . 烏魯木齊', flag: 'cn', date: '08.01' },
          { location: '新疆 . 烏魯木齊地窩堡國際機場', flag: 'cn', date: '08.01' },
          { location: '北京 . 昌平', flag: 'cn', date: '07.01' },
          { location: '重慶', flag: 'cn', date: '06.01' },
          { location: '重慶江北國際機場', flag: 'cn', date: '06.01' },
          { location: '江蘇 . 南京', flag: 'cn', date: '05.01' },
          { location: '河北 . 保定', flag: 'cn', date: '04.01' },
          { location: '山東 . 濱州', flag: 'cn', date: '03.01' },
          { location: '北京 . 北京首都國際機場', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2005',
        details: [
          { location: '北京', flag: 'cn', date: '12.01' }
        ]
      }
    ]
  },
  brandSection: {
    quote: '個性顧問，匯聚為能，革新為新。'
  },
  projectListSection: {
    title: '在聚能 在破界',
    projects: [
      { name: 'Scrum Master', image: '/img/projects/001.png' },
      { name: 'PM', image: '/img/projects/002.png' },
      { name: 'TOBTOC-PD', image: '/img/projects/003.png' },
      { name: '檔案專家', image: '/img/projects/005.png' },
      { name: 'WEB開發工程師', image: '/img/projects/008.png' },
      { name: '數據開發工程師', image: '/img/projects/006.png' },
      { name: '桌面開發工程師', image: '/img/projects/009.png' },
      { name: '數據類系統實施', image: '/img/projects/011.jpg' },
      { name: '數據治理實施', image: '/img/projects/012.png' },
      { name: '服務治理實施', image: '/img/projects/013.png' },
      { name: '通用檔案實施', image: '/img/projects/014.png' },
      { name: '智慧項目實施', image: '/img/projects/015.png' },
      { name: '軟硬體系統實施', image: '/img/projects/017.png' },
    ]
  },
  socialSection: {
    titleLine1: "最新動態",
    titleLine2: '社交媒體',
    followText: '請在社交媒體上關注 layicr',
    images: SOCIAL_IMAGES,
    socialLinks: SOCIAL_LINKS
  }
};
