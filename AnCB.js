// ==UserScript==
// @name         Animevost no comments background
// @match        https://animevost.org/*
// @match        https://*.agorov.org/*
// @version      1.1.1
// @updateURL    https://raw.githubusercontent.com/oKiddYo/JSScripts/master/AnCB.js
// @downloadURL  https://raw.githubusercontent.com/oKiddYo/JSScripts/master/AnCB.js
// @description  Resets nasty backgrounds on Animevost.org to default ones.
// @author       oKiddYo
// @grant        none
// @run-at       document-load
// ==/UserScript==

(function() {
    'use strict';

    document.body.addEventListener('DOMSubtreeModified', function () {
        var nodes = document.querySelectorAll('[class^=commentContent_]');
        for (var i = 0; i < nodes.length; i++) {
            if(nodes[i].className.match(/commentContent_[^4]\d*/g)){
                nodes[i].className = "commentContent_4";
            }
        }
    }, false);
})();
