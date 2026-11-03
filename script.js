/* ==========================================================
   PORTFOLIO - Emil Rastoder  |  script.js
   ========================================================== */
"use strict";

/* ---------- Menu mobile ---------- */
function initMobileMenu() {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.getElementById("nav-links");
    if (!toggle || !menu) return;

    const setOpen = (open) => {
        menu.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    };

    toggle.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
}

/* ---------- Apparition fluide des sections au scroll ---------- */
function initScrollReveal() {
    if (!("IntersectionObserver" in window)) return;
    const targets = document.querySelectorAll(".container, #hero, .card, .skill-card, .cert-card, .veille-block");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });

    targets.forEach((el) => {
        el.classList.add("hidden");
        observer.observe(el);
    });
}

/* ---------- Lien actif dans la navigation ---------- */
function initActiveNavLink() {
    const links = document.querySelectorAll(".nav-links a");
    if (!("IntersectionObserver" in window) || !links.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id));
        });
    }, { rootMargin: "-40% 0px -55% 0px" });

    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
}

/* ---------- Message de confirmation du formulaire ---------- */
function initContactForm() {
    const form = document.getElementById("contactForm");
    const msgSent = document.getElementById("msgSent");
    if (!form || !msgSent) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        msgSent.textContent = "✅ Votre message a bien été envoyé !";
        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initScrollReveal();
    initActiveNavLink();
    initContactForm();
});
