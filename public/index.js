const burger = document.querySelector("#burger");
const menu = document.querySelector('#menu');

burger.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    }
    else {
        menu.classList.add("hidden");
    }
})

const m = document.querySelector("#more");
const b = document.querySelector("#load");
const ht = "100%";
b.addEventListener("click", () => {
    if (m.classList.contains("hidden")) {
        m.classList.remove("hidden");
        m.style.height += ht;
    }
    // else {
    //     m.classList.add("hidden");
    // }
})