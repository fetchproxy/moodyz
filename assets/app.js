const getCards = async (url = "") => {
  const cards = [];
  if (app.caches[url]) {
    app.cards = app.caches[url];
    return;
  }
  const dom = DOM(
    await getHTML(url, true, 20),
  );
  const lists = $$("div.c-card", dom);
  const length = lists.length;
  let index = 1;
  lists.forEach((card) => {
    app.progress = index / length * 100;
    index++;
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
    app.caches[url] = cards;
    app.cards = cards;
  });
};

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

const pageMain = {
  data() {
    return app;
  },
  template: "#page-main",
};

const pagePlay = {
  data() {
    return app;
  },
  async beforeMount() {
    await vm.getPlay(`${app.site}/works/detail/${app.play}`);
  },
  beforeUnmount() {
    app.women = "";
    app.title = "";
    app.imgs = [];
    app.video = "";
  },
  template: "#page-play",
};

const pagePlayAll = {
  data() {
    return app;
  },
  template: "#page-playall",
};

const routes = [
  { path: "", component: pageLogo },
  { path: "/main", component: pageMain },
  { path: "/play", component: pagePlay },
  { path: "/playall", component: pagePlayAll },
];

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
  ],
  // 当前路径
  path: "/top",
  // 所有路径选项
  paths: [
    { label: "最新", value: "/top" },
    { label: "巨乳", value: "/works/list/genre/215" },
    { label: "中出", value: "/works/list/genre/128" },
    { label: "美少女", value: "/works/list/genre/330" },
    { label: "痴女", value: "/works/list/genre/218" },
    { label: "口交", value: "/works/list/genre/113" },
    { label: "苗条", value: "/works/list/genre/214" },
    { label: "单体作品", value: "/works/list/genre/408" },
    { label: "尖晶石", value: "/works/list/genre/126" },
    { label: "最佳总集", value: "/works/list/genre/5009" },
    { label: "3P、4P", value: "/works/list/genre/421" },
    { label: "潮吹", value: "/works/list/genre/114" },
    { label: "女子校生", value: "/works/list/genre/202" },

    { label: "强暴", value: "/works/list/genre/101" },
    { label: "乱交", value: "/works/list/genre/104" },
    { label: "放尿", value: "/works/list/genre/115" },
    { label: "女教师", value: "/works/list/genre/367" },
    { label: "秘书", value: "/works/list/genre/372" },
    { label: "人妻", value: "/works/list/genre/205" },
    { label: "风俗娘", value: "/works/list/genre/324" },
    { label: "颜射", value: "/works/list/genre/329" },
    { label: "轮奸", value: "/works/list/genre/334" },
    { label: "制服", value: "/works/list/genre/336" },
    { label: "美乳", value: "/works/list/genre/340" },
    { label: "OL", value: "/works/list/genre/356" },
    { label: "长身", value: "/works/list/genre/384" },
    { label: "淫乱", value: "/works/list/genre/411" },
    { label: "泥醉", value: "/works/list/genre/454" },
    { label: "紧缚", value: "/works/list/genre/5025" },
    { label: "偶像艺人", value: "/works/list/genre/5028" },
    { label: "强奸", value: "/works/list/genre/5033" },
    { label: "偷拍", value: "/works/list/genre/5035" },
    { label: "女搜查官", value: "/works/list/genre/5037" },
  ],
  // 当前页
  page: 1,
  // 当前播放ID
  play: "",
  women: "",
  title: "",
  desc: "",
  video: "",
  imgs: [],
  // 全部播放IDs
  playall: [],
  // 系统缓存
  caches: {},
  //
  loading: false,
  // 读取数据进度
  progress: 0,
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
  methods: {
    mPlay() {
      const video = $("video");
      if (video) video.play();
    },
    pause() {
      const video = $("video");
      if (video) video.pause();
    },
    previous() {
      if (vm.page > 1) {
        vm.page--;
      }
    },
    next() {
      if (vm.path == "/top") return;
      vm.page++;
    },

    URL() {
      if (app.path == "/top") {
        return `${app.site}${app.path}`;
      }
      return `${app.site}${app.path}?page=${app.page}`;
    },
    setPlay(id, women) {
      app.women = women;
      if (id) {
        app.play = id;
        vm.$router.push("/play");
      }
    },
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
    async getWomen(url = "") {
      const cards = [];
      if (app.caches[url]) {
        app.cards = app.caches[url];
        return;
      }
      const dom = DOM(
        await getHTML(url, true, 20),
      );
      const lists = $$("div.swiper-slide.c-low--6>a.item", dom);
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
        app.caches[url] = cards;
        app.cards = cards;
      });
    },
    async get() {
      const main = $("app main");
      if (main) {
        main.style.filter = "blur(3px)";
      }
      vm.loading = true;
      if (vm.path.startsWith("/actress/detail")) {
        await this.getWomen(this.URL());
      } else {
        await getCards(this.URL());
      }
      vm.loading = false;
      if (main) {
        main.style.filter = "";
        main.scroll(0, 0);
      }
    },
    async getPlay(url = "") {
      const dom = DOM(
        await getHTML(url, true, 20),
      );
      const imgLists = $$("img.swiper-lazy", dom);
      this.imgs = [];
      imgLists.forEach((img) => {
        this.imgs.push(img.dataset.src);
      });

      const title = $("h2.p-workPage__title", dom);
      this.title = title.textContent;

      const video = $("video", dom);
      if (video == undefined) {
        return;
      }
      this.video = video.src;
    },
  },
  watch: {
    page: async () => {
      await vm.get();
    },
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
