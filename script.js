window.onload = () => {
    generateLanterns();
};

/* 🎵 al dar click */
function enterSite() {
    const videoContainer = document.getElementById("intro-video-container");
    const video = document.getElementById("introVideo");
    const sound = document.getElementById("introSound");

    // mostrar video
    videoContainer.style.display = "flex";

    // reproducir video
    video.play();

    // cuando termine el video
    video.onended = () => {

        videoContainer.style.display = "none";

        document.querySelector(".letter-scene").style.display = "none";
        document.getElementById("mainContent").style.display = "flex";

        // reproducir audio
        sound.currentTime = 0;
        sound.play().catch(() => {});
    };
}

/* 🏮 linternas */
function generateLanterns() {
    const container = document.getElementById("lantern-container");

    for (let i = 0; i < 25; i++) {
        let l = document.createElement("div");
        l.className = "lantern";

        let size = Math.random() * 10 + 10;
        l.style.width = size + "px";
        l.style.height = size * 1.5 + "px";

        l.style.left = Math.random() * 100 + "vw";
        l.style.animationDuration = (8 + Math.random() * 8) + "s";
        l.style.opacity = Math.random();

        container.appendChild(l);
    }
}

function goToInfo() {
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("Info").style.display = "block";
}

const eventDate = new Date("2026-06-20T19:00:00").getTime(); 
// 👆 cambia esta fecha a tu evento real

setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}, 1000);

function confirmarAsistencia() {
    const numero = "529988443468"; 
    const mensaje = "Hola Karina,Confirmo asistencia a tus XV";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}

function openChurch() {
    window.open("https://maps.app.goo.gl/RpBYg8jtHNT9d7LJ6", "_blank");
}

function openHall() {
    window.open("https://maps.app.goo.gl/eHUzNpaRmyMPycUo6", "_blank");
}

const pascal = document.getElementById("pascal");

pascal.addEventListener("click", () => {
    pascal.style.transform = "scale(1.4)";
    pascal.style.filter = "drop-shadow(0 0 10px lime)";

    setTimeout(() => {
        pascal.style.transform = "";
        pascal.style.filter = "";
    }, 500);
});

const sections = document.querySelectorAll('.section-anim');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});