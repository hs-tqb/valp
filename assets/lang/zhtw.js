
export default {
  lang:'zh-tw',
  langs: [
    {name:'English', type:'en'},
    {name:'中文', type:"zh-tw"},
    {name:'Türkçe', type:'tr'},
    {name:'日本語', type:'jp'},
  ],
  navs: {
    items: [
      // {name:'兌換VPP', link:'/transfer?lang=zh-tw'},
      {sign:'presale',name:'預售', external:true, link:"http://valpromise.mikecrm.com/korDtHX"},
      {anchor:'highlights', name:'產品', inFooter:true}, 
      {anchor:'team', name:'團隊', inFooter:true}, 
      {anchor:'investor', name:'顧問', inFooter:true}, 
      {anchor:'contact', name:'聯繫我們', inFooter:true}, 
    ]
  },
  slogan:'分布式價值承諾協議',
  whitePaper:{
    link:'/whitepaper/ValPromise_WhitePaper_cn_v1.3.8.pdf',
    button:'白皮書'
  },
  candyHandingOut: {
    link:'/download?lang=zh-tw',
    text:'APP 下载'
  },
  community: {
    button:'加入电报群'
  },
  download: {
    title:'ValPromise应用下载',
    desc:'ValPromise (价值承诺协议）是人人都可创建和发行自己金融合约（衍生品）的平台。',
    platform:'安卓版APP:',
    img:require('~/assets/img/download/qrcode.png'),
    link:{url:'http://download.valp.io/ValPromise_V1.1.0.apk', 'text':'扫码或点击下载'}
  },
  exchange: {
    title:'兑换 VPP',
    desc:'用以太坊钱包扫码转账或将ETH转向地址：<a target="_blank" href="https://etherscan.io/address/0x6f89544bc460f15315086f411b9c1fe5c8cfb1f1" class="address">0x6f89544bc460f15315086f411b9c1fe5c8cfb1f1</a>，智能合约将自动按1:52000兑换率将VPP转到您钱包，请稍后登录钱包查看VPP余额。转账前务必看下图中的说明，否则交易可能失败。如对交易有疑问请联系: <a href="tel:0755-33530815">0755-33530815</a>',
    img: require('~/assets/img/exchange/qrcode.png'),
    guide:[
      require('~/assets/img/exchange/e1_zh.jpg'),
      require('~/assets/img/exchange/e2_zh.jpg'),
    ]
  },
  news: {
    items: [
      { 
        link:'/news/1', img:'http://otydyl8j5.bkt.clouddn.com/valp/news/1/0-cn.png?imageslim',
        title:'ValPromise 受邀参加深圳区块链应用峰会',
        paras:[
          { type:'p', content:'2月5日在深圳南山区科技寺创业孵化器举办的“看区块链应用的未来”的应用峰会上，ValPromise作为被邀嘉宾为深圳的区块链爱好者和项目粉丝们，介绍了项目和最新进展。' },
          { type:'p', content:'会上，ValPromise 创始人向涛详细阐述了这一革命性项目的愿景，并通过邀请台下观众游戏的方式生动的展示了ValPromise的业务原理，富有感染力的演讲和扎实的业务进展，收获了台下观众的掌声。' },
          { type:'p', content:'会后向涛和感兴趣的投资者，进行了更为深入的讨论。其中不乏在实体行业中颇有实力的经济大佬，他们希望ValPromise开足马力，快速上线，一起开创区块链的未来。' },
          { type:'p', content:'我们一定不辱使命，快马加鞭，让大家更早地享受到区块链的红利。' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/01.jpeg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/02.jpeg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/03.jpeg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/04.jpeg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/05.jpeg?imageslim' },
          { type:'p', content:'更多项目信息，请大家关注我们的微信公众号：' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/icons/wc-qrcode.png?imageslim' },
        ]
      },
      { 
        link:'/news/2', img:'http://otydyl8j5.bkt.clouddn.com/valp/news/2/0-cn.png?imageslim',
        title:'向涛在香港区块链峰会上发表演讲',
        paras:[
          { type:'p', content:'2月8日，ValPromise的创始人向涛在“数字货币世界-香港站”峰会上发表了他对于区块链和数字货币看法的公开演讲。'},
          { type:'p', content:'因他独到而深刻的观点，被与会者称为“Smart Boy”。向涛介绍了风险管理领域的巨大市场和此行业所面临的困难。同时，他阐述了利用区块链技术解决存在问题的优越性和前瞻性。简言之，ValPromise，作为分布式交易合约发布和交易系统，能解决全世界的跨区域和跨区域风险管理（保险、期货、期权合同问题和交易、预测服务等）问题。' },
          { type:'p', content:'这是ValPromise面向海外市场的首秀，同时也是ValPromise开启面向海外运营的开始。很多国外投资者对ValPromise产生了浓厚的兴趣。在Q&A环节，他们提出了许多好问题，向涛一一作了解答。' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/2/08.jpg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/2/01.jpg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/2/02.jpg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/2/03.jpg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/2/04.jpg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/2/05.jpg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/2/06.jpg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/2/07.jpg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/2/09.jpg?imageslim' },
          { type:'p', content:'期待下一次ValPromise的精彩之旅！更多项目信息，请大家关注我们的微信公众号：' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/icons/wc-qrcode.png?imageslim' },
        ]
      },
      {
        link:'/news/3', 
        img:'http://otydyl8j5.bkt.clouddn.com/valp/news/3-temp/0-cn.png?imageslim',
        title:'ValPromise 受邀参加深圳区块链沙龙路演',
        paras:[
          { type:'p', content:'3月1日，在深圳举办的“区块链行业沙龙”吸引了百余位区块链的从业者和爱好者前来分享，交流最新的区块链行业信息。' },
          { type:'p', content:'各方参与人员思维的碰撞使得活动现场气氛十分活跃，从区块链入门到掌握技巧，从区块链应用到投资，从行业趋势到项目分析，从技术解读到风险规避，到场的听众都收获颇丰。ValPromise作为行业特邀项目方，在沙龙上为来自各行业的区块链爱好者进行了项目的路演，引发了现场听众极大的热情和强烈的关注，ValPromise狗年首次路演，可谓火爆上线~' },
          { type:'p', content:'作为主要嘉宾的ValPromise也在1个小时的分享中， 为在场的听众普及了ValPromise-价值承诺协议的工作机制、技术路线、经济模型、明星产品——天气宝等。获得了在场投资者极大的兴趣，与一众区块链爱好者及对ValPromise感兴趣的听众进行了深入的交流。' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/3-temp/1.png?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/3-temp/2.png?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/3-temp/3.png?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/3-temp/4.png?imageslim' },
          { type:'p', content:'期待下一次ValPromise的精彩之旅！更多项目信息，请大家关注我们的微信公众号：' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/icons/wc-qrcode.png?imageslim' },
        ]
      },
      {
        link:'/news/4', 
        img:'http://otydyl8j5.bkt.clouddn.com/valp/news/4/0-cn.png?imageslim',
        title:'火星峰会2.0圆满结束，ValPromise领跑区块链+金融',
        paras:[
          { type:'p', content:'3月17日，在深圳举办的火星峰会沙龙：区块链打造无门槛金融吸引了许多区块链、金融业的从业者和爱好者前来交流。ValPromsie创始人向涛作为主讲嘉宾，为在场听众以及观看直播的用户们带来了妙趣横生的分享。' },
          { type:'p', content:'活动上，向涛表示ValPromise团队希望通过区块链技术，构建出一个去中介化的金融产品发行体系，直接打通金融产品的设计者和使用者，降低因为大量中介存在而产生的成本。' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/4/1.jpg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/4/2.jpg?imageslim' },
          { type:'p', content:'谈到本次峰会的主题之一——区块链时，他认为区块链是一种由多方共同维护，以块链结构存储数据，使用密码学保证传输和访问安全，能够实现数据一致存储，无法篡改，无法抵赖的技术体系，这种技术为世界各地人们带来了无限的遐想空间。<br>向涛干货满满的演讲不仅获得了观众的肯定，也激起了全场对区块链+金融的热烈讨论。' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/4/3.jpg?imageslim' },
          { type:'p', content:'为了感谢今天所有到场的区块链与金融业的从业者们，向涛也为他们每人赠送了小礼物——<b>50VPP</b>，可谓诚意满满。' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/4/4.jpg?imageslim' },
          { type:'p', content:'期待下一次ValPromise的精彩之旅！更多项目信息，请大家关注我们的微信公众号：' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/icons/wc-qrcode.png?imageslim' },
        ]
      },
      {
        link:'/news/5', 
        img:'http://otydyl8j5.bkt.clouddn.com/valp/news/5/0-cn.png?imageslim',
        title:'ValPromise粤港澳大湾区区块链技术峰会路演圆满结束',
        paras:[
          { type:'p', content:'3月20日，ValPromise参加了在深圳举办的第二届粤港澳大湾区区块链技术峰会。此次峰会的主题为“区块链未来技术引领产业创新”' },
          { type:'p', content:'ValPromise基于区块链的价值承诺交易移动平台在此次峰会上也获得了许多关注。峰会中，ValPromise的宣传台前人声鼎沸，他们对ValPromise即将构建的一个去中介化的金融产品发行体系和引入“天气宝”的天气保障合约这一强创新性的举措表示了出浓厚的兴趣。' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/5/1.jpg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/5/2.jpg?imageslim' },
          { type:'p', content:'在晚宴过后，ValPromise的创始人向涛作为峰会嘉宾进行了演讲，为在场的投资人、企业家以及区块链爱好者们更加详细具体地介绍了ValPromise的应用场景、创新点等等。' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/5/3.jpg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/5/4.jpg?imageslim' },
          { type:'p', content:'向涛谈到，VPP是以天气保险为切入点，最终演化成<b>全球金融衍生品合约</b>（挂钩客观指标）发行-交易体系。' },
          { type:'p', content:'VPP项目能完美应用在以下几个领域：<b>指数类保险</b>，如天气保险；<b>场外商品&贵金属期货、期权；场外外汇期货期权；各类场外挂钩股票、期货、外汇指数</b>的期权；对客观且公开指标的<b>预测合约</b>等等。' },
          { type:'p', content:'同时，VPP项目将会更高效满足现实<b>世界风险对冲服务需求</b>，并大幅降低参与者门槛。体系初始业务天气保险已落地，并已广泛服务数十万实体经济用户。项目团队背景一流且充分磨合，累计获得<b>两轮中国知名投资人法币投资</b>。目前代币发布已获量子链基金、王利杰等认购。' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/5/5.jpg?imageslim' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/news/5/6.jpg?imageslim' },
          { type:'p', content:'为了感谢峰会上区块链各界投资人、爱好者、从业者们对ValPromise的支持，向涛也在分享结束后，为在座每一位听众都赠送了<b>30VPP</b>。' },
          { type:'p', content:'本周末，ValPromise将会在日本东京召开的<b>2018亚太区块链峰会</b>中带来更为精彩的路演，敬请期待。' },
          { type:'p', content:'更多项目信息，请大家关注我们的微信公众号：' },
          { type:'img', src:'http://otydyl8j5.bkt.clouddn.com/valp/icons/wc-qrcode.png?imageslim' },
        ]
      },
      {
        link:'/news/6',
        img: require('~/assets/img/news/6/0.png'),
        title:'imToken钱包现可添加VPP币种',
        paras:[
          { type:'img', src:require('~/assets/img/news/6/1.jpg') },
          { type:'img', src:require('~/assets/img/news/6/2.jpg') },
          { type:'img', src:require('~/assets/img/news/6/3.jpg') },
          { type:'img', src:require('~/assets/img/news/6/4.jpg') },
        ]
      },
      {
        link:'/news/7',
        img: require('~/assets/img/news/7/0.png'),
        title:'ValPromise 喜获分布式资本沈波认购',
        paras:[
          { type:"p", content:'【 ValPromise 价值承诺协议（VPP），金融资产上链类项目获得分布式资本沈波认购】VPP，是国内金融类最早一批落地应用的区块链项目，由分布式资本沈波、PreangelFund王利杰、首联资本、MDT基金会等资本和项目方参与认购，是一个旨在构建可自由发行金融资产合约的通用协议，其首个链上产品-天气期权合约安卓版已上线三个月（ValP.io），持币人数已近万。' },
          { type:'img', src:require('~/assets/img/news/7/1.jpg') },
          { type:'img', src:require('~/assets/img/news/7/2.jpg') },
          { type:'img', src:require('~/assets/img/news/7/3.jpg') },
          { type:'img', src:require('~/assets/img/news/7/4.jpg') },
          { type:'img', src:require('~/assets/img/news/7/5.png') },
          { type:'img', src:require('~/assets/img/news/7/6.jpg') },
          { type:'img', src:require('~/assets/img/news/7/7.jpg') },
        ]
      }
    ],
    fixedItem:{ link:'https://t.me/joinchat/II2BTAkqmTQXJ-utl-y5Sg', img:'http://otydyl8j5.bkt.clouddn.com/valp/news/0/0-cn.png?imageslim', external:true }
  },
  about: {
    title:'ValPromise',
    desc :'ValPromise價值承諾協議，是一個基於區塊鏈的分布式承諾合約發布和交易平臺，旨在解決全球範圍跨品種跨地區的風險管理問題，能廣泛應用在保險、 金融衍生品、預測等市場。'
  },
  highlights: {
    title:'亮點',
    items:[
      { 
        img:'http://otydyl8j5.bkt.clouddn.com/valp/highlights/i1.png?imageslim', 
        title:'分布式智能合約', 
        desc:'將傳統衍生品市場線下一對一紙質或者傳統中心化電子合約簽署模式升級為鏈上智能合約簽訂模式，利用智能合約可編程性與自動執行等特點，解決交易對手不履約等信用風險問題。' 
      },
      { 
        img:'http://otydyl8j5.bkt.clouddn.com/valp/highlights/i2.png?imageslim', 
        title:'統一交易媒介', 
        desc:'VPP 承諾幣是平臺唯一支持的交易媒介，法幣與數字貨幣兌換為 VPP 後參與平臺的承諾對沖交易，由此打破貨幣種類與物理地域的限制，提供強大的全球流動性。' 
      },
      { 
        img:'http://otydyl8j5.bkt.clouddn.com/valp/highlights/i3.png?imageslim', 
        title:'去中心化承諾創建機制', 
        desc:'利用“眾智”，任何人和組織，都可以創建承諾模板，滿足自己和他人的風險對沖需求，從而構建個性化，高效率的承諾生態。' 
      },
      { 
        img:'http://otydyl8j5.bkt.clouddn.com/valp/highlights/i4.png?imageslim', 
        title:'數據鏈上自證', 
        desc:'價值承諾合約中錨定的客觀數據指標（例如天氣數據），獲取即寫入區塊中，無法篡改，數據自證清白。' 
      },
      { 
        img:'http://otydyl8j5.bkt.clouddn.com/valp/highlights/i5.png?imageslim', 
        title:'分層設計', 
        desc:'在底層區塊鏈層上，ValPromise通過分層設計，將合約定義，交易功能和不同垂直場景的應用分開，既保證服務質量，也為ValPromise後續擴展留出可能。' 
      },
      { 
        img:'http://otydyl8j5.bkt.clouddn.com/valp/highlights/i6.png?imageslim', 
        title:'移動平臺', 
        desc:'ValPromise 通過適合 Mobile 和 IOT 的前端應用，降低區塊鏈的應用成本，讓更多力量加入到 ValPromise 區塊鏈中。' 
      }
    ]
  },
  realization: {
    title:'技術架構',
    img:'http://otydyl8j5.bkt.clouddn.com/valp/scene/scene.png?imageslim',
  },
  production: {
    title:'天氣保險：ValPromise生態的首個應用',
    desc :'天氣指數保險將是ValPromise生態上第一個成熟應用。天氣寶團隊在天氣風險對沖領域具有大量成功案例和經驗，過去6個月中累計發行20萬+份天氣風險保障合約。合作夥伴包括墨跡天氣、華安保險、陽光保險、途家網和各大旅遊中介機構。我們希望ValPromise能解決當前天氣保險領域的諸多問題，帶來革命性的創新。',
    items:[
      {
        title:'1. 解決缺乏成熟天氣保險的問題',
        desc :'目前除了非常初級的農業保險，中國幾乎沒有成規模的，覆蓋全國的天氣保險產品。 ValPromise團隊之前的工作已攻克該難點，發布了成熟應用，並計劃用智能合約方式發布標準化數字合約，讓所有人都能對沖天氣的風險。'
      },
      {
        title:'2. 保險合約設計效率低下',
        desc :'目前中國的天氣保險產品主要由各地氣象部門和地市級保險公司合作設計。歷時至少需要1個月。ValPromise業內領先的毫秒級天氣保險合約生成技術，已得到諸多合作夥伴認可和好評。未來ValPromise將鼓勵用戶自己創立自己合約，眾智機制保證合約的效率。'
      },
      {
        title:'3.人工定損成本高，賠付效率低',
        desc :'以前傳統保險產品，判斷履約條件，確定賠付金額等流程均需人工參與。ValPromise采用智能合約技術，自動判斷，自動執行，大幅提高效率。'
      },
      {
        title:'4. 氣象數據中心化存儲，數據難以自證清白',
        desc :'由於大部分天氣判斷數據來自官方，未對公眾完全開放，且無法追溯，所以中心化的數據存儲機制天然難以自證清白。ValPromise希望通過區塊鏈和用戶共識機制解決數據追溯和信任問題。'
      },
      {
        title:'5. 場外衍生品流動性不足',
        desc :'資本政策限制，信任機制缺失，場外交易效率等願意限制了流動性。ValPromise使用同一數字交易媒介外，打破地理和法幣的限制人，提供一個全球流動性的交易平臺。'
      },
      {
        title:'6. 場外交易無法統計且風險度量失真',
        desc :'目前大部分天氣風險對沖產品是依賴金融機構內部的模型測算進行風險度量，導致風險度量失真。由於ValPromise所有合約的交易均通過區塊鏈底層進行時間戳記錄，對全市場公開透明可驗證，能形成市場共識的風險度量，從而解決風險度量失真的問題。'
      },
    ]
  },
  roadmap: {
    title:'路線圖',
    img  : {
      pc     : { clsn:'i1', src:'http://otydyl8j5.bkt.clouddn.com/valp/roadmap/zh-tw-pc.png?imageslim' },
      mobile : { clsn:'i2', src:'http://otydyl8j5.bkt.clouddn.com/valp/roadmap/zh-tw-mb.png?imageslim' },
    }
  },
  team: {
    title:'團隊',
    items:[
      {
        name  :'向濤',
        avatar:'http://otydyl8j5.bkt.clouddn.com/valp/team/m1.png?imageslim',
        title:'向濤 數據科學家 ', 
        desc:'2011年香港中文大學信息工程碩士，先後創辦兩家大數據公司，禾訊科技（全球衛星大數據監測服務）及天氣寶（全自動化天氣風險合約定價&發行服務），帶領團隊在國內率先開拓兩個細分專業數據服務領域（商業遙感的農業應用市場，天氣風險管理市場），他在海量數據的獲取、管理及分析的技術架構設計實施，以及數據商業化領域有著多年的積累，因其業務在幫助中國打破西方戰略數據壟斷，創造經濟增長新動能方面的優秀表現，於2014年先後受到《焦點訪談》、以及《福布斯》專訪。'
      },
      {
        name:'焦臻',
        avatar:'http://otydyl8j5.bkt.clouddn.com/valp/team/m4.png?imageslim',
        title:'焦臻 區塊鏈專家 ', 
        desc:'中國科學院計算機科學博士，主要研究方向為物聯網區塊鏈高效架構，區塊鏈吞吐量優化等底層技術，同時在物聯網及去中心化網絡領域具有多年研發經歷。擔任國家自然科學基金評審專家，主持及參與國家自然科學基金，國家科技重大專項，世界500強企業聯合研發課題等十余項，負責制定物聯網國家標準兩項，在國際頂級刊物及會議發表學術論文二十余篇。'
      },
      {
        name:'張毅鵬',
        avatar:'http://otydyl8j5.bkt.clouddn.com/valp/team/m3.png?imageslim',
        title:'張毅鵬 中國最早一批移動互聯網海外產品經理 ',
        desc:'復旦大學電子與通信工程碩士，早年作為中國最早的移動互聯網出海企業—網秦集團（NYSE: NQ）核心產品經理，從諾基亞塞班時代開始就積累了大量的海外產品設計和運營經驗。之後他在奇虎360海外事業部，幫助360海外業務取得了突破性進展。作為中國新銳出海團隊APUS Group創始成員之壹，締造了3個月內新產品海外用戶超過1億的記錄，其產品榮登Google Play 30+國家排行榜第一。加入ValPromise之前，他在中國最大的激勵互聯網廣告公司擔任產品負責人，指導歐美，東南亞和印度地區產品的運營和推廣工作，在國外KOL流量，Apple Store、Google和Facebook生態運營方面經驗豐富。'
      },
      {
        name:'邵俊',
        avatar:'http://otydyl8j5.bkt.clouddn.com/valp/team/m2.png?imageslim',
        title:'邵俊 概率學博士(金融極限方向)', 
        desc:'概率學博士，碩士畢業於歐洲最負盛名的巴黎六大與巴黎綜合理工合辦的金融數學項目，師從當代金融數學之母 Nicole El Karoui 教授。歸國之前供職於AXA 安盛保險巴黎衍生品定價團隊，長期從事期權、期貨、固定收益衍生品等衍生品的量化分析建模、金融工具設計、風險評估等工作，在交易、做市、對沖、風控、高頻以及衍生品等領域積累了豐富的經驗，他還是壹名資深R語言和Python開發者，擁有非常豐富的工程實踐經歷。'
      },
      {
        name:'艾迪',
        avatar:'http://otydyl8j5.bkt.clouddn.com/valp/team/m5.png?imageslim',
        title:'艾迪 全棧開發工程師',
        desc:'畢業於大連理工大學。先後供職於阿裏巴巴、淘寶網、創新工場豌豆莢。阿裏巴巴期間，主要負責算法和網絡開發。淘寶期間主要方向為大數據、高性能服務、數據壹致性、網絡 QoS等。加入ValPromise之前，艾迪在創新工場豌豆莢擔任研發leader，領導豌豆莢數據和算法小組進行技術研究和開發實現。2015 年開始接觸區塊鏈，積累了比特幣、以太坊等主流數字貨幣及相關區塊鏈技術經驗。'
      },
      {
        name:'汪慧',
        avatar:'http://otydyl8j5.bkt.clouddn.com/valp/team/m6.png?imageslim',
        title:'汪慧 全棧開發工程師',
        desc:'畢業於北京郵電大學,先後供職於微軟中國、MooterMedia等知名公司。微軟期間，主要負責bing必應搜索引擎技術和廣告算法研發，MooterMedia期間主要負責實時競價廣告系統和數據系統。加入ValPromise團隊之前，汪慧作為中國某領先的數字營銷公司CTO和架構師，負責千萬級日活商業化產品的設計和實現，在算法，大數據和AI方向積累豐富而深刻。2015年開始進入區塊鏈行業，擁有豐富的區塊鏈技術開發經驗，對區塊鏈技術有著深刻理解。'
      },
    ],
    background: {
      title:'團隊背景',
      institutions:'http://otydyl8j5.bkt.clouddn.com/valp/team/background.png?imageslim'
    }
  },
  investors: {
    title:'投資 & 顧問',
    items:[
      {
        name:'王利傑',
        avatar:'http://otydyl8j5.bkt.clouddn.com/valp/advisor/a3.png?imageslim',
        desc:'PreAngel Fund 創始合夥人，中國青年天使會常務理事，海天會執行委員/常務理事，同時也是著名區塊鏈項目投資人。至今管理超過6支基金，超過3億人民幣，投資了近300個科技初創企業，重點關註新IT、金融科技和醫療創新等領域的A輪前項目。 2017年開始All in全球區塊鏈方向的股權和初期投資，還參與了投行高鏈資本和數字貨幣挖礦管理公司等。'
      },
      {
        name:'王剛',
        avatar:'http://otydyl8j5.bkt.clouddn.com/valp/advisor/a1.png?imageslim',
        desc:'滴滴出行最早投資人，曾主管阿裏巴巴B2B北京大區、支付寶商戶事業部和集團的組織發展。滴滴是他在2012年離開阿裏巴巴後孵化投資的第壹個項目，此項目也讓他獲得了數千倍收益。除了滴滴，王剛還孵化、投資了四十多家中國創業公司和十多家美國創業公司，以獨特的眼光和深刻的商業邏輯協助創業者，成功孵化多個估值過億美金的創業項目。'
      },
      {
        name:'吳宵光',
        avatar:'http://otydyl8j5.bkt.clouddn.com/valp/advisor/a2.png?imageslim',
        desc:'騰訊聯合創始人之壹，前騰訊高級執行副總裁和騰訊電商控股公司CEO，微光創投創始人。主要從事A-B輪的早中期投資，投資領域集中在產業互聯網、企業服務、金融、消費升級、電商等領域。曾帶領著騰訊核心產品QQ的研發和產品規劃，並先後擔任QQ研發團隊項目經理、即時通信產品部總經理，互聯網事業部總經理。'
      },
      {
        name:'勞維信',
        avatar:'http://otydyl8j5.bkt.clouddn.com/valp/advisor/a5.png?imageslim',
        desc:'點亮資本合夥人、香港中文大學訊息工程系兼任教授，過去12年教授碩士及商學院 EMBA課程，北京大學產業技術研究院訪問教授、前海國際區塊鏈生態圈聯盟主席、香港產學研合作促進會理事、國際技術轉移協作網絡ITTN委員、具有25年中港美地區高科技行業及風險投資之工作經驗。香港中文大學物理學士，哲學碩士及美國布朗大學(Brown University) 物理博士'
      },
      {
        name:'楊鐳',
        avatar:'http://otydyl8j5.bkt.clouddn.com/valp/advisor/a4.png?imageslim',
        desc:'PruSmartHR 保險咨詢服務公司CEO，曾任North American Search Group獵頭公司亞太區負責人。具有超過10年服務保險行業的經驗和人脈，在保險產品開發領域，其團隊和超過六萬名精算從業人員保持常規的聯系。其高管聘用案例包括Pacific Life Re 大中華區CEO，美國再保險現臺灣及其東南亞地區CEO，普華永道中國非壽險精算顧問負責人，中宏人壽CFO等。'
      },
      {
        name:'Melody He',
        avatar:'http://otydyl8j5.bkt.clouddn.com/valp/advisor/a6.png?imageslim',
        desc:'Melody是區塊鏈咨詢和投資基金Spartan Group的創始人。她是TenX的早期投資者，也是Gifto和Appcoins的戰略顧問。曾供職於高盛。'
      },
    ],
    agency: {
      title:'投資機構',
      institutions:'http://otydyl8j5.bkt.clouddn.com/valp/investors/institutions.png?imageslim'
    },
  },
  partners: {
    title:'合作夥伴',
    institutions: {
      title :'戰略合作夥伴',
      trademark:'http://otydyl8j5.bkt.clouddn.com/valp/partners/institutions-t.png?imageslim'
    },
    enterprise: {
      title :'合作夥伴',
      trademark:'http://otydyl8j5.bkt.clouddn.com/valp/partners/enterprise.png?imageslim'
    }
  },
  join:{
    title:'和我們一起創建價值承諾體系的未來',
    desc :'註冊成為我們郵件組成員，第一時間獲得最新項目資訊',
    placeholder:'輸入郵箱',
    button:'加入我們',
    prompt:{
      invalid:'無效的郵箱',
      failed:'註冊失敗',
      successful:'註冊成功'
    }
  },
  contact: {
    title:'聯系我們'
  },
}
