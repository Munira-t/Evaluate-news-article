var Client = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var o in e) n.d(r, o, function (t) {
        return e[t]
      }.bind(null, o));
    return r
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 1)
}([function (e, t, n) {}, function (e, t, n) {
  "use strict";
  n.r(t), n.d(t, "isURL", (function () {
    return r
  })), n.d(t, "handleSubmit", (function () {
    return u
  }));
  var r = e => !!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e);
  const o = async (e = "", t = {}) => {
    const n = await fetch(e, {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(t)
    });
    try {
      const e = await n.json();
      i(e)
    } catch (e) {
      console.error(e.message)
    }
  }, i = e => {
    document.getElementById("polarity").textContent = a(e.score), document.getElementById("agreement").textContent = e.agreement, document.getElementById("subjectivity").textContent = e.subjectivity, document.getElementById("confidence").textContent = e.confidence, document.getElementById("irony").textContent = e.irony
  }, a = e => "P+" === e ? "Strong Positive" : "P" === e ? "Positive" : "NEU" === e ? "Neutral" : "N" === e ? "Negative" : "N+" === e ? "Strong Negative" : "NONE" === e ? "Without Sentiment" : e;
  var u = async () => {
    const e = document.getElementById("url").value;
    console.log("user input: " + e), r(e) ? await o("http://localhost:8087/add", {
      articleUrl: e
    }) : alert("Please Enter Valid Article URL!")
  };
  n(0), n.p;
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("url-input-form").addEventListener("submit", e => {
      e.preventDefault(), u()
    })
  })
}]);