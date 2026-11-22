
/* =========================================
   BPL PORTFOLIO - INTERACTIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // 1. PAGE LOADER

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader?.classList.add("hide");
        }, 500);
    });


    // 2. ABOUT / VISION / MISSION SWITCH

    const sidebarButtons = document.querySelectorAll(".sidebar-item");
    const aboutPanels = document.querySelectorAll(".about-panel");

    sidebarButtons.forEach(button => {

        button.addEventListener("click", () => {

            const targetId = button.dataset.content;

            sidebarButtons.forEach(item => {
                item.classList.remove("active");
            });

            aboutPanels.forEach(panel => {
                panel.classList.remove("active");
            });

            button.classList.add("active");

            const targetPanel = document.getElementById(targetId);

            if (targetPanel) {
                targetPanel.classList.add("active");
            }

        });

    });


    // 3. EXPERIENCE CHART ANIMATION

    const chartBars = document.querySelectorAll(".bar");

    const chartSection = document.querySelector(
        ".experience-chart-card"
    );

    if (chartSection && chartBars.length > 0) {

        const chartObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        chartBars.forEach(bar => {
                            bar.classList.add("animated");
                        });

                        observer.disconnect();

                    }

                });

            },
            {
                threshold: 0.3
            }
        );

        chartObserver.observe(chartSection);
    }


    // 4. SCROLL REVEAL

    const revealElements = document.querySelectorAll(
        ".section-heading, .experience-chart-card, .experience-card, .achievement-heading, .achievement-stage, .achievement-note, .contact-main, .contact-footer"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // 5. BACK TO TOP BUTTON

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            backToTop?.classList.add("visible");
        } else {
            backToTop?.classList.remove("visible");
        }

    });


    // 6. SMOOTH SCROLL

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // 7. HERO IMAGE PARALLAX - DESKTOP

    const hero = document.querySelector(".hero");
    const heroProfile = document.querySelector(".hero-profile");

    if (
        hero &&
        heroProfile &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        hero.addEventListener("mousemove", event => {

            const rect = hero.getBoundingClientRect();

            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;

            heroProfile.style.transform =
                `translate(${x * 12}px, ${y * 12}px)`;

        });

        hero.addEventListener("mouseleave", () => {

            heroProfile.style.transform = "translate(0, 0)";

        });

    }

});
