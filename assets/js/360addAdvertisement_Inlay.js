!function(n){function e(a){if(t[a])return t[a].exports;var o=t[a]={exports:{},id:a,loaded:!1};return n[a].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var t={};return e.m=n,e.c=t,e.p="",e(0)}([function(module,exports,__webpack_require__){eval("var Conf, Exp, Params, Polyfill, Position, QIHOO_UNION_SLOT_FUNC, Util, createIframe, createPlaceHolder, ref, slot;\n\nPolyfill = __webpack_require__(2);\n\nConf = __webpack_require__(3);\n\nUtil = __webpack_require__(4);\n\nParams = __webpack_require__(5);\n\nExp = __webpack_require__(14);\n\nPosition = __webpack_require__(15);\n\ncreateIframe = function(width, height, src) {\n  var id;\n  id = 'QIHOO_UNION_' + new Date().getTime();\n  return \"<iframe id=\" + id + \" src=\" + src + \" width=\" + width + \" height=\" + height + \" frameborder=0 marginheight=0 marginwidth=0 scrolling=no align=center,center allowtransparency=true style=display:block;border:none;></iframe>\";\n};\n\ncreatePlaceHolder = function() {\n  var placeholder;\n  placeholder = document.createElement('div');\n  placeholder.id = \"QIHOO_UNION_PLACEHOLDER_\" + new Date().getTime() + Math.random() * 100;\n  placeholder.style.display = 'block';\n  placeholder.style.border = 'none';\n  placeholder.style.boxSizing = 'content-box';\n  placeholder.style.background = 'none';\n  placeholder.style.visibility = 'visible';\n  return placeholder;\n};\n\nQIHOO_UNION_SLOT_FUNC = function(options) {\n  var iframeSrc, pageEnv, params, placeholder;\n  pageEnv = Util.getDocumentTitleAndUrl();\n  params = {\n    ls: options.ls,\n    w: options.w,\n    h: options.h,\n    inject: Conf.inject.INLAY,\n    pos: Conf.pos.INLAY,\n    rurl: pageEnv.url,\n    ref: pageEnv.referrer,\n    ifr: pageEnv.ifr,\n    pn: Conf.QIHOO_UNION.INLAY,\n    prt: new Date().getTime(),\n    tit: pageEnv.title,\n    pt: Conf.QIHOO_UNION.PT,\n    cw: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,\n    dpr: 1,\n    jv: Conf.jv\n  };\n  Params.setStyle(params);\n  if (typeof QIHOO_UNION_DEBUG !== \"undefined\" && QIHOO_UNION_DEBUG !== null) {\n    Conf.searchPage = QIHOO_UNION_DEBUG.searchPage;\n  }\n  iframeSrc = Conf.searchPage + Util.serialize(params);\n  placeholder = createPlaceHolder();\n  placeholder.innerHTML = createIframe(options.w, options.h, iframeSrc);\n  placeholder.setAttribute('data-ls', params.ls);\n  placeholder.setAttribute('data-rurl', params.rurl);\n  document.write(placeholder.outerHTML);\n  if (Exp.getPosition()) {\n    Position.add(placeholder);\n  }\n  return Conf.QIHOO_UNION.INLAY++;\n};\n\nslot = (ref = window.QIHOO_UNION_SLOT) != null ? ref : window.QIHOO_union_SLOT;\n\nQIHOO_UNION_SLOT_FUNC(slot);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/inlay/main.coffee\n ** module id = 0\n ** module chunks = 5\n **/\n//# sourceURL=webpack:///./src/inlay/main.coffee?")},,function(module,exports){eval("if (!Function.prototype.bind) {\n  Function.prototype.bind = function (oThis) {\n    if (typeof this !== \"function\") {\n      // closest thing possible to the ECMAScript 5\n      // internal IsCallable function\n      throw new TypeError(\"Function.prototype.bind - what is trying to be bound is not callable\");\n    }\n\n    var aArgs = Array.prototype.slice.call(arguments, 1), \n        fToBind = this, \n        fNOP = function () {},\n        fBound = function () {\n          return fToBind.apply(this instanceof fNOP\n                                 ? this\n                                 : oThis || this,\n                               aArgs.concat(Array.prototype.slice.call(arguments)));\n        };\n\n    fNOP.prototype = this.prototype;\n    fBound.prototype = new fNOP();\n\n    return fBound;\n  };\n}\n\nif (!Array.isArray) {\n  Array.isArray = function(arg) {\n    return Object.prototype.toString.call(arg) === '[object Array]';\n  };\n}\n\nif (!Array.prototype.filter) {\n  Array.prototype.filter = function(fun/*, thisArg*/) {\n    'use strict';\n\n    if (this === void 0 || this === null) {\n      throw new TypeError();\n    }\n\n    var t = Object(this);\n    var len = t.length >>> 0;\n    if (typeof fun !== 'function') {\n      throw new TypeError();\n    }\n\n    var res = [];\n    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;\n    for (var i = 0; i < len; i++) {\n      if (i in t) {\n        var val = t[i];\n\n        // NOTE: Technically this should Object.defineProperty at\n        //       the next index, as push can be affected by\n        //       properties on Object.prototype and Array.prototype.\n        //       But that method's new, and collisions should be\n        //       rare, so use the more-compatible alternative.\n        if (fun.call(thisArg, val, i, t)) {\n          res.push(val);\n        }\n      }\n    }\n\n    return res;\n  };\n}\n\n// Production steps of ECMA-262, Edition 5, 15.4.4.19\n// Reference: http://es5.github.io/#x15.4.4.19\nif (!Array.prototype.map) {\n\n  Array.prototype.map = function(callback, thisArg) {\n\n    var T, A, k;\n\n    if (this == null) {\n      throw new TypeError(' this is null or not defined');\n    }\n\n    // 1. Let O be the result of calling ToObject passing the |this| \n    //    value as the argument.\n    var O = Object(this);\n\n    // 2. Let lenValue be the result of calling the Get internal \n    //    method of O with the argument \"length\".\n    // 3. Let len be ToUint32(lenValue).\n    var len = O.length >>> 0;\n\n    // 4. If IsCallable(callback) is false, throw a TypeError exception.\n    // See: http://es5.github.com/#x9.11\n    if (typeof callback !== 'function') {\n      throw new TypeError(callback + ' is not a function');\n    }\n\n    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.\n    if (arguments.length > 1) {\n      T = thisArg;\n    }\n\n    // 6. Let A be a new array created as if by the expression new Array(len) \n    //    where Array is the standard built-in constructor with that name and \n    //    len is the value of len.\n    A = new Array(len);\n\n    // 7. Let k be 0\n    k = 0;\n\n    // 8. Repeat, while k < len\n    while (k < len) {\n\n      var kValue, mappedValue;\n\n      // a. Let Pk be ToString(k).\n      //   This is implicit for LHS operands of the in operator\n      // b. Let kPresent be the result of calling the HasProperty internal \n      //    method of O with argument Pk.\n      //   This step can be combined with c\n      // c. If kPresent is true, then\n      if (k in O) {\n\n        // i. Let kValue be the result of calling the Get internal \n        //    method of O with argument Pk.\n        kValue = O[k];\n\n        // ii. Let mappedValue be the result of calling the Call internal \n        //     method of callback with T as the this value and argument \n        //     list containing kValue, k, and O.\n        mappedValue = callback.call(T, kValue, k, O);\n\n        // iii. Call the DefineOwnProperty internal method of A with arguments\n        // Pk, Property Descriptor\n        // { Value: mappedValue,\n        //   Writable: true,\n        //   Enumerable: true,\n        //   Configurable: true },\n        // and false.\n\n        // In browsers that support Object.defineProperty, use the following:\n        // Object.defineProperty(A, k, {\n        //   value: mappedValue,\n        //   writable: true,\n        //   enumerable: true,\n        //   configurable: true\n        // });\n\n        // For best browser support, use the following:\n        A[k] = mappedValue;\n      }\n      // d. Increase k by 1.\n      k++;\n    }\n\n    // 9. return A\n    return A;\n  };\n}\n\n// Production steps of ECMA-262, Edition 5, 15.4.4.21\n// Reference: http://es5.github.io/#x15.4.4.21\nif (!Array.prototype.reduce) {\n  Array.prototype.reduce = function(callback /*, initialValue*/) {\n    'use strict';\n    if (this == null) {\n      throw new TypeError('Array.prototype.reduce called on null or undefined');\n    }\n    if (typeof callback !== 'function') {\n      throw new TypeError(callback + ' is not a function');\n    }\n    var t = Object(this), len = t.length >>> 0, k = 0, value;\n    if (arguments.length == 2) {\n      value = arguments[1];\n    } else {\n      while (k < len && !(k in t)) {\n        k++; \n      }\n      if (k >= len) {\n        throw new TypeError('Reduce of empty array with no initial value');\n      }\n      value = t[k++];\n    }\n    for (; k < len; k++) {\n      if (k in t) {\n        value = callback(value, t[k], k, t);\n      }\n    }\n    return value;\n  };\n}\n\n// Production steps of ECMA-262, Edition 5, 15.4.4.14\n// Reference: http://es5.github.io/#x15.4.4.14\nif (!Array.prototype.indexOf) {\n  Array.prototype.indexOf = function(searchElement, fromIndex) {\n\n    var k;\n\n    // 1. Let O be the result of calling ToObject passing\n    //    the this value as the argument.\n    if (this == null) {\n      throw new TypeError('\"this\" is null or not defined');\n    }\n\n    var O = Object(this);\n\n    // 2. Let lenValue be the result of calling the Get\n    //    internal method of O with the argument \"length\".\n    // 3. Let len be ToUint32(lenValue).\n    var len = O.length >>> 0;\n\n    // 4. If len is 0, return -1.\n    if (len === 0) {\n      return -1;\n    }\n\n    // 5. If argument fromIndex was passed let n be\n    //    ToInteger(fromIndex); else let n be 0.\n    var n = +fromIndex || 0;\n\n    if (Math.abs(n) === Infinity) {\n      n = 0;\n    }\n\n    // 6. If n >= len, return -1.\n    if (n >= len) {\n      return -1;\n    }\n\n    // 7. If n >= 0, then Let k be n.\n    // 8. Else, n<0, Let k be len - abs(n).\n    //    If k is less than 0, then let k be 0.\n    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);\n\n    // 9. Repeat, while k < len\n    while (k < len) {\n      // a. Let Pk be ToString(k).\n      //   This is implicit for LHS operands of the in operator\n      // b. Let kPresent be the result of calling the\n      //    HasProperty internal method of O with argument Pk.\n      //   This step can be combined with c\n      // c. If kPresent is true, then\n      //    i.  Let elementK be the result of calling the Get\n      //        internal method of O with the argument ToString(k).\n      //   ii.  Let same be the result of applying the\n      //        Strict Equality Comparison Algorithm to\n      //        searchElement and elementK.\n      //  iii.  If same is true, return k.\n      if (k in O && O[k] === searchElement) {\n        return k;\n      }\n      k++;\n    }\n    return -1;\n  };\n}\n\nNumber.isNaN = Number.isNaN || function(value) {\n        return typeof value === \"number\" && value !== value;\n}\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/lib/es5-polyfill.js\n ** module id = 2\n ** module chunks = 0 3 5 12\n **/\n//# sourceURL=webpack:///./src/lib/es5-polyfill.js?")},function(module,exports,__webpack_require__){eval("var Conf, QIHOO_UNION_INIT, Util, ref, ref1;\n\nUtil = __webpack_require__(4);\n\nConf = {\n  searchPage: 'http://api.so.lianmeng.360.cn/searchthrow/api/ads/throw?',\n  mobileSearchPage: 'http://api.so.lianmeng.360.cn/searchthrow/api/mn/throw?',\n  imageplusSearchPage: 'http://api.so.lianmeng.360.cn/searchthrow/api/ads/imgplus?',\n  positionTrack: 'http://s1.stat.lianmeng.360.cn/xy.gif?',\n  pos: {\n    \"INLAY\": 0,\n    \"LEFTBOTTOM\": 1,\n    \"RIGHTBOTTOM\": 2,\n    \"LEFT\": 3,\n    \"RIGHT\": 4,\n    \"TOP\": 5,\n    \"BOTTOM\": 6\n  },\n  inject: {\n    \"INLAY\": 1,\n    \"FLOAT\": 2,\n    \"MOBILEINLAY\": 3,\n    \"IMAGEPLUS\": 4\n  },\n  jv: '1437124819535',\n  floatPos: ['', 'leftbottom', 'rightbottom', 'leftright', 'left', 'right', 'top', 'bottom', 'topbottom'],\n  floatOrigin: ['', 'body', 'browser'],\n  floatDisplay: ['', 'default', 'onScroll']\n};\n\nQIHOO_UNION_INIT = {\n  \"PT\": new Date().getTime(),\n  \"RAND\": Math.random() * Math.random() * 10000,\n  \"INLAY\": 0,\n  \"FLOAT\": 0,\n  \"MOBILEINLAY\": 0,\n  \"IMAGEPLUS\": 0\n};\n\nif (Util.isInIframe()) {\n  window.QIHOO_UNION = (ref = window.QIHOO_UNION) != null ? ref : QIHOO_UNION_INIT;\n  Conf.QIHOO_UNION = window.QIHOO_UNION;\n} else {\n  window.top.QIHOO_UNION = (ref1 = window.top.QIHOO_UNION) != null ? ref1 : QIHOO_UNION_INIT;\n  Conf.QIHOO_UNION = window.top.QIHOO_UNION;\n}\n\nmodule.exports = Conf;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/lib/injectConf.coffee\n ** module id = 3\n ** module chunks = 0 3 5 8\n **/\n//# sourceURL=webpack:///./src/lib/injectConf.coffee?")},function(module,exports){eval("var Util,\n  hasProp = {}.hasOwnProperty;\n\nUtil = {\n  addStyle: function(css) {\n    var head, style;\n    head = document.head || document.getElementsByTagName('head')[0];\n    style = document.createElement('style');\n    style.type = 'text/css';\n    if (style.styleSheet) {\n      style.styleSheet.cssText = css;\n    } else {\n      style.appendChild(document.createTextNode(css));\n    }\n    return head.appendChild(style);\n  },\n  on: function(element, eventType, callback) {\n    if (window.addEventListener) {\n      return element.addEventListener(eventType, callback, false);\n    } else {\n      return element.attachEvent('on' + eventType, callback);\n    }\n  },\n  isInIframe: function() {\n    var err, error, href, isInIframe, win;\n    win = window;\n    isInIframe = false;\n    try {\n      href = win.parent.location.href;\n      win = win.parent;\n    } catch (error) {\n      err = error;\n      isInIframe = true;\n    }\n    return isInIframe;\n  },\n  getDocumentTitleAndUrl: function() {\n    var doc, err, error, ifr, maxLength, ref, ref1, referrer, result, tit, url, win;\n    win = window;\n    doc = win.document;\n    referrer = win.document.referrer;\n    ifr = 0;\n    if (Object.prototype.toString.call(win.setInterval) !== '[object Function]') {\n      tit = (ref = doc.title) != null ? ref : '';\n      url = (ref1 = win.location.href) != null ? ref1 : '';\n      ifr = 2;\n    } else {\n      maxLength = 10;\n      while (maxLength > 0) {\n        try {\n          tit = win.document.title;\n          url = win.parent.location.href;\n          win = win.parent;\n        } catch (error) {\n          err = error;\n          url = win.document.referrer;\n          ifr = 2;\n          break;\n        }\n        maxLength--;\n      }\n    }\n    if (ifr === 0) {\n      if (window !== window.parent) {\n        ifr = 1;\n      }\n    }\n    result = {\n      title: tit.replace(/\\(|\\)|>|<|\\'|\\\"/g, ''),\n      url: url.replace(/\\(|\\)|>|<|\\'|\\\"/g, ''),\n      referrer: referrer.replace(/\\(|\\)|>|<|\\'|\\\"/g, ''),\n      ifr: ifr\n    };\n    return result;\n  },\n  serialize: function(obj) {\n    var key, str, val;\n    str = [];\n    for (key in obj) {\n      if (!hasProp.call(obj, key)) continue;\n      val = obj[key];\n      str.push(key + \"=\" + encodeURIComponent(val).toString().substr(0, 512));\n    }\n    return str.join(\"&\");\n  }\n};\n\nmodule.exports = Util;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/lib/util.coffee\n ** module id = 4\n ** module chunks = 0 3 5 8 14\n **/\n//# sourceURL=webpack:///./src/lib/util.coffee?")},function(module,exports,__webpack_require__){eval("var HaosouLayout, ImageLinkLayout, ImageTextLayout, LinkLayout, MobileLinkLayout, Params, RankLayout, SearchLinkLayout, TextLayout;\n\nTextLayout = __webpack_require__(6);\n\nLinkLayout = __webpack_require__(7);\n\nRankLayout = __webpack_require__(8);\n\nHaosouLayout = __webpack_require__(9);\n\nImageLinkLayout = __webpack_require__(10);\n\nImageTextLayout = __webpack_require__(11);\n\nSearchLinkLayout = __webpack_require__(12);\n\nMobileLinkLayout = __webpack_require__(13);\n\nParams = {\n  setStyle: function(params) {\n    var _HaosouLayout, _ImageLinkLayout, _ImageTextLayout, _LinkLayout, _MobileLinkLayout, _RankLayout, _SearchLinkLayout, _TextLayout;\n    switch (params.inject) {\n      case 1:\n        _TextLayout = TextLayout.getLayout(params.w, params.h);\n        _LinkLayout = LinkLayout.getLayout(params.w, params.h);\n        _RankLayout = RankLayout.getLayout(params.w, params.h);\n        _ImageLinkLayout = ImageLinkLayout.getLayout(params.w, params.h);\n        _SearchLinkLayout = SearchLinkLayout.getLayout(params.w, params.h);\n        _ImageTextLayout = ImageTextLayout.getLayout(params.w, params.h);\n        params.inlay = _TextLayout.line * _TextLayout.column;\n        params.link = Math.min(Math.floor(_LinkLayout.line * _LinkLayout.column * 1.5), 50);\n        params.rank = params.w === 300 && params.h === 250 ? 32 : _RankLayout.line * _RankLayout.column;\n        params.imagelink = _ImageLinkLayout.line * _ImageLinkLayout.column;\n        params.searchlink = Math.max(1, _SearchLinkLayout.line * _SearchLinkLayout.column);\n        params.imagetext = [_ImageTextLayout.image.total, _ImageTextLayout.text.total].join(',');\n        return params;\n      case 2:\n        _HaosouLayout = HaosouLayout.getLayout(params.w, params.h);\n        _TextLayout = TextLayout.getLayout(params.w, params.h);\n        _LinkLayout = LinkLayout.getLayout(params.w, params.h);\n        _RankLayout = RankLayout.getLayout(params.w, params.h);\n        _ImageLinkLayout = ImageLinkLayout.getLayout(params.w, params.h);\n        _ImageTextLayout = ImageTextLayout.getLayout(params.w, params.h);\n        params.inlay = _TextLayout.line * _TextLayout.column;\n        params.link = Math.min(Math.floor(_LinkLayout.line * _LinkLayout.column * 1.5), 50);\n        params.rank = params.w === 300 && params.h === 250 ? 32 : _RankLayout.line * _RankLayout.column;\n        params.imagelink = _ImageLinkLayout.line * _ImageLinkLayout.column;\n        params.searchlink = 0;\n        params.hao360 = _HaosouLayout.line * _HaosouLayout.column;\n        params.imagetext = [_ImageTextLayout.image.total, _ImageTextLayout.text.total].join(',');\n        return params;\n      case 3:\n        _MobileLinkLayout = MobileLinkLayout.getLayout(params.w, params.h);\n        params.mobilelink = _MobileLinkLayout.column * _MobileLinkLayout.line;\n        params.inlay = 0;\n        params.link = 0;\n        params.hao360 = 0;\n        params.rank = 0;\n        params.imagelink = 0;\n        params.searchlink = 0;\n        return params;\n      case 4:\n        _ImageLinkLayout = ImageLinkLayout.getLayout(params.w, params.h);\n        params.inlay = 0;\n        params.link = 0;\n        params.hao360 = 0;\n        params.rank = 0;\n        params.imagelink = _ImageLinkLayout.line * _ImageLinkLayout.column;\n        params.searchlink = 0;\n        return params;\n      default:\n        return params;\n    }\n  }\n};\n\nmodule.exports = Params;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/lib/param.coffee\n ** module id = 5\n ** module chunks = 0 3 5 8\n **/\n//# sourceURL=webpack:///./src/lib/param.coffee?")},function(module,exports){eval("var Layout;\n\nLayout = {\n  getLayout: function(width, height) {\n    var layout, tpl;\n    tpl = width + '_' + height;\n    switch (tpl) {\n      case '300_250':\n      case '250_250':\n      case '640_60':\n        layout = {\n          column: 1,\n          line: 3\n        };\n        break;\n      case '160_600':\n        layout = {\n          column: 1,\n          line: 7\n        };\n        break;\n      case '960_90':\n        layout = {\n          column: 4,\n          line: 1\n        };\n        break;\n      case '336_280':\n        layout = {\n          column: 1,\n          line: 4\n        };\n        break;\n      default:\n        layout = {\n          column: 0,\n          line: 0\n        };\n    }\n    return layout;\n  }\n};\n\nmodule.exports = Layout;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/text/layout.coffee\n ** module id = 6\n ** module chunks = 0 3 5 8\n **/\n//# sourceURL=webpack:///./src/text/layout.coffee?")},function(module,exports){eval("var Layout;\n\nLayout = {\n  getLayout: function(width, height) {\n    var column, isValid, layout, line, minSpaceX, minSpaceY, tpl;\n    isValid = (1024 >= width && width >= 103) && (1024 >= height && height >= 28);\n    tpl = width + '_' + height;\n    switch (tpl) {\n      case '300_250':\n      case '250_250':\n      case '336_280':\n        layout = {\n          column: 2,\n          line: 6\n        };\n        break;\n      case '160_600':\n        layout = {\n          column: 1,\n          line: 15\n        };\n        break;\n      case '640_60':\n        layout = {\n          column: 6,\n          line: 2\n        };\n        break;\n      case '960_90':\n        layout = {\n          column: 9,\n          line: 3\n        };\n        break;\n      default:\n        column = Math.floor(width / 103);\n        line = Math.floor(height / 28);\n        if (column * line > 50) {\n          line = Math.floor(50 / column);\n        }\n        layout = {\n          column: column,\n          line: line\n        };\n    }\n    minSpaceX = minSpaceY = 4;\n    layout.itemWidth = Math.floor((width - minSpaceX * (layout.column - 1)) / layout.column);\n    layout.itemHeight = Math.floor((height - minSpaceY * (layout.line - 1)) / layout.line);\n    layout.spaceX = Math.floor((width - layout.column * layout.itemWidth) / (layout.column - 1));\n    layout.spaceY = Math.floor((height - layout.line * layout.itemHeight) / (layout.line - 1));\n    if (!isValid) {\n      layout.column = layout.line = 0;\n    }\n    if (Number.isNaN(layout.itemWidth)) {\n      layout.itemWidth = 0;\n    }\n    if (Number.isNaN(layout.itemHeight)) {\n      layout.itemHeight = 0;\n    }\n    if (Number.isNaN(layout.spaceX)) {\n      layout.spaceX = 0;\n    }\n    if (Number.isNaN(layout.spaceY)) {\n      layout.spaceY = 0;\n    }\n    return layout;\n  }\n};\n\nmodule.exports = Layout;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/link/layout.coffee\n ** module id = 7\n ** module chunks = 0 3 5 8\n **/\n//# sourceURL=webpack:///./src/link/layout.coffee?")},function(module,exports){eval("var layout;\n\nlayout = {\n  getLayout: function(width, height) {\n    var bodyHeight, bodyWidth, borderSize, cn, colspan, itemHeight, itemWidth, ln, padding, remainHeight, remainWidth, rowspan;\n    borderSize = 1;\n    padding = 1;\n    bodyWidth = width - 2 * borderSize - 2 * padding;\n    bodyHeight = height - 2 * borderSize - 2 * padding;\n    cn = Math.floor(width / 120);\n    ln = Math.floor(height / 28);\n    if (cn * ln > 50) {\n      ln = Math.floor(50 / cn);\n    }\n    itemHeight = Math.floor((bodyHeight - 4 * (ln - 1)) / ln);\n    itemWidth = Math.floor((bodyWidth - 4 * (cn - 1)) / cn);\n    remainHeight = bodyHeight - ln * itemHeight;\n    remainWidth = bodyWidth - cn * itemWidth;\n    rowspan = Math.floor(remainHeight / (ln - 1));\n    colspan = Math.floor(remainWidth / (cn - 1));\n    return {\n      line: ln,\n      column: cn,\n      borderSize: borderSize,\n      padding: padding,\n      itemWidth: itemWidth,\n      itemHeight: itemHeight,\n      rowspan: rowspan,\n      colspan: colspan,\n      width: bodyWidth,\n      height: bodyHeight\n    };\n  }\n};\n\nmodule.exports = layout;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/rank/layout.coffee\n ** module id = 8\n ** module chunks = 0 3 5 8 11\n **/\n//# sourceURL=webpack:///./src/rank/layout.coffee?")},function(module,exports){eval("var Layout;\n\nLayout = {\n  getLayout: function(width, height) {\n    var isValid, layout;\n    isValid = height === 48;\n    layout = {\n      column: 50,\n      line: 1\n    };\n    if (!isValid) {\n      layout = {\n        column: 0,\n        line: 0\n      };\n    }\n    return layout;\n  },\n  getStrlen: function(str) {\n    var newstr, textLen;\n    newstr = str.replace(/[\\u4e00-\\u9fa5\\u3002\\u2022]+/g, '');\n    textLen = (2 * str.length - newstr.length) / 2;\n    return textLen;\n  },\n  caculate: function(cw, fsSize, ads) {\n    var i, itemAds, itemWidth, j, length, newAds, queryBoxWidth, remainWidth, textLen, totalWidth;\n    queryBoxWidth = cw - 547 - 60;\n    newAds = [];\n    itemAds = [];\n    totalWidth = 0;\n    remainWidth = 0;\n    i = 0;\n    j = 0;\n    length = ads.length;\n    while (i < length) {\n      textLen = this.getStrlen(ads[i].tit);\n      itemWidth = textLen * fsSize + 20 + 2;\n      totalWidth += itemWidth;\n      if (totalWidth < queryBoxWidth) {\n        itemAds.push(ads[i]);\n      } else {\n        newAds.push(itemAds);\n        itemAds = [];\n        totalWidth = itemWidth;\n        itemAds.push(ads[i]);\n      }\n      remainWidth = queryBoxWidth - totalWidth;\n      if (i === (length - 1)) {\n        j = 0;\n        while (j < length) {\n          textLen = this.getStrlen(ads[j].tit);\n          itemWidth = textLen * fsSize + 20 + 2;\n          remainWidth = remainWidth - itemWidth;\n          if (remainWidth >= 0) {\n            itemAds.push(ads[j]);\n          } else {\n            newAds.push(itemAds);\n            j = ads.length;\n          }\n          j++;\n        }\n      }\n      i++;\n    }\n    return {\n      newAds: newAds\n    };\n  }\n};\n\nmodule.exports = Layout;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/haosou/layout.coffee\n ** module id = 9\n ** module chunks = 0 1 3 5 8\n **/\n//# sourceURL=webpack:///./src/haosou/layout.coffee?")},function(module,exports){eval('var Layout;\n\nLayout = {\n  getLayout: function(width, height) {\n    var caculate, i, imageScale, j, k, l, maxColumn, maxLine, maxNum, output, ref, ref1, ref2, ref3, result, spaceXMax, spaceXMin, spaceYMax, spaceYMin, unitMaxHeight, unitMaxWidth, unitMinHeight, unitMinWidth;\n    maxNum = 32;\n    unitMinWidth = 86;\n    unitMinHeight = 86;\n    unitMaxWidth = 180;\n    unitMaxHeight = 180;\n    spaceXMin = 2;\n    spaceYMin = 2;\n    spaceXMax = 20;\n    spaceYMax = 20;\n    imageScale = false;\n    if ((width - 4) < unitMinWidth || (height - 4) < unitMinHeight) {\n      return {\n        "column": 0,\n        "line": 0\n      };\n    }\n    maxColumn = Math.floor(width / unitMinWidth);\n    maxLine = Math.floor(height / unitMinHeight);\n    output = [];\n    result = [];\n    caculate = function(i, j) {\n      var column, line, rate, spaceX, spaceY;\n      column = Math.floor(width / i);\n      line = Math.floor(height / j);\n      line = Math.min(line, Math.floor(maxNum / column));\n      spaceX = Math.floor((width - i * column) / (column + 1));\n      spaceY = Math.floor((height - j * line) / (line + 1));\n      rate = Math.abs(i / (j - 20) - 1.4);\n      if (line > 0 && column > 0 && spaceY > 1 && spaceX > 1) {\n        return result.push({\n          "column": column,\n          "line": line,\n          "unitWidth": i,\n          "unitHeight": j,\n          "spaceX": spaceX,\n          "spaceY": spaceY,\n          "rate": rate\n        });\n      }\n    };\n    for (i = k = ref = unitMinWidth, ref1 = unitMaxWidth; k <= ref1; i = k += 5) {\n      for (j = l = ref2 = unitMinHeight, ref3 = unitMaxHeight; l <= ref3; j = l += 5) {\n        caculate(i, j);\n      }\n    }\n    output = result.sort(function(x, y) {\n      return (x.spaceX + x.spaceY) - (y.spaceX + y.spaceY);\n    }).slice(0, 10).sort(function(x, y) {\n      return x.rate - y.rate;\n    });\n    return output[0];\n  }\n};\n\nmodule.exports = Layout;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/imagelink/layout.coffee\n ** module id = 10\n ** module chunks = 0 2 3 5 8\n **/\n//# sourceURL=webpack:///./src/imagelink/layout.coffee?')},function(module,exports){eval("var Layout;\n\nLayout = {\n  getLayout: function(width, height) {\n    var layout;\n    switch (width + '*' + height) {\n      case '300*250':\n        layout = {\n          image: {\n            line: 2,\n            column: 1,\n            total: 2,\n            itemWidth: 133,\n            itemheight: 95\n          },\n          text: {\n            line: 6,\n            column: 1,\n            total: 6,\n            itemWidth: 130,\n            itemheight: 40\n          }\n        };\n        break;\n      default:\n        layout = {\n          image: {\n            line: 0,\n            column: 0,\n            itemWidth: 0,\n            itemheight: 0,\n            total: 0\n          },\n          text: {\n            line: 0,\n            column: 0,\n            itemWidth: 0,\n            itemheight: 0,\n            total: 0\n          }\n        };\n    }\n    return layout;\n  }\n};\n\nmodule.exports = Layout;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/imagetext/layout.coffee\n ** module id = 11\n ** module chunks = 0 3 4 5 8\n **/\n//# sourceURL=webpack:///./src/imagetext/layout.coffee?")},function(module,exports){eval("var Layout;\n\nLayout = {\n  getLayout: function(width, height) {\n    var column, layout, line, minSpaceX, minSpaceY;\n    layout = {\n      searchButtonWidth: 80,\n      searchButtonHeight: 36,\n      bodyPadding: 5,\n      bodyBorderSize: 1,\n      conMarginBottom: 5\n    };\n    layout.bodyWidth = width - 2 * layout.bodyBorderSize - 2 * layout.bodyPadding;\n    layout.bodyHeight = height - 2 * layout.bodyBorderSize - 2 * layout.bodyPadding;\n    layout.conWidth = layout.bodyWidth;\n    layout.conHeight = Math.max(0, height - layout.searchButtonHeight - layout.conMarginBottom - 2 * layout.bodyBorderSize - 2 * layout.bodyPadding);\n    column = Math.floor(layout.conWidth / 120);\n    line = Math.floor(layout.conHeight / 27);\n    if (column * line > 32) {\n      line = Math.floor(32 / column);\n    }\n    layout.column = column;\n    layout.line = line;\n    minSpaceX = minSpaceY = 4;\n    layout.itemWidth = Math.floor((layout.conWidth - minSpaceX * (layout.column - 1)) / layout.column);\n    layout.itemHeight = Math.floor((layout.conHeight - minSpaceY * (layout.line - 1)) / layout.line);\n    if (layout.column - 1 > 0) {\n      layout.spaceX = Math.floor((layout.conWidth - layout.column * layout.itemWidth) / (layout.column - 1));\n    } else {\n      layout.spaceX = 0;\n    }\n    if (layout.line - 1 > 0) {\n      layout.spaceY = Math.floor((layout.conHeight - layout.line * layout.itemHeight) / (layout.line - 1));\n    } else {\n      layout.spaceY = 0;\n    }\n    if (layout.column * layout.line === 0) {\n      layout.conHeight = Math.max(0, height - layout.searchButtonHeight - 2 * layout.bodyBorderSize - 2 * layout.bodyPadding);\n    }\n    if (layout.conHeight === 0 || width < 200) {\n      layout.column = layout.line = 0;\n    }\n    return layout;\n  }\n};\n\nmodule.exports = Layout;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/searchlink/layout.coffee\n ** module id = 12\n ** module chunks = 0 3 5 8 13\n **/\n//# sourceURL=webpack:///./src/searchlink/layout.coffee?")},function(module,exports){eval("var Layout;\n\nLayout = {\n  getLayout: function(width, height, conf) {\n    var column, layout, line, minSpaceX, minSpaceY;\n    column = Math.floor(width / 103);\n    line = Math.floor(height / 20);\n    if (((column - 2) * line + 2) > 32) {\n      line = Math.floor((32 - 2) / (column - 2));\n    }\n    layout = {\n      column: column,\n      line: line\n    };\n    minSpaceX = minSpaceY = 2;\n    layout.itemWidth = Math.floor((width - minSpaceX * (layout.column - 1)) / layout.column);\n    layout.itemHeight = Math.floor((height - minSpaceY * (layout.line - 1)) / layout.line);\n    layout.spaceX = Math.floor((width - layout.column * layout.itemWidth) / (layout.column - 1));\n    layout.spaceY = Math.floor((height - layout.line * layout.itemHeight) / (layout.line - 1));\n    return layout;\n  }\n};\n\nmodule.exports = Layout;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/mobilelink/layout.coffee\n ** module id = 13\n ** module chunks = 0 3 5 8 9\n **/\n//# sourceURL=webpack:///./src/mobilelink/layout.coffee?")},function(module,exports,__webpack_require__){eval("var Conf, Exp;\n\nConf = __webpack_require__(3);\n\nExp = {\n\n  /*\n  #鑾峰彇浣嶇疆淇℃伅\n   */\n  getPosition: function() {\n    return (Conf.QIHOO_UNION.RAND % 100) < 50;\n  }\n};\n\nmodule.exports = Exp;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/lib/exp.coffee\n ** module id = 14\n ** module chunks = 0 3 5\n **/\n//# sourceURL=webpack:///./src/lib/exp.coffee?");
},function(module,exports,__webpack_require__){eval('var Conf, Domready, Position, Util;\n\nUtil = __webpack_require__(4);\n\nConf = __webpack_require__(3);\n\nDomready = __webpack_require__(16);\n\nPosition = {\n  add: function(placeholder) {\n    var ref;\n    this.res = (ref = this.res) != null ? ref : [];\n    this.res.push(placeholder);\n    this.fn = function(item) {\n      var dh, dw, img, ls, pos, rand, rurl, sh, sw, track, vh, vw, win, x, y;\n      win = window;\n      vw = Math.max(0, win.innerWidth || win.document.documentElement.clientWidth);\n      vh = Math.max(0, win.innerHeight || win.document.documentElement.clientHeight);\n      dw = Math.max(0, win.document.documentElement.offsetWidth);\n      dh = Math.max(0, win.document.documentElement.offsetHeight);\n      sw = Math.max(0, screen.width);\n      sh = Math.max(0, screen.height);\n      if (document.getElementById(item.id) !== null) {\n        pos = document.getElementById(item.id).getBoundingClientRect();\n        x = Math.max(0, pos.left);\n        y = Math.max(0, pos.top);\n        ls = item.getAttribute(\'data-ls\');\n        rurl = encodeURIComponent(item.getAttribute(\'data-rurl\'));\n        rand = new Date().getTime();\n        track = Conf.positionTrack + ("ls=" + ls + "&rurl=" + rurl + "&x=" + x + "&y=" + y + "&vw=" + vw + "&vh=" + vh + "&dw=" + dw + "&dh=" + dh + "&sw=" + sw + "&sh=" + sh + "&_r=" + rand);\n        img = new Image();\n        img.onload = img.onerror = function() {\n          return img = null;\n        };\n        return img.src = track;\n      }\n    };\n    if (this.domready !== \'init\') {\n      this.domready = \'init\';\n      return Domready((function(_this) {\n        return function() {\n          var i, item, len, ref1, results;\n          ref1 = _this.res;\n          results = [];\n          for (i = 0, len = ref1.length; i < len; i++) {\n            item = ref1[i];\n            results.push(_this.fn(item));\n          }\n          return results;\n        };\n      })(this));\n    }\n  }\n};\n\nmodule.exports = Position;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/lib/position.coffee\n ** module id = 15\n ** module chunks = 0 5\n **/\n//# sourceURL=webpack:///./src/lib/position.coffee?')},function(module,exports,__webpack_require__){eval("/*!\n  * domready (c) Dustin Diaz 2012 - License MIT\n  */\n!function (name, definition) {\n  if (true) module.exports = definition()\n  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)\n  else this[name] = definition()\n}('domready', function (ready) {\n\n  var fns = [], fn, f = false\n    , doc = document\n    , testEl = doc.documentElement\n    , hack = testEl.doScroll\n    , domContentLoaded = 'DOMContentLoaded'\n    , addEventListener = 'addEventListener'\n    , onreadystatechange = 'onreadystatechange'\n    , readyState = 'readyState'\n    , loadedRgx = hack ? /^loaded|^c/ : /^loaded|c/\n    , loaded = loadedRgx.test(doc[readyState])\n\n  function flush(f) {\n    loaded = 1\n    while (f = fns.shift()) f()\n  }\n\n  doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function () {\n    doc.removeEventListener(domContentLoaded, fn, f)\n    flush()\n  }, f)\n\n\n  hack && doc.attachEvent(onreadystatechange, fn = function () {\n    if (/^c/.test(doc[readyState])) {\n      doc.detachEvent(onreadystatechange, fn)\n      flush()\n    }\n  })\n\n  return (ready = hack ?\n    function (fn) {\n      self != top ?\n        loaded ? fn() : fns.push(fn) :\n        function () {\n          try {\n            testEl.doScroll('left')\n          } catch (e) {\n            return setTimeout(function() { ready(fn) }, 50)\n          }\n          fn()\n        }()\n    } :\n    function (fn) {\n      loaded ? fn() : fns.push(fn)\n    })\n})\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/lib/domready.js\n ** module id = 16\n ** module chunks = 0 3 5\n **/\n//# sourceURL=webpack:///./src/lib/domready.js?")}]);
