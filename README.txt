PORTFOLIO FRONT-END DESIGNER — CHARLES MONJAKIDY

CONTENU
- index.html : structure de la page
- style.css : design, responsive, transitions et animations
- script.js : menu mobile, scroll reveal, navigation active et formulaire EmailJS
- assets/portrait-charles.png : portrait édité pour le hero
- assets/portfolio-reference.png : aperçu de référence du portfolio

LANCEMENT
1. Extraire le ZIP.
2. Ouvrir le dossier dans VS Code.
3. Ouvrir index.html avec Live Server (extension VS Code) pour voir le site.

EMAIL
Le formulaire utilise EmailJS. Crée un compte sur https://www.emailjs.com/
Puis crée un service email et un template avec les variables:
  {{from_name}}, {{reply_to}}, {{message}}
Remplace YOUR_PUBLIC_KEY, YOUR_SERVICE_ID et YOUR_TEMPLATE_ID dans script.js.
Le formulaire n'envoie aucun email avant que ces identifiants soient configurés.

PERSONNALISATION
- Remplace les liens des réseaux sociaux dans index.html par tes profils.
- Mets ton CV PDF dans assets/ et nomme-le cv-charles.pdf.
- Change les projets et pourcentages de compétences selon tes vraies expériences.
- Les pourcentages de compétences sont des exemples visuels, modifie-les selon ton niveau.

NOTE
Les mini-vignettes de projets sont des éléments décoratifs CSS; tu peux les remplacer par tes propres captures d'écran.


AJOUT : ECRAN D'INITIALISATION
- Deux nouveaux fichiers : initialisation.css et initialisation.js.
- index.html contient uniquement les liens vers ces deux fichiers et le bloc HTML de l'ecran.
- style.css et script.js originaux sont conserves sans modification.
- L'ecran affiche une progression de 0 a 100 %, puis laisse apparaitre le portfolio.
- Le design reprend le noir, l'orange et le cyan du portfolio et s'adapte aux petits ecrans.


AJOUTS DE LA VERSION 2
- Nouvelle section « Mon univers en bref » entre Accueil et À propos.
- Statistiques : 6 technologies/domaines, 4 projets présentés, passion et apprentissage continu.
- Compétences présentées avec six diagrammes circulaires : HTML, CSS, JavaScript, React, Tailwind et UI/UX.
- Les nouveaux blocs sont responsive sur ordinateur, tablette et téléphone.
- Les autres sections, le contenu existant, les images et l'écran d'initialisation sont conservés.
- Les pourcentages des compétences sont des indicateurs visuels de présentation : ajuste-les selon ton niveau réel.


VERSION AMELIOREE — SECTIONS ET ANIMATIONS
- La section Compétences est indépendante et réunit les diagrammes circulaires existants et les cartes Outils.
- Outils affichés : VS Code, Figma, Facteur, Git, GitHub, OpenAI, Photoshop et Docker.
- La section À propos est indépendante. Le texte original est conservé.
- Un boîtier de code 3D s'ouvre quand il entre dans la zone visible et se referme quand on quitte cette zone.
- Trois cadres Parcours, Vision et Objectifs sont placés sous le boîtier.
- La section Projets possède un bouton Voir tous / Réduire fonctionnel.
- La section Expériences & Réalisations présente une frise animée au défilement.
- La section Contact conserve le formulaire et les liens existants et ajoute trois cadres de contact.
- Les polices Orbitron (titres) et Rajdhani (textes) sont chargées depuis Google Fonts. Une connexion Internet est nécessaire pour les télécharger; des polices de remplacement sont prévues.
- Les animations de défilement respectent le réglage système de réduction des animations autant que possible.
- Les contenus de la frise reprennent les projets et apprentissages présents dans le contexte du portfolio; aucune date d'emploi ni entreprise n'a été inventée.

LOGOS DES OUTILS
Les logos des outils sont enregistrés localement dans assets/outils/ au format SVG. Ils ne nécessitent pas de connexion Internet pour s’afficher.


PERSONNALISER LES CARTES DE PROJETS
1. Ouvre index.html dans VS Code et cherche « SECTION PROJETS ».
2. Pour chaque carte, remplace la valeur href="LIEN_..._A_REMPLACER" par le lien réel de ton projet.
3. Les deux captures déjà intégrées sont :
   - assets/projets/portfolio.png
   - assets/projets/calculatrice.png
4. Pour ajouter une capture à la To-Do List, place ton image dans assets/projets/
   (par exemple to-do-list.png), puis décommente et adapte la balise img déjà indiquée
   dans la troisième carte.
5. Pour le site touristique, fais la même chose avec une image comme toliara.png
   dans la quatrième carte.
6. Pour changer une capture existante, garde le nom du fichier ou modifie le chemin
   dans l'attribut src de la balise img.
7. Chaque carte entière est cliquable : le visiteur arrive directement sur le lien
   indiqué dans son attribut href.

BOUTON CV SUR MOBILE
Le lien « Télécharger CV » existe dans le menu mobile. Place ton fichier PDF dans
assets/ et nomme-le cv-charles.pdf, ou modifie le chemin href si ton fichier porte
un autre nom.

CSS
Le sélecteur :root a été remplacé par body. Les propriétés personnalisées restent
accessibles à toutes les sections du site. Le CSS a été aéré pour présenter les
sélecteurs et les propriétés ligne par ligne.
