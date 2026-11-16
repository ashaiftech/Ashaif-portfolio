// TYPING ANIMATION

const typingElement = document.getElementById("typing");

const words = [
    "AI & DS Student",
    "Python Developer",
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

    let speed = deleting ? 50 : 100;

    if (!deleting && letterIndex === currentWord.length) {
        deleting = true;
        speed = 1500;
    }

    else if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });

});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// PHOTO 3D TILT EFFECT

const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach(card => {

    card.addEventListener("mousemove", function (event) {

        if (window.innerWidth <= 700) return;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 18;
        const rotateY = (x - centerX) / 18;

        card.style.animationPlayState = "paused";

        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "";

        card.style.animationPlayState = "running";

    });

});


// SCROLL PROGRESS BAR

window.addEventListener("scroll", function () {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    document.getElementById("scrollProgress").style.width =
        progress + "%";

});


// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();