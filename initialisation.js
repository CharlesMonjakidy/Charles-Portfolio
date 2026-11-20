// =========================================================
// INITIALISATION DU PORTFOLIO — CHARLES MONJAKIDY
// Fichier séparé : le script.js original reste inchangé.
// =========================================================

const ecranInitialisation = document.querySelector("#ecranInitialisation");
const progressionInitialisation = document.querySelector("#progressionInitialisation");
const pourcentageInitialisation = document.querySelector("#pourcentageInitialisation");
const etapeInitialisation = document.querySelector("#etapeInitialisation");
const texteInitialisation = document.querySelector("#texteInitialisation");

// Les messages changent selon l'avancement du chargement.
const etapesInitialisation = [
  { limite: 0, message: "PRÉPARATION DU SYSTÈME", titre: "INITIALISATION DU PORTFOLIO" },
  { limite: 25, message: "CHARGEMENT DES RESSOURCES", titre: "CHARGEMENT DES RESSOURCES" },
  { limite: 50, message: "PRÉPARATION DE L'INTERFACE", titre: "PRÉPARATION DE L'INTERFACE" },
  { limite: 75, message: "FINALISATION DU DESIGN", titre: "FINALISATION DU DESIGN" },
  { limite: 100, message: "SYSTÈME PRÊT", titre: "BIENVENUE SUR MON PORTFOLIO" }
];

let progressionActuelle = 0;

// Met à jour la barre, le pourcentage et le texte.
function mettreAJourInitialisation(valeur) {
  progressionActuelle = valeur;

  if (progressionInitialisation) {
    progressionInitialisation.style.width = valeur + "%";
  }

  if (pourcentageInitialisation) {
    pourcentageInitialisation.textContent = valeur + "%";
  }

  const etapeActuelle = [...etapesInitialisation]
    .reverse()
    .find(etape => valeur >= etape.limite);

  if (etapeActuelle && etapeInitialisation) {
    etapeInitialisation.textContent = etapeActuelle.message;
  }

  if (etapeActuelle && texteInitialisation) {
    // Le curseur animé est conservé à la fin du texte.
    const curseur = texteInitialisation.querySelector(".curseur-initialisation");
    texteInitialisation.textContent = etapeActuelle.titre;
    if (curseur) texteInitialisation.appendChild(curseur);
  }
}

// Cache l'écran après l'arrivée à 100 %.
function terminerInitialisation() {
  if (!ecranInitialisation) return;

  ecranInitialisation.classList.add("masquer-initialisation");

  // Retire l'écran du document après la transition.
  window.setTimeout(() => {
    ecranInitialisation.remove();
  }, 700);
}

// Lance la progression une fois la page prête.
if (ecranInitialisation) {
  const dureeInitialisation = 2600;
  const intervalleInitialisation = 26;
  const nombreEtapes = dureeInitialisation / intervalleInitialisation;
  const augmentation = 100 / nombreEtapes;

  const minuterieInitialisation = window.setInterval(() => {
    const nouvelleValeur = Math.min(
      100,
      Math.round(progressionActuelle + augmentation)
    );

    mettreAJourInitialisation(nouvelleValeur);

    if (nouvelleValeur >= 100) {
      window.clearInterval(minuterieInitialisation);
      window.setTimeout(terminerInitialisation, 350);
    }
  }, intervalleInitialisation);
}
