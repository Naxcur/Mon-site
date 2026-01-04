const typingText = [
    "Actuellement en Licence Pro Administrateur Systèmes & Sécurité.",
    "Passionné de cybersécurité et d’infra réseau.",
    "Toujours en quête de nouveaux projets."
];

let i = 0;
let j = 0;
let currentText = "";
let letter = "";

function typeEffect() {
    if (i < typingText.length) {
        currentText = typingText[i];
        letter = currentText.slice(0, ++j);

        document.getElementById("typing").textContent = letter;

        if (letter.length === currentText.length) {
            i++;
            j = 0;
            setTimeout(typeEffect, 1500);
        } else {
            setTimeout(typeEffect, 40);
        }
    } else {
        i = 0;
        j = 0;
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();
