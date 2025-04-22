const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    rootHtml.setAttribute("data-theme", newTheme);

    toggleTheme.classList.toggle("bi-moon");
    toggleTheme.classList.toggle("bi-sun");
}

toggleTheme.addEventListener("click", changeTheme);