/* ==========================================
   EXPERIENCE PAGE JAVASCRIPT
========================================== */

(() => {
    "use strict";

    document.addEventListener("DOMContentLoaded", () => {

        // FOOTER YEAR
        const footerYear = document.getElementById("footerYear");

        if (footerYear) {
            footerYear.textContent = new Date().getFullYear();
        }


        // SCROLL REVEAL ANIMATION
        const revealElements = document.querySelectorAll(
            ".experience-card, .experience-intro-content, " +
            ".section-heading, .learning-card, " +
            ".learning-heading, .cta-content"
        );

        revealElements.forEach(element => {
            element.classList.add("exp-reveal");
        });

        if ("IntersectionObserver" in window) {

            const observer = new IntersectionObserver((entries, obs) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("exp-visible");
                        obs.unobserve(entry.target);
                    }

                });

            }, {
                threshold: 0.12
            });

            revealElements.forEach(element => {
                observer.observe(element);
            });

        } else {

            revealElements.forEach(element => {
                element.classList.add("exp-visible");
            });

        }

    });

})();


/* ==========================================
   MOBILE NAVIGATION
========================================== */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const pageNav = document.querySelector(".page-nav");

if (mobileMenuBtn && pageNav) {

    mobileMenuBtn.addEventListener("click", () => {
        pageNav.classList.toggle("menu-open");
    });

    pageNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            pageNav.classList.remove("menu-open");
        });
    });

}
