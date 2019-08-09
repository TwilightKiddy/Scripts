// ==UserScript==
// @name         Animevost no comments background
// @match        https://animevost.org/*
// @version      1.0
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