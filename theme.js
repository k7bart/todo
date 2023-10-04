const themeButton = document.getElementById("theme");

function setTheme(theme) {
    switch (theme) {
        case "light":
            isLightTheme = true;
            localStorage.setItem("theme", "light");
            themeButton.innerHTML = `<div class="light-theme"><img src="./images/moon.png" hight = 20px width = 20px/></div>`;
            document.body.classList.remove("dark-theme");
            break;
        case "dark":
            isLightTheme = false;
            localStorage.setItem("theme", "dark");
            themeButton.innerHTML = `<img src="./images/sun.svg" id="sun-svg" version="1.0"  viewBox="0 0 1220.000000 1280.000000"/>`;
            document.body.classList.add("dark-theme");
    }
}

setTheme(localStorage.getItem("theme") || "light");

themeButton.addEventListener("click", function () {
    setTheme(isLightTheme ? "dark" : "light");
});
