// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-02-14
// @description  try to take over the world!
// @author       You
// @match        https://mepro.pearson.com/my-tasks
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pearson.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        const random = Math.floor(Math.random()*(12-7) + 7);
        const random2 = Math.floor(Math.random()*(60-5) + 5);
    const container = document.getElementById("courseContent")
    container.onclick = setTimeout(()=>{
        fetch("https://mepro.pearson.com/CallToServer.aspx/PostActivityLogDetails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                obj: {
                    ActivityScore: 100,
                    ActivityStatus: "completed",
                    TimeSpent: `00:${random}:${random2}`
                }
            }),
            credentials: "include"
        })
    },3000)
})();