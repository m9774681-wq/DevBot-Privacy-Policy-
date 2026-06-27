(function () {

    function applyLang(lang) {
        localStorage.setItem("lang", lang);

        document.querySelectorAll("[data-pt]").forEach(el => {
            const value = el.getAttribute("data-" + lang);
            if (value) el.innerText = value;
        });
    }

    function getLang() {
        return localStorage.getItem("lang") || "pt";
    }

    function createUI() {
        const div = document.createElement("div");
        div.className = "lang-switch";

        div.innerHTML = `
            <button id="lang-pt">PT 🇧🇷</button>
            <button id="lang-en">EN 🇺🇸</button>
        `;

        document.body.appendChild(div);

        document.getElementById("lang-pt").onclick = () => applyLang("pt");
        document.getElementById("lang-en").onclick = () => applyLang("en");
    }

    function init() {
        createUI();
        applyLang(getLang());
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();
