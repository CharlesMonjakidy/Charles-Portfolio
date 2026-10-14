// On récupère les éléments utiles de la page.
const boutonMenu = document.querySelector("#menu");
const liens = document.querySelector("#liens");
const boutonNuit = document.querySelector("#nuit");
const annee = document.querySelector("#annee");

// Le menu mobile s'ouvre et se ferme quand on appuie sur le bouton.
boutonMenu.addEventListener("click", function () {
    const ouvert = liens.classList.toggle("ouvert");

    // On indique aussi l'état du menu aux lecteurs d'écran.
    boutonMenu.setAttribute("aria-expanded", ouvert);
    boutonMenu.setAttribute(
        "aria-label",
        ouvert ? "Fermer le menu" : "Ouvrir le menu"
    );
});

// Sur téléphone, le menu se ferme après avoir choisi une rubrique.
document.querySelectorAll(".liens a").forEach(function (lien) {
    lien.addEventListener("click", function () {
        liens.classList.remove("ouvert");
        boutonMenu.setAttribute("aria-expanded", "false");
        boutonMenu.setAttribute("aria-label", "Ouvrir le menu");
    });
});

// Le bouton lune active ou désactive le thème clair.
boutonNuit.addEventListener("click", function () {
    document.body.classList.toggle("clair");

    if (document.body.classList.contains("clair")) {
        boutonNuit.textContent = "☀";
        boutonNuit.setAttribute("aria-label", "Activer le thème sombre");
    } else {
        boutonNuit.textContent = "☾";
        boutonNuit.setAttribute("aria-label", "Activer le thème clair");
    }
});

// L'année se met à jour automatiquement.
annee.textContent = new Date().getFullYear();

// La rubrique actuelle est soulignée dans le menu pendant le défilement.
const sections = document.querySelectorAll("main section[id]");
const liensMenu = document.querySelectorAll(".liens a");

window.addEventListener("scroll", function () {
    let actuelle = "accueil";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            actuelle = section.id;
        }
    });

    liensMenu.forEach(function (lien) {
        lien.classList.toggle(
            "actif",
            lien.getAttribute("href") === "#" + actuelle
        );
    });
});


// ==============================
// Apparition des éléments au défilement
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("section, .carte, .projet, .projet-carte, .competence, .outil, .formulaire-contact");
    elements.forEach(function (element) { element.classList.add("animable"); });
    if ("IntersectionObserver" in window) {
        const observateur = new IntersectionObserver(function (entrees, observer) {
            entrees.forEach(function (entree) {
                if (entree.isIntersecting) { entree.target.classList.add("visible"); observer.unobserve(entree.target); }
            });
        }, { threshold: 0.12 });
        elements.forEach(function (element) { observateur.observe(element); });
    } else { elements.forEach(function (element) { element.classList.add("visible"); }); }
});

// ==============================
// Formulaire d'envoi avec EmailJS
// ==============================
// Crée un compte sur https://www.emailjs.com/ puis remplace les 3 identifiants.
const EMAILJS_CLE_PUBLIQUE = "REMPLACE_PAR_TA_CLE_PUBLIQUE";
const EMAILJS_SERVICE_ID = "REMPLACE_PAR_TON_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "REMPLACE_PAR_TON_TEMPLATE_ID";

const formulaireContact = document.getElementById("formulaire-contact");
if (formulaireContact) {
    formulaireContact.addEventListener("submit", async function (event) {
        event.preventDefault();
        const bouton = document.getElementById("bouton-envoi");
        const statut = document.getElementById("etat-formulaire");
        if (typeof emailjs === "undefined" || EMAILJS_CLE_PUBLIQUE.startsWith("REMPLACE_") || EMAILJS_SERVICE_ID.startsWith("REMPLACE_") || EMAILJS_TEMPLATE_ID.startsWith("REMPLACE_")) {
            statut.textContent = "Il faut d'abord configurer EmailJS dans script.js pour activer l'envoi.";
            statut.style.color = "#FBBF24";
            return;
        }
        bouton.disabled = true;
        bouton.textContent = "Envoi en cours…";
        statut.textContent = "";
        try {
            emailjs.init({ publicKey: EMAILJS_CLE_PUBLIQUE });
            await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formulaireContact);
            statut.textContent = "Message envoyé avec succès ! Merci pour ton message.";
            statut.style.color = "#34D399";
            formulaireContact.reset();
        } catch (erreur) {
            console.error("Erreur EmailJS :", erreur);
            statut.textContent = "Échec de l'envoi. Vérifie la configuration EmailJS puis réessaie.";
            statut.style.color = "#F87171";
        } finally {
            bouton.disabled = false;
            bouton.innerHTML = 'Envoyer le message <span>➤</span>';
        }
    });
}
