const typingElement = document.getElementById("typing");

const words = [
    "AI & DS Student",
    "Python Learner",
    "Tech Enthusiast",
    "Future Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, letterIndex);

    let speed = deleting ? 60 : 100;

    if (!deleting && letterIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    }

    else if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();