// logo 页面组件
const pageLogo = {
  data() {
    return app;
  },
  async mounted() {
    await vm.get();
    vm.$router.push("/main");
  },
  template: "#page-logo",
};

// main 页面组件
const pageMain = {
  data() {
    return app;
  },
  template: "#page-main",
};

//所有路由信息
const routes = [
  { path: "", component: pageLogo },
  // { path: "", component: pageMain },
  { path: "/main", component: pageMain },
];

//app 路由
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.reactive({
  // 当前站点
  site: "https://moodyz.com",
  // 全部站点选项
  sites: [
    { label: "MOODYZ", value: "https://moodyz.com" },
    { label: "S-One", value: "https://s1s1s1.com" },
    { label: "Premium", value: "https://premium-beauty.com" },
    { label: "Attackers", value: "https://attackers.net" },
    { label: "E-Body", value: "https://www.av-e-body.com" },
    { label: "IDEA-Pocket", value: "https://www.ideapocket.com" },
    { label: "Madonna", value: "https://madonna-av.com" },
    { label: "OPPAI", value: "https://oppai-av.com" },
    { label: "Rookie", value: "https://rookie-av.jp" },
    { label: "KaWaii", value: "https://kawaiikawaii.jp" },
  ],
  // 当前路径
  path: "/top",
  // 所有路径选项
  paths: [
    { "label": "最新", "value": "/top" },
    {
      "label": "巨乳",
      "jp": "巨乳",
      "value": "/works/list/genre/215",
      "number": 1776,
    },
    {
      "label": "中出",
      "jp": "中出し",
      "value": "/works/list/genre/128",
      "number": 1581,
    },
    {
      "label": "美少女",
      "jp": "美少女",
      "value": "/works/list/genre/330",
      "number": 1451,
    },
    {
      "label": "痴女",
      "jp": "痴女",
      "value": "/works/list/genre/218",
      "number": 1028,
    },
    {
      "label": "口交",
      "jp": "フェラ",
      "value": "/works/list/genre/113",
      "number": 843,
    },
    {
      "label": "苗条",
      "jp": "スレンダー",
      "value": "/works/list/genre/214",
      "number": 666,
    },
    {
      "label": "尖晶石",
      "jp": "パイズリ",
      "value": "/works/list/genre/126",
      "number": 568,
    },
    {
      "label": "3P、4P",
      "jp": "3P、4P",
      "value": "/works/list/genre/421",
      "number": 555,
    },
    {
      "label": "潮吹",
      "jp": "潮吹き",
      "value": "/works/list/genre/114",
      "number": 533,
    },
    {
      "label": "女子校生",
      "jp": "女子校生",
      "value": "/works/list/genre/202",
      "number": 477,
    },
    {
      "label": "寝取",
      "jp": "寝取り・寝取られ・ＮＴＲ",
      "value": "/works/list/genre/138",
      "number": 426,
    },
    {
      "label": "騎乗位",
      "jp": "騎乗位",
      "value": "/works/list/genre/431",
      "number": 360,
    },
    {
      "label": "姐姐",
      "jp": "お姉さん",
      "value": "/works/list/genre/376",
      "number": 357,
    },
    {
      "label": "淫語",
      "jp": "淫語",
      "value": "/works/list/genre/137",
      "number": 345,
    },
    {
      "label": "淫乱",
      "jp": "淫乱・ハード系",
      "value": "/works/list/genre/411",
      "number": 339,
    },
    {
      "label": "顔射",
      "jp": "顔射",
      "value": "/works/list/genre/329",
      "number": 301,
    },
    {
      "label": "强暴",
      "jp": "レイプ",
      "value": "/works/list/genre/101",
      "number": 297,
    },
    {
      "label": "肛门",
      "jp": "アナル",
      "value": "/works/list/genre/129",
      "number": 256,
    },
    {
      "label": "手杖",
      "jp": "手コキ",
      "value": "/works/list/genre/124",
      "number": 251,
    },
    {
      "label": "風俗嬢",
      "jp": "風俗嬢",
      "value": "/works/list/genre/324",
      "number": 244,
    },
    {
      "label": "乱糟糟",
      "jp": "ごっくん",
      "value": "/works/list/genre/317",
      "number": 239,
    },
    {
      "label": "美乳",
      "jp": "美乳",
      "value": "/works/list/genre/345",
      "number": 238,
    },
    {
      "label": "乱交",
      "jp": "乱交",
      "value": "/works/list/genre/104",
      "number": 236,
    },
    {
      "label": "人妻",
      "jp": "人妻・主婦",
      "value": "/works/list/genre/205",
      "number": 235,
    },
    {
      "label": "女子大生",
      "jp": "女子大生",
      "value": "/works/list/genre/203",
      "number": 217,
    },
    {
      "label": "爆破",
      "jp": "ぶっかけ",
      "value": "/works/list/genre/131",
      "number": 207,
    },
    {
      "label": "接吻",
      "jp": "キス・接吻",
      "value": "/works/list/genre/221",
      "number": 204,
    },
    {
      "label": "輪姦",
      "jp": "輪姦",
      "value": "/works/list/genre/334",
      "number": 200,
    },
    {
      "label": "伊拉马西奥",
      "jp": "イラマチオ",
      "value": "/works/list/genre/459",
      "number": 182,
    },
    {
      "label": "調教",
      "jp": "調教",
      "value": "/works/list/genre/136",
      "number": 166,
    },
    {
      "label": "屁股钳",
      "jp": "尻フェチ",
      "value": "/works/list/genre/320",
      "number": 165,
    },
    {
      "label": "制服",
      "jp": "制服",
      "value": "/works/list/genre/336",
      "number": 164,
    },
    {
      "label": "角色扮演",
      "jp": "コスプレ",
      "value": "/works/list/genre/321",
      "number": 160,
    },
    {
      "label": "女教師",
      "jp": "女教師",
      "value": "/works/list/genre/367",
      "number": 156,
    },
    {
      "label": "菠萝包",
      "jp": "パイパン",
      "value": "/works/list/genre/5004",
      "number": 148,
    },
    {
      "label": "拘束",
      "jp": "拘束",
      "value": "/works/list/genre/332",
      "number": 145,
    },
    {
      "label": "美容院",
      "jp": "エステ",
      "value": "/works/list/genre/452",
      "number": 145,
    },
    {
      "label": "后宫",
      "jp": "ハーレム",
      "value": "/works/list/genre/476",
      "number": 143,
    },
    {
      "label": "萝莉系",
      "jp": "ロリ系",
      "value": "/works/list/genre/201",
      "number": 137,
    },
    {
      "label": "主観",
      "jp": "主観",
      "value": "/works/list/genre/445",
      "number": 136,
    },
    {
      "label": "化妆油",
      "jp": "ローション・オイル",
      "value": "/works/list/genre/437",
      "number": 133,
    },
    {
      "label": "巨尻",
      "jp": "巨尻",
      "value": "/works/list/genre/484",
      "number": 122,
    },
    {
      "label": "辣妹",
      "jp": "ギャル",
      "value": "/works/list/genre/310",
      "number": 120,
    },
    {
      "label": "放尿",
      "jp": "放尿・お漏らし",
      "value": "/works/list/genre/115",
      "number": 119,
    },
    {
      "label": "羞恥",
      "jp": "羞恥",
      "value": "/works/list/genre/333",
      "number": 116,
    },
    {
      "label": "近親相姦",
      "jp": "近親相姦",
      "value": "/works/list/genre/108",
      "number": 100,
    },
    {
      "label": "巨乳",
      "jp": "巨乳フェチ",
      "value": "/works/list/genre/404",
      "number": 94,
    },
    {
      "label": "按摩镜",
      "jp": "マッサージ・リフレ",
      "value": "/works/list/genre/457",
      "number": 92,
    },
    {
      "label": "OL",
      "jp": "OL",
      "value": "/works/list/genre/356",
      "number": 88,
    },
    {
      "label": "芸能人",
      "jp": "アイドル・芸能人",
      "value": "/works/list/genre/5028",
      "number": 58,
    },
    {
      "label": "女捜査官",
      "jp": "女捜査官",
      "value": "/works/list/genre/5037",
      "number": 36,
    },
    {
      "label": "其它",
      "jp": "その他フェチ",
      "value": "/works/list/genre/405",
      "number": 129,
    },
  ],
  //
  cards: [],
  // 当前页
  page: 1,
  // 当前播放ID
  play: "",
  // 女友名称
  women: "",
  // 影片标题
  title: "",
  // 影片视频地址
  video: "",
  // 缩放图片地址
  showImg: "",
  //单个作品的所有图片
  imgs: [],
  imgIndex: 0,
  // 全部播放视频地址
  videos: [],
  //当前播放视频索引
  videoIndex: 0,
  // 系统缓存
  caches: {
    womens: {},
    cards: {},
    films: {},
  },
  // 系统作业标志
  loading: false,

  // t-select site left icon
  siteIcon: Vue.h(
    "svg",
    { class: "t-icon t-icon-home", style: "font-size:20px" },
    Vue.h("use", { href: "#t-icon-home" }),
  ),
  // t-select path left icon
  pathIcon: Vue.h(
    "svg",
    { class: "t-icon t-icon-gender-female", style: "font-size:20px" },
    Vue.h("use", { href: "#t-icon-gender-female" }),
  ),
});

const vm = Vue.createApp({
  data() {
    return app;
  },
  computed: {
    filmCardWidth() {
      return `${(screen.width - 24) / 2 * 1.4 + 52}px`;
    },
    headerWidth() {
      return `${Math.min(screen.width, 500)}px`;
    },
  },
  methods: {
    // 关闭播放所有视频页面
    closePlayAll() {
      this.closeDialog("playall");
      this.videos = [];
      this.videoIndex = 0;
    },
    // 打开播放所有视频页面
    openPlayAll() {
      this.openDialog("playall");
      this.playAll();
    },
    // 获取所有视频地址及播放视频
    playAll() {
      this.cards.forEach(async (card) => {
        const url = `${app.site}/works/detail/${card.id}`;
        //
        if (vm.caches.films[url]) {
          const film = vm.caches.films[url];
          vm.videos.push({ id: card.id, src: film.video });
          return;
        }
        //
        const dom = DOM(
          await getHTML(url, true, 10),
        );
        const video = $("video", dom);
        if (video == undefined) {
          return;
        }
        vm.videos.push({ id: card.id, src: video.src });
      });
    },
    // 播放所有视频中下一个视频
    nextVideo() {
      if (this.videos.length == 0) return;
      if ((this.videos.length - 1) > this.videoIndex) {
        this.videoIndex++;
        const video = $("video");
        video.load();
        return;
      }
      this.videoIndex = 0;
      video.load();
    },
    //打开对话框
    openDialog(name = "") {
      if (window.history) {
        window.history.pushState({}, null, "");
        window.onpopstate = () => {
          switch (name) {
            case "playall":
              vm.closePlayAll();
              break;
            case "showPic":
              vm.closeShowPic();
              break;
            case "play":
              vm.closePlay();
              break;
            default:
              vm.closeDialog(name);
              break;
          }
        };
      }
      const dialog = $(`dialog[name='${name}']`);
      dialog.open = true;
    },
    //关闭对话框
    closeDialog(name = "") {
      const dialog = $(`dialog[name='${name}']`);
      dialog.open = false;
      window.onpopstate = null;
    },
    //缩放图片
    scaleImg(value = 1) {
      const ele = $("dialog[name='showPic']");
      const img = $("img", ele);
      img.style.width = `${value}%`;
      const range = $("input", ele);
      range.value = value;
    },
    preImg() {
      if (this.imgIndex > 0) {
        this.imgIndex--;
      } else {
        this.imgIndex = this.imgs.length - 1;
      }
      this.scaleImg(100);
    },
    nextImg() {
      if (this.imgIndex < this.imgs.length - 1) {
        this.imgIndex++;
      } else {
        this.imgIndex = 0;
      }
      this.scaleImg(100);
    },
    //显示缩放图片页面
    async showPic(index = 0) {
      vm.showImg = this.cards[index].img;
      vm.imgs = [];
      vm.imgIndex = 0;
      vm.imgs.push(vm.showImg);
      vm.openDialog("showPic");
      const url = `${app.site}/works/detail/${this.cards[index].id}`;
      // 缓存
      if (this.caches.films[url]) {
        const film = vm.caches.films[url];
        vm.imgs = vm.imgs.concat(film.imgs);
        return;
      }
      // 爬虫
      await this.getPlay(url, index);
    },
    // 关闭缩放图片页面
    closeShowPic() {
      this.closeDialog("showPic");
      const ele = $("dialog[name='showPic']");
      const range = $("input", ele);
      const img = $("img", ele);
      img.style.width = "100%";
      range.value = 100;
      vm.showImg = "";
      vm.imgs = [];
      vm.video = "";
    },
    // 播放视频按钮
    mPlay() {
      const video = $("video");
      if (video) video.play();
    },
    // 视频暂停按钮
    pause() {
      const video = $("video");
      if (video) video.pause();
    },
    // 上一页
    previous() {
      if (vm.page > 1) {
        vm.page--;
      }
    },
    // 下一页
    next() {
      if (vm.path == "/top") return;
      vm.page++;
    },
    // 获取当前地址
    URL() {
      if (app.path == "/top") {
        return `${app.site}${app.path}`;
      }
      if (app.page == 1) return `${app.site}${app.path}`;
      return `${app.site}${app.path}?page=${app.page}`;
    },
    // 关闭播放页面
    closePlay() {
      this.closeDialog("play");
      this.women = "";
      this.title = "";
      this.imgs = [];
      this.video = "";
    },
    // 打开播放页面
    async setPlay(id, women, index = 0) {
      app.women = women;
      if (id) {
        app.play = id;
        this.openDialog("play");
        await vm.getPlay(`${app.site}/works/detail/${app.play}`, index);
      }
    },
    // 设置女优路径信息
    setWomen(womenID = "", womenName = "") {
      if (womenID == "") return;
      const value = `/actress/detail/${womenID}`;
      let have = false;
      app.paths.forEach((path) => {
        if (path.value == value) have = true;
      });
      if (!have) {
        app.paths.push({ label: womenName, value: value });
      }
      app.women = womenName;
      app.path = value;
    },
    // 获取影片列表
    async getCards(url = "") {
      const cards = [];
      // 缓存
      if (app.caches.cards[url]) {
        vm.cards = app.caches.cards[url];
        return;
      }
      // 爬虫
      const dom = DOM(
        await getHTML(url, true, 10),
      );
      const lists = $$("div.c-card", dom);
      if (lists.length == 0) {
        vm.cards = cards;
        return;
      }
      lists.forEach((card) => {
        try {
          const a = $("a.img.hover", card);
          const strs = a.href.split("/");
          const idStr = strs[strs.length - 1].split("?");
          const id = idStr[0];
          const img = $("img", card);
          const title = $("p.text", card);
          let women = card.children[1];
          let womenID = "";
          if (women != undefined) {
            if (women.href != undefined) {
              womenID = women.href.split("/");
              womenID = womenID[womenID.length - 1];
            }
          } else {
            women = Vue.h("a", { href: "" }, "");
          }

          cards.push({
            "id": id,
            "url": `#/play/${id}`,
            "img": img.dataset.src,
            "title": title.textContent,
            "women": womenID || "",
            "women-name": women.textContent || "",
          });
          if (cards.length > 0) {
            this.caches.cards[url] = cards;
          }
          vm.cards = cards;
        } catch {
          return;
        }
      });
    },
    // 获取女优数据
    async getWomen(url = "") {
      const cards = [];
      //
      if (app.caches.womens[url]) {
        vm.cards = app.caches.womens[url];
        return;
      }
      //
      const dom = DOM(
        await getHTML(url, true, 10),
      );
      const lists = $$("div.swiper-slide.c-low--6>a.item", dom);
      if (lists.length == 0) {
        vm.cards = cards;
        return;
      }
      lists.forEach((card) => {
        const strs = card.href.split("/");
        const idStr = strs[strs.length - 1].split("?");
        const id = idStr[0];
        const img = $("img", card);
        const title = $("p.text", card);
        let women = card.children[1];
        let womenID = "";
        if (women != undefined) {
          if (women.href != undefined) {
            womenID = women.href.split("/");
            womenID = womenID[womenID.length - 1];
          }
        } else {
          women = Vue.h("a", { href: "" }, "");
        }

        cards.push({
          "id": id,
          "url": `#/play/${id}`,
          "img": img.dataset.src,
          "title": title.textContent,
          "women": womenID || "",
          "women-name": women.textContent || app.women,
        });
        if (cards.length > 0) {
          app.caches.womens[url] = cards;
        }
        vm.cards = cards;
      });
    },
    // 获取数据
    async get() {
      const main = $("app main");
      if (main) {
        main.style.filter = "blur(3px)";
      }
      vm.loading = true;
      if (vm.path.startsWith("/actress/detail")) {
        await this.getWomen(this.URL());
      } else {
        await this.getCards(this.URL());
      }
      vm.loading = false;
      if (main) {
        main.style.filter = "";
        main.scroll(0, 0);
      }
    },
    // 获取视频信息
    async getPlay(url = "", index = 0) {
      vm.showImg = this.cards[index].img;
      vm.imgs = [];
      vm.imgIndex = 0;
      vm.imgs.push(vm.showImg);
      //
      if (app.caches.films[url]) {
        const film = app.caches.films[url];
        vm.imgs = vm.imgs.concat(film.imgs);
        // vm.imgs = film.imgs;
        vm.video = film.video;
        vm.title = film.title;
        return;
      }
      //
      const dom = DOM(
        await getHTML(url, true, 20),
      );
      const imgLists = $$("img.swiper-lazy", dom);
      const imgs = [];
      imgLists.forEach((img) => {
        imgs.push(img.dataset.src);
      });

      const title = $("h2.p-workPage__title", dom);
      const video = $("video", dom);
      if (video == undefined) {
        vm.video = "";
      } else {
        vm.video = video.src;
      }
      vm.imgs = vm.imgs.concat(imgs);
      vm.title = title.textContent;
      if (imgs.length > 0) {
        this.caches.films[url] = {
          "title": title.textContent,
          "imgs": imgs,
          "video": vm.video,
        };
      }
    },
    test() {
      const header = $("header");
      alert(
        `header max-width:${
          getComputedStyle(header, null).getPropertyValue("max-width")
        }`,
      );
    },
  },
  watch: {
    // 观测page变化
    page: async () => {
      await vm.get();
    },
    // 观测site变化
    site: async () => {
      if (vm.path == "/top") {
        if (vm.page == 1) {
          await vm.get();
        } else {
          vm.page = 1;
        }
      } else {
        vm.path = "/top";
      }
    },
    // 观测path变化
    path: async () => {
      if (vm.page == 1) {
        await vm.get();
      } else {
        vm.page = 1;
      }
    },
  },
})
  .use(router)
  .use(TDesign)
  .mount("app");
