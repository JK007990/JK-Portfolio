/* ==========================================
   BPL - CONTACT PAGE JAVASCRIPT
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
        // CONTACT FORM
        // =====================================

        const contactForm = document.getElementById("contactForm");
        const formNote = document.getElementById("formNote");

        // ကိုယ့် Email Address နဲ့ အစားထိုးပါ
        const receiverEmail = "YOUR_EMAIL@gmail.com";

        if (contactForm) {

            contactForm.addEventListener("submit", function (event) {

                event.preventDefault();

                const name = document.getElementById("contactName").value.trim();
                const email = document.getElementById("contactEmail").value.trim();
                const subject = document.getElementById("contactSubject").value.trim();
                const message = document.getElementById("contactMessage").value.trim();

                if (!name || !email || !subject || !message) {
                    return;
                }

                const emailSubject = encodeURIComponent(subject);

                const emailBody = encodeURIComponent(
                    "Name: " + name + "\n" +
                    "Email: " + email + "\n\n" +
                    "Message:\n" + message
                );

                const mailtoLink =
                    "mailto:" + receiverEmail +
                    "?subject=" + emailSubject +
                    "&body=" + emailBody;

                if (formNote) {
                    formNote.textContent =
                        "Opening your email application...";
                }

                window.location.href = mailtoLink;

            });

        }


        // =====================================
        // SCROLL REVEAL
        // =====================================

        const revealElements = document.querySelectorAll(
            ".contact-intro-content, " +
            ".section-heading, " +
            ".contact-card, " +
            ".contact-form-left, " +
            ".contact-form, " +
            ".final-cta-inner"
        );

        revealElements.forEach(element => {
            element.classList.add("contact-reveal");
        });


        if ("IntersectionObserver" in window) {

            const observer = new IntersectionObserver((entries, obs) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("contact-visible");

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
                element.classList.add("contact-visible");
            });

        }

    });

})();