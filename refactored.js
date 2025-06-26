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
  , customBase64Alphabet = ".0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";

function generateFingerprint(includeDebugInfo) {
    function hasSpecificTimezoneOffset(dateObject) {
        var minOffset = Math.min(januaryTimezoneOffset, julyTimezoneOffset);
        return 0 !== Math.abs(januaryTimezoneOffset - julyTimezoneOffset) && dateObject.getTimezoneOffset() === minOffset
    }
    function createStaticValueFunction(value) {
        return function() {
            return value
        }
    }
    var currentDate = new Date
      , startTime = new Date
      , januaryTimezoneOffset = new Date(2005,0,15).getTimezoneOffset()
      , julyTimezoneOffset = new Date(2005,6,15).getTimezoneOffset()
      , emptyStringFunction = createStaticValueFunction("")
      , dataPointCollectors = [createStaticValueFunction("TF1"), createStaticValueFunction("020"),
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
        return ""//getActiveXComponentVersion("{7790769C-0471-11D2-AF11-00C04FA35D02}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{89820200-ECBD-11CF-8B85-00AA005B4340}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{283807B5-2C60-11D0-A31D-00AA00B92C03}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{4F216970-C90C-11D1-B5C7-0000F8051515}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{44BBA848-CC51-11CF-AAFA-00AA00B6015C}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{9381D8F2-0288-11D0-9501-00AA00B911A5}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{4F216970-C90C-11D1-B5C7-0000F8051515}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{5A8D6EE0-3E18-11D0-821E-444553540000}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{89820200-ECBD-11CF-8B85-00AA005B4383}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{08B0E5C0-4FCB-11CF-AAA5-00401C608555}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{45EA75A0-A269-11D1-B5BF-0000F8051515}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{DE5AED00-A4BF-11D1-9948-00C04F98BBC9}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{22D6F312-B0F6-11D0-94AB-0080C74C7E95}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{44BBA842-CC51-11CF-AAFA-00AA00B6015B}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{3AF36230-A269-11D1-B5BF-0000F8051515}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{44BBA840-CC51-11CF-AAFA-00AA00B6015C}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{CC2A9BA0-3BDD-11D0-821E-444553540000}")
    }
    , function() {
        return ""//getActiveXComponentVersion("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}")
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
        return ""//neutralizedNavigatorProbe(["navigator.productSub", "navigator.appMinorVersion"])
    }
    , function() {
        return ""
    }
    , function() {
        return ""
    }
    , function() {
        return ""//neutralizedNavigatorProbe(["navigator.oscpu", "navigator.cpuClass"])
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
        return ""//neutralizedNavigatorProbe(["navigator.language", "navigator.userLanguage"])
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
        return 0 !== Math.abs(januaryTimezoneOffset - julyTimezoneOffset)
    }
    , function() {
        return hasSpecificTimezoneOffset(currentDate)
    }
    , function() {
        return "@UTC@"
    }
    , function() {
        var e = 0;
        return e = 0,
        hasSpecificTimezoneOffset(currentDate) && (e = Math.abs(januaryTimezoneOffset - julyTimezoneOffset)),
        -(currentDate.getTimezoneOffset() + e) / 60
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
        return ""//pluginVersions.Acrobat
    }
    , function() {
        return ""//pluginVersions.Flash
    }
    , function() {
        return ""//pluginVersions.QuickTime
    }
    , function() {
        return ""//pluginVersions["Java Plug-in"]
    }
    , function() {
        return ""//pluginVersions.Director
    }
    , function() {
        return ""//pluginVersions.Office
    }
    ,, function() {
        return "@CT@"
    }
    , function() {
        return januaryTimezoneOffset
    }
    , function() {
        return julyTimezoneOffset
    }
    , function() {
        return currentDate.toLocaleString()
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
        return ""//scanForNpapiPlugin("Acrobat")
    }
    , function() {
        return ""//scanForNpapiPlugin("Adobe SVG")
    }
    , function() {
        return ""//scanForNpapiPlugin("Authorware")
    }
    , function() {
        return ""//scanForNpapiPlugin("Citrix ICA")
    }
    , function() {
        return ""//scanForNpapiPlugin("Director")
    }
    , function() {
        return ""//scanForNpapiPlugin("Flash")
    }
    , function() {
        return ""//scanForNpapiPlugin("MapGuide")
    }
    , function() {
        return ""//scanForNpapiPlugin("MetaStream")
    }
    , function() {
        return ""//scanForNpapiPlugin("PDFViewer")
    }
    , function() {
        return ""//scanForNpapiPlugin("QuickTime")
    }
    , function() {
        return ""//scanForNpapiPlugin("RealOne")
    }
    , function() {
        return ""//scanForNpapiPlugin("RealPlayer Enterprise")
    }
    , function() {
        return ""//scanForNpapiPlugin("RealPlayer Plugin")
    }
    , function() {
        return ""//scanForNpapiPlugin("Seagate Software Report")
    }
    , function() {
        return ""//scanForNpapiPlugin("Silverlight")
    }
    , function() {
        return ""//scanForNpapiPlugin("Windows Media")
    }
    , function() {
        return ""//scanForNpapiPlugin("iPIX")
    }
    , function() {
        return ""//scanForNpapiPlugin("nppdf.so")
    }
    , function() {
        /*
        var span = document.createElement("span");
        span.innerHTML = " ",
        span.style.position = "absolute",
        span.style.left = "-9999px",
        document.body.appendChild(span);
        var offsetHeight = span.offsetHeight;
        return document.body.removeChild(span),offsetHeight
        */
       return 18
    }
    , emptyStringFunction(), emptyStringFunction(), emptyStringFunction(), emptyStringFunction(), emptyStringFunction(), emptyStringFunction(), emptyStringFunction(), emptyStringFunction(), emptyStringFunction(), emptyStringFunction(), emptyStringFunction(), emptyStringFunction(), emptyStringFunction(), emptyStringFunction(), function() {
        return "5.6.1-0"
    }
    , ""];
    /*!function() {// will not use because hardcoded values
        var pluginNamesToDetect = ["Acrobat", "Flash", "QuickTime", "Java Plug-in", "Director", "Office"];
        for (var i = 0; i < pluginNamesToDetect.length; i++) {
            var pluginName = pluginNamesToDetect[i]
              , pluginVersionsObject = pluginVersions
              , currentPluginName = pluginName
              , pluginNamePattern = pluginName;
            pluginName = "";
            try {
                if (navigator.plugins && navigator.plugins.length) {
                    var regex = RegExp(pluginNamePattern + ".* ([0-9._]+)");
                    for (pluginNamePattern = 0; pluginNamePattern < navigator.plugins.length; pluginNamePattern++) {
                        var match = regex.exec(navigator.plugins[pluginNamePattern].name);
                        null === match && (match = regex.exec(navigator.plugins[pluginNamePattern].description)),
                        match && (pluginName = match[1])
                    }
                } else if (window.ActiveXObject && activeXPluginMap[pluginNamePattern]) // activeXPluginMap is not defined in this scope, but we keep the structure
                    try {
                        var activeXObject = new ActiveXObject(activeXPluginMap[pluginNamePattern][0]);
                        pluginName = activeXPluginMap[pluginNamePattern][1](activeXObject)
                    } catch (e) {
                        pluginName = ""
                    }
            } catch (e) {
                pluginName = e.message
            }
            pluginVersionsObject[currentPluginName] = pluginName
        }
    }();*/
    for (var fingerprintString = "", i = 0; i < dataPointCollectors.length; i++) {
        var dataPointValue;
        includeDebugInfo && (fingerprintString += stringReplacer(dataPointCollectors[i].toString(), '"', "'", !0),
        fingerprintString += "=");
        try {
            dataPointValue = dataPointCollectors[i](this)
        } catch (e) {
            dataPointValue = ""
        }
        fingerprintString += includeDebugInfo ? dataPointValue : escape(dataPointValue),
        fingerprintString += ";",
        includeDebugInfo && (fingerprintString += "\\n")
    }
    return fingerprintString = stringReplacer(fingerprintString, escape("@UTC@"), (new Date).getTime()),
    fingerprintString = stringReplacer(fingerprintString, escape("@CT@"), (new Date).getTime() - startTime.getTime()),
    true && compressAndHash ? compressAndHash(fingerprintString) : fingerprintString
}
function stringReplacer(sourceString, findSubstring, replaceWith, replaceOnlyFirst) {
    "boolean" != typeof replaceOnlyFirst && (replaceOnlyFirst = !1);
    for (var index, continueReplacing = !0; (index = sourceString.indexOf(findSubstring)) >= 0 && (replaceOnlyFirst || continueReplacing); )
        sourceString = sourceString.substr(0, index) + replaceWith + sourceString.substr(index + findSubstring.length),
        continueReplacing = !1;
    return sourceString
}
function compressAndHash(rawFingerprintString) {
    for (var encoderFunction = huffmanEncoder, processedString = rawFingerprintString, i = 0; compressionDictionary[i]; i++)
        processedString = processedString.split(compressionDictionary[i]).join(String.fromCharCode(i + 1));
    if (null == (encoderFunction = encoderFunction(processedString)))
        return rawFingerprintString;
    for (var checksum = 65535,
    i = 0; i < rawFingerprintString.length; i++)
        checksum = 65535 & (checksum >>> 8 | checksum << 8),
        checksum ^= 255 & rawFingerprintString.charCodeAt(i),
        checksum ^= (255 & checksum) >> 4,
        checksum ^= checksum << 12 & 65535,
        checksum ^= (255 & checksum) << 5 & 65535;
    checksum &= 65535;
    var checksumString = "";
    return checksumString += customBase64Alphabet.charAt(checksum >>> 12),
    encoderFunction + ((checksumString += customBase64Alphabet.charAt(checksum >>> 6 & 63)) + customBase64Alphabet.charAt(63 & checksum))
}
function huffmanEncoder(compressedString) {
    function appendToBitstream(bitValuePair) {
        for (bitBuffer = bitBuffer << bitValuePair[0] | bitValuePair[1],
        bitsInBuffer += bitValuePair[0]; bitsInBuffer >= 6; )
            bitValuePair = bitBuffer >> bitsInBuffer - 6 & 63,
            resultString += customBase64Alphabet.substring(bitValuePair, bitValuePair + 1),
            bitBuffer ^= bitValuePair << (bitsInBuffer -= 6)
    }
    var resultString = ""
      , bitBuffer = 0
      , bitsInBuffer = 0;
    appendToBitstream([6, (7 & compressedString.length) << 3]),
    appendToBitstream([6, 56 & compressedString.length | 1]);
    for (var i = 0; i < compressedString.length; i++) {
        if (null == huffmanTable[compressedString.charCodeAt(i)])
            return;
        appendToBitstream(huffmanTable[compressedString.charCodeAt(i)])
    }
    return appendToBitstream(huffmanTable[0]),
    bitsInBuffer > 0 && appendToBitstream([6 - bitsInBuffer, 0]),
    resultString
}

/*function neutralizedNavigatorProbe(propertyNames) {
    for (var i = 0; i < propertyNames.length; i++)
        try {
            var propertyValue = (propertyNames[i], // Comma operator ensures this is always ""
            "");
            if (propertyValue)
                return propertyValue
        } catch (e) {}
    return ""
}*/
/*function getActiveXComponentVersion(componentGUID) {
    var versionString = "";
    try {
        // clientInformation is not defined here, but we keep the structure
        void 0 !== clientInformation.a.getComponentVersion && (versionString = clientInformation.a.getComponentVersion(componentGUID, "ComponentID"))
    } catch (error) {
        var messageLength = (messageLength = error.message.length) > 40 ? 40 : messageLength,
        versionString = escape(error.message.substr(0, messageLength))
    }
    return versionString
}*/
/*function scanForNpapiPlugin(pluginName) {
    try {
        if (navigator.plugins && navigator.plugins.length)
            for (var i = 0; i < navigator.plugins.length; i++) {
                var plugin = navigator.plugins[i];
                if (plugin.name.indexOf(pluginName) >= 0)
                    return plugin.name + (plugin.description ? "|" + plugin.description : "")
            }
    } catch (e) {}
    return ""
}*/

console.log(generateFingerprint())