// ==============================
 // MENU DE NAVIGATION
 // ==============================
const boutonMenu = document.getElementById("bouton-menu");
const liensNavigation = document.getElementById("liens-navigation");

boutonMenu.addEventListener("click", function () {
    const menuOuvert = liensNavigation.classList.toggle("ouvert");

    boutonMenu.setAttribute("aria-expanded", menuOuvert);
    boutonMenu.setAttribute("aria-label", menuOuvert ? "Fermer le menu" : "Ouvrir le menu");
});

document.querySelectorAll(".lien-navigation").forEach(function (lien) {
    lien.addEventListener("click", function () {
        liensNavigation.classList.remove("ouvert");
        boutonMenu.setAttribute("aria-expanded", "false");
        boutonMenu.setAttribute("aria-label", "Ouvrir le menu");
    });
});

// ==============================
// THÈME CLAIR ET SOMBRE
// ==============================
const boutonTheme = document.getElementById("bouton-theme");

boutonTheme.addEventListener("click", function () {
    const themeClair = document.body.classList.toggle("theme-clair");

    boutonTheme.innerHTML = themeClair
        ? '🌙'
        :'☀️';

    boutonTheme.setAttribute(
        "aria-label",
        themeClair ? "Activer le thème sombre" : "Activer le thème clair"
    );
});

// ==============================
// CHANGEMENT AUTOMATIQUE DU NOM
// ==============================
const nomAnime = document.getElementById("nom-anime");
const listeNoms = 
[
    "Azel",
    "MONJAKIDY"
];
let indiceNom = 0;
// setInterval(function (){
//     nomAnime.classList.add("changement-nom");
//     setTimeout(function (){
//         indiceNom = (indiceNom + 1)
//         % listeNoms.length;
//         nomAnime.textContent = listeNoms[indiceNom];
//         nomAnime.classList.remove("changement-nom");
//     }, 400);
// }, 2500);
let indiceLettre = 0;
let effacement = false;

function animerNom(){
    const nomActuel = listeNoms[indiceNom];
    if(effacement){
        indiceLettre--;
    } else{
        indiceLettre++;
    }
    nomAnime.textContent = nomActuel.substring(0, indiceLettre);

    let vitesse = effacement ? 180 : 280;
    if (!effacement && indiceLettre === nomActuel.length){
        effacement = true;
        vitesse = 2500;
    } else if(effacement && indiceLettre === 0)  {
        effacement = false;
        indiceNom = (indiceNom + 1) % listeNoms.length;
        vitesse = 800;
    }

    setTimeout(animerNom, vitesse);
}
animerNom();

// ==============================
// ANNÉE AUTOMATIQUE
// ==============================
document.getElementById("annee").textContent = new Date().getFullYear();

// ==============================
// AFFICHAGE DE TOUS LES PROJETS
// ==============================
const boutonProjets = document.getElementById("bouton-projets");
const grilleProjets = document.getElementById("grille-projets");
const nombreProjets = document.getElementById("nombre-projets");
const cartesProjets = document.querySelectorAll(".carte-projet");

boutonProjets.addEventListener("click", function () {
    const toutAfficher = grilleProjets.classList.toggle("tout-afficher");

    nombreProjets.textContent = toutAfficher ? cartesProjets.length : 3;
    boutonProjets.setAttribute("aria-expanded", toutAfficher);
    boutonProjets.innerHTML = toutAfficher
        ? 'Réduire les projets <i class="fa-solid fa-chevron-up"></i>'
        : 'Voir tous les projets <i class="fa-solid fa-chevron-down"></i>';
});

// ==============================
// ANIMATION AU DÉFILEMENT
// ==============================
const sectionsAnimees = document.querySelectorAll(".section-anime");

if ("IntersectionObserver" in window) {
    const observateurSections = new IntersectionObserver(function (entrees, observateur) {
        entrees.forEach(function (entree) {
            if (entree.isIntersecting) {
                entree.target.classList.add("visible");
                observateur.unobserve(entree.target);
            }
        });
    }, { threshold: 0.12 });

    sectionsAnimees.forEach(function (section) {
        observateurSections.observe(section);
    });
} else {
    sectionsAnimees.forEach(function (section) {
        section.classList.add("visible");
    });
}

// ==============================
// BARRES DE COMPÉTENCES ANIMÉES
// ==============================
const barresProgression = document.querySelectorAll(".barre-progression span");

if ("IntersectionObserver" in window) {
    const observateurCompetences = new IntersectionObserver(function (entrees, observateur) {
        entrees.forEach(function (entree) {
            if (entree.isIntersecting) {
                const progression = entree.target.dataset.progression;
                entree.target.style.width = progression + "%";
                observateur.unobserve(entree.target);
            }
        });
    }, { threshold: 0.4 });

    barresProgression.forEach(function (barre) {
        observateurCompetences.observe(barre);
    });
} else {
    barresProgression.forEach(function (barre) {
        barre.style.width = barre.dataset.progression + "%";
    });
}

// ==============================
// RUBRIQUE ACTIVE DANS LE MENU
// ==============================
const sections = document.querySelectorAll("main section[id]");
const liensMenu = document.querySelectorAll(".lien-navigation");

const observateurNavigation = new IntersectionObserver(function (entrees) {
    entrees.forEach(function (entree) {
        if (entree.isIntersecting) {
            liensMenu.forEach(function (lien) {
                lien.classList.toggle(
                    "actif",
                    lien.getAttribute("href") === "#" + entree.target.id
                );
            });
        }
    });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(function (section) {
    observateurNavigation.observe(section);
});

// ==============================
// FORMULAIRE DE CONTACT
// Prépare un message dans l'application e-mail.
 // ==============================
const formulaireContact = document.getElementById("formulaire-contact");
const etatFormulaire = document.getElementById("etat-formulaire");
const adresseContact = "charles@example.com";

formulaireContact.addEventListener("submit", function (evenement) {
    evenement.preventDefault();

    const donnees = new FormData(formulaireContact);
    const nom = donnees.get("from_name").trim();
    const email = donnees.get("reply_to").trim();
    const sujet = donnees.get("subject").trim();
    const message = donnees.get("message").trim();

    const corpsMessage = "Nom : " + nom + "\nE-mail : " + email + "\n\n" + message;
    const lienEmail = "mailto:" + adresseContact
        + "?subject=" + encodeURIComponent(sujet)
        + "&body=" + encodeURIComponent(corpsMessage);

    etatFormulaire.textContent = "Ouverture de votre application e-mail...";
    window.location.href = lienEmail;
});
