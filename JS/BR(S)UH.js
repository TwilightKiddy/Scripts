// ==UserScript==
// @name         Better RSUH portal
// @version      0.1
// @description  try to take over the world!
// @author       TwilightKiddy
// @updateURL    https://raw.githubusercontent.com/TwilightKiddy/Scripts/master/JS/BR(S)UH.js
// @downloadURL  https://raw.githubusercontent.com/TwilightKiddy/Scripts/master/JS/BR(S)UH.js
// @match        https://portal.rggu.ru/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var topcontent = document.evaluate("//div[@class='topcontent']" , document, null, XPathResult.ANY_TYPE, null);
    topcontent = topcontent.iterateNext();

    if(topcontent){
        topcontent.style = "z-index: 11 !important";
    }
})();
