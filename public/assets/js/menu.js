// (function() {

//     const openButton = document.querySelector('.nav-menu');
//     const menu = document.querySelector('.nav-link');
//     const closeMenu = document.querySelector('.nav-close');

//     openButton.addEventListener('click', () => {
//         menu.classList.add('nav-link--show');
//     });

//     closeMenu.addEventListener('click', () => {
//         menu.classList.remove('nav-link--show');
//     });

// })();


function initNavigationMenu() {
    const openButton = document.querySelector('.nav-menu');
    const menu = document.querySelector('.nav-link');
    const closeMenu = document.querySelector('.nav-close');

    if (openButton && menu && closeMenu) {
        openButton.addEventListener('click', () => {
            menu.classList.add('nav-link--show');
        });

        closeMenu.addEventListener('click', () => {
            menu.classList.remove('nav-link--show');
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
