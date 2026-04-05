import { ConcertData } from '@/types';
import { generateGalleryImages,SOCIAL_IMAGES, SOCIAL_LINKS } from './constants';

export const concertDataZHCN: ConcertData = {
  pageTitle: 'Layicr',
  seoDescription: 'layicr 个人网站',
  seoKeywords: 'layicr,lyc.la,旅行,品牌,个人网站',
  seoAuthor: 'Layicr',
  seoUrl: 'http://hi.lyc.la',
  profileLabel: '我的名字是:',
  siteName: 'Layicr',
  roles: ['宣言？   xuān yán？', '行者无疆', '个性顾问', 'iblog'],
  blogUrl: 'http://b.lyc.la',
  arrowUpLabel: '向上',
  arrowDownLabel: '向下',
  sectionSpacing: {
    lines: [
      '说真的，',
      '似有若无的坦荡，强迫我们成长。',
      '一抹蓝，',
      '路上的脚印，永远不会停歇。'
    ],
    highlightIndex: 3
  },
  travelerSection: {
    lines: [
      '行者无疆',
      '探索为途',
      '初心为引'
    ]
  },
  sphereGallery: {
    images: generateGalleryImages()
  },
  yearCitySection: {
    headers: {
      year: '年份',
      city: '城市',
      location: '地点',
      date: '日期'
    },
    roundHeader: '序号',
    showMoreText: '更多',
    yearsFirstHalf: [
      {
        year: '2026',
        details: [
          { location: '广东 . 清远', flag: 'cn', date: '01.01' },
          { location: '广东 . 清远 . 李荣浩演唱会', flag: 'cn', date: '01.01' },
          { location: '江西 . 南昌', flag: 'cn', date: '01.01' },
          { location: '江西 . 南昌 . 伍佰演唱会', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2025',
        details: [
          { location: '广西 . 南宁 . 周传雄演唱会', flag: 'cn', date: '11.01' },
          { location: '广西 . 南宁 . 邓紫棋演唱会', flag: 'cn', date: '11.01' },
          { location: '广西 . 柳州', flag: 'cn', date: '06.01' },
          { location: '广西 . 柳江', flag: 'cn', date: '06.01' },
          { location: '广东 . 深圳', flag: 'cn', date: '05.01' },
          { location: '广东 . 深圳 . 孙燕姿演唱会', flag: 'cn', date: '05.01' }
        ]
      },
      {
        year: '2024',
        details: [
          { location: '广东 . 佛山', flag: 'cn', date: '12.01' },
          { location: '广东 . 佛山 . 任贤齐演唱会', flag: 'cn', date: '12.01' },
          { location: '广东 . 江门', flag: 'cn', date: '06.01' }
        ]
      }
    ],
    yearsSecondHalf: [
      {
        year: '2023',
        details: [
          { location: '江苏 . 无锡', flag: 'cn', date: '10.01' }
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
          { location: '福建 . 福州长乐国际机场', flag: 'cn', date: '12.01' }
        ]
      },
      {
        year: '2020',
        details: [
          { location: '浙江 . 宁波', flag: 'cn', date: '12.01' },
          { location: '福建 . 晋江', flag: 'cn', date: '12.01' }
        ]
      },
      {
        year: '2019',
        details: [
          { location: '广西 . 南宁', flag: 'cn', date: '08.01' },
          { location: '广西 . 邕江', flag: 'cn', date: '08.01' },
          { location: '广西 . 南宁吴圩国际机场', flag: 'cn', date: '08.01' },
          { location: '山西 . 晋中', flag: 'cn', date: '03.01' },
          { location: '山西 . 平遥古城', flag: 'cn', date: '03.01' }
        ]
      },
      {
        year: '2018',
        details: [
           { location: '山西 . 太原', flag: 'cn', date: '12.01' },
           { location: '山西 . 太原武宿国际机场', flag: 'cn', date: '12.01' },
           { location: '安徽 . 合肥', flag: 'cn', date: '01.01' },
           { location: '安徽 . 合肥新桥国际机场', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2017',
        details: [
          { location: '台湾 . 台北', flag: 'cn', date: '09.01' },
          { location: '台湾 . 新北', flag: 'cn', date: '09.01' },
          { location: '台湾 . 桃园', flag: 'cn', date: '09.01' },
          { location: '台湾 . 台中', flag: 'cn', date: '09.01' },
          { location: '台湾 . 台南', flag: 'cn', date: '09.01' },
          { location: '台湾 . 高雄', flag: 'cn', date: '09.01' },
          { location: '台湾 . 屏东', flag: 'cn', date: '09.01' },
          { location: '台湾 . 垦丁', flag: 'cn', date: '09.01' },
          { location: '台湾 . 台东', flag: 'cn', date: '09.01' },
          { location: '台湾 . 花莲', flag: 'cn', date: '09.01' },
          { location: '台湾 . 台北桃园国际机场', flag: 'cn', date: '09.01' },
          { location: '内蒙古 . 呼和浩特', flag: 'cn', date: '08.01' },
          { location: '宁夏 . 银川', flag: 'cn', date: '08.01' },
          { location: '宁夏 . 中卫', flag: 'cn', date: '08.01' }
        ]
      },
      {
        year: '2016',
        details: [
          { location: '北京 . 古北水镇', flag: 'cn', date: '12.01' },
          { location: '北京 . 鸟巢 . 陈奕迅演唱会', flag: 'cn', date: '10.01' },
          { location: '陕西 . 西安', flag: 'cn', date: '09.01' },
          { location: '陕西 . 西安 . 五月天演唱会', flag: 'cn', date: '09.01' },
          { location: '河北 . 张家口', flag: 'cn', date: '08.01' },
          { location: '河北 . 天路草原', flag: 'cn', date: '08.01' },
          { location: '北京 . 延庆', flag: 'cn', date: '08.01' },
          { location: '泰国 . 曼谷', flag: 'th', date: '01.01' },
          { location: '泰国 . 芭堤雅', flag: 'th', date: '01.01'},
          { location: '泰国 . 素万那普国际机场', flag: 'th', date: '01.01' }
        ]
      },
      {
        year: '2015',
        details: [
          { location: '福建 . 泉州', flag: 'cn', date: '12.01' },
          { location: '福建 . 石狮', flag: 'cn', date: '12.01' },
          { location: '福建 . 泉州晋江机场', flag: 'cn', date: '12.01' },
          { location: '青海 . 西宁', flag: 'cn', date: '07.01' },
          { location: '青海 . 茶卡盐湖', flag: 'cn', date: '07.01' },
          { location: '青海 . 青海湖', flag: 'cn', date: '07.01' },
          { location: '青海 . 门源', flag: 'cn', date: '07.01' },
          { location: '西藏 . 拉萨', flag: 'cn', date: '07.01' },
          { location: '西藏 . 林芝', flag: 'cn', date: '07.01' },
          { location: '西藏 . 唐古拉山口', flag: 'cn', date: '07.01' },
          { location: '西藏 . 巴松措', flag: 'cn', date: '07.01' },
          { location: '西藏 . 山南', flag: 'cn', date: '07.01' },
          { location: '西藏 . 拉姆拉错', flag: 'cn', date: '07.01' },
          { location: '西藏 . 雅鲁藏布江', flag: 'cn', date: '07.01' },
          { location: '西藏 . 羊卓雍措', flag: 'cn', date: '07.01' },
          { location: '韩国 . 首尔', flag: 'kr', date: '04.01' },
          { location: '韩国 . 济州岛', flag: 'kr', date: '04.01' },
          { location: '韩国 . 仁川国际机场', flag: 'kr', date: '04.01' },
          { location: '韩国 . 济州国际机场', flag: 'kr', date: '04.01' }
        ]
      },
      {
        year: '2014',
        details: [
          { location: '浙江 . 嘉兴', flag: 'cn', date: '07.01' },
          { location: '浙江 . 西塘', flag: 'cn', date: '07.01' },
          { location: '澳门', flag: 'mo', date: '06.01' },
          { location: '湖南 . 长沙', flag: 'cn', date: '03.01' },
          { location: '湖南 . 张家界', flag: 'cn', date: '03.01' },
          { location: '湖南 . 凤凰古城', flag: 'cn', date: '03.01' }
        ]
      },
      {
        year: '2013',
        details: [
          { location: '四川 . 成都', flag: 'cn', date: '10.01' },
          { location: '四川 . 成都双流国际机场', flag: 'cn', date: '10.01' }, 
          { location: '河南 . 登封', flag: 'cn', date: '10.01' },
          { location: '河南 . 少林寺', flag: 'cn', date: '10.01' },
          { location: '河南 . 洛阳', flag: 'cn', date: '10.01' },
          { location: '四川 . 绵阳', flag: 'cn', date: '10.01' },
          { location: '四川 . 江油', flag: 'cn', date: '10.01' },
          { location: '四川 . 阿坝', flag: 'cn', date: '08.01' },
          { location: '四川 . 九寨沟', flag: 'cn', date: '08.01' },
          { location: '四川 . 汶川', flag: 'cn', date: '08.01' },
          { location: '天津', flag: 'cn', date: '05.01' },
          { location: '天津 . 天津滨海国际机场', flag: 'cn', date: '05.01' },
          { location: '广东 . 广州', flag: 'cn', date: '04.01' },
          { location: '广东 . 广州白云国际机场', flag: 'cn', date: '04.01' },
          { location: '浙江 . 绍兴', flag: 'cn', date: '03.01' },
          { location: '浙江 . 杭州', flag: 'cn', date: '03.01' },
          { location: '浙江 . 杭州萧山国际机场', flag: 'cn', date: '03.01' },
          { location: '海南 . 海口', flag: 'cn', date: '03.01' },
          { location: '海南 . 海口美兰国际机场', flag: 'cn', date: '03.01' },
          { location: '江苏 . 苏州', flag: 'cn', date: '01.01' },
          { location: '江苏 . 昆山', flag: 'cn', date: '01.01' },
          { location: '江苏 . 同里', flag: 'cn', date: '01.01' },
          { location: '江苏 . 周庄', flag: 'cn', date: '01.01' },
          { location: '江苏 . 甪直', flag: 'cn', date: '01.01' },
          { location: '江苏 . 锦溪', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2012',
        details: [
          { location: '河南 . 开封', flag: 'cn', date: '10.01' },
          { location: '河南 . 许昌', flag: 'cn', date: '10.01' },
          { location: '山西 . 忻州', flag: 'cn', date: '09.01' },
          { location: '山西 . 五台山', flag: 'cn', date: '09.01' },
          { location: '山西 . 大同', flag: 'cn', date: '09.01' },
          { location: '山西 . 恒山', flag: 'cn', date: '09.01' },
          { location: '山西 . 悬空寺', flag: 'cn', date: '09.01' },
          { location: '福建 . 厦门', flag: 'cn', date: '08.01' },
          { location: '福建 . 鼓浪屿', flag: 'cn', date: '08.01' },
          { location: '福建 . 厦门高崎国际机场', flag: 'cn', date: '08.01' },
          { location: '河北 . 唐山', flag: 'cn', date: '08.01' },
          { location: '河北 . 石家庄', flag: 'cn', date: '07.01' },
          { location: '河北 . 石家庄正定国际机场', flag: 'cn', date: '07.01' },
          { location: '辽宁 . 沈阳', flag: 'cn', date: '04.01' },
          { location: '辽宁 . 本溪', flag: 'cn', date: '04.01' }
        ]
      },
      {
        year: '2011',
        details: [
          { location: '山东 . 济南', flag: 'cn', date: '11.01' },
          { location: '山东 . 青岛', flag: 'cn', date: '11.01' },
          { location: '山东 . 济南遥墙国际机场', flag: 'cn', date: '11.01' },
          { location: '河南 . 郑州', flag: 'cn', date: '07.01' },
          { location: '上海', flag: 'cn', date: '06.01' },
          { location: '上海 . 上海浦东国际机场', flag: 'cn', date: '06.01' },
          { location: '上海 . 上海虹桥国际机场', flag: 'cn', date: '06.01' },
          { location: '广东 . 珠海', flag: 'cn', date: '01.01' },
          { location: '广东 . 珠海三灶国际机场', flag: 'cn', date: '01.01' },
          { location: '广西 . 桂林', flag: 'cn', date: '01.01' },
          { location: '广西 . 桂林两江国际机场', flag: 'cn', date: '01.01' }
        ]
      },
      {
        year: '2010',
        details: [
          { location: '新疆 . 阿勒泰', flag: 'cn', date: '09.01' },
          { location: '新疆 . 布尔津', flag: 'cn', date: '09.01' },
          { location: '新疆 . 喀纳斯', flag: 'cn', date: '09.01' },
          { location: '新疆 . 禾木村', flag: 'cn', date: '09.01' },
          { location: '新疆 . 克拉玛依', flag: 'cn', date: '09.01' },
          { location: '新疆 . 乌尔禾', flag: 'cn', date: '09.01' },
          { location: '新疆 . 乌鲁木齐', flag: 'cn', date: '08.01' },
          { location: '新疆 . 乌鲁木齐地窝堡国际机场', flag: 'cn', date: '08.01' },
          { location: '北京 . 昌平', flag: 'cn', date: '07.01' },
          { location: '重庆', flag: 'cn', date: '06.01' },
          { location: '重庆江北国际机场', flag: 'cn', date: '06.01' },
          { location: '江苏 . 南京', flag: 'cn', date: '05.01' },
          { location: '河北 . 保定', flag: 'cn', date: '04.01' },
          { location: '山东 . 滨州', flag: 'cn', date: '03.01' },
          { location: '北京 . 北京首都国际机场', flag: 'cn', date: '01.01' }
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
    quote: '个性顾问，汇聚为能，革新为新。'
  },
  projectListSection: {
    title: '在聚能 在破界',
    projects: [
      { name: 'Scrum Master', image: '/img/projects/001.png' },
      { name: 'PM', image: '/img/projects/002.png' },
      { name: 'TOBTOC-PD', image: '/img/projects/003.png' },
      { name: '档案专家', image: '/img/projects/005.png' },
      { name: 'WEB开发工程师', image: '/img/projects/008.png' },
      { name: '数据开发工程师', image: '/img/projects/006.png' },
      { name: '桌面开发工程师', image: '/img/projects/009.png' },
      { name: '数据类系统实施', image: '/img/projects/011.jpg' },
      { name: '数据治理实施', image: '/img/projects/012.png' },
      { name: '服务治理实施', image: '/img/projects/013.png' },
      { name: '通用档案实施', image: '/img/projects/014.png' },
      { name: '智慧项目实施', image: '/img/projects/015.png' },
      { name: '软硬件系统实施', image: '/img/projects/017.png' },
    ]
  },
  socialSection: {
    titleLine1: "最新动态",
    titleLine2: '社交媒体',
    followText: '请在社交媒体上关注 layicr',
    images: SOCIAL_IMAGES,
    socialLinks: SOCIAL_LINKS
  }
};
