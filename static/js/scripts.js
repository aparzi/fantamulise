/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function () {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    const scrollTrigger = document.querySelector('a.js-scroll-trigger[href*="#"]:not([href="#"])');
    scrollTrigger.addEventListener('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    document.querySelector(".js-scroll-trigger").addEventListener('click', function () {
        document.querySelector(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll

    // Collapse Navbar
    const navbarCollapse = function () {
        const mainNav = document.getElementById("#mainNav");
        if (document.querySelector("#mainNav").getBoundingClientRect().top > 100) {
            mainNav && mainNav.classList.add("navbar-shrink");
        } else {
            mainNav && mainNav.classList.remove("navbar-shrink");
        }
    };
    // // Collapse now if page is not at top
    navbarCollapse();
    // // Collapse the navbar when page is scrolled
    window.scroll(navbarCollapse);
})(); // End of use strict
