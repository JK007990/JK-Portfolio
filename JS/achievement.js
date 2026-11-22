/* ==========================================
   BPL - ACHIEVEMENT PAGE JAVASCRIPT
========================================== */

(() => {
    "use strict";

    document.addEventListener("DOMContentLoaded", () => {

        // =====================================
        // FOOTER YEAR
        // =====================================

        const footerYear = document.getElementById("footerYear");

        if (footerYear) {
            footerYear.textContent = new Date().getFullYear();
        }


        // =====================================
        // CERTIFICATE FILTER
        // =====================================

        const filterButtons = document.querySelectorAll(".filter-btn");
        const certificateCards = document.querySelectorAll(".certificate-card");

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                const selectedFilter = button.dataset.filter;

                filterButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                button.classList.add("active");

                certificateCards.forEach(card => {

                    const category = card.dataset.category;

                    if (
                        selectedFilter === "all" ||
                        selectedFilter === category
                    ) {
                        card.classList.remove("is-hidden");
                    } else {
                        card.classList.add("is-hidden");
                    }

                });

            });

        });


        // =====================================
        // CERTIFICATE LIGHTBOX
        // =====================================

        const lightbox = document.getElementById("certificateLightbox");
        const lightboxImage = document.getElementById("lightboxImage");
        const lightboxTitle = document.getElementById("lightboxTitle");
        const closeButton = document.getElementById("lightboxClose");

        const certificateButtons = document.querySelectorAll(
            ".certificate-image"
        );

        function openLightbox(button) {

            const imagePath = button.dataset.full;
            const title = button.dataset.title;

            if (!imagePath || !lightbox || !lightboxImage) {
                return;
            }

            lightboxImage.src = imagePath;
            lightboxImage.alt = title || "Certificate Preview";

            if (lightboxTitle) {
                lightboxTitle.textContent = title || "Certificate";
            }

            lightbox.classList.add("open");
            lightbox.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";

        }


        function closeLightbox() {

            if (!lightbox) {
                return;
            }

            lightbox.classList.remove("open");
            lightbox.setAttribute("aria-hidden", "true");

            document.body.style.overflow = "";

            if (lightboxImage) {
                lightboxImage.src = "";
            }

        }


        certificateButtons.forEach(button => {

            button.addEventListener("click", () => {
                openLightbox(button);
            });

        });


        if (closeButton) {
            closeButton.addEventListener("click", closeLightbox);
        }


        if (lightbox) {

            lightbox.addEventListener("click", event => {

                if (event.target === lightbox) {
                    closeLightbox();
                }

            });

        }


        // ESC KEY TO CLOSE
        document.addEventListener("keydown", event => {

            if (event.key === "Escape") {
                closeLightbox();
            }

        });


        // =====================================
        // SCROLL REVEAL
        // =====================================

        const revealElements = document.querySelectorAll(
            ".achievement-intro-content, " +
            ".section-heading, " +
            ".featured-card, " +
            ".stat-item, " +
            ".certificate-card, " +
            ".growth-content, " +
            ".achievement-cta-content"
        );

        revealElements.forEach(element => {
            element.classList.add("ach-reveal");
        });


        if ("IntersectionObserver" in window) {

            const observer = new IntersectionObserver((entries, obs) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("ach-visible");

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
                element.classList.add("ach-visible");
            });

        }

    });

})();