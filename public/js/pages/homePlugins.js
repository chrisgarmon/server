!function (a, b) {
  function c(a, b) {
    var c = a.createElement("p"),
        d = a.getElementsByTagName("head")[0] || a.documentElement;return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);
  }function d() {
    var a = y.elements;return "string" == typeof a ? a.split(" ") : a;
  }function e(a, b) {
    var c = y.elements;"string" != typeof c && (c = c.join(" ")), "string" != typeof a && (a = a.join(" ")), y.elements = c + " " + a, j(b);
  }function f(a) {
    var b = x[a[v]];return b || (b = {}, w++, a[v] = w, x[w] = b), b;
  }function g(a, c, d) {
    if (c || (c = b), q) return c.createElement(a);d || (d = f(c));var e;return e = d.cache[a] ? d.cache[a].cloneNode() : u.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !e.canHaveChildren || t.test(a) || e.tagUrn ? e : d.frag.appendChild(e);
  }function h(a, c) {
    if (a || (a = b), q) return a.createDocumentFragment();c = c || f(a);for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) e.createElement(h[g]);return e;
  }function i(a, b) {
    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
      return y.shivMethods ? g(c, a, b) : b.createElem(c);
    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-:]+/g, function (a) {
      return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
    }) + ");return n}")(y, b.frag);
  }function j(a) {
    a || (a = b);var d = f(a);return !y.shivCSS || p || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), q || i(a, d), a;
  }function k(a) {
    for (var b, c = a.getElementsByTagName("*"), e = c.length, f = RegExp("^(?:" + d().join("|") + ")$", "i"), g = []; e--;) b = c[e], f.test(b.nodeName) && g.push(b.applyElement(l(b)));return g;
  }function l(a) {
    for (var b, c = a.attributes, d = c.length, e = a.ownerDocument.createElement(A + ":" + a.nodeName); d--;) b = c[d], b.specified && e.setAttribute(b.nodeName, b.nodeValue);return e.style.cssText = a.style.cssText, e;
  }function m(a) {
    for (var b, c = a.split("{"), e = c.length, f = RegExp("(^|[\\s,>+~])(" + d().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), g = "$1" + A + "\\:$2"; e--;) b = c[e] = c[e].split("}"), b[b.length - 1] = b[b.length - 1].replace(f, g), c[e] = b.join("}");return c.join("{");
  }function n(a) {
    for (var b = a.length; b--;) a[b].removeNode();
  }function o(a) {
    function b() {
      clearTimeout(g._removeSheetTimer), d && d.removeNode(!0), d = null;
    }var d,
        e,
        g = f(a),
        h = a.namespaces,
        i = a.parentWindow;return !B || a.printShived ? a : ("undefined" == typeof h[A] && h.add(A), i.attachEvent("onbeforeprint", function () {
      b();for (var f, g, h, i = a.styleSheets, j = [], l = i.length, n = Array(l); l--;) n[l] = i[l];for (; h = n.pop();) if (!h.disabled && z.test(h.media)) {
        try {
          f = h.imports, g = f.length;
        } catch (o) {
          g = 0;
        }for (l = 0; g > l; l++) n.push(f[l]);try {
          j.push(h.cssText);
        } catch (o) {}
      }j = m(j.reverse().join("")), e = k(a), d = c(a, j);
    }), i.attachEvent("onafterprint", function () {
      n(e), clearTimeout(g._removeSheetTimer), g._removeSheetTimer = setTimeout(b, 500);
    }), a.printShived = !0, a);
  }var p,
      q,
      r = "3.7.3",
      s = a.html5 || {},
      t = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      u = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      v = "_html5shiv",
      w = 0,
      x = {};!function () {
    try {
      var a = b.createElement("a");a.innerHTML = "<xyz></xyz>", p = "hidden" in a, q = 1 == a.childNodes.length || function () {
        b.createElement("a");var a = b.createDocumentFragment();return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement;
      }();
    } catch (c) {
      p = !0, q = !0;
    }
  }();var y = { elements: s.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: r, shivCSS: s.shivCSS !== !1, supportsUnknownElements: q, shivMethods: s.shivMethods !== !1, type: "default", shivDocument: j, createElement: g, createDocumentFragment: h, addElements: e };a.html5 = y, j(b);var z = /^$|\b(?:all|print)\b/,
      A = "html5shiv",
      B = !q && function () {
    var c = b.documentElement;return !("undefined" == typeof b.namespaces || "undefined" == typeof b.parentWindow || "undefined" == typeof c.applyElement || "undefined" == typeof c.removeNode || "undefined" == typeof a.attachEvent);
  }();y.type += " print", y.shivPrint = o, o(b), "object" == typeof module && module.exports && (module.exports = y);
}("undefined" != typeof window ? window : this, document);
window.Modernizr = function (e, t, n) {
  function r(e) {
    b.cssText = e;
  }function o(e, t) {
    return r(S.join(e + ";") + (t || ""));
  }function a(e, t) {
    return typeof e === t;
  }function i(e, t) {
    return !!~("" + e).indexOf(t);
  }function c(e, t) {
    for (var r in e) {
      var o = e[r];if (!i(o, "-") && b[o] !== n) return "pfx" == t ? o : !0;
    }return !1;
  }function s(e, t, r) {
    for (var o in e) {
      var i = t[e[o]];if (i !== n) return r === !1 ? e[o] : a(i, "function") ? i.bind(r || t) : i;
    }return !1;
  }function u(e, t, n) {
    var r = e.charAt(0).toUpperCase() + e.slice(1),
        o = (e + " " + k.join(r + " ") + r).split(" ");return a(t, "string") || a(t, "undefined") ? c(o, t) : (o = (e + " " + T.join(r + " ") + r).split(" "), s(o, t, n));
  }function l() {
    p.input = function (n) {
      for (var r = 0, o = n.length; o > r; r++) j[n[r]] = !!(n[r] in E);return j.list && (j.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), j;
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function (e) {
      for (var r, o, a, i = 0, c = e.length; c > i; i++) E.setAttribute("type", o = e[i]), r = "text" !== E.type, r && (E.value = x, E.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && E.style.WebkitAppearance !== n ? (g.appendChild(E), a = t.defaultView, r = a.getComputedStyle && "textfield" !== a.getComputedStyle(E, null).WebkitAppearance && 0 !== E.offsetHeight, g.removeChild(E)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? E.checkValidity && E.checkValidity() === !1 : E.value != x)), P[e[i]] = !!r;return P;
    }("search tel url email datetime date month week time datetime-local number range color".split(" "));
  }var d,
      f,
      m = "2.8.3",
      p = {},
      h = !0,
      g = t.documentElement,
      v = "modernizr",
      y = t.createElement(v),
      b = y.style,
      E = t.createElement("input"),
      x = ":)",
      w = {}.toString,
      S = " -webkit- -moz- -o- -ms- ".split(" "),
      C = "Webkit Moz O ms",
      k = C.split(" "),
      T = C.toLowerCase().split(" "),
      N = { svg: "http://www.w3.org/2000/svg" },
      M = {},
      P = {},
      j = {},
      $ = [],
      D = $.slice,
      F = function (e, n, r, o) {
    var a,
        i,
        c,
        s,
        u = t.createElement("div"),
        l = t.body,
        d = l || t.createElement("body");if (parseInt(r, 10)) for (; r--;) c = t.createElement("div"), c.id = o ? o[r] : v + (r + 1), u.appendChild(c);return a = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), u.id = v, (l ? u : d).innerHTML += a, d.appendChild(u), l || (d.style.background = "", d.style.overflow = "hidden", s = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), i = n(u, e), l ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), g.style.overflow = s), !!i;
  },
      z = function (t) {
    var n = e.matchMedia || e.msMatchMedia;if (n) return n(t) && n(t).matches || !1;var r;return F("@media " + t + " { #" + v + " { position: absolute; } }", function (t) {
      r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position;
    }), r;
  },
      A = function () {
    function e(e, o) {
      o = o || t.createElement(r[e] || "div"), e = "on" + e;var i = e in o;return i || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), i = a(o[e], "function"), a(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, i;
    }var r = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };return e;
  }(),
      L = {}.hasOwnProperty;f = a(L, "undefined") || a(L.call, "undefined") ? function (e, t) {
    return t in e && a(e.constructor.prototype[t], "undefined");
  } : function (e, t) {
    return L.call(e, t);
  }, Function.prototype.bind || (Function.prototype.bind = function (e) {
    var t = this;if ("function" != typeof t) throw new TypeError();var n = D.call(arguments, 1),
        r = function () {
      if (this instanceof r) {
        var o = function () {};o.prototype = t.prototype;var a = new o(),
            i = t.apply(a, n.concat(D.call(arguments)));return Object(i) === i ? i : a;
      }return t.apply(e, n.concat(D.call(arguments)));
    };return r;
  }), M.flexbox = function () {
    return u("flexWrap");
  }, M.flexboxlegacy = function () {
    return u("boxDirection");
  }, M.canvas = function () {
    var e = t.createElement("canvas");return !(!e.getContext || !e.getContext("2d"));
  }, M.canvastext = function () {
    return !(!p.canvas || !a(t.createElement("canvas").getContext("2d").fillText, "function"));
  }, M.webgl = function () {
    return !!e.WebGLRenderingContext;
  }, M.touch = function () {
    var n;return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : F(["@media (", S.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
      n = 9 === e.offsetTop;
    }), n;
  }, M.geolocation = function () {
    return "geolocation" in navigator;
  }, M.postmessage = function () {
    return !!e.postMessage;
  }, M.websqldatabase = function () {
    return !!e.openDatabase;
  }, M.indexedDB = function () {
    return !!u("indexedDB", e);
  }, M.hashchange = function () {
    return A("hashchange", e) && (t.documentMode === n || t.documentMode > 7);
  }, M.history = function () {
    return !(!e.history || !history.pushState);
  }, M.draganddrop = function () {
    var e = t.createElement("div");return "draggable" in e || "ondragstart" in e && "ondrop" in e;
  }, M.websockets = function () {
    return "WebSocket" in e || "MozWebSocket" in e;
  }, M.rgba = function () {
    return r("background-color:rgba(150,255,150,.5)"), i(b.backgroundColor, "rgba");
  }, M.hsla = function () {
    return r("background-color:hsla(120,40%,100%,.5)"), i(b.backgroundColor, "rgba") || i(b.backgroundColor, "hsla");
  }, M.multiplebgs = function () {
    return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background);
  }, M.backgroundsize = function () {
    return u("backgroundSize");
  }, M.borderimage = function () {
    return u("borderImage");
  }, M.borderradius = function () {
    return u("borderRadius");
  }, M.boxshadow = function () {
    return u("boxShadow");
  }, M.textshadow = function () {
    return "" === t.createElement("div").style.textShadow;
  }, M.opacity = function () {
    return o("opacity:.55"), /^0.55$/.test(b.opacity);
  }, M.cssanimations = function () {
    return u("animationName");
  }, M.csscolumns = function () {
    return u("columnCount");
  }, M.cssgradients = function () {
    var e = "background-image:",
        t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        n = "linear-gradient(left top,#9f9, white);";return r((e + "-webkit- ".split(" ").join(t + e) + S.join(n + e)).slice(0, -e.length)), i(b.backgroundImage, "gradient");
  }, M.cssreflections = function () {
    return u("boxReflect");
  }, M.csstransforms = function () {
    return !!u("transform");
  }, M.csstransforms3d = function () {
    var e = !!u("perspective");return e && "webkitPerspective" in g.style && F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t) {
      e = 9 === t.offsetLeft && 3 === t.offsetHeight;
    }), e;
  }, M.csstransitions = function () {
    return u("transition");
  }, M.fontface = function () {
    var e;return F('@font-face {font-family:"font";src:url("https://")}', function (n, r) {
      var o = t.getElementById("smodernizr"),
          a = o.sheet || o.styleSheet,
          i = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "";e = /src/i.test(i) && 0 === i.indexOf(r.split(" ")[0]);
    }), e;
  }, M.generatedcontent = function () {
    var e;return F(["#", v, "{font:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
      e = t.offsetHeight >= 3;
    }), e;
  }, M.video = function () {
    var e = t.createElement("video"),
        n = !1;try {
      (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
    } catch (r) {}return n;
  }, M.audio = function () {
    var e = t.createElement("audio"),
        n = !1;try {
      (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""));
    } catch (r) {}return n;
  }, M.localstorage = function () {
    try {
      return localStorage.setItem(v, v), localStorage.removeItem(v), !0;
    } catch (e) {
      return !1;
    }
  }, M.sessionstorage = function () {
    try {
      return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0;
    } catch (e) {
      return !1;
    }
  }, M.webworkers = function () {
    return !!e.Worker;
  }, M.applicationcache = function () {
    return !!e.applicationCache;
  }, M.svg = function () {
    return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect;
  }, M.inlinesvg = function () {
    var e = t.createElement("div");return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg;
  }, M.smil = function () {
    return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(N.svg, "animate")));
  }, M.svgclippaths = function () {
    return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(N.svg, "clipPath")));
  };for (var H in M) f(M, H) && (d = H.toLowerCase(), p[d] = M[H](), $.push((p[d] ? "" : "no-") + d));return p.input || l(), p.addTest = function (e, t) {
    if ("object" == typeof e) for (var r in e) f(e, r) && p.addTest(r, e[r]);else {
      if (e = e.toLowerCase(), p[e] !== n) return p;t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e), p[e] = t;
    }return p;
  }, r(""), y = E = null, function (e, t) {
    function n(e, t) {
      var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild);
    }function r() {
      var e = y.elements;return "string" == typeof e ? e.split(" ") : e;
    }function o(e) {
      var t = v[e[h]];return t || (t = {}, g++, e[h] = g, v[g] = t), t;
    }function a(e, n, r) {
      if (n || (n = t), l) return n.createElement(e);r || (r = o(n));var a;return a = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a);
    }function i(e, n) {
      if (e || (e = t), l) return e.createDocumentFragment();n = n || o(e);for (var a = n.frag.cloneNode(), i = 0, c = r(), s = c.length; s > i; i++) a.createElement(c[i]);return a;
    }function c(e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
        return y.shivMethods ? a(n, e, t) : t.createElem(n);
      }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function (e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
      }) + ");return n}")(y, t.frag);
    }function s(e) {
      e || (e = t);var r = o(e);return !y.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || c(e, r), e;
    }var u,
        l,
        d = "3.7.0",
        f = e.html5 || {},
        m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        h = "_html5shiv",
        g = 0,
        v = {};!function () {
      try {
        var e = t.createElement("a");e.innerHTML = "<xyz></xyz>", u = "hidden" in e, l = 1 == e.childNodes.length || function () {
          t.createElement("a");var e = t.createDocumentFragment();return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement;
        }();
      } catch (n) {
        u = !0, l = !0;
      }
    }();var y = { elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: d, shivCSS: f.shivCSS !== !1, supportsUnknownElements: l, shivMethods: f.shivMethods !== !1, type: "default", shivDocument: s, createElement: a, createDocumentFragment: i };e.html5 = y, s(t);
  }(this, t), p._version = m, p._prefixes = S, p._domPrefixes = T, p._cssomPrefixes = k, p.mq = z, p.hasEvent = A, p.testProp = function (e) {
    return c([e]);
  }, p.testAllProps = u, p.testStyles = F, p.prefixed = function (e, t, n) {
    return t ? u(e, t, n) : u(e, "pfx");
  }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + $.join(" ") : ""), p;
}(this, this.document);
function hexToRgb(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;e = e.replace(a, function (e, a, t, i) {
    return a + a + t + t + i + i;
  });var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t);
}function isInArray(e, a) {
  return a.indexOf(e) > -1;
}var pJS = function pJS(e, a) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");this.pJS = { canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight }, particles: { number: { value: 400, density: { enable: !0, value_area: 800 } }, color: { value: "#fff" }, shape: { type: "circle", stroke: { width: 0, color: "#ff0000" }, polygon: { nb_sides: 5 }, image: { src: "", width: 100, height: 100 } }, opacity: { value: 1, random: !1, anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 } }, size: { value: 20, random: !1, anim: { enable: !1, speed: 20, size_min: 0, sync: !1 } }, line_linked: { enable: !0, distance: 100, color: "#fff", opacity: 1, width: 1 }, move: { enable: !0, speed: 2, direction: "none", random: !1, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 } }, array: [] }, interactivity: { detect_on: "canvas", events: { onhover: { enable: !0, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 }, modes: { grab: { distance: 100, line_linked: { opacity: 1 } }, bubble: { distance: 200, size: 80, duration: .4 }, repulse: { distance: 200, duration: .4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }, mouse: {} }, retina_detect: !1, fn: { interact: {}, modes: {}, vendors: {} }, tmp: {} };var i = this.pJS;a && Object.deepExtend(i, a), i.tmp.obj = { size_value: i.particles.size.value, size_anim_speed: i.particles.size.anim.speed, move_speed: i.particles.move.speed, line_linked_distance: i.particles.line_linked.distance, line_linked_width: i.particles.line_linked.width, mode_grab_distance: i.interactivity.modes.grab.distance, mode_bubble_distance: i.interactivity.modes.bubble.distance, mode_bubble_size: i.interactivity.modes.bubble.size, mode_repulse_distance: i.interactivity.modes.repulse.distance }, i.fn.retinaInit = function () {
    i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio;
  }, i.fn.canvasInit = function () {
    i.canvas.ctx = i.canvas.el.getContext("2d");
  }, i.fn.canvasSize = function () {
    i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
      i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles();
    });
  }, i.fn.canvasPaint = function () {
    i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.canvasClear = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.particle = function (e, a, t) {
    if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == typeof e.value) {
      if (e.value instanceof Array) {
        var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];this.color.rgb = hexToRgb(s);
      } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
    } else "random" == e.value ? this.color.rgb = { r: Math.floor(256 * Math.random()) + 0, g: Math.floor(256 * Math.random()) + 0, b: Math.floor(256 * Math.random()) + 0 } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));var n = {};switch (i.particles.move.direction) {case "top":
        n = { x: 0, y: -1 };break;case "top-right":
        n = { x: .5, y: -.5 };break;case "right":
        n = { x: 1, y: -0 };break;case "bottom-right":
        n = { x: .5, y: .5 };break;case "bottom":
        n = { x: 0, y: 1 };break;case "bottom-left":
        n = { x: -.5, y: 1 };break;case "left":
        n = { x: -1, y: 0 };break;case "top-left":
        n = { x: -.5, y: -.5 };break;default:
        n = { x: 0, y: 0 };}i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;var r = i.particles.shape.type;if ("object" == typeof r) {
      if (r instanceof Array) {
        var c = r[Math.floor(Math.random() * r.length)];this.shape = c;
      }
    } else this.shape = r;if ("image" == this.shape) {
      var o = i.particles.shape;this.img = { src: o.image.src, ratio: o.image.width / o.image.height }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1));
    }
  }, i.fn.particle.prototype.draw = function () {
    function e() {
      i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio);
    }var a = this;if (void 0 != a.radius_bubble) var t = a.radius_bubble;else var t = a.radius;if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;else var s = a.opacity;if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) {case "circle":
        i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);break;case "edge":
        i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);break;case "triangle":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);break;case "polygon":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);break;case "star":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);break;case "image":
        if ("svg" == i.tmp.img_type) var r = a.img.obj;else var r = i.tmp.img_obj;r && e();}i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill();
  }, i.fn.particlesCreate = function () {
    for (var e = 0; e < i.particles.number.value; e++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value));
  }, i.fn.particlesUpdate = function () {
    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];if (i.particles.move.enable) {
        var t = i.particles.move.speed / 2;a.x += a.vx * t, a.y += a.vy * t;
      }if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = { x_left: a.radius, x_right: i.canvas.w, y_top: a.radius, y_bottom: i.canvas.h };else var s = { x_left: -a.radius, x_right: i.canvas.w + a.radius, y_top: -a.radius, y_bottom: i.canvas.h + a.radius };switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {case "bounce":
          a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy);}if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable) for (var n = e + 1; n < i.particles.array.length; n++) {
        var r = i.particles.array[n];i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
      }
    }
  }, i.fn.particlesDraw = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];a.draw();
    }
  }, i.fn.particlesEmpty = function () {
    i.particles.array = [];
  }, i.fn.particlesRefresh = function () {
    cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start();
  }, i.fn.interact.linkParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);if (n <= i.particles.line_linked.distance) {
      var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;if (r > 0) {
        var c = i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
      }
    }
  }, i.fn.interact.attractParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);if (n <= i.particles.line_linked.distance) {
      var r = t / (1e3 * i.particles.move.attract.rotateX),
          c = s / (1e3 * i.particles.move.attract.rotateY);e.vx -= r, e.vy -= c, a.vx += r, a.vy += c;
    }
  }, i.fn.interact.bounceParticles = function (e, a) {
    var t = e.x - a.x,
        i = e.y - a.y,
        s = Math.sqrt(t * t + i * i),
        n = e.radius + a.radius;n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy);
  }, i.fn.modes.pushParticles = function (e, a) {
    i.tmp.pushing = !0;for (var t = 0; e > t; t++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, { x: a ? a.pos_x : Math.random() * i.canvas.w, y: a ? a.pos_y : Math.random() * i.canvas.h })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1);
  }, i.fn.modes.removeParticles = function (e) {
    i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw();
  }, i.fn.modes.bubbleParticle = function (e) {
    function a() {
      e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
    }function t(a, t, s, n, c) {
      if (a != t) if (i.tmp.bubble_duration_end) {
        if (void 0 != s) {
          var o = n - p * (n - a) / i.interactivity.modes.bubble.duration,
              l = a - o;d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else if (r <= i.interactivity.modes.bubble.distance) {
        if (void 0 != s) var v = s;else var v = n;if (v != a) {
          var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;"size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0);
    }if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
      var s = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(s * s + n * n),
          c = 1 - r / i.interactivity.modes.bubble.distance;if (r <= i.interactivity.modes.bubble.distance) {
        if (c >= 0 && "mousemove" == i.interactivity.status) {
          if (i.interactivity.modes.bubble.size != i.particles.size.value) if (i.interactivity.modes.bubble.size > i.particles.size.value) {
            var o = e.radius + i.interactivity.modes.bubble.size * c;o >= 0 && (e.radius_bubble = o);
          } else {
            var l = e.radius - i.interactivity.modes.bubble.size,
                o = e.radius - l * c;o > 0 ? e.radius_bubble = o : e.radius_bubble = 0;
          }if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value) if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
            var v = i.interactivity.modes.bubble.opacity * c;v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          } else {
            var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          }
        }
      } else a();"mouseleave" == i.interactivity.status && a();
    } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
      if (i.tmp.bubble_clicking) {
        var s = e.x - i.interactivity.mouse.click_pos_x,
            n = e.y - i.interactivity.mouse.click_pos_y,
            r = Math.sqrt(s * s + n * n),
            p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1);
      }i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
    }
  }, i.fn.modes.repulseParticle = function (e) {
    function a() {
      var a = Math.atan2(d, p);if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) {
        var t = { x: e.x + e.vx, y: e.y + e.vy };t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy);
      }
    }if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
      var t = e.x - i.interactivity.mouse.pos_x,
          s = e.y - i.interactivity.mouse.pos_y,
          n = Math.sqrt(t * t + s * s),
          r = { x: t / n, y: s / n },
          c = i.interactivity.modes.repulse.distance,
          o = 100,
          l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
          v = { x: e.x + r.x * l, y: e.y + r.y * l };"bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y);
    } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode)) if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
      var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
          p = i.interactivity.mouse.click_pos_x - e.x,
          d = i.interactivity.mouse.click_pos_y - e.y,
          m = p * p + d * d,
          u = -c / m * 1;c >= m && a();
    } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
  }, i.fn.modes.grabParticle = function (e) {
    if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
      var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s = Math.sqrt(a * a + t * t);if (s <= i.interactivity.modes.grab.distance) {
        var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;if (n > 0) {
          var r = i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
        }
      }
    }
  }, i.fn.vendors.eventsListeners = function () {
    "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) {
      if (i.interactivity.el == window) var a = e.clientX,
          t = e.clientY;else var a = e.offsetX || e.clientX,
          t = e.offsetY || e.clientY;i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove";
    }), i.interactivity.el.addEventListener("mouseleave", function (e) {
      i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave";
    })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
      if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = new Date().getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {case "push":
          i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case "remove":
          i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case "bubble":
          i.tmp.bubble_clicking = !0;break;case "repulse":
          i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
            i.tmp.repulse_clicking = !1;
          }, 1e3 * i.interactivity.modes.repulse.duration);}
    });
  }, i.fn.vendors.densityAutoParticles = function () {
    if (i.particles.number.density.enable) {
      var e = i.canvas.el.width * i.canvas.el.height / 1e3;i.tmp.retina && (e /= 2 * i.canvas.pxratio);var a = e * i.particles.number.value / i.particles.number.density.value_area,
          t = i.particles.array.length - a;0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t);
    }
  }, i.fn.vendors.checkOverlap = function (e, a) {
    for (var t = 0; t < i.particles.array.length; t++) {
      var s = i.particles.array[t],
          n = e.x - s.x,
          r = e.y - s.y,
          c = Math.sqrt(n * n + r * r);c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e));
    }
  }, i.fn.vendors.createSvgImg = function (e) {
    var a = i.tmp.source_svg,
        t = /#([0-9A-F]{3,6})/gi,
        s = a.replace(t, function (a, t, i, s) {
      if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";return n;
    }),
        n = new Blob([s], { type: "image/svg+xml;charset=utf-8" }),
        r = window.URL || window.webkitURL || window,
        c = r.createObjectURL(n),
        o = new Image();o.addEventListener("load", function () {
      e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++;
    }), o.src = c;
  }, i.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null;
  }, i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
    var r = s * n,
        c = s / n,
        o = 180 * (c - 2) / c,
        l = Math.PI - Math.PI * o / 180;e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);for (var v = 0; r > v; v++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);e.fill(), e.restore();
  }, i.fn.vendors.exportImg = function () {
    window.open(i.canvas.el.toDataURL("image/png"), "_blank");
  }, i.fn.vendors.loadImg = function (e) {
    if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src) {
      if ("svg" == e) {
        var a = new XMLHttpRequest();a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function (e) {
          4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0));
        }, a.send();
      } else {
        var t = new Image();t.addEventListener("load", function () {
          i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw();
        }), t.src = i.particles.shape.image.src;
      }
    } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0;
  }, i.fn.vendors.draw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame));
  }, i.fn.vendors.checkBeforeDraw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw());
  }, i.fn.vendors.init = function () {
    i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color);
  }, i.fn.vendors.start = function () {
    isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw();
  }, i.fn.vendors.eventsListeners(), i.fn.vendors.start();
};Object.deepExtend = function (e, a) {
  for (var t in a) a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t];return e;
}, window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60);
  };
}(), window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}(), window.pJSDom = [], window.particlesJS = function (e, a) {
  "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");var t = document.getElementById(e),
      i = "particles-js-canvas-el",
      s = t.getElementsByClassName(i);if (s.length) for (; s.length > 0;) t.removeChild(s[0]);var n = document.createElement("canvas");n.className = i, n.style.width = "100%", n.style.height = "100%";var r = document.getElementById(e).appendChild(n);null != r && pJSDom.push(new pJS(e, a));
}, window.particlesJS.load = function (e, a, t) {
  var i = new XMLHttpRequest();i.open("GET", a), i.onreadystatechange = function (a) {
    if (4 == i.readyState) if (200 == i.status) {
      var s = JSON.parse(a.currentTarget.response);window.particlesJS(e, s), t && t();
    } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found");
  }, i.send();
};
!function (t, e) {
  "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.ScrollReveal = e();
}(undefined, function (t, e, i) {
  return function () {
    var t, e, i;this.ScrollReveal = function () {
      function n(i) {
        return window == this ? new n(i) : (e = this, e.tools = new t(), e.tools.extend(e.defaults, i || {}), e.supported() || console.log("ScrollReveal is not supported in this browser."), e.store = { elements: {}, containers: [] }, e.history = [], e.counter = 0, e.initialized = !1, e);
      }function o(t, i) {
        t.config ? t.config = e.tools.extendClone(t.config, i) : t.config = e.tools.extendClone(e.defaults, i), "top" === t.config.origin || "bottom" === t.config.origin ? t.config.axis = "Y" : t.config.axis = "X", ("top" === t.config.origin || "left" === t.config.origin) && (t.config.distance = "-" + t.config.distance);
      }function r(t) {
        function e(e) {
          parseInt(i.distance) && (e.initial += " translate" + i.axis + "(" + i.distance + ")", e.target += " translate" + i.axis + "(0)"), i.scale && (e.initial += " scale(" + i.scale + ")", e.target += " scale(1)"), i.rotate.x && (e.initial += " rotateX(" + i.rotate.x + "deg)", e.target += " rotateX(0)"), i.rotate.y && (e.initial += " rotateY(" + i.rotate.y + "deg)", e.target += " rotateY(0)"), i.rotate.z && (e.initial += " rotateZ(" + i.rotate.z + "deg)", e.target += " rotateZ(0)"), e.initial += "; opacity: " + i.opacity + ";", e.target += "; opacity: " + t.styles.computed.opacity + ";";
        }var i = t.config,
            n = window.getComputedStyle(t.domEl);t.styles || (t.styles = { transition: {}, transform: {}, computed: {} }, t.styles.inline = t.domEl.getAttribute("style") || "", t.styles.inline += "; visibility: visible; ", t.styles.computed.opacity = n.opacity, n.transition && "all 0s ease 0s" != n.transition ? t.styles.computed.transition = n.transition + ", " : t.styles.computed.transition = ""), t.styles.transition.instant = "-webkit-transition: " + t.styles.computed.transition + "-webkit-transform " + i.duration / 1e3 + "s " + i.easing + " 0s, opacity " + i.duration / 1e3 + "s " + i.easing + " 0s; transition: " + t.styles.computed.transition + "transform " + i.duration / 1e3 + "s " + i.easing + " 0s, opacity " + i.duration / 1e3 + "s " + i.easing + " 0s; ", t.styles.transition.delayed = "-webkit-transition: " + t.styles.computed.transition + "-webkit-transform " + i.duration / 1e3 + "s " + i.easing + " " + i.delay / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + i.delay / 1e3 + "s; transition: " + t.styles.computed.transition + "transform " + i.duration / 1e3 + "s " + i.easing + " " + i.delay / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + i.delay / 1e3 + "s; ", t.styles.transform.initial = " -webkit-transform:", t.styles.transform.target = " -webkit-transform:", e(t.styles.transform), t.styles.transform.initial += "transform:", t.styles.transform.target += "transform:", e(t.styles.transform);
      }function s(t) {
        var i = t.config.container;i && -1 == e.store.containers.indexOf(i) && e.store.containers.push(t.config.container), e.store.elements[t.id] = t;
      }function a(t, i) {
        var n = { selector: t, config: i };e.history.push(n);
      }function l() {
        if (e.supported()) {
          f();for (var t = 0; t < e.store.containers.length; t++) e.store.containers[t].addEventListener("scroll", c), e.store.containers[t].addEventListener("resize", c);e.initialized || (window.addEventListener("scroll", c), window.addEventListener("resize", c), e.initialized = !0);
        }return e;
      }function c() {
        i(f);
      }function f() {
        function t(t, e) {
          var i = 0,
              n = 0,
              o = "after";switch (t) {case "reveal":
              n = e.config.duration + e.config.delay, o += "Reveal";break;case "reset":
              n = e.config.duration, o += "Reset";}return e.timer && (i = Math.abs(e.timer.started - new Date()), window.clearTimeout(e.timer.clock)), e.timer = { started: new Date() }, e.timer.clock = window.setTimeout(function () {
            e.config[o](e.domEl), e.timer = null;
          }, n - i), "reveal" === t ? e.revealed = !0 : e.revealed = !1;
        }var i, n;e.tools.forOwn(e.store.elements, function (o) {
          return i = e.store.elements[o], n = m(i), !n || i.revealed || i.disabled ? void (!n && i.config.reset && i.revealed && !i.disabled && (i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.initial + i.styles.transition.instant), t("reset", i))) : ("always" === i.config.useDelay || "onload" === i.config.useDelay && !e.initialized || "once" === i.config.useDelay && !i.seen ? i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.target + i.styles.transition.delayed) : i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.target + i.styles.transition.instant), t("reveal", i), i.seen = !0);
        });
      }function d(t) {
        t || (t = window.document.documentElement);var e = t.clientWidth,
            i = t.clientHeight;return { width: e, height: i };
      }function u(t) {
        if (t) {
          var e = y(t);return { x: t.scrollLeft + e.left, y: t.scrollTop + e.top };
        }return { x: window.pageXOffset, y: window.pageYOffset };
      }function y(t) {
        var e = 0,
            i = 0,
            n = t.offsetHeight,
            o = t.offsetWidth;do isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft); while (t = t.offsetParent);return { top: e, left: i, height: n, width: o };
      }function m(t) {
        function e() {
          var e = c + a * s,
              i = f + l * s,
              n = m - a * s,
              d = g - l * s,
              u = r.y + t.config.viewOffset.top,
              y = r.x + t.config.viewOffset.left,
              p = r.y - t.config.viewOffset.bottom + o.height,
              w = r.x - t.config.viewOffset.right + o.width;return p > e && n > u && i > y && w > d;
        }function i() {
          return "fixed" === window.getComputedStyle(t.domEl).position;
        }var n = y(t.domEl),
            o = d(t.config.container),
            r = u(t.config.container),
            s = t.config.viewFactor,
            a = n.height,
            l = n.width,
            c = n.top,
            f = n.left,
            m = c + a,
            g = f + l;return e() || i();
      }return n.prototype.defaults = { origin: "bottom", distance: "20px", duration: 500, delay: 0, rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: .9, easing: "cubic-bezier( 0.6, 0.2, 0.1, 1 )", container: null, mobile: !0, reset: !1, useDelay: "always", viewFactor: .2, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, afterReveal: function afterReveal(t) {}, afterReset: function afterReset(t) {} }, n.prototype.supported = function () {
        var t = document.documentElement.style;return "WebkitTransition" in t && "WebkitTransform" in t || "transition" in t && "transform" in t ? !0 : !1;
      }, n.prototype.reveal = function (t, i, n) {
        var c, f, d, u;if (f = i && i.container ? i.container : e.defaults.container ? e.defaults.container : window.document.documentElement, c = Array.prototype.slice.call(f.querySelectorAll(t)), !c.length) return console.log("reveal('" + t + "') failed: no elements found."), e;for (var y = 0; y < c.length; y++) u = c[y].getAttribute("data-sr-id"), u ? d = e.store.elements[u] : (d = { id: ++e.counter, domEl: c[y], seen: !1, revealed: !1 }, d.domEl.setAttribute("data-sr-id", d.id)), o(d, i || {}), r(d), s(d), e.tools.isMobile() && !d.config.mobile || !e.supported() ? (d.domEl.setAttribute("style", d.styles.inline), d.disabled = !0) : d.revealed || d.domEl.setAttribute("style", d.styles.inline + d.styles.transform.initial);return !n && e.supported() && (a(t, i), e.initTimeout && window.clearTimeout(e.initTimeout), e.initTimeout = window.setTimeout(l, 0)), e;
      }, n.prototype.sync = function () {
        if (e.history.length && e.supported()) {
          for (var t = 0; t < e.history.length; t++) {
            var i = e.history[t];e.reveal(i.selector, i.config, !0);
          }l();
        } else console.log("sync() failed: no reveals found.");return e;
      }, n;
    }();var t = function () {
      function t() {}return t.prototype.isObject = function (t) {
        return null !== t && "object" == typeof t && t.constructor == Object;
      }, t.prototype.forOwn = function (t, e) {
        if (!this.isObject(t)) throw new TypeError("Expected 'object', but received '" + typeof t + "'.");for (var i in t) t.hasOwnProperty(i) && e(i);
      }, t.prototype.extend = function (t, e) {
        return this.forOwn(e, function (i) {
          this.isObject(e[i]) ? (t[i] && this.isObject(t[i]) || (t[i] = {}), this.extend(t[i], e[i])) : t[i] = e[i];
        }.bind(this)), t;
      }, t.prototype.extendClone = function (t, e) {
        return this.extend(this.extend({}, t), e);
      }, t.prototype.isMobile = function () {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        );
      }, t;
    }(),
        i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  }.call(this), this.ScrollReveal;
});!function () {
  var t, e, n, r, o, i, a, l, s, c;e = window.device, t = {}, window.device = t, r = window.document.documentElement, c = window.navigator.userAgent.toLowerCase(), t.ios = function () {
    return t.iphone() || t.ipod() || t.ipad();
  }, t.iphone = function () {
    return !t.windows() && o("iphone");
  }, t.ipod = function () {
    return o("ipod");
  }, t.ipad = function () {
    return o("ipad");
  }, t.android = function () {
    return !t.windows() && o("android");
  }, t.androidPhone = function () {
    return t.android() && o("mobile");
  }, t.androidTablet = function () {
    return t.android() && !o("mobile");
  }, t.blackberry = function () {
    return o("blackberry") || o("bb10") || o("rim");
  }, t.blackberryPhone = function () {
    return t.blackberry() && !o("tablet");
  }, t.blackberryTablet = function () {
    return t.blackberry() && o("tablet");
  }, t.windows = function () {
    return o("windows");
  }, t.windowsPhone = function () {
    return t.windows() && o("phone");
  }, t.windowsTablet = function () {
    return t.windows() && o("touch") && !t.windowsPhone();
  }, t.fxos = function () {
    return (o("(mobile;") || o("(tablet;")) && o("; rv:");
  }, t.fxosPhone = function () {
    return t.fxos() && o("mobile");
  }, t.fxosTablet = function () {
    return t.fxos() && o("tablet");
  }, t.meego = function () {
    return o("meego");
  }, t.cordova = function () {
    return window.cordova && "file:" === location.protocol;
  }, t.nodeWebkit = function () {
    return "object" == typeof window.process;
  }, t.mobile = function () {
    return t.androidPhone() || t.iphone() || t.ipod() || t.windowsPhone() || t.blackberryPhone() || t.fxosPhone() || t.meego();
  }, t.tablet = function () {
    return t.ipad() || t.androidTablet() || t.blackberryTablet() || t.windowsTablet() || t.fxosTablet();
  }, t.desktop = function () {
    return !t.tablet() && !t.mobile();
  }, t.television = function () {
    var t;for (television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"], t = 0; t < television.length;) {
      if (o(television[t])) return !0;t++;
    }return !1;
  }, t.portrait = function () {
    return window.innerHeight / window.innerWidth > 1;
  }, t.landscape = function () {
    return window.innerHeight / window.innerWidth < 1;
  }, t.noConflict = function () {
    return window.device = e, this;
  }, o = function (t) {
    return -1 !== c.indexOf(t);
  }, a = function (t) {
    var e;return e = new RegExp(t, "i"), r.className.match(e);
  }, n = function (t) {
    var e = null;a(t) || (e = r.className.replace(/^\s+|\s+$/g, ""), r.className = e + " " + t);
  }, s = function (t) {
    a(t) && (r.className = r.className.replace(" " + t, ""));
  }, t.ios() ? t.ipad() ? n("ios ipad tablet") : t.iphone() ? n("ios iphone mobile") : t.ipod() && n("ios ipod mobile") : t.android() ? n(t.androidTablet() ? "android tablet" : "android mobile") : t.blackberry() ? n(t.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : t.windows() ? n(t.windowsTablet() ? "windows tablet" : t.windowsPhone() ? "windows mobile" : "desktop") : t.fxos() ? n(t.fxosTablet() ? "fxos tablet" : "fxos mobile") : t.meego() ? n("meego mobile") : t.nodeWebkit() ? n("node-webkit") : t.television() ? n("television") : t.desktop() && n("desktop"), t.cordova() && n("cordova"), i = function () {
    t.landscape() ? (s("portrait"), n("landscape")) : (s("landscape"), n("portrait"));
  }, l = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(l, i, !1) : window.attachEvent ? window.attachEvent(l, i) : window[l] = i, i(), "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
    return t;
  }) : "undefined" != typeof module && module.exports ? module.exports = t : window.device = t;
}.call(undefined);
!function (t, e, i, s) {
  "use strict";
  function o(e, i) {
    this.element = e, this.$context = t(e).data("api", this), this.$layers = this.$context.find(".layer");var s = { calibrateX: this.$context.data("calibrate-x") || null, calibrateY: this.$context.data("calibrate-y") || null, invertX: this.$context.data("invert-x") || null, invertY: this.$context.data("invert-y") || null, limitX: parseFloat(this.$context.data("limit-x")) || null, limitY: parseFloat(this.$context.data("limit-y")) || null, scalarX: parseFloat(this.$context.data("scalar-x")) || null, scalarY: parseFloat(this.$context.data("scalar-y")) || null, frictionX: parseFloat(this.$context.data("friction-x")) || null, frictionY: parseFloat(this.$context.data("friction-y")) || null, originX: parseFloat(this.$context.data("origin-x")) || null, originY: parseFloat(this.$context.data("origin-y")) || null };for (var o in s) null === s[o] && delete s[o];t.extend(this, a, i, s), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise();
  }var n = "parallax",
      r = 30,
      a = { relativeInput: !1, clipRelativeInput: !1, calibrationThreshold: 100, calibrationDelay: 500, supportDelay: 500, calibrateX: !1, calibrateY: !0, invertX: !0, invertY: !0, limitX: !1, limitY: !1, scalarX: 10, scalarY: 10, frictionX: .1, frictionY: .1, originX: .5, originY: .5 };o.prototype.transformSupport = function (t) {
    for (var o = i.createElement("div"), n = !1, r = null, a = !1, l = null, h = null, c = 0, d = this.vendors.length; d > c; c++) if (null !== this.vendors[c] ? (l = this.vendors[c][0] + "transform", h = this.vendors[c][1] + "Transform") : (l = "transform", h = "transform"), o.style[h] !== s) {
      n = !0;break;
    }switch (t) {case "2D":
        a = n;break;case "3D":
        if (n) {
          var u = i.body || i.createElement("body"),
              p = i.documentElement,
              m = p.style.overflow;i.body || (p.style.overflow = "hidden", p.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(o), o.style[h] = "translate3d(1px,1px,1px)", r = e.getComputedStyle(o).getPropertyValue(l), a = r !== s && r.length > 0 && "none" !== r, p.style.overflow = m, u.removeChild(o);
        }}return a;
  }, o.prototype.ww = null, o.prototype.wh = null, o.prototype.wcx = null, o.prototype.wcy = null, o.prototype.wrx = null, o.prototype.wry = null, o.prototype.portrait = null, o.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), o.prototype.vendors = [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]], o.prototype.motionSupport = !!e.DeviceMotionEvent, o.prototype.orientationSupport = !!e.DeviceOrientationEvent, o.prototype.orientationStatus = 0, o.prototype.transform2DSupport = o.prototype.transformSupport("2D"), o.prototype.transform3DSupport = o.prototype.transformSupport("3D"), o.prototype.propertyCache = {}, o.prototype.initialise = function () {
    "static" === this.$context.css("position") && this.$context.css({ position: "relative" }), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay);
  }, o.prototype.updateLayers = function () {
    this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({ position: "absolute", display: "block", left: 0, top: 0 }), this.$layers.first().css({ position: "relative" }), this.accelerate(this.$layers), this.$layers.each(t.proxy(function (e, i) {
      this.depths.push(t(i).data("depth") || 0);
    }, this));
  }, o.prototype.updateDimensions = function () {
    this.ww = e.innerWidth, this.wh = e.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy);
  }, o.prototype.updateBounds = function () {
    this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy);
  }, o.prototype.queueCalibration = function (t) {
    clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t);
  }, o.prototype.enable = function () {
    this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, e.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, e.addEventListener("mousemove", this.onMouseMove)), e.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame));
  }, o.prototype.disable = function () {
    this.enabled && (this.enabled = !1, this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : e.removeEventListener("mousemove", this.onMouseMove), e.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf));
  }, o.prototype.calibrate = function (t, e) {
    this.calibrateX = t === s ? this.calibrateX : t, this.calibrateY = e === s ? this.calibrateY : e;
  }, o.prototype.invert = function (t, e) {
    this.invertX = t === s ? this.invertX : t, this.invertY = e === s ? this.invertY : e;
  }, o.prototype.friction = function (t, e) {
    this.frictionX = t === s ? this.frictionX : t, this.frictionY = e === s ? this.frictionY : e;
  }, o.prototype.scalar = function (t, e) {
    this.scalarX = t === s ? this.scalarX : t, this.scalarY = e === s ? this.scalarY : e;
  }, o.prototype.limit = function (t, e) {
    this.limitX = t === s ? this.limitX : t, this.limitY = e === s ? this.limitY : e;
  }, o.prototype.origin = function (t, e) {
    this.originX = t === s ? this.originX : t, this.originY = e === s ? this.originY : e;
  }, o.prototype.clamp = function (t, e, i) {
    return t = Math.max(t, e), t = Math.min(t, i);
  }, o.prototype.css = function (e, i, o) {
    var n = this.propertyCache[i];if (!n) for (var r = 0, a = this.vendors.length; a > r; r++) if (n = null !== this.vendors[r] ? t.camelCase(this.vendors[r][1] + "-" + i) : i, e.style[n] !== s) {
      this.propertyCache[i] = n;break;
    }e.style[n] = o;
  }, o.prototype.accelerate = function (t) {
    for (var e = 0, i = t.length; i > e; e++) {
      var s = t[e];this.css(s, "transform", "translate3d(0,0,0)"), this.css(s, "transform-style", "preserve-3d"), this.css(s, "backface-visibility", "hidden");
    }
  }, o.prototype.setPosition = function (t, e, i) {
    e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i);
  }, o.prototype.onOrientationTimer = function (t) {
    this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable());
  }, o.prototype.onCalibrationTimer = function (t) {
    this.calibrationFlag = !0;
  }, o.prototype.onWindowResize = function (t) {
    this.updateDimensions();
  }, o.prototype.onAnimationFrame = function () {
    this.updateBounds();var t = this.ix - this.cx,
        e = this.iy - this.cy;(Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;for (var i = 0, s = this.$layers.length; s > i; i++) {
      var o = this.depths[i],
          n = this.$layers[i],
          r = this.vx * o * (this.invertX ? -1 : 1),
          a = this.vy * o * (this.invertY ? -1 : 1);this.setPosition(n, r, a);
    }this.raf = requestAnimationFrame(this.onAnimationFrame);
  }, o.prototype.onDeviceOrientation = function (t) {
    if (!this.desktop && null !== t.beta && null !== t.gamma) {
      this.orientationStatus = 1;var i = (t.beta || 0) / r,
          s = (t.gamma || 0) / r,
          o = e.innerHeight > e.innerWidth;this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = s), this.ix = i, this.iy = s;
    }
  }, o.prototype.onMouseMove = function (t) {
    var e = t.clientX,
        i = t.clientY;!this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry);
  };var l = { enable: o.prototype.enable, disable: o.prototype.disable, updateLayers: o.prototype.updateLayers, calibrate: o.prototype.calibrate, friction: o.prototype.friction, invert: o.prototype.invert, scalar: o.prototype.scalar, limit: o.prototype.limit, origin: o.prototype.origin };t.fn[n] = function (e) {
    var i = arguments;return this.each(function () {
      var s = t(this),
          r = s.data(n);r || (r = new o(this, e), s.data(n, r)), l[e] && r[e].apply(r, Array.prototype.slice.call(i, 1));
    });
  };
}(window.jQuery || window.Zepto, window, document), function () {
  for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];window.requestAnimationFrame || (window.requestAnimationFrame = function (e, i) {
    var s = new Date().getTime(),
        o = Math.max(0, 16 - (s - t)),
        n = window.setTimeout(function () {
      e(s + o);
    }, o);return t = s + o, n;
  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
    clearTimeout(t);
  });
}();
!function (t) {
  t.extend(t.fn, { validate: function validate(e) {
      if (!this.length) return void (e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));var r = t.data(this[0], "validator");return r ? r : (this.attr("novalidate", "novalidate"), r = new t.validator(e, this[0]), t.data(this[0], "validator", r), r.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
        r.settings.submitHandler && (r.submitButton = e.target), t(e.target).hasClass("cancel") && (r.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (r.cancelSubmit = !0);
      }), this.submit(function (e) {
        function a() {
          var a;return r.settings.submitHandler ? (r.submitButton && (a = t("<input type='hidden'/>").attr("name", r.submitButton.name).val(t(r.submitButton).val()).appendTo(r.currentForm)), r.settings.submitHandler.call(r, r.currentForm, e), r.submitButton && a.remove(), !1) : !0;
        }return r.settings.debug && e.preventDefault(), r.cancelSubmit ? (r.cancelSubmit = !1, a()) : r.form() ? r.pendingRequest ? (r.formSubmitted = !0, !1) : a() : (r.focusInvalid(), !1);
      })), r);
    }, valid: function valid() {
      if (t(this[0]).is("form")) return this.validate().form();var e = !0,
          r = t(this[0].form).validate();return this.each(function () {
        e = e && r.element(this);
      }), e;
    }, removeAttrs: function removeAttrs(e) {
      var r = {},
          a = this;return t.each(e.split(/\s/), function (t, e) {
        r[e] = a.attr(e), a.removeAttr(e);
      }), r;
    }, rules: function rules(e, r) {
      var a = this[0];if (e) {
        var i = t.data(a.form, "validator").settings,
            n = i.rules,
            s = t.validator.staticRules(a);switch (e) {case "add":
            t.extend(s, t.validator.normalizeRule(r)), delete s.messages, n[a.name] = s, r.messages && (i.messages[a.name] = t.extend(i.messages[a.name], r.messages));break;case "remove":
            if (!r) return delete n[a.name], s;var o = {};return t.each(r.split(/\s/), function (t, e) {
              o[e] = s[e], delete s[e];
            }), o;}
      }var u = t.validator.normalizeRules(t.extend({}, t.validator.classRules(a), t.validator.attributeRules(a), t.validator.dataRules(a), t.validator.staticRules(a)), a);if (u.required) {
        var l = u.required;delete u.required, u = t.extend({ required: l }, u);
      }return u;
    } }), t.extend(t.expr[":"], { blank: function blank(e) {
      return !t.trim("" + t(e).val());
    }, filled: function filled(e) {
      return !!t.trim("" + t(e).val());
    }, unchecked: function unchecked(e) {
      return !t(e).prop("checked");
    } }), t.validator = function (e, r) {
    this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = r, this.init();
  }, t.validator.format = function (e, r) {
    return 1 === arguments.length ? function () {
      var r = t.makeArray(arguments);return r.unshift(e), t.validator.format.apply(this, r);
    } : (arguments.length > 2 && r.constructor !== Array && (r = t.makeArray(arguments).slice(1)), r.constructor !== Array && (r = [r]), t.each(r, function (t, r) {
      e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
        return r;
      });
    }), e);
  }, t.extend(t.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusInvalid: !0, errorContainer: t([]), errorLabelContainer: t([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function onfocusin(t, e) {
        this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide());
      }, onfocusout: function onfocusout(t, e) {
        this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t);
      }, onkeyup: function onkeyup(t, e) {
        (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t);
      }, onclick: function onclick(t, e) {
        t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode);
      }, highlight: function highlight(e, r, a) {
        "radio" === e.type ? this.findByName(e.name).addClass(r).removeClass(a) : t(e).addClass(r).removeClass(a);
      }, unhighlight: function unhighlight(e, r, a) {
        "radio" === e.type ? this.findByName(e.name).removeClass(r).addClass(a) : t(e).removeClass(r).addClass(a);
      } }, setDefaults: function setDefaults(e) {
      t.extend(t.validator.defaults, e);
    }, messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: t.validator.format("Please enter no more than {0} characters."), minlength: t.validator.format("Please enter at least {0} characters."), rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."), range: t.validator.format("Please enter a value between {0} and {1}."), max: t.validator.format("Please enter a value less than or equal to {0}."), min: t.validator.format("Please enter a value greater than or equal to {0}.") }, autoCreateRanges: !1, prototype: { init: function init() {
        function e(e) {
          var r = t.data(this[0].form, "validator"),
              a = "on" + e.type.replace(/^validate/, "");r.settings[a] && r.settings[a].call(r, this[0], e);
        }this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();var r = this.groups = {};t.each(this.settings.groups, function (e, a) {
          "string" == typeof a && (a = a.split(/\s/)), t.each(a, function (t, a) {
            r[a] = e;
          });
        });var a = this.settings.rules;t.each(a, function (e, r) {
          a[e] = t.validator.normalizeRule(r);
        }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
      }, form: function form() {
        return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      }, checkForm: function checkForm() {
        this.prepareForm();for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);return this.valid();
      }, element: function element(e) {
        e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);var r = this.check(e) !== !1;return r ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r;
      }, showErrors: function showErrors(e) {
        if (e) {
          t.extend(this.errorMap, e), this.errorList = [];for (var r in e) this.errorList.push({ message: e[r], element: this.findByName(r)[0] });this.successList = t.grep(this.successList, function (t) {
            return !(t.name in e);
          });
        }this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      }, resetForm: function resetForm() {
        t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
      }, numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      }, objectLength: function objectLength(t) {
        var e = 0;for (var r in t) e++;return e;
      }, hideErrors: function hideErrors() {
        this.addWrapper(this.toHide).hide();
      }, valid: function valid() {
        return 0 === this.size();
      }, size: function size() {
        return this.errorList.length;
      }, focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (e) {}
      }, findLastActive: function findLastActive() {
        var e = this.lastActive;return e && 1 === t.grep(this.errorList, function (t) {
          return t.element.name === e.name;
        }).length && e;
      }, elements: function elements() {
        var e = this,
            r = {};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
          return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in r || !e.objectLength(t(this).rules()) ? !1 : (r[this.name] = !0, !0);
        });
      }, clean: function clean(e) {
        return t(e)[0];
      }, errors: function errors() {
        var e = this.settings.errorClass.replace(" ", ".");return t(this.settings.errorElement + "." + e, this.errorContext);
      }, reset: function reset() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([]);
      }, prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      }, prepareElement: function prepareElement(t) {
        this.reset(), this.toHide = this.errorsFor(t);
      }, elementValue: function elementValue(e) {
        var r = t(e).attr("type"),
            a = t(e).val();return "radio" === r || "checkbox" === r ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof a ? a.replace(/\r/g, "") : a;
      }, check: function check(e) {
        e = this.validationTargetFor(this.clean(e));var r,
            a = t(e).rules(),
            i = !1,
            n = this.elementValue(e);for (var s in a) {
          var o = { method: s, parameters: a[s] };try {
            if (r = t.validator.methods[s].call(this, n, e, o.parameters), "dependency-mismatch" === r) {
              i = !0;continue;
            }if (i = !1, "pending" === r) return void (this.toHide = this.toHide.not(this.errorsFor(e)));if (!r) return this.formatAndAdd(e, o), !1;
          } catch (u) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method.", u), u;
          }
        }return i ? void 0 : (this.objectLength(a) && this.successList.push(e), !0);
      }, customDataMessage: function customDataMessage(e, r) {
        return t(e).data("msg-" + r.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + r.toLowerCase());
      }, customMessage: function customMessage(t, e) {
        var r = this.settings.messages[t];return r && (r.constructor === String ? r : r[e]);
      }, findDefined: function findDefined() {
        for (var t = 0; t < arguments.length; t++) if (void 0 !== arguments[t]) return arguments[t];return void 0;
      }, defaultMessage: function defaultMessage(e, r) {
        return this.findDefined(this.customMessage(e.name, r), this.customDataMessage(e, r), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[r], "<strong>Warning: No message defined for " + e.name + "</strong>");
      }, formatAndAdd: function formatAndAdd(e, r) {
        var a = this.defaultMessage(e, r.method),
            i = /\$?\{(\d+)\}/g;"function" == typeof a ? a = a.call(this, r.parameters, e) : i.test(a) && (a = t.validator.format(a.replace(i, "{$1}"), r.parameters)), this.errorList.push({ message: a, element: e }), this.errorMap[e.name] = a, this.submitted[e.name] = a;
      }, addWrapper: function addWrapper(t) {
        return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t;
      }, defaultShowErrors: function defaultShowErrors() {
        var t, e;for (t = 0; this.errorList[t]; t++) {
          var r = this.errorList[t];this.settings.highlight && this.settings.highlight.call(this, r.element, this.settings.errorClass, this.settings.validClass), this.showLabel(r.element, r.message);
        }if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);if (this.settings.unhighlight) for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      }, validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      }, invalidElements: function invalidElements() {
        return t(this.errorList).map(function () {
          return this.element;
        });
      }, showLabel: function showLabel(e, r) {
        var a = this.errorsFor(e);a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(r)) : (a = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(r || ""), this.settings.wrapper && (a = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(a).length || (this.settings.errorPlacement ? this.settings.errorPlacement(a, t(e)) : a.insertAfter(e))), !r && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a);
      }, errorsFor: function errorsFor(e) {
        var r = this.idOrName(e);return this.errors().filter(function () {
          return t(this).attr("for") === r;
        });
      }, idOrName: function idOrName(t) {
        return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name);
      }, validationTargetFor: function validationTargetFor(t) {
        return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t;
      }, checkable: function checkable(t) {
        return (/radio|checkbox/i.test(t.type)
        );
      }, findByName: function findByName(e) {
        return t(this.currentForm).find("[name='" + e + "']");
      }, getLength: function getLength(e, r) {
        switch (r.nodeName.toLowerCase()) {case "select":
            return t("option:selected", r).length;case "input":
            if (this.checkable(r)) return this.findByName(r.name).filter(":checked").length;}return e.length;
      }, depend: function depend(t, e) {
        return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0;
      }, dependTypes: { "boolean": function boolean(t, e) {
          return t;
        }, string: function string(e, r) {
          return !!t(e, r.form).length;
        }, "function": function _function(t, e) {
          return t(e);
        } }, optional: function optional(e) {
        var r = this.elementValue(e);return !t.validator.methods.required.call(this, r, e) && "dependency-mismatch";
      }, startRequest: function startRequest(t) {
        this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0);
      }, stopRequest: function stopRequest(e, r) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], r && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !r && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      }, previousValue: function previousValue(e) {
        return t.data(e, "previousValue") || t.data(e, "previousValue", { old: null, valid: !0, message: this.defaultMessage(e, "remote") });
      } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function addClassRules(e, r) {
      e.constructor === String ? this.classRuleSettings[e] = r : t.extend(this.classRuleSettings, e);
    }, classRules: function classRules(e) {
      var r = {},
          a = t(e).attr("class");return a && t.each(a.split(" "), function () {
        this in t.validator.classRuleSettings && t.extend(r, t.validator.classRuleSettings[this]);
      }), r;
    }, attributeRules: function attributeRules(e) {
      var r = {},
          a = t(e),
          i = a[0].getAttribute("type");for (var n in t.validator.methods) {
        var s;"required" === n ? (s = a.get(0).getAttribute(n), "" === s && (s = !0), s = !!s) : s = a.attr(n), /min|max/.test(n) && (null === i || /number|range|text/.test(i)) && (s = Number(s)), s ? r[n] = s : i === n && "range" !== i && (r[n] = !0);
      }return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r;
    }, dataRules: function dataRules(e) {
      var r,
          a,
          i = {},
          n = t(e);for (r in t.validator.methods) a = n.data("rule-" + r.toLowerCase()), void 0 !== a && (i[r] = a);return i;
    }, staticRules: function staticRules(e) {
      var r = {},
          a = t.data(e.form, "validator");return a.settings.rules && (r = t.validator.normalizeRule(a.settings.rules[e.name]) || {}), r;
    }, normalizeRules: function normalizeRules(e, r) {
      return t.each(e, function (a, i) {
        if (i === !1) return void delete e[a];if (i.param || i.depends) {
          var n = !0;switch (typeof i.depends) {case "string":
              n = !!t(i.depends, r.form).length;break;case "function":
              n = i.depends.call(r, r);}n ? e[a] = void 0 !== i.param ? i.param : !0 : delete e[a];
        }
      }), t.each(e, function (a, i) {
        e[a] = t.isFunction(i) ? i(r) : i;
      }), t.each(["minlength", "maxlength"], function () {
        e[this] && (e[this] = Number(e[this]));
      }), t.each(["rangelength", "range"], function () {
        var r;e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (r = e[this].split(/[\s,]+/), e[this] = [Number(r[0]), Number(r[1])]));
      }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e;
    }, normalizeRule: function normalizeRule(e) {
      if ("string" == typeof e) {
        var r = {};t.each(e.split(/\s/), function () {
          r[this] = !0;
        }), e = r;
      }return e;
    }, addMethod: function addMethod(e, r, a) {
      t.validator.methods[e] = r, t.validator.messages[e] = void 0 !== a ? a : t.validator.messages[e], r.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e));
    }, methods: { required: function required(e, r, a) {
        if (!this.depend(a, r)) return "dependency-mismatch";if ("select" === r.nodeName.toLowerCase()) {
          var i = t(r).val();return i && i.length > 0;
        }return this.checkable(r) ? this.getLength(e, r) > 0 : t.trim(e).length > 0;
      }, email: function email(t, e) {
        return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t);
      }, url: function url(t, e) {
        return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t);
      }, date: function date(t, e) {
        return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString());
      }, dateISO: function dateISO(t, e) {
        return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t);
      }, number: function number(t, e) {
        return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);
      }, digits: function digits(t, e) {
        return this.optional(e) || /^\d+$/.test(t);
      }, creditcard: function creditcard(t, e) {
        if (this.optional(e)) return "dependency-mismatch";if (/[^0-9 \-]+/.test(t)) return !1;var r = 0,
            a = 0,
            i = !1;t = t.replace(/\D/g, "");for (var n = t.length - 1; n >= 0; n--) {
          var s = t.charAt(n);a = parseInt(s, 10), i && (a *= 2) > 9 && (a -= 9), r += a, i = !i;
        }return r % 10 === 0;
      }, minlength: function minlength(e, r, a) {
        var i = t.isArray(e) ? e.length : this.getLength(t.trim(e), r);return this.optional(r) || i >= a;
      }, maxlength: function maxlength(e, r, a) {
        var i = t.isArray(e) ? e.length : this.getLength(t.trim(e), r);return this.optional(r) || a >= i;
      }, rangelength: function rangelength(e, r, a) {
        var i = t.isArray(e) ? e.length : this.getLength(t.trim(e), r);return this.optional(r) || i >= a[0] && i <= a[1];
      }, min: function min(t, e, r) {
        return this.optional(e) || t >= r;
      }, max: function max(t, e, r) {
        return this.optional(e) || r >= t;
      }, range: function range(t, e, r) {
        return this.optional(e) || t >= r[0] && t <= r[1];
      }, equalTo: function equalTo(e, r, a) {
        var i = t(a);return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
          t(r).valid();
        }), e === i.val();
      }, remote: function remote(e, r, a) {
        if (this.optional(r)) return "dependency-mismatch";var i = this.previousValue(r);if (this.settings.messages[r.name] || (this.settings.messages[r.name] = {}), i.originalMessage = this.settings.messages[r.name].remote, this.settings.messages[r.name].remote = i.message, a = "string" == typeof a && { url: a } || a, i.old === e) return i.valid;i.old = e;var n = this;this.startRequest(r);var s = {};return s[r.name] = e, t.ajax(t.extend(!0, { url: a, mode: "abort", port: "validate" + r.name, dataType: "json", data: s, success: function success(a) {
            n.settings.messages[r.name].remote = i.originalMessage;var s = a === !0 || "true" === a;if (s) {
              var o = n.formSubmitted;n.prepareElement(r), n.formSubmitted = o, n.successList.push(r), delete n.invalid[r.name], n.showErrors();
            } else {
              var u = {},
                  l = a || n.defaultMessage(r, "remote");u[r.name] = i.message = t.isFunction(l) ? l(e) : l, n.invalid[r.name] = !0, n.showErrors(u);
            }i.valid = s, n.stopRequest(r, s);
          } }, a)), "pending";
      } } }), t.format = t.validator.format;
}(jQuery), function (t) {
  var e = {};if (t.ajaxPrefilter) t.ajaxPrefilter(function (t, r, a) {
    var i = t.port;"abort" === t.mode && (e[i] && e[i].abort(), e[i] = a);
  });else {
    var r = t.ajax;t.ajax = function (a) {
      var i = ("mode" in a ? a : t.ajaxSettings).mode,
          n = ("port" in a ? a : t.ajaxSettings).port;return "abort" === i ? (e[n] && e[n].abort(), e[n] = r.apply(this, arguments), e[n]) : r.apply(this, arguments);
    };
  }
}(jQuery), function (t) {
  t.extend(t.fn, { validateDelegate: function validateDelegate(e, r, a) {
      return this.bind(r, function (r) {
        var i = t(r.target);return i.is(e) ? a.apply(i, arguments) : void 0;
      });
    } });
}(jQuery);
!function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto);
}(function (e) {
  "use strict";
  function t(t) {
    var r = t.data;t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r));
  }function r(t) {
    var r = t.target,
        a = e(r);if (!a.is("[type=submit],[type=image]")) {
      var n = a.closest("[type=submit]");if (0 === n.length) return;r = n[0];
    }var i = this;if (i.clk = r, "image" == r.type) if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;else if ("function" == typeof e.fn.offset) {
      var o = a.offset();i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top;
    } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;setTimeout(function () {
      i.clk = i.clk_x = i.clk_y = null;
    }, 100);
  }function a() {
    if (e.fn.ajaxSubmit.debug) {
      var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t);
    }
  }var n = {};n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;var i = !!e.fn.prop;e.fn.attr2 = function () {
    if (!i) return this.attr.apply(this, arguments);var e = this.prop.apply(this, arguments);return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments);
  }, e.fn.ajaxSubmit = function (t) {
    function r(r) {
      var a,
          n,
          i = e.param(r, t.traditional).split("&"),
          o = i.length,
          s = [];for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);return s;
    }function o(a) {
      for (var n = new FormData(), i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);if (t.extraData) {
        var o = r(t.extraData);for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1]);
      }t.data = null;var s = e.extend(!0, {}, e.ajaxSettings, t, { contentType: !1, processData: !1, cache: !1, type: u || "POST" });t.uploadProgress && (s.xhr = function () {
        var r = e.ajaxSettings.xhr();return r.upload && r.upload.addEventListener("progress", function (e) {
          var r = 0,
              a = e.loaded || e.position,
              n = e.total;e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r);
        }, !1), r;
      }), s.data = null;var c = s.beforeSend;return s.beforeSend = function (e, r) {
        t.formData ? r.data = t.formData : r.data = n, c && c.call(this, e, r);
      }, e.ajax(s);
    }function s(r) {
      function n(e) {
        var t = null;try {
          e.contentWindow && (t = e.contentWindow.document);
        } catch (r) {
          a("cannot get iframe.contentWindow document: " + r);
        }if (t) return t;try {
          t = e.contentDocument ? e.contentDocument : e.document;
        } catch (r) {
          a("cannot get iframe.contentDocument: " + r), t = e.document;
        }return t;
      }function o() {
        function t() {
          try {
            var e = n(g).readyState;a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50);
          } catch (r) {
            a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0;
          }
        }var r = f.attr2("target"),
            i = f.attr2("action"),
            o = "multipart/form-data",
            c = f.attr("enctype") || f.attr("encoding") || o;w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }), m.timeout && (j = setTimeout(function () {
          T = !0, s(D);
        }, m.timeout));var l = [];try {
          if (m.extraData) for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);try {
            w.submit();
          } catch (h) {
            var x = document.createElement("form").submit;x.apply(w);
          }
        } finally {
          w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove();
        }
      }function s(t) {
        if (!x.aborted && !F) {
          if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");if (M && M.location.href != m.iframeSrc || T) {
            g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);var r,
                i = "success";try {
              if (T) throw "timeout";var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);var u = M.body ? M.body : M.documentElement;x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                var t = { "content-type": m.dataType };return t[e.toLowerCase()];
              }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);var c = (m.dataType || "").toLowerCase(),
                  l = /(json|script|text)/.test(c);if (l || m.textarea) {
                var f = M.getElementsByTagName("textarea")[0];if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;else if (l) {
                  var p = M.getElementsByTagName("pre")[0],
                      h = M.getElementsByTagName("body")[0];p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText);
                }
              } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));try {
                E = _(x, c, m);
              } catch (y) {
                i = "parsererror", x.error = r = y || i;
              }
            } catch (y) {
              a("error caught: ", y), i = "error", x.error = r = y || i;
            }x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && ! --e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
              m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null;
            }, 100);
          }
        }
      }var c,
          l,
          m,
          d,
          p,
          v,
          g,
          x,
          y,
          b,
          T,
          j,
          w = f[0],
          S = e.Deferred();if (S.abort = function (e) {
        x.abort(e);
      }, r) for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + new Date().getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({ position: "absolute", top: "-1000px", left: "-1000px" })), g = v[0], x = { aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function getAllResponseHeaders() {}, getResponseHeader: function getResponseHeader() {}, setRequestHeader: function setRequestHeader() {}, abort: function abort(t) {
          var r = "timeout" === t ? "timeout" : "aborted";a("aborting upload... " + r), this.aborted = 1;try {
            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop");
          } catch (n) {}v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r);
        } }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;if (x.aborted) return S.reject(), S;y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));var D = 1,
          k = 2,
          A = e("meta[name=csrf-token]").attr("content"),
          L = e("meta[name=csrf-param]").attr("content");L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);var E,
          M,
          F,
          O = 50,
          X = e.parseXML || function (e, t) {
        return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = new DOMParser().parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null;
      },
          C = e.parseJSON || function (e) {
        return window.eval("(" + e + ")");
      },
          _ = function _(t, r, a) {
        var n = t.getResponseHeader("content-type") || "",
            i = "xml" === r || !r && n.indexOf("xml") >= 0,
            o = i ? t.responseXML : t.responseText;return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o;
      };return S;
    }if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;var u,
        c,
        l,
        f = this;"function" == typeof t ? t = { success: t } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, { url: l, success: e.ajaxSettings.success, type: u || e.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, t);var m = {};if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;var d = t.traditional;void 0 === d && (d = e.ajaxSettings.traditional);var p,
        h = [],
        v = this.formToArray(t.semantic, h);if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;var g = e.param(v, d);p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;var x = [];if (t.resetForm && x.push(function () {
      f.resetForm();
    }), t.clearForm && x.push(function () {
      f.clearForm(t.includeHidden);
    }), !t.dataType && t.target) {
      var y = t.success || function () {};x.push(function (r) {
        var a = t.replaceTarget ? "replaceWith" : "html";e(t.target)[a](r).each(y, arguments);
      });
    } else t.success && x.push(t.success);if (t.success = function (e, r, a) {
      for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f]);
    }, t.error) {
      var b = t.error;t.error = function (e, r, a) {
        var n = t.context || this;b.apply(n, [e, r, a, f]);
      };
    }if (t.complete) {
      var T = t.complete;t.complete = function (e, r) {
        var a = t.context || this;T.apply(a, [e, r, f]);
      };
    }var j = e("input[type=file]:enabled", this).filter(function () {
      return "" !== e(this).val();
    }),
        w = j.length > 0,
        S = "multipart/form-data",
        D = f.attr("enctype") == S || f.attr("encoding") == S,
        k = n.fileapi && n.formdata;a("fileAPI :" + k);var A,
        L = (w || D) && !k;t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
      A = s(v);
    }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);for (var E = 0; E < h.length; E++) h[E] = null;return this.trigger("form-submit-notify", [this, t]), this;
  }, e.fn.ajaxForm = function (n) {
    if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
      var i = { s: this.selector, c: this.context };return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
        e(i.s, i.c).ajaxForm(n);
      }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this);
    }return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r);
  }, e.fn.ajaxFormUnbind = function () {
    return this.unbind("submit.form-plugin click.form-plugin");
  }, e.fn.formToArray = function (t, r) {
    var a = [];if (0 === this.length) return a;var i,
        o = this[0],
        s = this.attr("id"),
        u = t ? o.getElementsByTagName("*") : o.elements;if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;var c, l, f, m, d, p, h;for (c = 0, p = u.length; p > c; c++) if (d = u[c], f = d.name, f && !d.disabled) if (t && o.clk && "image" == d.type) o.clk == d && (a.push({ name: f, value: e(d).val(), type: d.type }), a.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y }));else if (m = e.fieldValue(d, !0), m && m.constructor == Array) for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({ name: f, value: m[l] });else if (n.fileapi && "file" == d.type) {
      r && r.push(d);var v = d.files;if (v.length) for (l = 0; l < v.length; l++) a.push({ name: f, value: v[l], type: d.type });else a.push({ name: f, value: "", type: d.type });
    } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({ name: f, value: m, type: d.type, required: d.required }));if (!t && o.clk) {
      var g = e(o.clk),
          x = g[0];f = x.name, f && !x.disabled && "image" == x.type && (a.push({ name: f, value: g.val() }), a.push({ name: f + ".x", value: o.clk_x }, { name: f + ".y", value: o.clk_y }));
    }return a;
  }, e.fn.formSerialize = function (t) {
    return e.param(this.formToArray(t));
  }, e.fn.fieldSerialize = function (t) {
    var r = [];return this.each(function () {
      var a = this.name;if (a) {
        var n = e.fieldValue(this, t);if (n && n.constructor == Array) for (var i = 0, o = n.length; o > i; i++) r.push({ name: a, value: n[i] });else null !== n && "undefined" != typeof n && r.push({ name: this.name, value: n });
      }
    }), e.param(r);
  }, e.fn.fieldValue = function (t) {
    for (var r = [], a = 0, n = this.length; n > a; a++) {
      var i = this[a],
          o = e.fieldValue(i, t);null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o));
    }return r;
  }, e.fieldValue = function (t, r) {
    var a = t.name,
        n = t.type,
        i = t.tagName.toLowerCase();if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;if ("select" == i) {
      var o = t.selectedIndex;if (0 > o) return null;for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
        var m = u[f];if (m.selected) {
          var d = m.value;if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;s.push(d);
        }
      }return s;
    }return e(t).val();
  }, e.fn.clearForm = function (t) {
    return this.each(function () {
      e("input,select,textarea", this).clearFields(t);
    });
  }, e.fn.clearFields = e.fn.clearInputs = function (t) {
    var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function () {
      var a = this.type,
          n = this.tagName.toLowerCase();r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "");
    });
  }, e.fn.resetForm = function () {
    return this.each(function () {
      ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset();
    });
  }, e.fn.enable = function (e) {
    return void 0 === e && (e = !0), this.each(function () {
      this.disabled = !e;
    });
  }, e.fn.selected = function (t) {
    return void 0 === t && (t = !0), this.each(function () {
      var r = this.type;if ("checkbox" == r || "radio" == r) this.checked = t;else if ("option" == this.tagName.toLowerCase()) {
        var a = e(this).parent("select");t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t;
      }
    });
  }, e.fn.ajaxSubmit.debug = !1;
});
function onYouTubeIframeAPIReady() {
  ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"));
}function uncamel(e) {
  return e.replace(/([A-Z])/g, function (e) {
    return "-" + e.toLowerCase();
  });
}function setUnit(e, t) {
  return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + t : e;
}function setFilter(e, t, o) {
  var i = uncamel(t),
      r = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;e[r + "filter"] = e[r + "filter"] || "", o = setUnit(o > jQuery.CSS.filters[t].max ? jQuery.CSS.filters[t].max : o, jQuery.CSS.filters[t].unit), e[r + "filter"] += i + "(" + o + ") ", delete e[t];
}var ytp = ytp || {},
    getYTPVideoID = function getYTPVideoID(e) {
  var t, o;return e.indexOf("youtu.be") > 0 ? (t = e.substr(e.lastIndexOf("/") + 1, e.length), o = t.indexOf("?list=") > 0 ? t.substr(t.lastIndexOf("="), t.length) : null, t = o ? t.substr(0, t.lastIndexOf("?")) : t) : e.indexOf("http") > -1 ? (t = e.match(/[\\?&]v=([^&#]*)/)[1], o = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : (t = e.length > 15 ? null : e, o = t ? null : e), { videoID: t, playlistID: o };
};!function (jQuery, ytp) {
  jQuery.mbYTPlayer = { name: "jquery.mb.YTPlayer", version: "2.9.4", build: "{{ build }}", author: "Matteo Bicocchi", apiKey: "", defaults: { containment: "body", ratio: "auto", videoURL: null, playlistURL: null, startAt: 0, stopAt: 0, autoPlay: !0, vol: 50, addRaster: !1, opacity: 1, quality: "default", mute: !1, loop: !0, showControls: !0, showAnnotations: !1, showYTLogo: !0, stopMovieOnBlur: !0, realfullscreen: !0, gaTrack: !0, optimizeDisplay: !0, onReady: function onReady(e) {} }, controls: { play: "P", pause: "p", mute: "M", unmute: "A", onlyYT: "O", showSite: "R", ytLogo: "Y" }, locationProtocol: "https:", buildPlayer: function buildPlayer(options) {
      return this.each(function () {
        var YTPlayer = this,
            $YTPlayer = jQuery(YTPlayer);YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filtersEnabled = !0, YTPlayer.filters = { grayscale: { value: 0, unit: "%" }, hue_rotate: { value: 0, unit: "deg" }, invert: { value: 0, unit: "%" }, opacity: { value: 0, unit: "%" }, saturate: { value: 0, unit: "%" }, sepia: { value: 0, unit: "%" }, brightness: { value: 0, unit: "%" }, contrast: { value: 0, unit: "%" }, blur: { value: 0, unit: "px" } }, $YTPlayer.addClass("mb_YTPlayer");var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");"undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options, property)), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;var isIframe = function isIframe() {
          var e = !1;try {
            self.location.href != top.location.href && (e = !0);
          } catch (t) {
            e = !0;
          }return e;
        };YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + new Date().getTime());var playerID = "mbYTP_" + YTPlayer.id;YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1,
            playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1;YTPlayer.videoID = videoID, YTPlayer.playlistID = playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";var playerVars = { autoplay: 0, modestbranding: 1, controls: 0, showinfo: 0, rel: 0, enablejsapi: 1, version: 3, playerapiid: playerID, origin: "*", allowfullscreen: !0, wmode: "transparent", iv_load_policy: YTPlayer.opt.showAnnotations };document.createElement("video").canPlayType && jQuery.extend(playerVars, { html5: 1 }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"),
            overlay = jQuery("<div/>").css({ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }).addClass("YTPOverlay");if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
          var isPlayer = YTPlayer.opt.containment.is(jQuery(this));if (YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(), jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) return void $YTPlayer.remove();var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);if (wrapper.css({ position: "absolute", zIndex: 0, minWidth: "100%", minHeight: "100%", left: 0, top: 0, overflow: "hidden", opacity: 0 }), playerBox.css({ position: "absolute", zIndex: 0, width: "100%", height: "100%", top: 0, left: 0, overflow: "hidden" }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function () {
            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative");
          }), YTPlayer.isBackground ? (jQuery("body").css({ boxSizing: "border-box" }), wrapper.css({ position: "fixed", top: 0, left: 0, zIndex: 0 }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({ position: "relative" }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({ opacity: 1 }), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function () {
            YTPlayer.controlBar && YTPlayer.controlBar.addClass("visible");
          }).on("mouseleave", function () {
            YTPlayer.controlBar && YTPlayer.controlBar.removeClass("visible");
          }), ytp.YTAPIReady) setTimeout(function () {
            jQuery(document).trigger("YTAPIReady");
          }, 100);else {
            jQuery("#YTAPI").remove();var tag = jQuery("<script></script>").attr({ src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version, id: "YTAPI" });jQuery("head").prepend(tag);
          }jQuery(document).on("YTAPIReady", function () {
            YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? YTPlayer.isBackground ? !0 : !1 : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function () {
              if (!YTPlayer.isInit) {
                if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                  if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                    YTPlayer.opt.containment.css({ maxWidth: "100%" });var h = .6 * YTPlayer.opt.containment.outerWidth();YTPlayer.opt.containment.css({ maxHeight: h });
                  }return void new YT.Player(playerID, { videoId: YTPlayer.videoID.toString(), height: "100%", width: "100%", events: { onReady: function onReady(e) {
                        YTPlayer.player = e.target, playerBox.css({ opacity: 1 }), YTPlayer.wrapper.css({ opacity: 1 });
                      } } });
                }new YT.Player(playerID, { videoId: YTPlayer.videoID.toString(), playerVars: playerVars, events: { onReady: function onReady(e) {
                      if (YTPlayer.player = e.target, !YTPlayer.isReady) {
                        YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? !1 : !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).on("resize.YTP", function () {
                          $YTPlayer.optimizeDisplay();
                        }), jQuery.mbYTPlayer.checkForState(YTPlayer);var t = jQuery.Event("YTPUnstarted");t.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(t);
                      }
                    }, onStateChange: function onStateChange(event) {
                      if ("function" == typeof event.target.getPlayerState) {
                        var state = event.target.getPlayerState();if (YTPlayer.state != state) {
                          YTPlayer.state = state;var eventType;switch (state) {case -1:
                              eventType = "YTPUnstarted";break;case 0:
                              eventType = "YTPEnd";break;case 1:
                              eventType = "YTPStart", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());break;case 2:
                              eventType = "YTPPause", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:
                              YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 5:
                              eventType = "YTPCued";}var YTPEvent = jQuery.Event(eventType);YTPEvent.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent);
                        }
                      }
                    }, onPlaybackQualityChange: function onPlaybackQualityChange(e) {
                      var t = e.target.getPlaybackQuality(),
                          o = jQuery.Event("YTPQualityChange");o.quality = t, jQuery(YTPlayer).trigger(o);
                    }, onError: function onError(e) {
                      150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e);
                    } } });
              }
            }));
          });
        }
      });
    }, getDataFromAPI: function getDataFromAPI(e) {
      if (e.videoData = jQuery.mbStorage.get("YYTPlayer_data_" + e.videoID), jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function () {
        if (e.hasData && e.isPlayer && !e.opt.autoPlay) {
          var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;e.opt.containment.css({ background: "rgba(0,0,0,0.5) url(" + t + ") center center", backgroundSize: "cover" }), e.opt.backgroundUrl = t;
        }
      }), e.videoData) setTimeout(function () {
        e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.dataReceived = !0, jQuery(e).trigger("YTPChanged");var t = jQuery.Event("YTPData");t.prop = {};for (var o in e.videoData) t.prop[o] = e.videoData[o];jQuery(e).trigger(t);
      }, 500), e.hasData = !0;else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (t) {
        function o(t) {
          e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = t.channelTitle, e.videoData.title = t.title, e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...", e.videoData.aspectratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.opt.ratio = e.videoData.aspectratio, e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null, e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null, e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null, jQuery.mbStorage.set("YYTPlayer_data_" + e.videoID, e.videoData);
        }e.dataReceived = !0, jQuery(e).trigger("YTPChanged"), o(t.items[0].snippet), e.hasData = !0;var i = jQuery.Event("YTPData");i.prop = {};for (var r in e.videoData) i.prop[r] = e.videoData[r];jQuery(e).trigger(i);
      });else {
        if (setTimeout(function () {
          jQuery(e).trigger("YTPChanged");
        }, 50), e.isPlayer && !e.opt.autoPlay) {
          var t = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";e.opt.containment.css({ background: "rgba(0,0,0,0.5) url(" + t + ") center center", backgroundSize: "cover" }), e.opt.backgroundUrl = t;
        }e.videoData = null, e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio;
      }e.isPlayer && !e.opt.autoPlay && (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn());
    }, removeStoredData: function removeStoredData() {
      jQuery.mbStorage.remove();
    }, getVideoData: function getVideoData() {
      var e = this.get(0);return e.videoData;
    }, getVideoID: function getVideoID() {
      var e = this.get(0);return e.videoID || !1;
    }, setVideoQuality: function setVideoQuality(e) {
      var t = this.get(0);jQuery.browser.chrome || t.player.setPlaybackQuality(e);
    }, playlist: function playlist(e, t, o) {
      var i = this,
          r = i.get(0);return r.isPlayList = !0, t && (e = jQuery.shuffle(e)), r.videoID || (r.videos = e, r.videoCounter = 0, r.videoLength = e.length, jQuery(r).data("property", e[0]), jQuery(r).mb_YTPlayer()), "function" == typeof o && jQuery(r).on("YTPChanged", function () {
        o(r);
      }), jQuery(r).on("YTPEnd", function () {
        jQuery(r).playNext();
      }), i;
    }, playNext: function playNext() {
      var e = this.get(0);return e.videoCounter++, e.videoCounter >= e.videoLength && (e.videoCounter = 0), jQuery(e).changeMovie(e.videos[e.videoCounter]), this;
    }, playPrev: function playPrev() {
      var e = this.get(0);return e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e).changeMovie(e.videos[e.videoCounter]), this;
    }, changeMovie: function changeMovie(e) {
      var t = this.get(0);t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mute = !0, t.hasData = !1, t.hasChanged = !0, e && jQuery.extend(t.opt, t.defaultOpt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, jQuery(t.playerEl).CSSAnimate({ opacity: 0 }, 200, function () {
        return jQuery(t).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + t.videoID), 1, t.opt.quality), jQuery.mbYTPlayer.checkForState(t), jQuery(t).optimizeDisplay(), jQuery.mbYTPlayer.getDataFromAPI(t), this;
      });
    }, getPlayer: function getPlayer() {
      return jQuery(this).get(0).player;
    }, playerDestroy: function playerDestroy() {
      var e = this.get(0);ytp.YTAPIReady = !1, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null;var t = e.wrapper;return t.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState), this;
    }, fullscreen: function fullscreen(real) {
      function hideMouse() {
        YTPlayer.overlay.css({ cursor: "none" });
      }function RunPrefixMethod(e, t) {
        for (var o, i, r = ["webkit", "moz", "ms", "o", ""], n = 0; n < r.length && !e[o];) {
          if (o = t, "" == r[n] && (o = o.substr(0, 1).toLowerCase() + o.substr(1)), o = r[n] + o, i = typeof e[o], "undefined" != i) return r = [r[n]], "function" == i ? e[o]() : e[o];n++;
        }
      }function launchFullscreen(e) {
        RunPrefixMethod(e, "RequestFullScreen");
      }function cancelFullscreen() {
        (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen");
      }var YTPlayer = this.get(0);"undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);var controls = jQuery("#controlBar_" + YTPlayer.id),
          fullScreenBtn = controls.find(".mb_OnlyYT"),
          videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;if (real) {
        var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
          var e = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");e ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({ opacity: YTPlayer.opt.opacity }, 500), videoWrapper.css({ zIndex: 0 }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"));
        });
      }return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), YTPlayer.overlay.css({ cursor: "auto" }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({ opacity: YTPlayer.opt.opacity }, 500), videoWrapper.css({ zIndex: 0 })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function (e) {
        YTPlayer.overlay.css({ cursor: "auto" }), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3));
      }), hideMouse(), real ? (videoWrapper.css({ opacity: 0 }), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
        videoWrapper.CSSAnimate({ opacity: 1 }, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0);
      }, 500)) : videoWrapper.css({ zIndex: 1e4 }).CSSAnimate({ opacity: 1 }, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0), this;
    }, toggleLoops: function toggleLoops() {
      var e = this.get(0),
          t = e.opt;return 1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(), t.loop = 1), this;
    }, play: function play() {
      var e = this.get(0);if (e.isReady) {
        var t = jQuery("#controlBar_" + e.id),
            o = t.find(".mb_YTPPlaypause");return o.html(jQuery.mbYTPlayer.controls.pause), e.player.playVideo(), e.wrapper.CSSAnimate({ opacity: e.isAlone ? 1 : e.opt.opacity }, 2e3), jQuery(e.playerEl).CSSAnimate({ opacity: 1 }, 1e3), jQuery(e).css("background-image", "none"), this;
      }
    }, togglePlay: function togglePlay(e) {
      var t = this.get(0);return 1 == t.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(t.state), this;
    }, stop: function stop() {
      var e = this.get(0),
          t = jQuery("#controlBar_" + e.id),
          o = t.find(".mb_YTPPlaypause");return o.html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo(), this;
    }, pause: function pause() {
      var e = this.get(0),
          t = jQuery("#controlBar_" + e.id),
          o = t.find(".mb_YTPPlaypause");return o.html(jQuery.mbYTPlayer.controls.play), e.player.pauseVideo(), this;
    }, seekTo: function seekTo(e) {
      var t = this.get(0);return t.player.seekTo(e, !0), this;
    }, setVolume: function setVolume(e) {
      var t = this.get(0);return e || t.opt.vol || 0 != t.player.getVolume() ? !e && t.player.getVolume() > 0 || e && t.opt.vol == e ? t.isMute ? jQuery(t).YTPUnmute() : jQuery(t).YTPMute() : (t.opt.vol = e, t.player.setVolume(t.opt.vol), t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)) : jQuery(t).YTPUnmute(), this;
    }, mute: function mute() {
      var e = this.get(0);if (!e.isMute) {
        e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.width() > 10 && e.volumeBar.updateSliderVal(0);var t = jQuery("#controlBar_" + e.id),
            o = t.find(".mb_YTPMuteUnmute");o.html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");var i = jQuery.Event("YTPMuted");return i.time = e.player.time, e.canTrigger && jQuery(e).trigger(i), this;
      }
    }, unmute: function unmute() {
      var e = this.get(0);if (e.isMute) {
        e.player.unMute(), e.isMute = !1, e.player.setVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10);var t = jQuery("#controlBar_" + e.id),
            o = t.find(".mb_YTPMuteUnmute");o.html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");var i = jQuery.Event("YTPUnmuted");return i.time = e.player.time, e.canTrigger && jQuery(e).trigger(i), this;
      }
    }, applyFilter: function applyFilter(e, t) {
      var o = this.get(0);return o.filters[e].value = t, o.filtersEnabled && this.YTPEnableFilters(), this;
    }, applyFilters: function applyFilters(e) {
      var t = this.get(0);return this.on("YTPReady", function () {
        for (var o in e) t.filters[o].value = e[o], jQuery(t).YTPApplyFilter(o, e[o]);jQuery(t).trigger("YTPFiltersApplied");
      }), this;
    }, toggleFilter: function toggleFilter(e, t) {
      return this.each(function () {
        var o = this;o.filters[e].value ? o.filters[e].value = 0 : o.filters[e].value = t, o.filtersEnabled && jQuery(this).YTPEnableFilters();
      });
    }, toggleFilters: function toggleFilters(e) {
      return this.each(function () {
        var t = this;t.filtersEnabled ? (jQuery(t).trigger("YTPDisableFilters"), jQuery(t).YTPDisableFilters()) : (jQuery(t).YTPEnableFilters(), jQuery(t).trigger("YTPEnableFilters")), "function" == typeof e && e(t.filtersEnabled);
      });
    }, disableFilters: function disableFilters() {
      return this.each(function () {
        var e = this,
            t = jQuery(e.playerEl);t.css("-webkit-filter", ""), t.css("filter", ""), e.filtersEnabled = !1;
      });
    }, enableFilters: function enableFilters() {
      return this.each(function () {
        var e = this,
            t = jQuery(e.playerEl),
            o = "";for (var i in e.filters) e.filters[i].value && (o += i.replace("_", "-") + "(" + e.filters[i].value + e.filters[i].unit + ") ");t.css("-webkit-filter", o), t.css("filter", o), e.filtersEnabled = !0;
      });
    }, removeFilter: function removeFilter(e, t) {
      return this.each(function () {
        "function" == typeof e && (t = e, e = null);var o = this;if (e) jQuery(this).YTPApplyFilter(e, 0), "function" == typeof t && t(e);else for (var i in o.filters) jQuery(this).YTPApplyFilter(i, 0), "function" == typeof t && t(i);
      });
    }, manageProgress: function manageProgress() {
      var e = this.get(0),
          t = jQuery("#controlBar_" + e.id),
          o = t.find(".mb_YTPProgress"),
          i = t.find(".mb_YTPLoaded"),
          r = t.find(".mb_YTPseekbar"),
          n = o.outerWidth(),
          s = Math.floor(e.player.getCurrentTime()),
          a = Math.floor(e.player.getDuration()),
          l = s * n / a,
          u = 0,
          p = 100 * e.player.getVideoLoadedFraction();return i.css({ left: u, width: p + "%" }), r.css({ left: 0, width: l }), { totalTime: a, currentTime: s };
    }, buildControls: function buildControls(YTPlayer) {
      var data = YTPlayer.opt;if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
        YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({ whiteSpace: "noWrap", position: YTPlayer.isBackground ? "fixed" : "absolute", zIndex: YTPlayer.isBackground ? 1e4 : 1e3 }).hide();var buttonBar = jQuery("<div/>").addClass("buttonBar"),
            playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function () {
          1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay();
        }),
            MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function () {
          0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute();
        }),
            volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({ display: "inline-block" });YTPlayer.volumeBar = volumeBar;var idx = jQuery("<span/>").addClass("mb_YTPTime"),
            vURL = data.videoURL ? data.videoURL : "";vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
          window.open(vURL, "viewOnYT");
        }),
            onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
          jQuery(YTPlayer).YTPFullscreen(data.realfullscreen);
        }),
            progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function (e) {
          timeBar.css({ width: e.clientX - timeBar.offset().left }), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 });var t = Math.floor(YTPlayer.player.getDuration());YTPlayer["goto"] = timeBar.outerWidth() * t / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({ width: 0 });
        }),
            loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
            timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({ initialval: YTPlayer.opt.vol, scale: 100, orientation: "h", callback: function callback(e) {
            0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value);
          } });
      }
    }, checkForState: function checkForState(YTPlayer) {
      var interval = YTPlayer.opt.showControls ? 100 : 700;return clearInterval(YTPlayer.getState), jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void (YTPlayer.getState = setInterval(function () {
        var prog = jQuery(YTPlayer).YTPManageProgress(),
            $YTPlayer = jQuery(YTPlayer),
            data = YTPlayer.opt,
            startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 0,
            stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.player.time != prog.currentTime) {
          var YTPEvent = jQuery.Event("YTPTime");YTPEvent.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(YTPEvent);
        }if (YTPlayer.player.time = prog.currentTime, 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && YTPlayer.controlBar.find(".mb_YTPTime").html(prog.totalTime ? jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime) : "-- : -- / -- : --"), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
          if (YTPlayer.isEnded) return;if (YTPlayer.isEnded = !0, setTimeout(function () {
            YTPlayer.isEnded = !1;
          }, 1e3), YTPlayer.isPlayList) {
            clearInterval(YTPlayer.getState);var YTPEnd = jQuery.Event("YTPEnd");return YTPEnd.time = YTPlayer.player.time, void jQuery(YTPlayer).trigger(YTPEnd);
          }data.loop ? (startAt = startAt || 1, YTPlayer.player.pauseVideo(), YTPlayer.player.seekTo(startAt, !0), $YTPlayer.YTPPlay()) : (YTPlayer.player.pauseVideo(), YTPlayer.wrapper.CSSAnimate({ opacity: 0 }, 1e3, function () {
            var e = jQuery.Event("YTPEnd");e.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground || YTPlayer.opt.containment.css({ background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center", backgroundSize: "cover" });
          }));
        }
      }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt));
    }, checkForStart: function checkForStart(e) {
      var t = jQuery(e);if (!jQuery.contains(document, e)) return void jQuery(e).YTPPlayerDestroy();if (jQuery.browser.chrome && (e.opt.quality = "default"), e.player.pauseVideo(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.opt.addRaster) {
        var o = "dot" == e.opt.addRaster ? "raster-dot" : "raster";e.overlay.addClass(e.isRetina ? o + " retina" : o);
      } else e.overlay.removeClass(function (e, t) {
        var o = t.split(" "),
            i = [];return jQuery.each(o, function (e, t) {
          /raster.*/.test(t) && i.push(t);
        }), i.push("retina"), i.join(" ");
      });e.checkForStartAt = setInterval(function () {
        jQuery(e).YTPMute();var o = e.opt.startAt ? e.opt.startAt : 1,
            i = e.player.getVideoLoadedFraction() > o / e.player.getDuration();if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= o && i) {
          clearInterval(e.checkForStartAt), e.isReady = !0, "function" == typeof e.opt.onReady && e.opt.onReady(e);var r = jQuery.Event("YTPReady");jQuery(e).trigger(r), e.player.pauseVideo(), e.opt.mute || jQuery(e).YTPUnmute(), e.canTrigger = !0, e.opt.autoPlay ? (t.YTPPlay(), t.css("background-image", "none"), jQuery(e.playerEl).CSSAnimate({ opacity: 1 }, 1e3), e.wrapper.CSSAnimate({ opacity: e.isAlone ? 1 : e.opt.opacity }, 1e3)) : (e.player.pauseVideo(), e.isPlayer || (jQuery(e.playerEl).CSSAnimate({ opacity: 1 }, 1e3), e.wrapper.CSSAnimate({ opacity: e.isAlone ? 1 : e.opt.opacity }, 1e3))), e.isPlayer && !e.opt.autoPlay && (e.loading.html("Ready"), setTimeout(function () {
            e.loading.fadeOut();
          }, 100)), e.controlBar && e.controlBar.slideDown(1e3);
        } else o >= 0 && e.player.seekTo(o, !0);
      }, 1e3);
    }, formatTime: function formatTime(e) {
      var t = Math.floor(e / 60),
          o = Math.floor(e - 60 * t);return (9 >= t ? "0" + t : t) + " : " + (9 >= o ? "0" + o : o);
    } }, jQuery.fn.toggleVolume = function () {
    var e = this.get(0);if (e) return e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1);
  }, jQuery.fn.optimizeDisplay = function () {
    var e = this.get(0),
        t = e.opt,
        o = jQuery(e.playerEl),
        i = {},
        r = e.wrapper;i.width = r.outerWidth(), i.height = r.outerHeight();var n = 24,
        s = 100,
        a = {};t.optimizeDisplay ? (a.width = i.width + i.width * n / 100, a.height = Math.ceil("16/9" == t.ratio ? 9 * i.width / 16 : 3 * i.width / 4), a.marginTop = -((a.height - i.height) / 2), a.marginLeft = -(i.width * (n / 2) / 100), a.height < i.height && (a.height = i.height + i.height * n / 100, a.width = Math.floor("16/9" == t.ratio ? 16 * i.height / 9 : 4 * i.height / 3), a.marginTop = -(i.height * (n / 2) / 100), a.marginLeft = -((a.width - i.width) / 2)), a.width += s, a.height += s, a.marginTop -= s / 2, a.marginLeft -= s / 2) : (a.width = "100%", a.height = "100%", a.marginTop = 0, a.marginLeft = 0), o.css({ width: a.width, height: a.height, marginTop: a.marginTop, marginLeft: a.marginLeft });
  }, jQuery.shuffle = function (e) {
    for (var t = e.slice(), o = t.length, i = o; i--;) {
      var r = parseInt(Math.random() * o),
          n = t[i];t[i] = t[r], t[r] = n;
    }return t;
  }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData;
}(jQuery, ytp), jQuery.support.CSStransition = function () {
  var e = document.body || document.documentElement,
      t = e.style;return void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition;
}(), jQuery.CSS = { name: "mb.CSSAnimate", author: "Matteo Bicocchi", version: "2.0.0", transitionEnd: "transitionEnd", sfx: "", filters: { blur: { min: 0, max: 100, unit: "px" }, brightness: { min: 0, max: 400, unit: "%" }, contrast: { min: 0, max: 400, unit: "%" }, grayscale: { min: 0, max: 100, unit: "%" }, hueRotate: { min: 0, max: 360, unit: "deg" }, invert: { min: 0, max: 100, unit: "%" }, saturate: { min: 0, max: 400, unit: "%" }, sepia: { min: 0, max: 100, unit: "%" } }, normalizeCss: function normalizeCss(e) {
    var t = jQuery.extend(!0, {}, e);jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");for (var o in t) {
      "transform" === o && (t[jQuery.CSS.sfx + "transform"] = t[o], delete t[o]), "transform-origin" === o && (t[jQuery.CSS.sfx + "transform-origin"] = e[o], delete t[o]), "filter" !== o || jQuery.browser.mozilla || (t[jQuery.CSS.sfx + "filter"] = e[o], delete t[o]), "blur" === o && setFilter(t, "blur", e[o]), "brightness" === o && setFilter(t, "brightness", e[o]), "contrast" === o && setFilter(t, "contrast", e[o]), "grayscale" === o && setFilter(t, "grayscale", e[o]), "hueRotate" === o && setFilter(t, "hueRotate", e[o]), "invert" === o && setFilter(t, "invert", e[o]), "saturate" === o && setFilter(t, "saturate", e[o]), "sepia" === o && setFilter(t, "sepia", e[o]);var i = "";"x" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateX(" + setUnit(e[o], "px") + ")", delete t[o]), "y" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateY(" + setUnit(e[o], "px") + ")", delete t[o]), "z" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateZ(" + setUnit(e[o], "px") + ")", delete t[o]), "rotate" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotate(" + setUnit(e[o], "deg") + ")", delete t[o]), "rotateX" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateX(" + setUnit(e[o], "deg") + ")", delete t[o]), "rotateY" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateY(" + setUnit(e[o], "deg") + ")", delete t[o]), "rotateZ" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateZ(" + setUnit(e[o], "deg") + ")", delete t[o]), "scale" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scale(" + setUnit(e[o], "") + ")", delete t[o]), "scaleX" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleX(" + setUnit(e[o], "") + ")", delete t[o]), "scaleY" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleY(" + setUnit(e[o], "") + ")", delete t[o]), "scaleZ" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleZ(" + setUnit(e[o], "") + ")", delete t[o]), "skew" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skew(" + setUnit(e[o], "deg") + ")", delete t[o]), "skewX" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewX(" + setUnit(e[o], "deg") + ")", delete t[o]), "skewY" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewY(" + setUnit(e[o], "deg") + ")", delete t[o]), "perspective" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " perspective(" + setUnit(e[o], "px") + ")", delete t[o]);
    }return t;
  }, getProp: function getProp(e) {
    var t = [];for (var o in e) t.indexOf(o) < 0 && t.push(uncamel(o));return t.join(",");
  }, animate: function animate(e, t, o, i, r) {
    return this.each(function () {
      function n() {
        s.called = !0, s.CSSAIsRunning = !1, a.off(jQuery.CSS.transitionEnd + "." + s.id), clearTimeout(s.timeout), a.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof r && r.apply(s), "function" == typeof s.CSSqueue && (s.CSSqueue(), s.CSSqueue = null);
      }var s = this,
          a = jQuery(this);s.id = s.id || "CSSA_" + new Date().getTime();var l = l || { type: "noEvent" };if (s.CSSAIsRunning && s.eventType == l.type && !jQuery.browser.msie && jQuery.browser.version <= 9) return void (s.CSSqueue = function () {
        a.CSSAnimate(e, t, o, i, r);
      });if (s.CSSqueue = null, s.eventType = l.type, 0 !== a.length && e) {
        if (e = jQuery.normalizeCss(e), s.CSSAIsRunning = !0, "function" == typeof t && (r = t, t = jQuery.fx.speeds._default), "function" == typeof o && (i = o, o = 0), "string" == typeof o && (r = o, o = 0), "function" == typeof i && (r = i, i = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t) for (var u in jQuery.fx.speeds) {
          if (t == u) {
            t = jQuery.fx.speeds[u];break;
          }t = jQuery.fx.speeds._default;
        }if (t || (t = jQuery.fx.speeds._default), "string" == typeof r && (i = r, r = null), !jQuery.support.CSStransition) {
          for (var p in e) {
            if ("transform" === p && delete e[p], "filter" === p && delete e[p], "transform-origin" === p && delete e[p], "auto" === e[p] && delete e[p], "x" === p) {
              var m = e[p],
                  c = "left";e[c] = m, delete e[p];
            }if ("y" === p) {
              var m = e[p],
                  c = "top";e[c] = m, delete e[p];
            }("-ms-transform" === p || "-ms-filter" === p) && delete e[p];
          }return void a.delay(o).animate(e, t, r);
        }var d = { "default": "ease", "in": "ease-in", out: "ease-out", "in-out": "ease-in-out", snap: "cubic-bezier(0,1,.5,1)", easeOutCubic: "cubic-bezier(.215,.61,.355,1)", easeInOutCubic: "cubic-bezier(.645,.045,.355,1)", easeInCirc: "cubic-bezier(.6,.04,.98,.335)", easeOutCirc: "cubic-bezier(.075,.82,.165,1)", easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)", easeInExpo: "cubic-bezier(.95,.05,.795,.035)", easeOutExpo: "cubic-bezier(.19,1,.22,1)", easeInOutExpo: "cubic-bezier(1,0,0,1)", easeInQuad: "cubic-bezier(.55,.085,.68,.53)", easeOutQuad: "cubic-bezier(.25,.46,.45,.94)", easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)", easeInQuart: "cubic-bezier(.895,.03,.685,.22)", easeOutQuart: "cubic-bezier(.165,.84,.44,1)", easeInOutQuart: "cubic-bezier(.77,0,.175,1)", easeInQuint: "cubic-bezier(.755,.05,.855,.06)", easeOutQuint: "cubic-bezier(.23,1,.32,1)", easeInOutQuint: "cubic-bezier(.86,0,.07,1)", easeInSine: "cubic-bezier(.47,0,.745,.715)", easeOutSine: "cubic-bezier(.39,.575,.565,1)", easeInOutSine: "cubic-bezier(.445,.05,.55,.95)", easeInBack: "cubic-bezier(.6,-.28,.735,.045)", easeOutBack: "cubic-bezier(.175, .885,.32,1.275)", easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)" };d[i] && (i = d[i]), a.off(jQuery.CSS.transitionEnd + "." + s.id);var f = jQuery.CSS.getProp(e),
            y = {};jQuery.extend(y, e), y[jQuery.CSS.sfx + "transition-property"] = f, y[jQuery.CSS.sfx + "transition-duration"] = t + "ms", y[jQuery.CSS.sfx + "transition-delay"] = o + "ms", y[jQuery.CSS.sfx + "transition-timing-function"] = i, setTimeout(function () {
          a.one(jQuery.CSS.transitionEnd + "." + s.id, n), a.css(y);
        }, 1), s.timeout = setTimeout(function () {
          return s.called || !r ? (s.called = !1, void (s.CSSAIsRunning = !1)) : (a.css(jQuery.CSS.sfx + "transition", ""), r.apply(s), s.CSSAIsRunning = !1, void ("function" == typeof s.CSSqueue && (s.CSSqueue(), s.CSSqueue = null)));
        }, t + o + 10);
      }
    });
  } }, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (e) {
  return this.each(function () {
    var t = jQuery(this),
        o = jQuery.normalizeCss(e);t.css(o);
  });
};var nAgt = navigator.userAgent;if (!jQuery.browser) {
  jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);var nameOffset, verOffset, ix;if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";var start = nAgt.indexOf("rv:") + 3,
        end = start + 4;jQuery.browser.fullVersion = nAgt.substring(start, end);
  } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion;
}jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), !function (e) {
  /iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase());var t = "ontouchstart" in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1;e.simpleSlider = { defaults: { initialval: 0, scale: 100, orientation: "h", readonly: !1, callback: !1 }, events: { start: t ? "touchstart" : "mousedown", end: t ? "touchend" : "mouseup", move: t ? "touchmove" : "mousemove" }, init: function init(o) {
      return this.each(function () {
        var i = this,
            r = e(i);r.addClass("simpleSlider"), i.opt = {}, e.extend(i.opt, e.simpleSlider.defaults, o), e.extend(i.opt, r.data());var n = "h" == i.opt.orientation ? "horizontal" : "vertical",
            s = e("<div/>").addClass("level").addClass(n);r.prepend(s), i.level = s, r.css({ cursor: "default" }), "auto" == i.opt.scale && (i.opt.scale = e(i).outerWidth()), r.updateSliderVal(), i.opt.readonly || (r.on(e.simpleSlider.events.start, function (e) {
          t && (e = e.changedTouches[0]), i.canSlide = !0, r.updateSliderVal(e), r.css({ cursor: "col-resize" }), e.preventDefault(), e.stopPropagation();
        }), e(document).on(e.simpleSlider.events.move, function (o) {
          t && (o = o.changedTouches[0]), i.canSlide && (e(document).css({ cursor: "default" }), r.updateSliderVal(o), o.preventDefault(), o.stopPropagation());
        }).on(e.simpleSlider.events.end, function () {
          e(document).css({ cursor: "auto" }), i.canSlide = !1, r.css({ cursor: "auto" });
        }));
      });
    }, updateSliderVal: function updateSliderVal(t) {
      function o(e, t) {
        return Math.floor(100 * e / t);
      }var i = this,
          r = i.get(0);r.opt.initialval = "number" == typeof r.opt.initialval ? r.opt.initialval : r.opt.initialval(r);var n = e(r).outerWidth(),
          s = e(r).outerHeight();r.x = "object" == typeof t ? t.clientX + document.body.scrollLeft - i.offset().left : "number" == typeof t ? t * n / r.opt.scale : r.opt.initialval * n / r.opt.scale, r.y = "object" == typeof t ? t.clientY + document.body.scrollTop - i.offset().top : "number" == typeof t ? (r.opt.scale - r.opt.initialval - t) * s / r.opt.scale : r.opt.initialval * s / r.opt.scale, r.y = i.outerHeight() - r.y, r.scaleX = r.x * r.opt.scale / n, r.scaleY = r.y * r.opt.scale / s, r.outOfRangeX = r.scaleX > r.opt.scale ? r.scaleX - r.opt.scale : r.scaleX < 0 ? r.scaleX : 0, r.outOfRangeY = r.scaleY > r.opt.scale ? r.scaleY - r.opt.scale : r.scaleY < 0 ? r.scaleY : 0, r.outOfRange = "h" == r.opt.orientation ? r.outOfRangeX : r.outOfRangeY, r.value = "undefined" != typeof t ? "h" == r.opt.orientation ? r.x >= i.outerWidth() ? r.opt.scale : r.x <= 0 ? 0 : r.scaleX : r.y >= i.outerHeight() ? r.opt.scale : r.y <= 0 ? 0 : r.scaleY : "h" == r.opt.orientation ? r.scaleX : r.scaleY, "h" == r.opt.orientation ? r.level.width(o(r.x, n) + "%") : r.level.height(o(r.y, s)), "function" == typeof r.opt.callback && r.opt.callback(r);
    } }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal;
}(jQuery), !function (e) {
  e.mbCookie = { set: function set(e, t, o, i) {
      t = JSON.stringify(t), o || (o = 7), i = i ? "; domain=" + i : "";var r,
          n = new Date();n.setTime(n.getTime() + 864e5 * o), r = "; expires=" + n.toGMTString(), document.cookie = e + "=" + t + r + "; path=/" + i;
    }, get: function get(e) {
      for (var t = e + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
        for (var r = o[i]; " " == r.charAt(0);) r = r.substring(1, r.length);if (0 == r.indexOf(t)) return JSON.parse(r.substring(t.length, r.length));
      }return null;
    }, remove: function remove(t) {
      e.mbCookie.set(t, "", -1);
    } }, e.mbStorage = { set: function set(e, t) {
      t = JSON.stringify(t), localStorage.setItem(e, t);
    }, get: function get(e) {
      return localStorage[e] ? JSON.parse(localStorage[e]) : null;
    }, remove: function remove(e) {
      e ? localStorage.removeItem(e) : localStorage.clear();
    } };
}(jQuery);
!function (t, e, i, n) {
  function s(e, i) {
    this.el = e, this.$el = t(e), this.settings = t.extend({}, o, i), this._defaults = o, this._name = a, this._slides = [], this.currentIndex = 0, this.init();
  }var a = "kenburnsy",
      o = { fullscreen: !1, duration: 9e3, fadeInDuration: 1500, height: null },
      r = { zoomOut: function zoomOut(e, i) {
      t(e).velocity({ rotateZ: "3deg", scale: "1.1" }, 0).velocity({ translateZ: 0, rotateZ: "0deg", scale: "1" }, i);
    }, zoomIn: function zoomIn(e, i) {
      t(e).velocity({ rotateZ: "0deg", scale: "1" }, 0).velocity({ translateZ: 0, rotateZ: "3deg", scale: "1.1" }, i);
    } },
      c = function c(e) {
    var i = function i(t) {
      function i() {
        s(), setTimeout(function () {
          t.resolve(a);
        });
      }function n() {
        s(), t.rejectWith(a);
      }function s() {
        a.onload = null, a.onerror = null, a.onabort = null;
      }var a = new Image();a.onload = i, a.onerror = n, a.onabort = n, a.src = e;
    };return t.Deferred(i).promise();
  };Object.keys || (Object.keys = function (t) {
    if (t !== Object(t)) throw new TypeError("Object.keys called on a non-object");var e,
        i = [];for (e in t) Object.prototype.hasOwnProperty.call(t, e) && i.push(e);return i;
  }), t.extend(s.prototype, { init: function init() {
      var e,
          i = this.settings,
          n = this;e = this.$el.children().map(function (t, e) {
        return e.src;
      }), this.$el.addClass(function () {
        var t = [a];return i.fullscreen && t.push("fullscreen"), t.join(" ");
      }), t.when.apply(t, t.map(e, c)).done(function () {
        var t = Array.prototype.slice.call(arguments);n.buildScene(t);
      });
    }, reveal: function reveal(e) {
      var i = this._slides[e],
          n = this.$el;t(i).velocity({ opacity: 0 }, 0, function () {
        t(this).appendTo(n);
      }).velocity({ opacity: 1, translateZ: 0 }, { duration: this.settings.fadeInDuration, queue: !1 });
    }, animate: function animate(t) {
      var e = Object.keys(r),
          i = r[e[Math.floor(e.length * Math.random())]],
          n = this.settings.duration,
          s = this._slides[t];i(s, n);
    }, show: function show(t) {
      this.reveal(t), this.animate(t);
    }, next: function next() {
      this.currentIndex = 0 === this.currentIndex ? this._slides.length - 1 : this.currentIndex - 1, this.show(this.currentIndex);
    }, addSlides: function addSlides(e) {
      var n = this.el;return t.map(e.reverse(), function (t) {
        var e = i.createElement("div");return e.style.backgroundImage = "url(" + t.src + ")", e.className = "slide", n.appendChild(e), e;
      });
    }, buildScene: function buildScene(t) {
      var e = this,
          i = this.settings;this.el.innerHTML = "", this._slides = this.addSlides(t), this.currentIndex = t.length - 1, i.fullscreen || (this.el.style.height = this.settings.height || t[this.currentIndex].height + "px"), this.animate(this.currentIndex), setInterval(function () {
        e.next();
      }, i.duration - i.fadeInDuration);
    } }), t.fn[a] = function (e) {
    return this.each(function () {
      t.data(this, "plugin_" + a) || t.data(this, "plugin_" + a, new s(this, e));
    }), this;
  };
}(jQuery, window, document);!function (t, e, n, i) {
  function s(e, n) {
    this.el = e, this.$el = t(e), this.settings = t.extend({}, o, n), this._defaults = o, this._name = a, this._slides = [], this.currentIndex = 0, this.init();
  }var a = "ss",
      o = { fullscreen: !1, duration: 9e3, fadeInDuration: 1500, height: null },
      r = { zoomOut: function zoomOut(e, n) {
      t(e).velocity({ translateZ: 0 }, 0).velocity({ translateZ: 0 }, n);
    }, zoomIn: function zoomIn(e, n) {
      t(e).velocity({ translateZ: 0 }, 0).velocity({ translateZ: 0 }, n);
    } },
      c = function c(e) {
    var n = function n(t) {
      function n() {
        s(), setTimeout(function () {
          t.resolve(a);
        });
      }function i() {
        s(), t.rejectWith(a);
      }function s() {
        a.onload = null, a.onerror = null, a.onabort = null;
      }var a = new Image();a.onload = n, a.onerror = i, a.onabort = i, a.src = e;
    };return t.Deferred(n).promise();
  };Object.keys || (Object.keys = function (t) {
    if (t !== Object(t)) throw new TypeError("Object.keys called on a non-object");var e,
        n = [];for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n.push(e);return n;
  }), t.extend(s.prototype, { init: function init() {
      var e,
          n = this.settings,
          i = this;e = this.$el.children().map(function (t, e) {
        return e.src;
      }), this.$el.addClass(function () {
        var t = [a];return n.fullscreen && t.push("fullscreen"), t.join(" ");
      }), t.when.apply(t, t.map(e, c)).done(function () {
        var t = Array.prototype.slice.call(arguments);i.buildScene(t);
      });
    }, reveal: function reveal(e) {
      var n = this._slides[e],
          i = this.$el;t(n).velocity({ opacity: 0 }, 0, function () {
        t(this).appendTo(i);
      }).velocity({ opacity: 1, translateZ: 0 }, { duration: this.settings.fadeInDuration, queue: !1 });
    }, animate: function animate(t) {
      var e = Object.keys(r),
          n = r[e[Math.floor(e.length * Math.random())]],
          i = this.settings.duration,
          s = this._slides[t];n(s, i);
    }, show: function show(t) {
      this.reveal(t), this.animate(t);
    }, next: function next() {
      this.currentIndex = 0 === this.currentIndex ? this._slides.length - 1 : this.currentIndex - 1, this.show(this.currentIndex);
    }, addSlides: function addSlides(e) {
      var i = this.el;return t.map(e.reverse(), function (t) {
        var e = n.createElement("div");return e.style.backgroundImage = "url(" + t.src + ")", e.className = "slide", i.appendChild(e), e;
      });
    }, buildScene: function buildScene(t) {
      var e = this,
          n = this.settings;this.el.innerHTML = "", this._slides = this.addSlides(t), this.currentIndex = t.length - 1, n.fullscreen || (this.el.style.height = this.settings.height || t[this.currentIndex].height + "px"), this.animate(this.currentIndex), setInterval(function () {
        e.next();
      }, n.duration - n.fadeInDuration);
    } }), t.fn[a] = function (e) {
    return this.each(function () {
      t.data(this, "plugin_" + a) || t.data(this, "plugin_" + a, new s(this, e));
    }), this;
  };
}(jQuery, window, document);
!function (e) {
  function t(e) {
    var t = e.length,
        n = r.type(e);return "function" === n || r.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
  }if (!e.jQuery) {
    var r = function r(e, t) {
      return new r.fn.init(e, t);
    };r.isWindow = function (e) {
      return null != e && e == e.window;
    }, r.type = function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[a.call(e)] || "object" : typeof e;
    }, r.isArray = Array.isArray || function (e) {
      return "array" === r.type(e);
    }, r.isPlainObject = function (e) {
      var t;if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e)) return !1;try {
        if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (n) {
        return !1;
      }for (t in e);return void 0 === t || i.call(e, t);
    }, r.each = function (e, r, n) {
      var o,
          i = 0,
          a = e.length,
          l = t(e);if (n) {
        if (l) for (; a > i && (o = r.apply(e[i], n), o !== !1); i++);else for (i in e) if (o = r.apply(e[i], n), o === !1) break;
      } else if (l) for (; a > i && (o = r.call(e[i], i, e[i]), o !== !1); i++);else for (i in e) if (o = r.call(e[i], i, e[i]), o === !1) break;return e;
    }, r.data = function (e, t, o) {
      if (void 0 === o) {
        var i = e[r.expando],
            a = i && n[i];if (void 0 === t) return a;if (a && t in a) return a[t];
      } else if (void 0 !== t) {
        var i = e[r.expando] || (e[r.expando] = ++r.uuid);return n[i] = n[i] || {}, n[i][t] = o, o;
      }
    }, r.removeData = function (e, t) {
      var o = e[r.expando],
          i = o && n[o];i && r.each(t, function (e, t) {
        delete i[t];
      });
    }, r.extend = function () {
      var e,
          t,
          n,
          o,
          i,
          a,
          l = arguments[0] || {},
          s = 1,
          c = arguments.length,
          u = !1;for ("boolean" == typeof l && (u = l, l = arguments[s] || {}, s++), "object" != typeof l && "function" !== r.type(l) && (l = {}), s === c && (l = this, s--); c > s; s++) if (null != (i = arguments[s])) for (o in i) e = l[o], n = i[o], l !== n && (u && n && (r.isPlainObject(n) || (t = r.isArray(n))) ? (t ? (t = !1, a = e && r.isArray(e) ? e : []) : a = e && r.isPlainObject(e) ? e : {}, l[o] = r.extend(u, a, n)) : void 0 !== n && (l[o] = n));return l;
    }, r.queue = function (e, n, o) {
      function i(e, r) {
        var n = r || [];return null != e && (t(Object(e)) ? !function (e, t) {
          for (var r = +t.length, n = 0, o = e.length; r > n;) e[o++] = t[n++];if (r !== r) for (; void 0 !== t[n];) e[o++] = t[n++];return e.length = o, e;
        }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n;
      }if (e) {
        n = (n || "fx") + "queue";var a = r.data(e, n);return o ? (!a || r.isArray(o) ? a = r.data(e, n, i(o)) : a.push(o), a) : a || [];
      }
    }, r.dequeue = function (e, t) {
      r.each(e.nodeType ? [e] : e, function (e, n) {
        t = t || "fx";var o = r.queue(n, t),
            i = o.shift();"inprogress" === i && (i = o.shift()), i && ("fx" === t && o.unshift("inprogress"), i.call(n, function () {
          r.dequeue(n, t);
        }));
      });
    }, r.fn = r.prototype = { init: function init(e) {
        if (e.nodeType) return this[0] = e, this;throw new Error("Not a DOM node.");
      }, offset: function offset() {
        var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };return { top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
      }, position: function position() {
        function e() {
          for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;return e || document;
        }var t = this[0],
            e = e.apply(t),
            n = this.offset(),
            o = /^(?:body|html)$/i.test(e.nodeName) ? { top: 0, left: 0 } : r(e).offset();return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), { top: n.top - o.top, left: n.left - o.left };
      } };var n = {};r.expando = "velocity" + new Date().getTime(), r.uuid = 0;for (var o = {}, i = o.hasOwnProperty, a = o.toString, l = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < l.length; s++) o["[object " + l[s] + "]"] = l[s].toLowerCase();r.fn.init.prototype = r.fn, e.Velocity = { Utilities: r };
  }
}(window), function (e) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e();
}(function () {
  return function (e, t, r, n) {
    function o(e) {
      for (var t = -1, r = e ? e.length : 0, n = []; ++t < r;) {
        var o = e[t];o && n.push(o);
      }return n;
    }function i(e) {
      return h.isWrapped(e) ? e = [].slice.call(e) : h.isNode(e) && (e = [e]), e;
    }function a(e) {
      var t = d.data(e, "velocity");return null === t ? n : t;
    }function l(e) {
      return function (t) {
        return Math.round(t * e) * (1 / e);
      };
    }function s(e, r, n, o) {
      function i(e, t) {
        return 1 - 3 * t + 3 * e;
      }function a(e, t) {
        return 3 * t - 6 * e;
      }function l(e) {
        return 3 * e;
      }function s(e, t, r) {
        return ((i(t, r) * e + a(t, r)) * e + l(t)) * e;
      }function c(e, t, r) {
        return 3 * i(t, r) * e * e + 2 * a(t, r) * e + l(t);
      }function u(t, r) {
        for (var o = 0; h > o; ++o) {
          var i = c(r, e, n);if (0 === i) return r;var a = s(r, e, n) - t;r -= a / i;
        }return r;
      }function p() {
        for (var t = 0; y > t; ++t) P[t] = s(t * x, e, n);
      }function d(t, r, o) {
        var i,
            a,
            l = 0;do a = r + (o - r) / 2, i = s(a, e, n) - t, i > 0 ? o = a : r = a; while (Math.abs(i) > m && ++l < b);return a;
      }function f(t) {
        for (var r = 0, o = 1, i = y - 1; o != i && P[o] <= t; ++o) r += x;--o;var a = (t - P[o]) / (P[o + 1] - P[o]),
            l = r + a * x,
            s = c(l, e, n);return s >= v ? u(t, l) : 0 == s ? l : d(t, r, r + x);
      }function g() {
        T = !0, (e != r || n != o) && p();
      }var h = 4,
          v = .001,
          m = 1e-7,
          b = 10,
          y = 11,
          x = 1 / (y - 1),
          w = "Float32Array" in t;if (4 !== arguments.length) return !1;for (var S = 0; 4 > S; ++S) if ("number" != typeof arguments[S] || isNaN(arguments[S]) || !isFinite(arguments[S])) return !1;e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);var P = w ? new Float32Array(y) : new Array(y),
          T = !1,
          Y = function Y(t) {
        return T || g(), e === r && n === o ? t : 0 === t ? 0 : 1 === t ? 1 : s(f(t), r, o);
      };Y.getControlPoints = function () {
        return [{ x: e, y: r }, { x: n, y: o }];
      };var R = "generateBezier(" + [e, r, n, o] + ")";return Y.toString = function () {
        return R;
      }, Y;
    }function c(e, t) {
      var r = e;return h.isString(e) ? y.Easings[e] || (r = !1) : r = h.isArray(e) && 1 === e.length ? l.apply(null, e) : h.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : h.isArray(e) && 4 === e.length ? s.apply(null, e) : !1, r === !1 && (r = y.Easings[y.defaults.easing] ? y.defaults.easing : b), r;
    }function u(e) {
      if (e) {
        var t = new Date().getTime(),
            r = y.State.calls.length;r > 1e4 && (y.State.calls = o(y.State.calls));for (var i = 0; r > i; i++) if (y.State.calls[i]) {
          var l = y.State.calls[i],
              s = l[0],
              c = l[2],
              f = l[3],
              g = !!f,
              v = null;f || (f = y.State.calls[i][3] = t - 16);for (var m = Math.min((t - f) / c.duration, 1), b = 0, x = s.length; x > b; b++) {
            var S = s[b],
                T = S.element;if (a(T)) {
              var Y = !1;if (c.display !== n && null !== c.display && "none" !== c.display) {
                if ("flex" === c.display) {
                  var R = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];d.each(R, function (e, t) {
                    w.setPropertyValue(T, "display", t);
                  });
                }w.setPropertyValue(T, "display", c.display);
              }c.visibility !== n && "hidden" !== c.visibility && w.setPropertyValue(T, "visibility", c.visibility);for (var V in S) if ("element" !== V) {
                var E,
                    C = S[V],
                    k = h.isString(C.easing) ? y.Easings[C.easing] : C.easing;if (1 === m) E = C.endValue;else {
                  var X = C.endValue - C.startValue;if (E = C.startValue + X * k(m, c, X), !g && E === C.currentValue) continue;
                }if (C.currentValue = E, "tween" === V) v = E;else {
                  if (w.Hooks.registered[V]) {
                    var L = w.Hooks.getRoot(V),
                        H = a(T).rootPropertyValueCache[L];H && (C.rootPropertyValue = H);
                  }var W = w.setPropertyValue(T, V, C.currentValue + (0 === parseFloat(E) ? "" : C.unitType), C.rootPropertyValue, C.scrollData);w.Hooks.registered[V] && (w.Normalizations.registered[L] ? a(T).rootPropertyValueCache[L] = w.Normalizations.registered[L]("extract", null, W[1]) : a(T).rootPropertyValueCache[L] = W[1]), "transform" === W[0] && (Y = !0);
                }
              }c.mobileHA && a(T).transformCache.translate3d === n && (a(T).transformCache.translate3d = "(0px, 0px, 0px)", Y = !0), Y && w.flushTransformCache(T);
            }
          }c.display !== n && "none" !== c.display && (y.State.calls[i][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (y.State.calls[i][2].visibility = !1), c.progress && c.progress.call(l[1], l[1], m, Math.max(0, f + c.duration - t), f, v), 1 === m && p(i);
        }
      }y.State.isTicking && P(u);
    }function p(e, t) {
      if (!y.State.calls[e]) return !1;for (var r = y.State.calls[e][0], o = y.State.calls[e][1], i = y.State.calls[e][2], l = y.State.calls[e][4], s = !1, c = 0, u = r.length; u > c; c++) {
        var p = r[c].element;if (t || i.loop || ("none" === i.display && w.setPropertyValue(p, "display", i.display), "hidden" === i.visibility && w.setPropertyValue(p, "visibility", i.visibility)), i.loop !== !0 && (d.queue(p)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(p)[1])) && a(p)) {
          a(p).isAnimating = !1, a(p).rootPropertyValueCache = {};var f = !1;d.each(w.Lists.transforms3D, function (e, t) {
            var r = /^scale/.test(t) ? 1 : 0,
                o = a(p).transformCache[t];a(p).transformCache[t] !== n && new RegExp("^\\(" + r + "[^.]").test(o) && (f = !0, delete a(p).transformCache[t]);
          }), i.mobileHA && (f = !0, delete a(p).transformCache.translate3d), f && w.flushTransformCache(p), w.Values.removeClass(p, "velocity-animating");
        }if (!t && i.complete && !i.loop && c === u - 1) try {
          i.complete.call(o, o);
        } catch (g) {
          setTimeout(function () {
            throw g;
          }, 1);
        }l && i.loop !== !0 && l(o), a(p) && i.loop === !0 && !t && (d.each(a(p).tweensContainer, function (e, t) {
          /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100);
        }), y(p, "reverse", { loop: !0, delay: i.delay })), i.queue !== !1 && d.dequeue(p, i.queue);
      }y.State.calls[e] = !1;for (var h = 0, v = y.State.calls.length; v > h; h++) if (y.State.calls[h] !== !1) {
        s = !0;break;
      }s === !1 && (y.State.isTicking = !1, delete y.State.calls, y.State.calls = []);
    }var d,
        f = function () {
      if (r.documentMode) return r.documentMode;for (var e = 7; e > 4; e--) {
        var t = r.createElement("div");if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e;
      }return n;
    }(),
        g = function () {
      var e = 0;return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
        var r,
            n = new Date().getTime();return r = Math.max(0, 16 - (n - e)), e = n + r, setTimeout(function () {
          t(n + r);
        }, r);
      };
    }(),
        h = { isString: function isString(e) {
        return "string" == typeof e;
      }, isArray: Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }, isFunction: function isFunction(e) {
        return "[object Function]" === Object.prototype.toString.call(e);
      }, isNode: function isNode(e) {
        return e && e.nodeType;
      }, isNodeList: function isNodeList(e) {
        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0);
      }, isWrapped: function isWrapped(e) {
        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e));
      }, isSVG: function isSVG(e) {
        return t.SVGElement && e instanceof t.SVGElement;
      }, isEmptyObject: function isEmptyObject(e) {
        for (var t in e) return !1;return !0;
      } },
        v = !1;if (e.fn && e.fn.jquery ? (d = e, v = !0) : d = t.Velocity.Utilities, 8 >= f && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if (7 >= f) return void (jQuery.fn.velocity = jQuery.fn.animate);var m = 400,
        b = "swing",
        y = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: t.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: r.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: d, Redirects: {}, Easings: {}, Promise: t.Promise, defaults: { queue: "", duration: m, easing: b, begin: n, complete: n, progress: n, display: n, visibility: n, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function init(e) {
        d.data(e, "velocity", { isSVG: h.isSVG(e), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
      }, hook: null, mock: !1, version: { major: 1, minor: 2, patch: 2 }, debug: !1 };t.pageYOffset !== n ? (y.State.scrollAnchor = t, y.State.scrollPropertyLeft = "pageXOffset", y.State.scrollPropertyTop = "pageYOffset") : (y.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, y.State.scrollPropertyLeft = "scrollLeft", y.State.scrollPropertyTop = "scrollTop");var x = function () {
      function e(e) {
        return -e.tension * e.x - e.friction * e.v;
      }function t(t, r, n) {
        var o = { x: t.x + n.dx * r, v: t.v + n.dv * r, tension: t.tension, friction: t.friction };return { dx: o.v, dv: e(o) };
      }function r(r, n) {
        var o = { dx: r.v, dv: e(r) },
            i = t(r, .5 * n, o),
            a = t(r, .5 * n, i),
            l = t(r, n, a),
            s = 1 / 6 * (o.dx + 2 * (i.dx + a.dx) + l.dx),
            c = 1 / 6 * (o.dv + 2 * (i.dv + a.dv) + l.dv);return r.x = r.x + s * n, r.v = r.v + c * n, r;
      }return function n(e, t, o) {
        var i,
            a,
            l,
            s = { x: -1, v: 0, tension: null, friction: null },
            c = [0],
            u = 0,
            p = 1e-4,
            d = .016;for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, o = o || null, s.tension = e, s.friction = t, i = null !== o, i ? (u = n(e, t), a = u / o * d) : a = d;;) if (l = r(l || s, a), c.push(1 + l.x), u += 16, !(Math.abs(l.x) > p && Math.abs(l.v) > p)) break;return i ? function (e) {
          return c[e * (c.length - 1) | 0];
        } : u;
      };
    }();y.Easings = { linear: function linear(e) {
        return e;
      }, swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      }, spring: function spring(e) {
        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
      } }, d.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
      y.Easings[t[0]] = s.apply(null, t[1]);
    });var w = y.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function register() {
          for (var e = 0; e < w.Lists.colors.length; e++) {
            var t = "color" === w.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";w.Hooks.templates[w.Lists.colors[e]] = ["Red Green Blue Alpha", t];
          }var r, n, o;if (f) for (r in w.Hooks.templates) {
            n = w.Hooks.templates[r], o = n[0].split(" ");var i = n[1].match(w.RegEx.valueSplit);"Color" === o[0] && (o.push(o.shift()), i.push(i.shift()), w.Hooks.templates[r] = [o.join(" "), i.join(" ")]);
          }for (r in w.Hooks.templates) {
            n = w.Hooks.templates[r], o = n[0].split(" ");for (var e in o) {
              var a = r + o[e],
                  l = e;w.Hooks.registered[a] = [r, l];
            }
          }
        }, getRoot: function getRoot(e) {
          var t = w.Hooks.registered[e];return t ? t[0] : e;
        }, cleanRootPropertyValue: function cleanRootPropertyValue(e, t) {
          return w.RegEx.valueUnwrap.test(t) && (t = t.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(t) && (t = w.Hooks.templates[e][1]), t;
        }, extractValue: function extractValue(e, t) {
          var r = w.Hooks.registered[e];if (r) {
            var n = r[0],
                o = r[1];return t = w.Hooks.cleanRootPropertyValue(n, t), t.toString().match(w.RegEx.valueSplit)[o];
          }return t;
        }, injectValue: function injectValue(e, t, r) {
          var n = w.Hooks.registered[e];if (n) {
            var o,
                i,
                a = n[0],
                l = n[1];return r = w.Hooks.cleanRootPropertyValue(a, r), o = r.toString().match(w.RegEx.valueSplit), o[l] = t, i = o.join(" ");
          }return r;
        } }, Normalizations: { registered: { clip: function clip(e, t, r) {
            switch (e) {case "name":
                return "clip";case "extract":
                var n;return w.RegEx.wrappedValueAlreadyExtracted.test(r) ? n = r : (n = r.toString().match(w.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : r), n;case "inject":
                return "rect(" + r + ")";}
          }, blur: function blur(e, t, r) {
            switch (e) {case "name":
                return y.State.isFirefox ? "filter" : "-webkit-filter";case "extract":
                var n = parseFloat(r);if (!n && 0 !== n) {
                  var o = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);n = o ? o[1] : 0;
                }return n;case "inject":
                return parseFloat(r) ? "blur(" + r + ")" : "none";}
          }, opacity: function opacity(e, t, r) {
            if (8 >= f) switch (e) {case "name":
                return "filter";case "extract":
                var n = r.toString().match(/alpha\(opacity=(.*)\)/i);return r = n ? n[1] / 100 : 1;case "inject":
                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")";} else switch (e) {case "name":
                return "opacity";case "extract":
                return r;case "inject":
                return r;}
          } }, register: function register() {
          9 >= f || y.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));for (var e = 0; e < w.Lists.transformsBase.length; e++) !function () {
            var t = w.Lists.transformsBase[e];w.Normalizations.registered[t] = function (e, r, o) {
              switch (e) {case "name":
                  return "transform";case "extract":
                  return a(r) === n || a(r).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : a(r).transformCache[t].replace(/[()]/g, "");case "inject":
                  var i = !1;switch (t.substr(0, t.length - 1)) {case "translate":
                      i = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case "scal":case "scale":
                      y.State.isAndroid && a(r).transformCache[t] === n && 1 > o && (o = 1), i = !/(\d)$/i.test(o);break;case "skew":
                      i = !/(deg|\d)$/i.test(o);break;case "rotate":
                      i = !/(deg|\d)$/i.test(o);}return i || (a(r).transformCache[t] = "(" + o + ")"), a(r).transformCache[t];}
            };
          }();for (var e = 0; e < w.Lists.colors.length; e++) !function () {
            var t = w.Lists.colors[e];w.Normalizations.registered[t] = function (e, r, o) {
              switch (e) {case "name":
                  return t;case "extract":
                  var i;if (w.RegEx.wrappedValueAlreadyExtracted.test(o)) i = o;else {
                    var a,
                        l = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };/^[A-z]+$/i.test(o) ? a = l[o] !== n ? l[o] : l.black : w.RegEx.isHex.test(o) ? a = "rgb(" + w.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (a = l.black), i = (a || o).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                  }return 8 >= f || 3 !== i.split(" ").length || (i += " 1"), i;case "inject":
                  return 8 >= f ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";}
            };
          }();
        } }, Names: { camelCase: function camelCase(e) {
          return e.replace(/-(\w)/g, function (e, t) {
            return t.toUpperCase();
          });
        }, SVGAttribute: function SVGAttribute(e) {
          var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return (f || y.State.isAndroid && !y.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
        }, prefixCheck: function prefixCheck(e) {
          if (y.State.prefixMatches[e]) return [y.State.prefixMatches[e], !0];for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, n = t.length; n > r; r++) {
            var o;if (o = 0 === r ? e : t[r] + e.replace(/^\w/, function (e) {
              return e.toUpperCase();
            }), h.isString(y.State.prefixElement.style[o])) return y.State.prefixMatches[e] = o, [o, !0];
          }return [e, !1];
        } }, Values: { hexToRgb: function hexToRgb(e) {
          var t,
              r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e = e.replace(r, function (e, t, r, n) {
            return t + t + r + r + n + n;
          }), t = n.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0];
        }, isCSSNullValue: function isCSSNullValue(e) {
          return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
        }, getUnitType: function getUnitType(e) {
          return (/^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
          );
        }, getDisplayType: function getDisplayType(e) {
          var t = e && e.tagName.toString().toLowerCase();return (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
          );
        }, addClass: function addClass(e, t) {
          e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t;
        }, removeClass: function removeClass(e, t) {
          e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
        } }, getPropertyValue: function getPropertyValue(e, r, o, i) {
        function l(e, r) {
          function o() {
            c && w.setPropertyValue(e, "display", "none");
          }var s = 0;if (8 >= f) s = d.css(e, r);else {
            var c = !1;if (/^(width|height)$/.test(r) && 0 === w.getPropertyValue(e, "display") && (c = !0, w.setPropertyValue(e, "display", w.Values.getDisplayType(e))), !i) {
              if ("height" === r && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                var u = e.offsetHeight - (parseFloat(w.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingBottom")) || 0);return o(), u;
              }if ("width" === r && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                var p = e.offsetWidth - (parseFloat(w.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingRight")) || 0);return o(), p;
              }
            }var g;g = a(e) === n ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), s = 9 === f && "filter" === r ? g.getPropertyValue(r) : g[r], ("" === s || null === s) && (s = e.style[r]), o();
          }if ("auto" === s && /^(top|right|bottom|left)$/i.test(r)) {
            var h = l(e, "position");("fixed" === h || "absolute" === h && /top|left/i.test(r)) && (s = d(e).position()[r] + "px");
          }return s;
        }var s;if (w.Hooks.registered[r]) {
          var c = r,
              u = w.Hooks.getRoot(c);o === n && (o = w.getPropertyValue(e, w.Names.prefixCheck(u)[0])), w.Normalizations.registered[u] && (o = w.Normalizations.registered[u]("extract", e, o)), s = w.Hooks.extractValue(c, o);
        } else if (w.Normalizations.registered[r]) {
          var p, g;p = w.Normalizations.registered[r]("name", e), "transform" !== p && (g = l(e, w.Names.prefixCheck(p)[0]), w.Values.isCSSNullValue(g) && w.Hooks.templates[r] && (g = w.Hooks.templates[r][1])), s = w.Normalizations.registered[r]("extract", e, g);
        }if (!/^[\d-]/.test(s)) if (a(e) && a(e).isSVG && w.Names.SVGAttribute(r)) {
          if (/^(height|width)$/i.test(r)) try {
            s = e.getBBox()[r];
          } catch (h) {
            s = 0;
          } else s = e.getAttribute(r);
        } else s = l(e, w.Names.prefixCheck(r)[0]);return w.Values.isCSSNullValue(s) && (s = 0), y.debug >= 2 && console.log("Get " + r + ": " + s), s;
      }, setPropertyValue: function setPropertyValue(e, r, n, o, i) {
        var l = r;if ("scroll" === r) i.container ? i.container["scroll" + i.direction] = n : "Left" === i.direction ? t.scrollTo(n, i.alternateValue) : t.scrollTo(i.alternateValue, n);else if (w.Normalizations.registered[r] && "transform" === w.Normalizations.registered[r]("name", e)) w.Normalizations.registered[r]("inject", e, n), l = "transform", n = a(e).transformCache[r];else {
          if (w.Hooks.registered[r]) {
            var s = r,
                c = w.Hooks.getRoot(r);o = o || w.getPropertyValue(e, c), n = w.Hooks.injectValue(s, n, o), r = c;
          }if (w.Normalizations.registered[r] && (n = w.Normalizations.registered[r]("inject", e, n), r = w.Normalizations.registered[r]("name", e)), l = w.Names.prefixCheck(r)[0], 8 >= f) try {
            e.style[l] = n;
          } catch (u) {
            y.debug && console.log("Browser does not support [" + n + "] for [" + l + "]");
          } else a(e) && a(e).isSVG && w.Names.SVGAttribute(r) ? e.setAttribute(r, n) : e.style[l] = n;y.debug >= 2 && console.log("Set " + r + " (" + l + "): " + n);
        }return [l, n];
      }, flushTransformCache: function flushTransformCache(e) {
        function t(t) {
          return parseFloat(w.getPropertyValue(e, t));
        }var r = "";if ((f || y.State.isAndroid && !y.State.isChrome) && a(e).isSVG) {
          var n = { translate: [t("translateX"), t("translateY")], skewX: [t("skewX")], skewY: [t("skewY")], scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")], rotate: [t("rotateZ"), 0, 0] };d.each(a(e).transformCache, function (e) {
            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (r += e + "(" + n[e].join(" ") + ") ", delete n[e]);
          });
        } else {
          var o, i;d.each(a(e).transformCache, function (t) {
            return o = a(e).transformCache[t], "transformPerspective" === t ? (i = o, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void (r += t + o + " "));
          }), i && (r = "perspective" + i + " " + r);
        }w.setPropertyValue(e, "transform", r);
      } };w.Hooks.register(), w.Normalizations.register(), y.hook = function (e, t, r) {
      var o = n;return e = i(e), d.each(e, function (e, i) {
        if (a(i) === n && y.init(i), r === n) o === n && (o = y.CSS.getPropertyValue(i, t));else {
          var l = y.CSS.setPropertyValue(i, t, r);"transform" === l[0] && y.CSS.flushTransformCache(i), o = l;
        }
      }), o;
    };var S = function S() {
      function e() {
        return l ? V.promise || null : s;
      }function o() {
        function e(e) {
          function p(e, t) {
            var r = n,
                o = n,
                a = n;return h.isArray(e) ? (r = e[0], !h.isArray(e[1]) && /^[\d-]/.test(e[1]) || h.isFunction(e[1]) || w.RegEx.isHex.test(e[1]) ? a = e[1] : (h.isString(e[1]) && !w.RegEx.isHex.test(e[1]) || h.isArray(e[1])) && (o = t ? e[1] : c(e[1], l.duration), e[2] !== n && (a = e[2]))) : r = e, t || (o = o || l.easing), h.isFunction(r) && (r = r.call(i, T, P)), h.isFunction(a) && (a = a.call(i, T, P)), [r || 0, o, a];
          }function f(e, t) {
            var r, n;return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
              return r = e, "";
            }), r || (r = w.Values.getUnitType(e)), [n, r];
          }function m() {
            var e = { myParent: i.parentNode || r.body, position: w.getPropertyValue(i, "position"), fontSize: w.getPropertyValue(i, "fontSize") },
                n = e.position === W.lastPosition && e.myParent === W.lastParent,
                o = e.fontSize === W.lastFontSize;W.lastParent = e.myParent, W.lastPosition = e.position, W.lastFontSize = e.fontSize;var l = 100,
                s = {};if (o && n) s.emToPx = W.lastEmToPx, s.percentToPxWidth = W.lastPercentToPxWidth, s.percentToPxHeight = W.lastPercentToPxHeight;else {
              var c = a(i).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");y.init(c), e.myParent.appendChild(c), d.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                y.CSS.setPropertyValue(c, t, "hidden");
              }), y.CSS.setPropertyValue(c, "position", e.position), y.CSS.setPropertyValue(c, "fontSize", e.fontSize), y.CSS.setPropertyValue(c, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                y.CSS.setPropertyValue(c, t, l + "%");
              }), y.CSS.setPropertyValue(c, "paddingLeft", l + "em"), s.percentToPxWidth = W.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(c, "width", null, !0)) || 1) / l, s.percentToPxHeight = W.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(c, "height", null, !0)) || 1) / l, s.emToPx = W.lastEmToPx = (parseFloat(w.getPropertyValue(c, "paddingLeft")) || 1) / l, e.myParent.removeChild(c);
            }return null === W.remToPx && (W.remToPx = parseFloat(w.getPropertyValue(r.body, "fontSize")) || 16), null === W.vwToPx && (W.vwToPx = parseFloat(t.innerWidth) / 100, W.vhToPx = parseFloat(t.innerHeight) / 100), s.remToPx = W.remToPx, s.vwToPx = W.vwToPx, s.vhToPx = W.vhToPx, y.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(s), i), s;
          }if (l.begin && 0 === T) try {
            l.begin.call(g, g);
          } catch (x) {
            setTimeout(function () {
              throw x;
            }, 1);
          }if ("scroll" === E) {
            var S,
                Y,
                R,
                C = /^x$/i.test(l.axis) ? "Left" : "Top",
                k = parseFloat(l.offset) || 0;l.container ? h.isWrapped(l.container) || h.isNode(l.container) ? (l.container = l.container[0] || l.container, S = l.container["scroll" + C], R = S + d(i).position()[C.toLowerCase()] + k) : l.container = null : (S = y.State.scrollAnchor[y.State["scrollProperty" + C]], Y = y.State.scrollAnchor[y.State["scrollProperty" + ("Left" === C ? "Top" : "Left")]], R = d(i).offset()[C.toLowerCase()] + k), s = { scroll: { rootPropertyValue: !1, startValue: S, currentValue: S, endValue: R, unitType: "", easing: l.easing, scrollData: { container: l.container, direction: C, alternateValue: Y } }, element: i }, y.debug && console.log("tweensContainer (scroll): ", s.scroll, i);
          } else if ("reverse" === E) {
            if (!a(i).tweensContainer) return void d.dequeue(i, l.queue);"none" === a(i).opts.display && (a(i).opts.display = "auto"), "hidden" === a(i).opts.visibility && (a(i).opts.visibility = "visible"), a(i).opts.loop = !1, a(i).opts.begin = null, a(i).opts.complete = null, b.easing || delete l.easing, b.duration || delete l.duration, l = d.extend({}, a(i).opts, l);var X = d.extend(!0, {}, a(i).tweensContainer);for (var L in X) if ("element" !== L) {
              var H = X[L].startValue;X[L].startValue = X[L].currentValue = X[L].endValue, X[L].endValue = H, h.isEmptyObject(b) || (X[L].easing = l.easing), y.debug && console.log("reverse tweensContainer (" + L + "): " + JSON.stringify(X[L]), i);
            }s = X;
          } else if ("start" === E) {
            var X;a(i).tweensContainer && a(i).isAnimating === !0 && (X = a(i).tweensContainer), d.each(v, function (e, t) {
              if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(e)) {
                var r = p(t, !0),
                    o = r[0],
                    i = r[1],
                    a = r[2];if (w.RegEx.isHex.test(o)) {
                  for (var l = ["Red", "Green", "Blue"], s = w.Values.hexToRgb(o), c = a ? w.Values.hexToRgb(a) : n, u = 0; u < l.length; u++) {
                    var d = [s[u]];i && d.push(i), c !== n && d.push(c[u]), v[e + l[u]] = d;
                  }delete v[e];
                }
              }
            });for (var I in v) {
              var j = p(v[I]),
                  F = j[0],
                  M = j[1],
                  N = j[2];I = w.Names.camelCase(I);var O = w.Hooks.getRoot(I),
                  z = !1;if (a(i).isSVG || "tween" === O || w.Names.prefixCheck(O)[1] !== !1 || w.Normalizations.registered[O] !== n) {
                (l.display !== n && null !== l.display && "none" !== l.display || l.visibility !== n && "hidden" !== l.visibility) && /opacity|filter/.test(I) && !N && 0 !== F && (N = 0), l._cacheValues && X && X[I] ? (N === n && (N = X[I].endValue + X[I].unitType), z = a(i).rootPropertyValueCache[O]) : w.Hooks.registered[I] ? N === n ? (z = w.getPropertyValue(i, O), N = w.getPropertyValue(i, I, z)) : z = w.Hooks.templates[O][1] : N === n && (N = w.getPropertyValue(i, I));var D,
                    q,
                    B,
                    $ = !1;if (D = f(I, N), N = D[0], B = D[1], D = f(I, F), F = D[0].replace(/^([+-\/*])=/, function (e, t) {
                  return $ = t, "";
                }), q = D[1], N = parseFloat(N) || 0, F = parseFloat(F) || 0, "%" === q && (/^(fontSize|lineHeight)$/.test(I) ? (F /= 100, q = "em") : /^scale/.test(I) ? (F /= 100, q = "") : /(Red|Green|Blue)$/i.test(I) && (F = F / 100 * 255, q = "")), /[\/*]/.test($)) q = B;else if (B !== q && 0 !== N) if (0 === F) q = B;else {
                  o = o || m();var U = /margin|padding|left|right|width|text|word|letter/i.test(I) || /X$/.test(I) || "x" === I ? "x" : "y";switch (B) {case "%":
                      N *= "x" === U ? o.percentToPxWidth : o.percentToPxHeight;break;case "px":
                      break;default:
                      N *= o[B + "ToPx"];}switch (q) {case "%":
                      N *= 1 / ("x" === U ? o.percentToPxWidth : o.percentToPxHeight);break;case "px":
                      break;default:
                      N *= 1 / o[q + "ToPx"];}
                }switch ($) {case "+":
                    F = N + F;break;case "-":
                    F = N - F;break;case "*":
                    F = N * F;break;case "/":
                    F = N / F;}s[I] = { rootPropertyValue: z, startValue: N, currentValue: N, endValue: F, unitType: q, easing: M }, y.debug && console.log("tweensContainer (" + I + "): " + JSON.stringify(s[I]), i);
              } else y.debug && console.log("Skipping [" + O + "] due to a lack of browser support.");
            }s.element = i;
          }s.element && (w.Values.addClass(i, "velocity-animating"), A.push(s), "" === l.queue && (a(i).tweensContainer = s, a(i).opts = l), a(i).isAnimating = !0, T === P - 1 ? (y.State.calls.push([A, g, l, null, V.resolver]), y.State.isTicking === !1 && (y.State.isTicking = !0, u())) : T++);
        }var o,
            i = this,
            l = d.extend({}, y.defaults, b),
            s = {};switch (a(i) === n && y.init(i), parseFloat(l.delay) && l.queue !== !1 && d.queue(i, l.queue, function (e) {
          y.velocityQueueEntryFlag = !0, a(i).delayTimer = { setTimeout: setTimeout(e, parseFloat(l.delay)), next: e };
        }), l.duration.toString().toLowerCase()) {case "fast":
            l.duration = 200;break;case "normal":
            l.duration = m;break;case "slow":
            l.duration = 600;break;default:
            l.duration = parseFloat(l.duration) || 1;}y.mock !== !1 && (y.mock === !0 ? l.duration = l.delay = 1 : (l.duration *= parseFloat(y.mock) || 1, l.delay *= parseFloat(y.mock) || 1)), l.easing = c(l.easing, l.duration), l.begin && !h.isFunction(l.begin) && (l.begin = null), l.progress && !h.isFunction(l.progress) && (l.progress = null), l.complete && !h.isFunction(l.complete) && (l.complete = null), l.display !== n && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = y.CSS.Values.getDisplayType(i))), l.visibility !== n && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && y.State.isMobile && !y.State.isGingerbread, l.queue === !1 ? l.delay ? setTimeout(e, l.delay) : e() : d.queue(i, l.queue, function (t, r) {
          return r === !0 ? (V.promise && V.resolver(g), !0) : (y.velocityQueueEntryFlag = !0, void e(t));
        }), "" !== l.queue && "fx" !== l.queue || "inprogress" === d.queue(i)[0] || d.dequeue(i);
      }var l,
          s,
          f,
          g,
          v,
          b,
          x = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || h.isString(arguments[0].properties));if (h.isWrapped(this) ? (l = !1, f = 0, g = this, s = this) : (l = !0, f = 1, g = x ? arguments[0].elements || arguments[0].e : arguments[0]), g = i(g)) {
        x ? (v = arguments[0].properties || arguments[0].p, b = arguments[0].options || arguments[0].o) : (v = arguments[f], b = arguments[f + 1]);var P = g.length,
            T = 0;if (!/^(stop|finish|finishAll)$/i.test(v) && !d.isPlainObject(b)) {
          var Y = f + 1;b = {};for (var R = Y; R < arguments.length; R++) h.isArray(arguments[R]) || !/^(fast|normal|slow)$/i.test(arguments[R]) && !/^\d/.test(arguments[R]) ? h.isString(arguments[R]) || h.isArray(arguments[R]) ? b.easing = arguments[R] : h.isFunction(arguments[R]) && (b.complete = arguments[R]) : b.duration = arguments[R];
        }var V = { promise: null, resolver: null, rejecter: null };l && y.Promise && (V.promise = new y.Promise(function (e, t) {
          V.resolver = e, V.rejecter = t;
        }));var E;switch (v) {case "scroll":
            E = "scroll";break;case "reverse":
            E = "reverse";break;case "finish":case "finishAll":case "stop":
            d.each(g, function (e, t) {
              a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer), "finishAll" !== v || b !== !0 && !h.isString(b) || (d.each(d.queue(t, h.isString(b) ? b : ""), function (e, t) {
                h.isFunction(t) && t();
              }), d.queue(t, h.isString(b) ? b : "", []));
            });var C = [];return d.each(y.State.calls, function (e, t) {
              t && d.each(t[1], function (r, o) {
                var i = b === n ? "" : b;return i === !0 || t[2].queue === i || b === n && t[2].queue === !1 ? void d.each(g, function (r, n) {
                  n === o && ((b === !0 || h.isString(b)) && (d.each(d.queue(n, h.isString(b) ? b : ""), function (e, t) {
                    h.isFunction(t) && t(null, !0);
                  }), d.queue(n, h.isString(b) ? b : "", [])), "stop" === v ? (a(n) && a(n).tweensContainer && i !== !1 && d.each(a(n).tweensContainer, function (e, t) {
                    t.endValue = t.currentValue;
                  }), C.push(e)) : ("finish" === v || "finishAll" === v) && (t[2].duration = 1));
                }) : !0;
              });
            }), "stop" === v && (d.each(C, function (e, t) {
              p(t, !0);
            }), V.promise && V.resolver(g)), e();default:
            if (!d.isPlainObject(v) || h.isEmptyObject(v)) {
              if (h.isString(v) && y.Redirects[v]) {
                var k = d.extend({}, b),
                    X = k.duration,
                    L = k.delay || 0;return k.backwards === !0 && (g = d.extend(!0, [], g).reverse()), d.each(g, function (e, t) {
                  parseFloat(k.stagger) ? k.delay = L + parseFloat(k.stagger) * e : h.isFunction(k.stagger) && (k.delay = L + k.stagger.call(t, e, P)), k.drag && (k.duration = parseFloat(X) || (/^(callout|transition)/.test(v) ? 1e3 : m), k.duration = Math.max(k.duration * (k.backwards ? 1 - e / P : (e + 1) / P), .75 * k.duration, 200)), y.Redirects[v].call(t, t, k || {}, e, P, g, V.promise ? V : n);
                }), e();
              }var H = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";return V.promise ? V.rejecter(new Error(H)) : console.log(H), e();
            }E = "start";}var W = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
            A = [];d.each(g, function (e, t) {
          h.isNode(t) && o.call(t);
        });var I,
            k = d.extend({}, y.defaults, b);if (k.loop = parseInt(k.loop), I = 2 * k.loop - 1, k.loop) for (var j = 0; I > j; j++) {
          var F = { delay: k.delay, progress: k.progress };j === I - 1 && (F.display = k.display, F.visibility = k.visibility, F.complete = k.complete), S(g, "reverse", F);
        }return e();
      }
    };y = d.extend(S, y), y.animate = S;var P = t.requestAnimationFrame || g;return y.State.isMobile || r.hidden === n || r.addEventListener("visibilitychange", function () {
      r.hidden ? (P = function (e) {
        return setTimeout(function () {
          e(!0);
        }, 16);
      }, u()) : P = t.requestAnimationFrame || g;
    }), e.Velocity = y, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = y.defaults), d.each(["Down", "Up"], function (e, t) {
      y.Redirects["slide" + t] = function (e, r, o, i, a, l) {
        var s = d.extend({}, r),
            c = s.begin,
            u = s.complete,
            p = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
            f = {};s.display === n && (s.display = "Down" === t ? "inline" === y.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), s.begin = function () {
          c && c.call(a, a);for (var r in p) {
            f[r] = e.style[r];var n = y.CSS.getPropertyValue(e, r);p[r] = "Down" === t ? [n, 0] : [0, n];
          }f.overflow = e.style.overflow, e.style.overflow = "hidden";
        }, s.complete = function () {
          for (var t in f) e.style[t] = f[t];u && u.call(a, a), l && l.resolver(a);
        }, y(e, p, s);
      };
    }), d.each(["In", "Out"], function (e, t) {
      y.Redirects["fade" + t] = function (e, r, o, i, a, l) {
        var s = d.extend({}, r),
            c = { opacity: "In" === t ? 1 : 0 },
            u = s.complete;o !== i - 1 ? s.complete = s.begin = null : s.complete = function () {
          u && u.call(a, a), l && l.resolver(a);
        }, s.display === n && (s.display = "In" === t ? "auto" : "none"), y(this, c, s);
      };
    }), y;
  }(window.jQuery || window.Zepto || window, window, document);
});
!function (e) {
  "function" == typeof require && "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(["velocity"], e) : e();
}(function () {
  return function (e, t, r, n) {
    function a(e, t) {
      var r = [];return e && t ? (o.each([e, t], function (e, t) {
        var n = [];o.each(t, function (e, t) {
          for (; t.toString().length < 5;) t = "0" + t;n.push(t);
        }), r.push(n.join(""));
      }), parseFloat(r[0]) > parseFloat(r[1])) : !1;
    }if (!e.Velocity || !e.Velocity.Utilities) return void (t.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));var i = e.Velocity,
        o = i.Utilities,
        s = i.version,
        l = { major: 1, minor: 1, patch: 0 };if (a(l, s)) {
      var c = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(c), new Error(c);
    }i.RegisterEffect = i.RegisterUI = function (e, t) {
      function r(e, t, r, n) {
        var a,
            s = 0;o.each(e.nodeType ? [e] : e, function (e, t) {
          n && (r += e * n), a = t.parentNode, o.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function (e, r) {
            s += parseFloat(i.CSS.getPropertyValue(t, r));
          });
        }), i.animate(a, { height: ("In" === t ? "+" : "-") + "=" + s }, { queue: !1, easing: "ease-in-out", duration: r * ("In" === t ? .6 : 1) });
      }return i.Redirects[e] = function (a, s, l, c, u, p) {
        function f() {
          s.display !== n && "none" !== s.display || !/Out$/.test(e) || o.each(u.nodeType ? [u] : u, function (e, t) {
            i.CSS.setPropertyValue(t, "display", "none");
          }), s.complete && s.complete.call(u, u), p && p.resolver(u || a);
        }var d = l === c - 1;"function" == typeof t.defaultDuration ? t.defaultDuration = t.defaultDuration.call(u, u) : t.defaultDuration = parseFloat(t.defaultDuration);for (var g = 0; g < t.calls.length; g++) {
          var h = t.calls[g],
              v = h[0],
              m = s.duration || t.defaultDuration || 1e3,
              y = h[1],
              b = h[2] || {},
              w = {};if (w.duration = m * (y || 1), w.queue = s.queue || "", w.easing = b.easing || "ease", w.delay = parseFloat(b.delay) || 0, w._cacheValues = b._cacheValues || !0, 0 === g) {
            if (w.delay += parseFloat(s.delay) || 0, 0 === l && (w.begin = function () {
              s.begin && s.begin.call(u, u);var t = e.match(/(In|Out)$/);t && "In" === t[0] && v.opacity !== n && o.each(u.nodeType ? [u] : u, function (e, t) {
                i.CSS.setPropertyValue(t, "opacity", 0);
              }), s.animateParentHeight && t && r(u, t[0], m + w.delay, s.stagger);
            }), null !== s.display) if (s.display !== n && "none" !== s.display) w.display = s.display;else if (/In$/.test(e)) {
              var x = i.CSS.Values.getDisplayType(a);w.display = "inline" === x ? "inline-block" : x;
            }s.visibility && "hidden" !== s.visibility && (w.visibility = s.visibility);
          }g === t.calls.length - 1 && (w.complete = function () {
            if (t.reset) {
              for (var e in t.reset) {
                var r = t.reset[e];i.CSS.Hooks.registered[e] !== n || "string" != typeof r && "number" != typeof r || (t.reset[e] = [t.reset[e], t.reset[e]]);
              }var o = { duration: 0, queue: !1 };d && (o.complete = f), i.animate(a, t.reset, o);
            } else d && f();
          }, "hidden" === s.visibility && (w.visibility = s.visibility)), i.animate(a, v, w);
        }
      }, i;
    }, i.RegisterEffect.packagedEffects = { "callout.bounce": { defaultDuration: 550, calls: [[{ translateY: -30 }, .25], [{ translateY: 0 }, .125], [{ translateY: -15 }, .125], [{ translateY: 0 }, .25]] }, "callout.shake": { defaultDuration: 800, calls: [[{ translateX: -11 }, .125], [{ translateX: 11 }, .125], [{ translateX: -11 }, .125], [{ translateX: 11 }, .125], [{ translateX: -11 }, .125], [{ translateX: 11 }, .125], [{ translateX: -11 }, .125], [{ translateX: 0 }, .125]] }, "callout.flash": { defaultDuration: 1100, calls: [[{ opacity: [0, "easeInOutQuad", 1] }, .25], [{ opacity: [1, "easeInOutQuad"] }, .25], [{ opacity: [0, "easeInOutQuad"] }, .25], [{ opacity: [1, "easeInOutQuad"] }, .25]] }, "callout.pulse": { defaultDuration: 825, calls: [[{ scaleX: 1.1, scaleY: 1.1 }, .5, { easing: "easeInExpo" }], [{ scaleX: 1, scaleY: 1 }, .5]] }, "callout.swing": { defaultDuration: 950, calls: [[{ rotateZ: 15 }, .2], [{ rotateZ: -10 }, .2], [{ rotateZ: 5 }, .2], [{ rotateZ: -5 }, .2], [{ rotateZ: 0 }, .2]] }, "callout.tada": { defaultDuration: 1e3, calls: [[{ scaleX: .9, scaleY: .9, rotateZ: -3 }, .1], [{ scaleX: 1.1, scaleY: 1.1, rotateZ: 3 }, .1], [{ scaleX: 1.1, scaleY: 1.1, rotateZ: -3 }, .1], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], [{ scaleX: 1, scaleY: 1, rotateZ: 0 }, .2]] }, "transition.fadeIn": { defaultDuration: 500, calls: [[{ opacity: [1, 0] }]] }, "transition.fadeOut": { defaultDuration: 500, calls: [[{ opacity: [0, 1] }]] }, "transition.flipXIn": { defaultDuration: 700, calls: [[{ opacity: [1, 0], transformPerspective: [800, 800], rotateY: [0, -55] }]], reset: { transformPerspective: 0 } }, "transition.flipXOut": { defaultDuration: 700, calls: [[{ opacity: [0, 1], transformPerspective: [800, 800], rotateY: 55 }]], reset: { transformPerspective: 0, rotateY: 0 } }, "transition.flipYIn": { defaultDuration: 800, calls: [[{ opacity: [1, 0], transformPerspective: [800, 800], rotateX: [0, -45] }]], reset: { transformPerspective: 0 } }, "transition.flipYOut": { defaultDuration: 800, calls: [[{ opacity: [0, 1], transformPerspective: [800, 800], rotateX: 25 }]], reset: { transformPerspective: 0, rotateX: 0 } }, "transition.flipBounceXIn": { defaultDuration: 900, calls: [[{ opacity: [.725, 0], transformPerspective: [400, 400], rotateY: [-10, 90] }, .5], [{ opacity: .8, rotateY: 10 }, .25], [{ opacity: 1, rotateY: 0 }, .25]], reset: { transformPerspective: 0 } }, "transition.flipBounceXOut": { defaultDuration: 800, calls: [[{ opacity: [.9, 1], transformPerspective: [400, 400], rotateY: -10 }, .5], [{ opacity: 0, rotateY: 90 }, .5]], reset: { transformPerspective: 0, rotateY: 0 } }, "transition.flipBounceYIn": { defaultDuration: 850, calls: [[{ opacity: [.725, 0], transformPerspective: [400, 400], rotateX: [-10, 90] }, .5], [{ opacity: .8, rotateX: 10 }, .25], [{ opacity: 1, rotateX: 0 }, .25]], reset: { transformPerspective: 0 } }, "transition.flipBounceYOut": { defaultDuration: 800, calls: [[{ opacity: [.9, 1], transformPerspective: [400, 400], rotateX: -15 }, .5], [{ opacity: 0, rotateX: 90 }, .5]], reset: { transformPerspective: 0, rotateX: 0 } }, "transition.swoopIn": { defaultDuration: 850, calls: [[{ opacity: [1, 0], transformOriginX: ["100%", "50%"], transformOriginY: ["100%", "100%"], scaleX: [1, 0], scaleY: [1, 0], translateX: [0, -700], translateZ: 0 }]], reset: { transformOriginX: "50%", transformOriginY: "50%" } }, "transition.swoopOut": { defaultDuration: 850, calls: [[{ opacity: [0, 1], transformOriginX: ["50%", "100%"], transformOriginY: ["100%", "100%"], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0 }]], reset: { transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0 } }, "transition.whirlIn": { defaultDuration: 850, calls: [[{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 0], scaleY: [1, 0], rotateY: [0, 160] }, 1, { easing: "easeInOutSine" }]] }, "transition.whirlOut": { defaultDuration: 750, calls: [[{ opacity: [0, "easeInOutQuint", 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 0, scaleY: 0, rotateY: 160 }, 1, { easing: "swing" }]], reset: { scaleX: 1, scaleY: 1, rotateY: 0 } }, "transition.shrinkIn": { defaultDuration: 750, calls: [[{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 1.5], scaleY: [1, 1.5], translateZ: 0 }]] }, "transition.shrinkOut": { defaultDuration: 600, calls: [[{ opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 1.3, scaleY: 1.3, translateZ: 0 }]], reset: { scaleX: 1, scaleY: 1 } }, "transition.expandIn": { defaultDuration: 700, calls: [[{ opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, .625], scaleY: [1, .625], translateZ: 0 }]] }, "transition.expandOut": { defaultDuration: 700, calls: [[{ opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: .5, scaleY: .5, translateZ: 0 }]], reset: { scaleX: 1, scaleY: 1 } }, "transition.bounceIn": { defaultDuration: 800, calls: [[{ opacity: [1, 0], scaleX: [1.05, .3], scaleY: [1.05, .3] }, .4], [{ scaleX: .9, scaleY: .9, translateZ: 0 }, .2], [{ scaleX: 1, scaleY: 1 }, .5]] }, "transition.bounceOut": { defaultDuration: 800, calls: [[{ scaleX: .95, scaleY: .95 }, .35], [{ scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, .35], [{ opacity: [0, 1], scaleX: .3, scaleY: .3 }, .3]], reset: { scaleX: 1, scaleY: 1 } }, "transition.bounceUpIn": { defaultDuration: 800, calls: [[{ opacity: [1, 0], translateY: [-30, 1e3] }, .6, { easing: "easeOutCirc" }], [{ translateY: 10 }, .2], [{ translateY: 0 }, .2]] }, "transition.bounceUpOut": { defaultDuration: 1e3, calls: [[{ translateY: 20 }, .2], [{ opacity: [0, "easeInCirc", 1], translateY: -1e3 }, .8]], reset: { translateY: 0 } }, "transition.bounceDownIn": { defaultDuration: 800, calls: [[{ opacity: [1, 0], translateY: [30, -1e3] }, .6, { easing: "easeOutCirc" }], [{ translateY: -10 }, .2], [{ translateY: 0 }, .2]] }, "transition.bounceDownOut": { defaultDuration: 1e3, calls: [[{ translateY: -20 }, .2], [{ opacity: [0, "easeInCirc", 1], translateY: 1e3 }, .8]], reset: { translateY: 0 } }, "transition.bounceLeftIn": { defaultDuration: 750, calls: [[{ opacity: [1, 0], translateX: [30, -1250] }, .6, { easing: "easeOutCirc" }], [{ translateX: -10 }, .2], [{ translateX: 0 }, .2]] }, "transition.bounceLeftOut": { defaultDuration: 750, calls: [[{ translateX: 30 }, .2], [{ opacity: [0, "easeInCirc", 1], translateX: -1250 }, .8]], reset: { translateX: 0 } }, "transition.bounceRightIn": { defaultDuration: 750, calls: [[{ opacity: [1, 0], translateX: [-30, 1250] }, .6, { easing: "easeOutCirc" }], [{ translateX: 10 }, .2], [{ translateX: 0 }, .2]] }, "transition.bounceRightOut": { defaultDuration: 750, calls: [[{ translateX: -30 }, .2], [{ opacity: [0, "easeInCirc", 1], translateX: 1250 }, .8]], reset: { translateX: 0 } }, "transition.slideUpIn": { defaultDuration: 900, calls: [[{ opacity: [1, 0], translateY: [0, 20], translateZ: 0 }]] }, "transition.slideUpOut": { defaultDuration: 900, calls: [[{ opacity: [0, 1], translateY: -20, translateZ: 0 }]], reset: { translateY: 0 } }, "transition.slideDownIn": { defaultDuration: 900, calls: [[{ opacity: [1, 0], translateY: [0, -20], translateZ: 0 }]] }, "transition.slideDownOut": { defaultDuration: 900, calls: [[{ opacity: [0, 1], translateY: 20, translateZ: 0 }]], reset: { translateY: 0 } }, "transition.slideLeftIn": { defaultDuration: 1e3, calls: [[{ opacity: [1, 0], translateX: [0, -20], translateZ: 0 }]] }, "transition.slideLeftOut": { defaultDuration: 1050, calls: [[{ opacity: [0, 1], translateX: -20, translateZ: 0 }]], reset: { translateX: 0 } }, "transition.slideRightIn": { defaultDuration: 1e3, calls: [[{ opacity: [1, 0], translateX: [0, 20], translateZ: 0 }]] }, "transition.slideRightOut": { defaultDuration: 1050, calls: [[{ opacity: [0, 1], translateX: 20, translateZ: 0 }]], reset: { translateX: 0 } }, "transition.slideUpBigIn": { defaultDuration: 850, calls: [[{ opacity: [1, 0], translateY: [0, 75], translateZ: 0 }]] }, "transition.slideUpBigOut": { defaultDuration: 800, calls: [[{ opacity: [0, 1], translateY: -75, translateZ: 0 }]], reset: { translateY: 0 } }, "transition.slideDownBigIn": { defaultDuration: 850, calls: [[{ opacity: [1, 0], translateY: [0, -75], translateZ: 0 }]] }, "transition.slideDownBigOut": { defaultDuration: 800, calls: [[{ opacity: [0, 1], translateY: 75, translateZ: 0 }]], reset: { translateY: 0 } }, "transition.slideLeftBigIn": { defaultDuration: 800, calls: [[{ opacity: [1, 0], translateX: [0, -75], translateZ: 0 }]] }, "transition.slideLeftBigOut": { defaultDuration: 750, calls: [[{ opacity: [0, 1], translateX: -75, translateZ: 0 }]], reset: { translateX: 0 } }, "transition.slideRightBigIn": { defaultDuration: 800, calls: [[{ opacity: [1, 0], translateX: [0, 75], translateZ: 0 }]] }, "transition.slideRightBigOut": { defaultDuration: 750, calls: [[{ opacity: [0, 1], translateX: 75, translateZ: 0 }]], reset: { translateX: 0 } }, "transition.perspectiveUpIn": { defaultDuration: 800, calls: [[{ opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: [0, -180] }]], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" } }, "transition.perspectiveUpOut": { defaultDuration: 850, calls: [[{ opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: -180 }]], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 } }, "transition.perspectiveDownIn": { defaultDuration: 800, calls: [[{ opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: [0, 180] }]], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" } }, "transition.perspectiveDownOut": { defaultDuration: 850, calls: [[{ opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: 180 }]], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 } }, "transition.perspectiveLeftIn": { defaultDuration: 950, calls: [[{ opacity: [1, 0], transformPerspective: [2e3, 2e3], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: [0, -180] }]], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" } }, "transition.perspectiveLeftOut": { defaultDuration: 950, calls: [[{ opacity: [0, 1], transformPerspective: [2e3, 2e3], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: -180 }]], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 } }, "transition.perspectiveRightIn": { defaultDuration: 950, calls: [[{ opacity: [1, 0], transformPerspective: [2e3, 2e3], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: [0, 180] }]], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" } }, "transition.perspectiveRightOut": { defaultDuration: 950, calls: [[{ opacity: [0, 1], transformPerspective: [2e3, 2e3], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: 180 }]], reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 } } };for (var u in i.RegisterEffect.packagedEffects) i.RegisterEffect(u, i.RegisterEffect.packagedEffects[u]);i.RunSequence = function (e) {
      var t = o.extend(!0, [], e);t.length > 1 && (o.each(t.reverse(), function (e, r) {
        var n = t[e + 1];if (n) {
          var a = r.o || r.options,
              s = n.o || n.options,
              l = a && a.sequenceQueue === !1 ? "begin" : "complete",
              c = s && s[l],
              u = {};u[l] = function () {
            var e = n.e || n.elements,
                t = e.nodeType ? [e] : e;c && c.call(t, t), i(r);
          }, n.o ? n.o = o.extend({}, s, u) : n.options = o.extend({}, s, u);
        }
      }), t.reverse()), i(t[0]);
    };
  }(window.jQuery || window.Zepto || window, window, document);
});
!function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define([], function () {
    return e.apply(t);
  }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t);
}("object" == typeof global ? global : undefined, function () {
  "use strict";
  function t(t) {
    return null !== t && t === t.window;
  }function e(e) {
    return t(e) ? e : 9 === e.nodeType && e.defaultView;
  }function n(t) {
    var e = typeof t;return "function" === e || "object" === e && !!t;
  }function a(t) {
    return n(t) && t.nodeType > 0;
  }function o(t) {
    var e = f.call(t);return "[object String]" === e ? d(t) : n(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e) && t.hasOwnProperty("length") ? t : a(t) ? [t] : [];
  }function i(t) {
    var n,
        a,
        o = { top: 0, left: 0 },
        i = t && t.ownerDocument;return n = i.documentElement, "undefined" != typeof t.getBoundingClientRect && (o = t.getBoundingClientRect()), a = e(i), { top: o.top + a.pageYOffset - n.clientTop, left: o.left + a.pageXOffset - n.clientLeft };
  }function r(t) {
    var e = "";for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");return e;
  }function s(t, e, n) {
    if (n) {
      n.classList.remove("waves-rippling");var a = n.getAttribute("data-x"),
          o = n.getAttribute("data-y"),
          i = n.getAttribute("data-scale"),
          s = n.getAttribute("data-translate"),
          u = Date.now() - Number(n.getAttribute("data-hold")),
          l = 350 - u;0 > l && (l = 0), "mousemove" === t.type && (l = 150);var c = "mousemove" === t.type ? 2500 : m.duration;setTimeout(function () {
        var t = { top: o + "px", left: a + "px", opacity: "0", "-webkit-transition-duration": c + "ms", "-moz-transition-duration": c + "ms", "-o-transition-duration": c + "ms", "transition-duration": c + "ms", "-webkit-transform": i + " " + s, "-moz-transform": i + " " + s, "-ms-transform": i + " " + s, "-o-transform": i + " " + s, transform: i + " " + s };n.setAttribute("style", r(t)), setTimeout(function () {
          try {
            e.removeChild(n);
          } catch (t) {
            return !1;
          }
        }, c);
      }, l);
    }
  }function u(t) {
    if (h.allowEvent(t) === !1) return null;for (var e = null, n = t.target || t.srcElement; null !== n.parentElement;) {
      if (n.classList.contains("waves-effect") && !(n instanceof SVGElement)) {
        e = n;break;
      }n = n.parentElement;
    }return e;
  }function l(t) {
    var e = u(t);if (null !== e) {
      if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;if (h.registerEvent(t), "touchstart" === t.type && m.delay) {
        var n = !1,
            a = setTimeout(function () {
          a = null, m.show(t, e);
        }, m.delay),
            o = function (_o) {
          function o(_x) {
            return _o.apply(this, arguments);
          }o.toString = function () {
            return _o.toString();
          };return o;
        }(function (o) {
          a && (clearTimeout(a), a = null, m.show(t, e)), n || (n = !0, m.hide(o, e));
        }),
            i = function i(t) {
          a && (clearTimeout(a), a = null), o(t);
        };e.addEventListener("touchmove", i, !1), e.addEventListener("touchend", o, !1), e.addEventListener("touchcancel", o, !1);
      } else m.show(t, e), p && (e.addEventListener("touchend", m.hide, !1), e.addEventListener("touchcancel", m.hide, !1)), e.addEventListener("mouseup", m.hide, !1), e.addEventListener("mouseleave", m.hide, !1);
    }
  }var c = c || {},
      d = document.querySelectorAll.bind(document),
      f = Object.prototype.toString,
      p = "ontouchstart" in window,
      m = { duration: 750, delay: 200, show: function show(t, e, n) {
      if (2 === t.button) return !1;e = e || this;var a = document.createElement("div");a.className = "waves-ripple waves-rippling", e.appendChild(a);var o = i(e),
          s = 0,
          u = 0;"touches" in t && t.touches.length ? (s = t.touches[0].pageY - o.top, u = t.touches[0].pageX - o.left) : (s = t.pageY - o.top, u = t.pageX - o.left), u = u >= 0 ? u : 0, s = s >= 0 ? s : 0;var l = "scale(" + e.clientWidth / 100 * 3 + ")",
          c = "translate(0,0)";n && (c = "translate(" + n.x + "px, " + n.y + "px)"), a.setAttribute("data-hold", Date.now()), a.setAttribute("data-x", u), a.setAttribute("data-y", s), a.setAttribute("data-scale", l), a.setAttribute("data-translate", c);var d = { top: s + "px", left: u + "px" };a.classList.add("waves-notransition"), a.setAttribute("style", r(d)), a.classList.remove("waves-notransition"), d["-webkit-transform"] = l + " " + c, d["-moz-transform"] = l + " " + c, d["-ms-transform"] = l + " " + c, d["-o-transform"] = l + " " + c, d.transform = l + " " + c, d.opacity = "1";var f = "mousemove" === t.type ? 2500 : m.duration;d["-webkit-transition-duration"] = f + "ms", d["-moz-transition-duration"] = f + "ms", d["-o-transition-duration"] = f + "ms", d["transition-duration"] = f + "ms", a.setAttribute("style", r(d));
    }, hide: function hide(t, e) {
      e = e || this;for (var n = e.getElementsByClassName("waves-rippling"), a = 0, o = n.length; o > a; a++) s(t, e, n[a]);
    } },
      v = { input: function input(t) {
      var e = t.parentNode;if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
        var n = document.createElement("i");n.className = t.className + " waves-input-wrapper", t.className = "waves-button-input", e.replaceChild(n, t), n.appendChild(t);var a = window.getComputedStyle(t, null),
            o = a.color,
            i = a.backgroundColor;n.setAttribute("style", "color:" + o + ";background:" + i), t.setAttribute("style", "background-color:rgba(0,0,0,0);");
      }
    }, img: function img(t) {
      var e = t.parentNode;if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
        var n = document.createElement("i");e.replaceChild(n, t), n.appendChild(t);
      }
    } },
      h = { touches: 0, allowEvent: function allowEvent(t) {
      var e = !0;return (/^(mousedown|mousemove)$/.test(t.type) && h.touches && (e = !1), e
      );
    }, registerEvent: function registerEvent(t) {
      var e = t.type;"touchstart" === e ? h.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function () {
        h.touches && (h.touches -= 1);
      }, 500);
    } };return c.init = function (t) {
    var e = document.body;t = t || {}, "duration" in t && (m.duration = t.duration), "delay" in t && (m.delay = t.delay), p && (e.addEventListener("touchstart", l, !1), e.addEventListener("touchcancel", h.registerEvent, !1), e.addEventListener("touchend", h.registerEvent, !1)), e.addEventListener("mousedown", l, !1);
  }, c.attach = function (t, e) {
    t = o(t), "[object Array]" === f.call(e) && (e = e.join(" ")), e = e ? " " + e : "";for (var n, a, i = 0, r = t.length; r > i; i++) n = t[i], a = n.tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(a) && (v[a](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + e);
  }, c.ripple = function (t, e) {
    t = o(t);var n = t.length;if (e = e || {}, e.wait = e.wait || 0, e.position = e.position || null, n) for (var a, r, s, u = {}, l = 0, c = { type: "mousedown", button: 1 }, d = function d(t, e) {
      return function () {
        m.hide(t, e);
      };
    }; n > l; l++) if (a = t[l], r = e.position || { x: a.clientWidth / 2, y: a.clientHeight / 2 }, s = i(a), u.x = s.left + r.x, u.y = s.top + r.y, c.pageX = u.x, c.pageY = u.y, m.show(c, a), e.wait >= 0 && null !== e.wait) {
      var f = { type: "mouseup", button: 1 };setTimeout(d(f, a), e.wait);
    }
  }, c.calm = function (t) {
    t = o(t);for (var e = { type: "mouseup", button: 1 }, n = 0, a = t.length; a > n; n++) m.hide(e, t[n]);
  }, c.displayEffect = function (t) {
    console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), c.init(t);
  }, c;
});