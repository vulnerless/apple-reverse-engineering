# Apple Fingerprint Reverse Engineering

This repository documents the reverse engineering of the browser fingerprint generated for Apple's `x-apple-i-fd-client-info` HTTP header. This analysis and writing repo was completed in approximately 3 hours, so there may be some areas for improvement.

## Overview

When you visit Apple's official websites login page, your browser sends a special HTTP header named `x-apple-i-fd-client-info`. This header acts as a security token, helping Apple identify and validate your browser to prevent automated bots and potential fraud. The most critical part of this header is a field labeled `F`, which contains a complex, encoded "fingerprint" of your browser.

Inside this repository, you will find:
1.  A detailed breakdown of each fingerprinting technique employed by the original script.
2.  A fully functional, refactored JavaScript file (`refactored.js`) that can generate a valid fingerprint. This script has been carefully "neutralized" by removing all dependencies on a live browser environment (like the DOM), allowing it to run in any standard Node.js environment.
   
> **Important**: If Apple is not happy about this repository, , please contact me via email address in my profile instead of sending a DMCA takedown. This project is for educational and research purposes only.
>
> *(All work done in this repository was for my own learning purposes.)*

- **`neutralized.js`**: The code with DOM dependencies and unnecessary parts removed.
- **`refactored.js`**: The code made readable and understandable.

When communicating with Apple's services, browsers send a client information header that looks like this:

```json
{"U":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...","L":"de-DE","Z":"GMT+02:00","V":"1.1","F":".la44..."}
```

Most of these values are straightforward. The key component is the `F` value, which contains a complex, encoded browser fingerprint. The goal of this project was to reverse-engineer how this value is generated.

The remainder of this document breaks down the various techniques used by the fingerprinting script and explains how they were neutralized to create a version that can run in any environment without a live browser DOM.

## Analysis of Fingerprinting Techniques

The fingerprinting script collects data from numerous sources. However, a significant number of these methods rely on obsolete, non-standard, or deprecated browser features. To create a portable and stable version of the script and run it without a live browser DOM, these dynamic checks were analyzed and replaced with static, hardcoded values.

### 1. Legacy Plugin Detection (ActiveX & `navigator.plugins`)

This JavaScript code attempts to detect specific installed browser plugins and their versions (e.g., "Acrobat", "Flash", "QuickTime"). It uses `navigator.plugins` for modern browsers and `window.ActiveXObject` for old Internet Explorer.

In short, this code is looking for old plugins that have been removed from modern browsers for security reasons. The original function that performed this check is commented out in script. Consequently, all data points in the main fingerprint array that relied on this check have been hardcoded to return an empty string (`""`), as they would yield no data in a modern environment.

```javascript
//refactored file

//now-obsolete function:
!function() {// will not use because hardcoded values
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
}();
```

### 2. ActiveX Component Versioning (`l(e)`)

The `getActiveXComponentVersion(componentGUID)` function is a legacy method designed to query the version of specific **ActiveX components** in Internet Explorer, identified by hardcoded GUIDs (e.g., `{7790769C-...}`). This technique is **entirely non-functional** in any browser other than old IE.

As a result, any call to `getActiveXComponentVersion()` in a modern environment fails and returns no data. In script, the original `l(e)` function is commented out, and all calls within the main data array that would have used it are replaced with simple functions that return an empty string, effectively neutralizing this obsolete check.

```javascript
//refactored file

//now-obsolete function:
function getActiveXComponentVersion(componentGUID) {
    var versionString = "";
    try {
        // clientInformation is not defined here, but we keep the structure
        void 0 !== clientInformation.a.getComponentVersion && (versionString = clientInformation.a.getComponentVersion(componentGUID, "ComponentID"))
    } catch (error) {
        var messageLength = (messageLength = error.message.length) > 40 ? 40 : messageLength,
        versionString = escape(error.message.substr(0, messageLength))
    }
    return versionString
}
```

### 3. Navigator Property Probing (`o(e)`)

The `neutralizedNavigatorProbe(propertyNames)` function attempts to gather system information by checking properties like `navigator.oscpu` or `navigator.language`. However, a deep analysis of this function reveals that it was **intentionally designed to always return an empty string**.

The key is this line within the function:
`var propertyValue = (propertyNames[i], "");`

This code uses the **JavaScript comma operator**. It evaluates the left side (`propertyNames[i]`, which gets the property name like `"navigator.language"`) and discards the result. It then evaluates the right side (`""`) and returns it. Therefore, the variable `propertyValue` is **always assigned an empty string**, regardless of the browser's actual properties.

This means the original developers left the function call in place but deliberately disabled its data collection capability. Our decision to hardcode the return value to `""` is not an assumption but a direct replication of the original script's behavior.

```javascript
//refactored file

// deliberately neutralized function:
function neutralizedNavigatorProbe(propertyNames) {
    for (var i = 0; i < propertyNames.length; i++)
        try {
            var propertyValue = (propertyNames[i], // Comma operator ensures this is always ""
            "");
            if (propertyValue)
                return propertyValue
        } catch (e) {}
    return ""
}
```

### 4. NPAPI Plugin Scanning (`t(e)`)

The `scanForNpapiPlugin()` function was designed to detect legacy plugins (Flash, Silverlight, etc.) by scanning the `navigator.plugins` list. This method is **completely obsolete** because the underlying technology, **NPAPI (Netscape Plugin API)**, has been removed from all major browsers for security reasons.

The `navigator.plugins` array in modern browsers no longer contains these external plugins. Since the function is searching for plugins in an ecosystem that no longer exists, it is guaranteed to return an empty string. For this reason, we have replaced all calls to `scanForNpapiPlugin()` in our script with functions that statically return `""`.

```javascript
//refactored file

// now-obsolete function:
function scanForNpapiPlugin(pluginName) {
    try {
        if (navigator.plugins && navigator.plugins.length)
            for (var i = 0; i < navigator.plugins.length; i++) {
                var plugin = navigator.plugins[i];
                if (plugin.name.indexOf(pluginName) >= 0)
                    return plugin.name + (plugin.description ? "|" + plugin.description : "")
            }
    } catch (e) {}
    return ""
}
```

### 5. Font/Element Height Fingerprint

This function is a fingerprinting technique that measures the default rendered height of a font by briefly creating and measuring an invisible `<span>` element.

During testing, this function returned a unique value (`25`) due to custom display scaling. However, to not stand out and blend in we set the most common result for this test on standard systems is **`18`**. To enhance anonymity and create a more generic fingerprint, we have replaced the dynamic DOM manipulation with a static `return 18;`. This is a logical step for a script intended to run without a live browser environment.

**Action Taken:** The dynamic DOM manipulation is replaced with a static `return 18;`.

```javascript
//refactored file

// DOM-based logic:

var span = document.createElement("span");
span.innerHTML = " ",
span.style.position = "absolute",
span.style.left = "-9999px",
document.body.appendChild(span);
var offsetHeight = span.offsetHeight;
return document.body.removeChild(span),offsetHeight

```

## Encoding and Hashing Functions

After collecting the raw fingerprint data, the script uses a series of functions to compress, encode, and hash the final string.

### `function stringReplacer(sourceString, findSubstring, replaceWith, replaceOnlyFirst)` - String Replacer

This is a utility function for string replacement. It finds a substring `findSubstring` within a string `sourceString` and replaces it with `replaceWith`. It's used to substitute placeholder values like `@UTC@` with the current Unix timestamp right before processing.

```javascript
//refactored file

function stringReplacer(sourceString, findSubstring, replaceWith, replaceOnlyFirst) {
    "boolean" != typeof replaceOnlyFirst && (replaceOnlyFirst = !1);
    for (var index, continueReplacing = !0; (index = sourceString.indexOf(findSubstring)) >= 0 && (replaceOnlyFirst || continueReplacing); )
        sourceString = sourceString.substr(0, index) + replaceWith + sourceString.substr(index + findSubstring.length),
        continueReplacing = !1;
    return sourceString
}
```

### `function compressAndHash(rawFingerprintString)` - Compression and Hashing Orchestrator

This is the main function that processes the final fingerprint string, turning it into the compact `F` value. It performs a four-step process:

1.  **Dictionary Compression:** It takes the raw fingerprint string `rawFingerprintString` and iterates through a predefined list of common substrings (the `compressionDictionary ` array). Each found substring is replaced with a single, non-printable character. This significantly shortens the string.
2.  **Data Encoding:** The newly compressed string is passed to `function compressAndHash()`, which encodes it into a custom Base64-like format using a Huffman-style table (the `huffmanTable` map).
3.  **Checksum Hashing:** It calculates a 16-bit checksum/hash of the **original, uncompressed** fingerprint string using a series of bitwise operations (shifts and XORs).
4.  **Final Combination:** This 16-bit checksum is encoded into a 3-character string. The final `F` value is created by concatenating the encoded data from step 2 with this 3-character checksum. The result is a compact, integrity-checked string.

```javascript
//refactored file

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
```

### `function huffmanEncoder(compressedString)` - Custom Base64/Huffman-style Encoder

This function is responsible for the core data encoding. It converts the compressed string from `compressAndHash()` into its final text representation.

*   **Input:** A string that has already been compressed via dictionary substitution.
*   **Process:** It reads the input character by character. For each character, it uses the `huffmanTable` map as a lookup table to find its corresponding binary representation, which consists of a `[bit_length, value]` pair. These variable-length bit sequences are packed together into a continuous bitstream.
*   **Output:** As soon as the bitstream buffer contains 6 or more bits, the function extracts a 6-bit chunk, looks up the corresponding character in the custom alphabet `customAlphabetw` (`.0123...xyz`), and appends it to the result string.
*   **Details:** It also adds header bits at the beginning and padding at the end to ensure the bitstream is correctly framed and fully processed. This custom encoding scheme is highly efficient for the specific character set found in the fingerprint data.

```javascript 
//refactored file

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
```

## Usage
To run this script, you need to have Node.js installed on your system.

### 1. Install Node.js

-   Go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
-   Download the LTS (Long-Term Support) version for your operating system (Windows, macOS, or Linux).
-   Follow the installation steps provided by the installer.

### 2. Run the Script

Once Node.js is installed, you can run the script directly from your terminal or command prompt.

1.  Navigate to the directory where you saved the `refactored.js` file.
2.  Run the following command:

    ```bash
    node refactored.js
    ```

This will execute the script and print the generated fingerprint value to the console.

## Conclusion

Upon analysis, it becomes clear that this fingerprinting mechanism is largely a legacy system. It is heavily optimized for older browsers, relying on deprecated technologies like ActiveX and NPAPI plugins. As a result, it gathers minimal unique or valuable data from modern browsers, as most of its checks are now obsolete.

We have documented each step of the generation process for Apple's fingerprint value, from initial data collection to the final compression and encoding stages. Crucially, all dependencies on a live browser environment (the DOM) have been removed, allowing the script to be run in any standard Node.js environment.
