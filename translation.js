document.addEventListener('DOMContentLoaded', function() {

/* ALL ELEMENTS TO TRANSLATE */
const htmlLang = document.getElementsByTagName("html")[0];
const navHome = document.getElementById("nav-home");
const navProjects = document.getElementById("nav-projects");
const navFormation = document.getElementById("nav-formation");

const presentationParagraph = document.getElementById("presentation-paragraph");

const titleProjectsSection = document.getElementById("title-projects-section");
const titleSkills = document.querySelectorAll(".skills-title");
const integrationSkill = document.getElementById("integration-skill");
const animationsSkill = document.getElementById("animations-skill");
const gitSkill = document.getElementById("git-skill");
const linkProject = document.querySelectorAll(".link-project-translation");
const responsiveSkill = document.getElementById("responsive-skill");
const integrationHtmlSkill = document.getElementById("integration-html-skill");

const titleFormationSection = document.getElementById("title-formation-section");
const selfTraining = document.getElementById("self-training");
const ocTraining = document.getElementById("oc-training");

const languageBtn = document.getElementById("language-btn");

let currentLanguage = languageBtn.textContent === 'EN' ? 'fr' : 'en';

languageBtn.onclick = function() {
    toggleLanguage();
}

function toggleLanguage() {
    if (currentLanguage === 'en') {
        translateToFR();
        currentLanguage = 'fr';
    } else {
        translateToEN();
        currentLanguage = 'en';
    }
}

/* TRANSLATION FUNCTIONS */
function translateToEN() {
    htmlLang.setAttribute('lang', 'en');
    languageBtn.textContent = "FR";

    navHome.textContent = "Home";
    navProjects.textContent = "Projects";
    navFormation.textContent = "Training";

    presentationParagraph.textContent = "To put it briefly, front-end developer based in Burgundy (France)";

    titleProjectsSection.textContent = "Projects";
    titleSkills.forEach(skillTitle => {
        skillTitle.textContent = "Trained skills:";
    });

    integrationSkill.textContent = "Integrate a mock-up with a mobile-first approach";
    animationsSkill.textContent = "Implement CSS animations";
    gitSkill.textContent = "Version a project using Git and GitHub";
    linkProject.forEach(link => {
            link.textContent = "See the project online";
    });
    responsiveSkill.textContent = "Implement a responsive interface with HTML and CSS";
    integrationHtmlSkill.textContent = "Integrate a mock-up with HTML and CSS";

    titleFormationSection.textContent = "Training";
    selfTraining.textContent = "Self-taught: 2022 - In progress...";
    ocTraining.textContent = "OpenClassrooms: September 2023 - June 2024";
}

function translateToFR() {
    htmlLang.setAttribute('lang', 'fr');
    languageBtn.textContent = "EN";

    navHome.textContent = "Accueil";
    navProjects.textContent = "Projets";
    navFormation.textContent = "Formation";

    presentationParagraph.textContent = "Pour la faire courte, développeuse front-end basée au fin fond de la Bourgogne.";

    titleProjectsSection.textContent = "Projets";
    titleSkills.forEach(skillTitle => {
        skillTitle.textContent = "Compétences travaillées:";
    });

    integrationSkill.textContent = "Intégrer une maquette en mobile-first";
    animationsSkill.textContent = "Mettre en œuvre des animations CSS";
    gitSkill.textContent = "Versionner son projet avec Git et Github";
    linkProject.forEach(link => {
            link.textContent = "Voir le projet en ligne";
    });
    responsiveSkill.textContent = "Implémenter une interface responsive avec HTML et CSS";
    integrationHtmlSkill.textContent = "Intégrer du contenu conformément à une maquette avec HTML et CSS";

    titleFormationSection.textContent = "Formation";
    selfTraining.textContent = "Autodidacte: 2022 - En cours...";
    ocTraining.textContent = "OpenClassrooms: Septembre 2023 - Juin 2024";
}
});