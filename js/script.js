// Fetch required elements on load
mobileNavBar = document.getElementById("hamburger-menu");
hamburgerMenu = document.getElementById("hamburger-icon");
navItems = document.getElementById("nav-items");

// Toggle hamburger menu on click, from hidden to shown and back
function toggleHamburgerMenu() {
    navItems.classList.toggle("hidden");
    mobileNavBar.classList.toggle("hidden");
}

// Toggle hamburger on click
hamburgerMenu.addEventListener("click", (event) => {
    toggleHamburgerMenu();
});

// Check the window size on resize
window.addEventListener("resize", (event) => {
    checkSizing();
});

// Close the hamburger menu if the user resizes the window to a size that is not mobile
function checkSizing() {
    if (window.innerWidth > 650) {
        navItems.classList.remove("hidden");
        mobileNavBar.classList.add("hidden");
    } else {
        navItems.classList.add("hidden");
    }
}

// Check sizing on load
checkSizing();
