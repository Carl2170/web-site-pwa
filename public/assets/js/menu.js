function initNavigationMenu() {
    const openButton = document.querySelector('.nav-menu');
    const menu = document.querySelector('.nav-link');
    const closeMenu = document.querySelector('.nav-close');
    const navLink = document.querySelectorAll('.nav-items a');

    if (openButton && menu && closeMenu) {
        openButton.addEventListener('click', () => {
            menu.classList.add('nav-link--show');
        });

        closeMenu.addEventListener('click', () => {
            menu.classList.remove('nav-link--show');
        });
        
        navLink.forEach((link) => {
            link.addEventListener('click', () => {
                menu.classList.remove('nav-link--show');
            });
        });
    }
    
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".nav"); 
    
        if (window.scrollY > 80) { 
            navbar.classList.add("navbar-fixed");
        } else {
            navbar.classList.remove("navbar-fixed");
        }
    });
}
