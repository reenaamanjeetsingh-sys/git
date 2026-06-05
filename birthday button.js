function showMessage() {
    const msg = document.getElementById("msg");
    if (msg) {
        msg.style.display = "block";
    }
}

function onemoresurprise() {
    const drawingSection = document.getElementById("drawingSection");
    if (drawingSection) {
        drawingSection.style.display = "block";
    }
}

function showFinalMessage() {
    const finalMsg = document.getElementById("finalMsg");
    if (finalMsg) {
        finalMsg.style.display = "block";
    }
}

function createSparkles() {
    const starCount = 80;
    const colors = ["#ffffff", "#ffe4ff", "#a1e7ff", "#ffd9a5"];
    const starfield = document.createElement("div");
    starfield.id = "starfield";
    document.body.prepend(starfield);

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        const size = Math.random() * 2 + 1;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${Math.random() * 2 + 1.5}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]} 0%, rgba(255,255,255,0) 70%)`;
        starfield.appendChild(star);
    }
}

window.addEventListener("DOMContentLoaded", createSparkles);