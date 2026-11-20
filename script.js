// Portfolio front-end: menu mobile, scroll reveal, animations, formulaire EmailJS
const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");
const navLinks = document.querySelectorAll(".nav a");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

// Apparition douce des blocs à l'écran avec IntersectionObserver
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(element => revealObserver.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}

// Année automatique dans le footer
document.querySelector("#year").textContent = new Date().getFullYear();

// EmailJS — remplace les 3 valeurs ci-dessous par tes identifiants EmailJS.
// Pour tester sans EmailJS, le formulaire affiche un message d'installation.
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

const form = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = form.querySelector("button[type='submit']");
  const formData = {
    from_name: form.name.value.trim(),
    reply_to: form.email.value.trim(),
    message: form.message.value.trim()
  };

  if (!formData.from_name || !formData.reply_to || !formData.message) {
    formStatus.textContent = "Veuillez remplir tous les champs.";
    return;
  }

  if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY" ||
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID") {
    formStatus.textContent = "Formulaire prêt : configure EmailJS dans script.js pour activer l'envoi.";
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Envoi...";
  formStatus.textContent = "";

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData);
    formStatus.textContent = "Message envoyé avec succès ! Merci.";
    form.reset();
  } catch (error) {
    console.error("EmailJS error:", error);
    formStatus.textContent = "Échec de l'envoi. Vérifiez la configuration et réessayez.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "➤ Envoyer";
  }
});

// Highlight de l'onglet nav selon la section visible
const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle(
          "active", link.getAttribute("href") === `#${entry.target.id}`
        ));
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => sectionObserver.observe(section));
}


// ---------------------------------------------------------
// Frise des expériences : la ligne se dessine en entrant
// dans la section et les éléments apparaissent successivement.
const frise = document.querySelector(".frise-experiences");
const experiences = document.querySelectorAll(".experience-item");
if (frise && "IntersectionObserver" in window) {
  const friseObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      frise.classList.toggle("frise-active", entry.isIntersecting);
      if (entry.isIntersecting) {
        experiences.forEach((element, index) => {
          element.style.transitionDelay = `${index * 180}ms`;
          element.classList.add("experience-visible");
        });
      } else {
        experiences.forEach(element => {
          element.style.transitionDelay = "0ms";
          element.classList.remove("experience-visible");
        });
      }
    });
  }, { threshold: 0.18 });
  friseObserver.observe(frise);
} else {
  frise?.classList.add("frise-active");
  experiences.forEach(element => element.classList.add("experience-visible"));
}

// ---------------------------------------------------------

// Bouton « Voir tous » : les quatre premiers projets restent visibles au départ.
const boutonTousProjets = document.querySelector("#voirTousProjets");
const grilleProjets = document.querySelector(".projects");
if (boutonTousProjets && grilleProjets) {
  const projetsSupplementaires = grilleProjets.querySelectorAll(".project-card:nth-child(n+5)");
  boutonTousProjets.addEventListener("click", () => {
    const toutAfficher = grilleProjets.classList.toggle("afficher-tous");
    boutonTousProjets.setAttribute("aria-expanded", String(toutAfficher));
    boutonTousProjets.textContent = toutAfficher ? "Réduire ↑" : "Voir tous →";
  });
}

// Sélecteur français / anglais : changement de langue sans recharger la page.
const traductions = {
  en: {
    '.nav a[href="#top"]': '⌂ Home',
    '.nav a[href="#statistiques"]': 'Statistics',
    '.nav a[href="#skills"]': 'Skills',
    '.nav a[href="#about"]': 'About',
    '.nav a[href="#projects"]': 'Projects',
    '.nav a[href="#experiences"]': 'Experience',
    '.nav a[href="#contact"]': 'Contact',
    '.cv-button': '⇩ Download CV',
    '.eyebrow': 'Hello! <span>👋</span>',
    '.hero-sub': 'I create modern, fast and elegant web experiences.',
    '.actions .btn-orange': 'View my projects <span>→</span>',
    '.actions .btn-outline': '✉ Contact me',
    '.statistiques-surtitre': 'A FEW NUMBERS',
    '.statistiques-entete h2': 'My world <span class="cyan">at a glance</span>',
    '.statistiques-entete p': 'A few milestones about my skills, projects and desire to grow.',
    '.statistique-carte:nth-child(1) p': 'Technologies & fields',
    '.statistique-carte:nth-child(2) p': 'Projects presented',
    '.statistique-carte:nth-child(3) p': 'Passion for technology',
    '.statistique-carte:nth-child(4) p': 'Desire to learn',
    '#skills .tech-kicker': '◆ // STACK & WORKFLOW',
    '#skills .section-heading-tech h2': 'MY <span class="cyan">SKILLS</span>',
    '#skills .section-heading-tech p': 'The technologies and tools I use to create my projects.',
    '.skills-diagrammes .panel-title h2': 'Technologies',
    '.skills-intro': 'My technical skills — indicative levels that grow with practice.',
    '.outils-panel .panel-title h2': 'Tools & environment',
    '.outils-panel .skills-intro': 'My space for creating, designing and collaborating.',
    '#about .tech-kicker': '◆ // IDENTITY',
    '#about .section-heading-tech h2': 'ABOUT <span class="cyan">ME</span>',
    '#about .section-heading-tech p': 'A glimpse into my world, vision and goals.',
    '.about-original .panel-title h2': 'Who am I?',
    '.about-original p': 'I am Charles Monjakidy, passionate about web development and design. I enjoy creating modern, intuitive and accessible interfaces. My goal is to become an excellent Front-End Designer and innovate in the digital world.',
    '.about-original .small-link': 'Learn more →',
    '.cadre-parcours h3': 'MY JOURNEY',
    '.cadre-parcours p': 'I build my IT knowledge through my studies, practice and the creation of projects.',
    '.cadre-vision h3': 'MY VISION',
    '.cadre-vision p': 'Use technology to solve real problems and create simple, enjoyable experiences.',
    '.cadre-objectifs h3': 'MY GOALS',
    '.cadre-objectifs p': 'Improve in web and mobile development, learn new tools and build ambitious projects.',
    '.project-heading h2': 'My projects',
    '#voirTousProjets': 'View all →',
    '#experiences .tech-kicker': '◆ // JOURNEY LOG',
    '#experiences .section-heading-tech h2': 'EXPERIENCE <span class="cyan">& ACHIEVEMENTS</span>',
    '#experiences .section-heading-tech p': 'Projects, learning and experiences that shape my journey.',
    '.experience-item:nth-child(1) h3': 'MicroFinance management application',
    '.experience-item:nth-child(1) .experience-lieu': 'Academic team project • Qt Creator',
    '.experience-item:nth-child(1) .experience-contenu > p:not(.experience-lieu)': 'Contribution to the design of customer and account management interfaces in a desktop application built as a team.',
    '.experience-item:nth-child(2) h3': 'Front-End Designer portfolio',
    '.experience-item:nth-child(2) .experience-lieu': 'Web design • Responsive interface',
    '.experience-item:nth-child(2) .experience-contenu > p:not(.experience-lieu)': 'Creation and continuous improvement of a personal portfolio with animations, visual components and mobile layouts.',
    '.experience-item:nth-child(3) h3': 'Web development & mobile exploration',
    '.experience-item:nth-child(3) .experience-lieu': 'Self-learning • Practical projects',
    '.experience-item:nth-child(3) .experience-contenu > p:not(.experience-lieu)': 'Exploring Django, front-end tools and mobile development fundamentals to broaden my skills.',
    '#contact .tech-kicker': '◆ // CONTACT',
    '#contact .contact-heading h2': 'GET IN <span class="cyan">TOUCH</span>',
    '#contact .contact-heading p': 'A question? An opportunity? Let’s talk about your project.',
    '.contact-informations .contact-sous-titre': 'GET IN TOUCH WITH ME',
    '.contact-formulaire .contact-sous-titre': 'SEND ME A MESSAGE',
    '.contact-cadre:nth-child(1) b': 'EMAIL',
    '.contact-cadre:nth-child(2) b': 'GITHUB',
    '.contact-cadre:nth-child(2) small': 'My projects and code',
    '.contact-cadre:nth-child(3) b': 'PORTFOLIO',
    '.contact-cadre:nth-child(3) small': 'Discover my world',
    '#name': '♟  Your name',
    '#email': '✉  Your email',
    '#message': '✎  Your message...',
    '.contact-formulaire .send-button': '➤ Send message',
    '.language-label': 'CHOOSE LANGUAGE / LANGUE',
    '.footer > span:nth-child(2)': 'Made with <b>♥</b> for the web',
    '.footer-right': 'Design <i>•</i> Code <i>•</i> Innovation'
  },
  fr: null
};
const textesFrancais = new Map();
const selecteursTraduits = Object.keys(traductions.en);
selecteursTraduits.forEach(selecteur => {
  const element = document.querySelector(selecteur);
  if (element) textesFrancais.set(selecteur, element.innerHTML);
});
function changerLangue(langue) {
  const dictionnaire = langue === "en" ? traductions.en : null;
  selecteursTraduits.forEach(selecteur => {
    const element = document.querySelector(selecteur);
    if (!element) return;
    if (dictionnaire) {
      if (selecteur === "#name" || selecteur === "#email" || selecteur === "#message") {
        element.placeholder = dictionnaire[selecteur];
      } else {
        element.innerHTML = dictionnaire[selecteur];
      }
    } else if (textesFrancais.has(selecteur)) {
      if (selecteur === "#name" || selecteur === "#email" || selecteur === "#message") {
        element.placeholder = selecteur === "#name" ? "♟  Votre nom" : selecteur === "#email" ? "✉  Votre email" : "✎  Votre message...";
      } else {
        element.innerHTML = textesFrancais.get(selecteur);
      }
    }
  });
  document.documentElement.lang = langue;
  document.querySelectorAll(".language-button").forEach(bouton => {
    const actif = bouton.dataset.lang === langue;
    bouton.classList.toggle("active", actif);
    bouton.setAttribute("aria-pressed", String(actif));
  });
  if (boutonTousProjets && grilleProjets && grilleProjets.classList.contains("afficher-tous")) {
    boutonTousProjets.textContent = langue === "en" ? "Show less ↑" : "Réduire ↑";
  }
}
document.querySelectorAll(".language-button").forEach(bouton => {
  bouton.addEventListener("click", () => changerLangue(bouton.dataset.lang));
});
