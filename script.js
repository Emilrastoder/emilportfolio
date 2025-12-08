/* ===============================
   SCRIPT GLOBAL DU PORTFOLIO
=============================== */

// ===== NAVIGATION SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== MODALE TABLEAU DE SYNTHESE =====
const modal = document.getElementById("tableModal");
const btn = document.getElementById("openTableBtn");
const closeModal = document.querySelector(".modal .close");

if(btn){
    btn.onclick = function() {
        modal.style.display = "block";
    }
}

if(closeModal){
    closeModal.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}

// ===== FORMULAIRE DE CONTACT =====
const form = document.getElementById('contactForm');
const msgSent = document.getElementById('msgSent');

if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        msgSent.textContent = "✅ Votre message a été envoyé ! Merci.";
        msgSent.style.color = "#238636";
        form.reset();
    });
}

// ===== ANIMATION SUR LES CARTES =====
const cards = document.querySelectorAll('.card, .cert-card, .skill-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = '0.3s';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// ===== BOUTONS =====
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.opacity = '0.9';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.opacity = '1';
    });
});
