PORTFOLIO — CHARLES MONJAKIDY
================================

FICHIERS
- index.html : contenu et structure de toutes les sections.
- style.css : thème bleu nuit, cyan et violet, cartes et mise en page.
- responsive.css : adaptation aux ordinateurs, tablettes et téléphones.
- animation.css : animations visuelles et apparitions au défilement.
- script.js : menu, thème, projets, compétences et formulaire.
- images/logo-charles.png : logo Charles utilisé dans la navigation et le pied de page.

OUVRIR LE PORTFOLIO
1. Extraire le dossier ZIP.
2. Ouvrir le dossier dans Visual Studio Code.
3. Ouvrir index.html dans un navigateur.

PERSONNALISER LA PHOTO
Dans index.html, repérer le bloc .emplacement-photo dans la section Accueil.
Remplacer ce bloc par :
<img class="photo-personnelle" src="images/ma-photo.jpg" alt="Photo de Charles">
Puis ajouter dans style.css :
.photo-personnelle {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
}

PERSONNALISER LES LIENS
- Remplacer les href="#" des réseaux sociaux par les adresses des vrais profils.
- Remplacer charles@example.com dans index.html et script.js par l'adresse e-mail réelle.
- Placer le CV dans le dossier principal sous le nom cv.pdf.
- Modifier les titres, descriptions et liens des projets selon les réalisations réelles.

À SAVOIR
Le formulaire prépare le message et ouvre le logiciel de messagerie du visiteur.
Il ne transmet pas directement le message depuis le site. Pour un envoi direct, il faudra
configurer un service comme EmailJS avec ses identifiants.

Les icônes Font Awesome et les polices externes nécessitent une connexion Internet.
Le site garde ses styles et son contenu principal sans ces ressources, mais les icônes
peuvent ne pas s'afficher hors connexion.

Les pourcentages de compétences sont des valeurs de démonstration à ajuster selon
le niveau réel.
