
/* ==========================================
   BPL PORTFOLIO - ABOUT PAGE JAVASCRIPT
========================================== */

(() => {
    "use strict";


    /* ======================================
       1. MOBILE NAVIGATION
    ====================================== */

    const menuButton = document.getElementById("mobileMenuBtn");
    const navigation = document.querySelector(".page-nav");

    if (menuButton && navigation) {

        // Open / Close Menu
        menuButton.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("menu-open");

            menuButton.classList.toggle("active", isOpen);

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

        // Close Menu When Clicking a Navigation Link
        navigation.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navigation.classList.remove("menu-open");
                menuButton.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

        // Close Menu When Clicking Outside
        document.addEventListener("click", event => {

            if (
                !menuButton.contains(event.target) &&
                !navigation.contains(event.target)
            ) {

                navigation.classList.remove("menu-open");
                menuButton.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* ======================================
       2. SCROLL REVEAL ANIMATION
    ====================================== */

    const revealElements = document.querySelectorAll(
        ".about-section-label, " +
        ".about-intro-content, " +
        ".personal-info-card, " +
        ".about-story-title, " +
        ".story-block, " +
        ".personality-card, " +
        ".service-item, " +
        ".skills-group, " +
        ".value-card, " +
        ".interests-content, " +
        ".goals-content, " +
        ".about-cta-section"
    );

    revealElements.forEach(element => {

        element.classList.add("about-reveal");

    });

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("about-visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }

        );

        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("about-visible");

        });

    }


    /* ======================================
       3. PERSONAL INFO CARD ANIMATION
    ====================================== */

    const personalCards = document.querySelectorAll(
        ".personal-info-card"
    );

    personalCards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 70}ms`;

    });


    /* ======================================
       4. SERVICE ITEM HOVER
    ====================================== */

    const serviceItems = document.querySelectorAll(
        ".service-item"
    );

    serviceItems.forEach(item => {

        item.addEventListener("mouseenter", () => {

            item.classList.add("service-active");

        });

        item.addEventListener("mouseleave", () => {

            item.classList.remove("service-active");

        });

    });


    /* ======================================
       5. CURRENT PAGE NAVIGATION
    ====================================== */

    const currentPage = window.location.pathname;

    navigation?.querySelectorAll("a").forEach(link => {

        const linkPage = link.getAttribute("href");

        if (linkPage && linkPage.endsWith("about.html")) {

            link.classList.add("active");

        }

    });


    /* ======================================
       6. FOOTER YEAR
    ====================================== */

    const footerYear = document.querySelector(
        ".about-footer-year"
    );

    if (footerYear) {

        footerYear.textContent = new Date().getFullYear();

    }

})();
