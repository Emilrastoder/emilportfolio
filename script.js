// Apparition fluide des sections au scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".container, #hero, .card, .skill-card, .cert-card, .veille-block");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });
});

// Message de confirmation pour le formulaire
const form = document.getElementById("contactForm");
const msgSent = document.getElementById("msgSent");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    msgSent.textContent = "✅ Votre message a bien été envoyé !";
    msgSent.style.color = "#00ffcc";
    form.reset();
});
