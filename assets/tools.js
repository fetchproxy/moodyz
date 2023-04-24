// deno-lint-ignore-file no-unused-vars
const $ = (select = "", doc = document) => {
  return doc.querySelector(select);
};

const $$ = (select = "", doc = document) => {
  return doc.querySelectorAll(select);
};

const getHTML = async (url = "", proxy = false, second = 10) => {
  if (proxy) {
    // 使用代理获取html
    url = "https://online-fetch.top" + "/?url=" + url;
  }
  // 超时控制取消网络请求
  const controller = new AbortController();
  // 超时函数
  const timeout = (second = 10) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        controller.abort();
        resolve("");
      }, second * 1000);
    });
  };
  // 获取html函数
  const worker = new Promise((resolve) => {
    // 超时取消网络请求
    const signal = controller.signal;
    // 获取html
    fetch(url, { referrerPolicy: "no-referrer", referer: "", signal }).then(
      (response) => {
        return response.text();
      },
    ).then((text) => {
      resolve(text);
    }).catch((error) => {
      console.error("getHTML fetch HTML =>", error);
      resolve("");
    });
  });
  return await Promise.race([worker, timeout(second)]);
};

const DOM = (html, type = "text/html") => {
  const parser = new DOMParser();
  return parser.parseFromString(html, type);
};
