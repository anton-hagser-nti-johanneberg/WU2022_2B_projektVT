mobileNavBar = document.getElementById("hamburger-menu");
hamburgerMenu = document.getElementById("hamburger-icon");
navItems = document.getElementById("nav-items");

function toggleHamburgerMenu() {
    if (mobileNavBar.classList.contains("hidden")) {
        navItems.classList.remove("hidden");
        mobileNavBar.classList.remove("hidden");
    } else {
        navItems.classList.add("hidden");
        mobileNavBar.classList.add("hidden");
    }
}

hamburgerMenu.addEventListener("click", (event) => {
    toggleHamburgerMenu();
});

window.addEventListener("resize", (event) => {
    checkSizing();
});

function checkSizing() {
    if (window.innerWidth > 650) {
        navItems.classList.remove("hidden");
        mobileNavBar.classList.add("hidden");
    } else {
        navItems.classList.add("hidden");
    }
}

checkSizing()
