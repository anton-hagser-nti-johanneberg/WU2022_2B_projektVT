// Fetch required elements
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
    hamburgerMenu.classList.toggle("active");
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

// Register on load event and initialize the map
window.addEventListener("load", (event) => {
    // Check sizing on load
    checkSizing();

    // Check if mapboxgl has loaded (it's only imported on the contact-us page)
    // a better way of doing this is per page scripting and then compressing it
    if (typeof mapboxgl !== "undefined") {
        // Set the public access token
        mapboxgl.accessToken =
            "pk.eyJ1Ijoic3RhcnRvbGVmdCIsImEiOiJjamtmcnhwdGIwYnR6M3NxbjR3cTBvdThjIn0.fihE9-g-sm0dgoMksATtUw";

        // Create the map and set a style
        var map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v8",
        });
    }
});
