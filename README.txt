PORTFOLIO — CHARLES AZEL

FICHIERS
- index.html : structure du portfolio
- style.css : couleurs, mise en page et adaptation aux écrans
- script.js : menu mobile, thème clair/sombre et navigation

POUR L'OUVRIR
1. Garde les trois fichiers dans le même dossier.
2. Ouvre index.html dans ton navigateur.
3. Pour modifier le site, ouvre les fichiers dans VS Code.

À PERSONNALISER
- Remplace charles@example.com dans index.html par ton vrai e-mail.
- Place ton CV PDF à côté de index.html et nomme-le cv.pdf.
- Mets à jour les descriptions et liens des projets selon tes vrais projets.

Les illustrations des cartes et du portrait sont faites en CSS : aucune image
supplémentaire n'est nécessaire pour que cette version fonctionne.
La police Google Fonts nécessite une connexion Internet ; une police de secours
est prévue si la connexion est indisponible.


FORMULAIRE DE CONTACT (EmailJS)
Le bouton « Me contacter ↗ » d'origine est conservé. Le formulaire supplémentaire utilise EmailJS.
1. Crée un compte sur https://www.emailjs.com/
2. Configure un service e-mail et crée un modèle de message.
3. Dans le modèle, utilise les variables : {{from_name}}, {{reply_to}}, {{subject}}, {{message}}.
4. Remplace EMAILJS_CLE_PUBLIQUE, EMAILJS_SERVICE_ID et EMAILJS_TEMPLATE_ID dans script.js.
5. Dans le modèle, règle Reply-To sur {{reply_to}}.
Sans ces identifiants, le formulaire n'enverra pas encore de message. Ne place jamais de mot de passe ou clé secrète privée dans le JavaScript.
