const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const line = $(".tabs .line");

// Catch Events
tabs.forEach((tab, index) => {
    tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        this.classList.add("active"); //this === tab
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        const pane = panes[index];
        $(".tab-pane.active").classList.remove("active");
        pane.classList.add("active");
    };
});
