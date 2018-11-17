// ==UserScript==
// @name         BlyatBoard
// @namespace    http://kuroa.me/
// @version      0.1
// @description  need better blackboard
// @author       Incfex
// @match        https://shibidp.syr.edu/*
// @match        https://blackboard.syr.edu/
// @grant        GM.setValue
// @grant        GM.getValue
// ==/UserScript==

(async function() {
    'use strict';
    var netID = await GM.getValue("netID");
    var pass = await GM.getValue("pass");
    var errCount= document.getElementsByClassName("form-error").length;
    var bburl = document.location.href;
    if(/black/.test(bburl)){
        document.getElementById("netid-login").click();
    }
    if(/shibidp/.test(bburl)){
        if(errCount == 1){
            netID = prompt("Giff me your name", "Right here!");
            pass = prompt("Giff me your password", "Over here!");
            GM.setValue("netID", netID);
            GM.setValue("pass", pass);
        }
        document.getElementsByClassName("form-element")[0].value = netID;
        document.getElementsByClassName("form-element")[1].value = pass;
        document.getElementsByClassName("form-element")[2].click();
    }
    // Your code here...
})();