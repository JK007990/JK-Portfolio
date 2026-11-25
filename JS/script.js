
/* ==========================================
   BPL PORTFOLIO - MAIN JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* 1. PAGE LOADER */

    const loader = document.getElementById("loader");

    function hideLoader() {
        if (!loader || loader.dataset.hidden === "true") return;

        loader.dataset.hidden = "true";
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }

    if (document.readyState === "complete") {
        hideLoader();
    } else {
        window.addEventListener("load", hideLoader, { once: true });
    }

    setTimeout(hideLoader, 3000);


    /* 2. BACK TO TOP */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        function updateBackToTop() {
            backToTop.classList.toggle("show", window.scrollY > 400);
        }

        window.addEventListener("scroll", updateBackToTop);
        updateBackToTop();

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    /* 3. SMOOTH SCROLL */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    /* 4. VISION / ABOUT ME / MISSION TABS */

    const aboutTabs = document.querySelectorAll(".about-tab");
    const aboutPanels = document.querySelectorAll(".about-panel");

    function activateAboutTab(tab) {

        const targetId = tab.dataset.tab;
        const targetPanel = document.getElementById(targetId);

        if (!targetPanel) return;

        aboutTabs.forEach(item => {
            item.classList.remove("active");
            item.setAttribute("aria-selected", "false");
        });

        aboutPanels.forEach(panel => {
            panel.classList.remove("active");
        });

        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        targetPanel.classList.add("active");
    }

    aboutTabs.forEach(tab => {

        tab.setAttribute("type", "button");
        tab.setAttribute("role", "tab");
        tab.setAttribute("aria-selected", tab.classList.contains("active") ? "true" : "false");

        tab.addEventListener("click", () => {
            activateAboutTab(tab);
        });

    });


    /* 5. SCROLL REVEAL */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".about-content, " +
        ".experience-chart-card, " +
        ".experience-timeline, " +
        ".achievement-stage, " +
        ".achievement-footer, " +
        ".contact-main"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("active");
        });

    }


    /* 6. SKILL BAR ANIMATION */

    const skillBars = document.querySelectorAll(".chart-fill");

    if ("IntersectionObserver" in window) {

        const skillObserver = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const bar = entry.target;
                    const level = bar.style.getPropertyValue("--level");

                    bar.style.width = level;

                    observer.unobserve(bar);
                }

            });

        }, {
            threshold: 0.3
        });

        skillBars.forEach(bar => {
            bar.style.width = "0%";
            skillObserver.observe(bar);
        });

    } else {

        skillBars.forEach(bar => {
            bar.style.width = bar.style.getPropertyValue("--level");
        });

    }


    /* 7. CURRENT YEAR */

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* 8. IMAGE ERROR HANDLING */

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("error", function() {
            console.warn("Image could not be loaded:", this.src);
        });

    });


    /* 9. PAGE READY */

    document.body.classList.add("page-ready");

    console.log("BPL Portfolio Loaded Successfully.");

});
