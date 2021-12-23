if (!self.define) {
  const e = e => {
      "require" !== e && (e += ".js");
      let r = Promise.resolve();
      return s[e] || (r = new Promise(async r => {
        if ("document" in self) {
          const s = document.createElement("script");
          s.src = e, document.head.appendChild(s), s.onload = r
        } else importScripts(e), r()
      })), r.then(() => {
        if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
        return s[e]
      })
    },
    r = (r, s) => {
      Promise.all(r.map(e)).then(e => s(1 === e.length ? e[0] : e))
    },
    s = {
      require: Promise.resolve(r)
    };
  self.define = (r, i, t) => {
    s[r] || (s[r] = Promise.resolve().then(() => {
      let s = {};
      const c = {
        uri: location.origin + r.slice(1)
      };
      return Promise.all(i.map(r => {
        switch (r) {
          case "exports":
            return s;
          case "module":
            return c;
          default:
            return e(r)
        }
      })).then(e => {
        const r = t(...e);
        return s.default || (s.default = r), s
      })
    }))
  }
}
define("./service-worker.js", ["./workbox-69b5a3b7"], (function (e) {
  "use strict";
  self.addEventListener("message", e => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
  }), e.precacheAndRoute([{
    url: "./index.html",
    revision: "1a45d21d50cb2030d4dce459e4ccfe99"
  }, {
    url: "images/img1.svg",
    revision: "bb4c0b7561f4d85587f7dd8473fe54ae"
  }, {
    url: "main.f507a712e35a9a5d3b63.css",
    revision: "6f52a104e42cf13bf7097009c708ec39"
  }, {
    url: "main.js",
    revision: "9e931ecce666f00cfe342e669a2c1a8a"
  }], {})
}));