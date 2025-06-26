
var huffmanTable = {
    1: [4, 15],
    110: [8, 239],
    74: [8, 238],
    57: [7, 118],
    56: [7, 117],
    71: [8, 233],
    25: [8, 232],
    101: [5, 28],
    104: [7, 111],
    4: [7, 110],
    105: [6, 54],
    5: [7, 107],
    109: [7, 106],
    103: [9, 423],
    82: [9, 422],
    26: [8, 210],
    6: [7, 104],
    46: [6, 51],
    97: [6, 50],
    111: [6, 49],
    7: [7, 97],
    45: [7, 96],
    59: [5, 23],
    15: [7, 91],
    11: [8, 181],
    72: [8, 180],
    27: [8, 179],
    28: [8, 178],
    16: [7, 88],
    88: [10, 703],
    113: [11, 1405],
    89: [12, 2809],
    107: [13, 5617],
    90: [14, 11233],
    42: [15, 22465],
    64: [16, 44929],
    0: [16, 44928],
    81: [9, 350],
    29: [8, 174],
    118: [8, 173],
    30: [8, 172],
    98: [8, 171],
    12: [8, 170],
    99: [7, 84],
    117: [6, 41],
    112: [6, 40],
    102: [9, 319],
    68: [9, 318],
    31: [8, 158],
    100: [7, 78],
    84: [6, 38],
    55: [6, 37],
    17: [7, 73],
    8: [7, 72],
    9: [7, 71],
    77: [7, 70],
    18: [7, 69],
    65: [7, 68],
    48: [6, 33],
    116: [6, 32],
    10: [7, 63],
    121: [8, 125],
    78: [8, 124],
    80: [7, 61],
    69: [7, 60],
    119: [7, 59],
    13: [8, 117],
    79: [8, 116],
    19: [7, 57],
    67: [7, 56],
    114: [6, 27],
    83: [6, 26],
    115: [6, 25],
    14: [6, 24],
    122: [8, 95],
    95: [8, 94],
    76: [7, 46],
    24: [7, 45],
    37: [7, 44],
    50: [5, 10],
    51: [5, 9],
    108: [6, 17],
    22: [7, 33],
    120: [8, 65],
    66: [8, 64],
    21: [7, 31],
    106: [7, 30],
    47: [6, 14],
    53: [5, 6],
    49: [5, 5],
    86: [8, 39],
    85: [8, 38],
    23: [7, 18],
    75: [7, 17],
    20: [7, 16],
    2: [5, 3],
    73: [8, 23],
    43: [9, 45],
    87: [9, 44],
    70: [7, 10],
    3: [6, 4],
    52: [5, 1],
    54: [5, 0]
}
  , compressionDictionary = ["%20", ";;;", "%3B", "%2C", "und", "fin", "ed;", "%28", "%29", "%3A", "/53", "ike", "Web", "0;", ".0", "e;", "on", "il", "ck", "01", "in", "Mo", "fa", "00", "32", "la", ".1", "ri", "it", "%u", "le"]
  , customAlphabet = ".0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";

function generateFingerprint(e) {
    function i(e) {
        var t = Math.min(f, m);
        return 0 !== Math.abs(f - m) && e.getTimezoneOffset() === t
    }
    function s(e) {
        return function() {
            return e
        }
    }
    var r = new Date
      , n = new Date
      , f = new Date(2005,0,15).getTimezoneOffset()
      , m = new Date(2005,6,15).getTimezoneOffset()
      , h = s("")
      , c = [s("TF1"), s("020"),
    function() {
        return ""//ScriptEngineMajorVersion()
    }
    , function() {
        return ""//ScriptEngineMinorVersion()
    }
    , function() {
        return ""//ScriptEngineBuildVersion()
    }
    , function() {
        return ""//l("{7790769C-0471-11D2-AF11-00C04FA35D02}")
    }
    , function() {
        return ""//l("{89820200-ECBD-11CF-8B85-00AA005B4340}")
    }
    , function() {
        return ""//l("{283807B5-2C60-11D0-A31D-00AA00B92C03}")
    }
    , function() {
        return ""//l("{4F216970-C90C-11D1-B5C7-0000F8051515}")
    }
    , function() {
        return ""//l("{44BBA848-CC51-11CF-AAFA-00AA00B6015C}")
    }
    , function() {
        return ""//l("{9381D8F2-0288-11D0-9501-00AA00B911A5}")
    }
    , function() {
        return ""//l("{4F216970-C90C-11D1-B5C7-0000F8051515}")
    }
    , function() {
        return ""//l("{5A8D6EE0-3E18-11D0-821E-444553540000}")
    }
    , function() {
        return ""//l("{89820200-ECBD-11CF-8B85-00AA005B4383}")
    }
    , function() {
        return ""//l("{08B0E5C0-4FCB-11CF-AAA5-00401C608555}")
    }
    , function() {
        return ""//l("{45EA75A0-A269-11D1-B5BF-0000F8051515}")
    }
    , function() {
        return ""//l("{DE5AED00-A4BF-11D1-9948-00C04F98BBC9}")
    }
    , function() {
        return ""//l("{22D6F312-B0F6-11D0-94AB-0080C74C7E95}")
    }
    , function() {
        return ""//l("{44BBA842-CC51-11CF-AAFA-00AA00B6015B}")
    }
    , function() {
        return ""//l("{3AF36230-A269-11D1-B5BF-0000F8051515}")
    }
    , function() {
        return ""//l("{44BBA840-CC51-11CF-AAFA-00AA00B6015C}")
    }
    , function() {
        return ""//l("{CC2A9BA0-3BDD-11D0-821E-444553540000}")
    }
    , function() {
        return ""//l("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}")
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""//o(["navigator.productSub", "navigator.appMinorVersion"])
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""//o(["navigator.oscpu", "navigator.cpuClass"])
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""//o(["navigator.language", "navigator.userLanguage"])
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return 0 !== Math.abs(f - m)
    }
    , function() {
        return i(r)
    }
    , function() {
        return "@UTC@"
    }
    , function() {
        var e = 0;
        return e = 0,
        i(r) && (e = Math.abs(f - m)),
        -(r.getTimezoneOffset() + e) / 60
    }
    , function() {
        return new Date(2005,5,7,21,33,44,888).toLocaleString()
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""//v.Acrobat
    }
    , function() {
        return ""//v.Flash
    }
    , function() {
        return ""//v.QuickTime
    }
    , function() {
        return ""//v["Java Plug-in"]
    }
    , function() {
        return ""//v.Director
    }
    , function() {
        return ""//v.Office
    }
    ,, function() {
        return "@CT@"
    }
    , function() {
        return f
    }
    , function() {
        return m
    }
    , function() {
        return r.toLocaleString()
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""//t("Acrobat")
    }
    , function() {
        return ""//t("Adobe SVG")
    }
    , function() {
        return ""//t("Authorware")
    }
    , function() {
        return ""//t("Citrix ICA")
    }
    , function() {
        return ""//t("Director")
    }
    , function() {
        return ""//t("Flash")
    }
    , function() {
        return ""//t("MapGuide")
    }
    , function() {
        return ""//t("MetaStream")
    }
    , function() {
        return ""//t("PDFViewer")
    }
    , function() {
        return ""//t("QuickTime")
    }
    , function() {
        return ""//t("RealOne")
    }
    , function() {
        return ""//t("RealPlayer Enterprise")
    }
    , function() {
        return ""//t("RealPlayer Plugin")
    }
    , function() {
        return ""//t("Seagate Software Report")
    }
    , function() {
        return ""//t("Silverlight")
    }
    , function() {
        return ""//t("Windows Media")
    }
    , function() {
        return ""//t("iPIX")
    }
    , function() {
        return ""//t("nppdf.so")
    }
    , function() {
        /*
        var e = document.createElement("span");
        e.innerHTML = "&nbsp;",
        e.style.position = "absolute",
        e.style.left = "-9999px",
        document.body.appendChild(e);
        var t = e.offsetHeight;
        return document.body.removeChild(e),t
        */
       return 18
    }
    , h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), h(), function() {
        return "5.6.1-0"
    }
    , ""];
    /*!function() {// will not use because hardcoded values
        for (var e = ["Acrobat", "Flash", "QuickTime", "Java Plug-in", "Director", "Office"], t = 0; t < e.length; t++) {
            var r = e[t]
              , n = v
              , a = r
              , i = r;
            r = "";
            try {
                if (navigator.plugins && navigator.plugins.length) {
                    var o = RegExp(i + ".* ([0-9._]+)");
                    for (i = 0; i < navigator.plugins.length; i++) {
                        var l = o.exec(navigator.plugins[i].name);
                        null === l && (l = o.exec(navigator.plugins[i].description)),
                        l && (r = l[1])
                    }
                } else if (window.ActiveXObject && y[i])
                    try {
                        var s = new ActiveXObject(y[i][0]);
                        r = y[i][1](s)
                    } catch (e) {
                        r = ""
                    }
            } catch (e) {
                r = e.message
            }
            n[a] = r
        }
    }();*/

    for (var p = "", g = 0; g < c.length; g++) {
        var b;
        e && (p += a(c[g].toString(), '"', "'", !0),
        p += "=");
        try {
            b = c[g](this)
        } catch (e) {
            b = ""
        }
        p += e ? b : escape(b),
        p += ";",
        e && (p += "\\n")
    }
    return p = a(p, escape("@UTC@"), (new Date).getTime()),
    p = a(p, escape("@CT@"), (new Date).getTime() - n.getTime()),
    true && u ? u(p) : p // true -> d ->  !options.hasOwnProperty("compress") || options.compress / d && u ? u(p) : p
}

function a(e, t, r, n) {
    "boolean" != typeof n && (n = !1);
    for (var a, i = !0; (a = e.indexOf(t)) >= 0 && (n || i); )
        e = e.substr(0, a) + r + e.substr(a + t.length),
        i = !1;
    return e
}

function u(e) {
    for (var t = c, r = e, n = 0; compressionDictionary[n]; n++)
        r = r.split(compressionDictionary[n]).join(String.fromCharCode(n + 1));
    if (null == (t = t(r)))
        return e;
    for (r = 65535,
    n = 0; n < e.length; n++)
        r = 65535 & (r >>> 8 | r << 8),
        r ^= 255 & e.charCodeAt(n),
        r ^= (255 & r) >> 4,
        r ^= r << 12 & 65535,
        r ^= (255 & r) << 5 & 65535;
    return r &= 65535,
    e = "",
    e += customAlphabet.charAt(r >>> 12),
    t + ((e += customAlphabet.charAt(r >>> 6 & 63)) + customAlphabet.charAt(63 & r))
}

function c(e) {
    function t(e) {
        for (n = n << e[0] | e[1],
        a += e[0]; a >= 6; )
            e = n >> a - 6 & 63,
            r += customAlphabet.substring(e, e + 1),
            n ^= e << (a -= 6)
    }
    var r = ""
      , n = 0
      , a = 0;
    t([6, (7 & e.length) << 3]),
    t([6, 56 & e.length | 1]);
    for (var i = 0; i < e.length; i++) {
        if (null == huffmanTable[e.charCodeAt(i)])
            return;
        t(huffmanTable[e.charCodeAt(i)])
    }
    return t(huffmanTable[0]),
    a > 0 && t([6 - a, 0]),
    r
}


/*function o(e) {
    for (var t = 0; t < e.length; t++)
        try {
            var r = (e[t],
            "");
            if (r)
                return r
        } catch (e) {}
    return ""
}*/
/*function l(e) {
    var t = "";
    try {
        void 0 !== p.a.getComponentVersion && (t = p.a.getComponentVersion(e, "ComponentID"))
    } catch (r) {
        e = (e = r.message.length) > 40 ? 40 : e,
        t = escape(r.message.substr(0, e))
    }
    return t
}*/
/*function t(e) {
                try {
                    if (navigator.plugins && navigator.plugins.length)
                        for (var t = 0; t < navigator.plugins.length; t++) {
                            var r = navigator.plugins[t];
                            if (r.name.indexOf(e) >= 0)
                                return r.name + (r.description ? "|" + r.description : "")
                        }
                } catch (e) {}
                return ""
            }*/

console.log(generateFingerprint())
