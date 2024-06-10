document.addEventListener("DOMContentLoaded", function() {
    const userMenuButton = document.getElementById("user-menu-button");
    const userMenu = userMenuButton.nextElementSibling;

    userMenuButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up to the window
        const isMenuOpen = userMenu.style.display === "block";
        userMenu.style.display = isMenuOpen ? "none" : "block";
    });

    // Close the menu if clicked outside
    window.addEventListener("click", function(event) {
        if (event.target !== userMenuButton && !userMenu.contains(event.target)) {
            userMenu.style.display = "none";
        }
    });
});
