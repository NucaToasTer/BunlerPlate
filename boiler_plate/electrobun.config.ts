import type { ElectrobunConfig } from "electrobun";

export default {
  app: {
    name: "hello-world",
    identifier: "helloworld.electrobun.dev",
    version: "0.0.1",
  },
  build: {
    bun: {
      entrypoint: "src/bun/index.js",
    },
    views: {
      mainview: {
        entrypoint: "src/mainview/js/index.js",
      },
    },
    copy: {
      "src/mainview/html/index.html": "views/mainview/index.html",
      "src/mainview/css/style.css": "views/mainview/style.css",
      "src/assets/image.jpg": "views/assets/image.jpg",
    },
    mac: {
      bundleCEF: false,
    },
    linux: {
      bundleCEF: false,
    },
    win: {
      bundleCEF: false,
    },
  },
} satisfies ElectrobunConfig;
