"use strict";
document.getElementById("clickme").addEventListener("click", function (_) {
    let counter = document.getElementById("count");
    if (!counter) {
        return;
    }
    let count = Number.parseInt(counter.innerHTML);
    count++;
    counter.innerHTML = String(count);
});
