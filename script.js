window.onload = () => {
    generateLanterns();
};

/* 🎬 ENTRAR AL SITIO */
function enterSite() {
    const videoContainer = document.getElementById("intro-video-container");
    const video = document.getElementById("introVideo");
    const sound = document.getElementById("introSound");

    // mostrar video
    videoContainer.style.display = "flex";

    // 🔥 FULLSCREEN (AQUÍ VA)
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
    }

    // reproducir video
    video.play();

    // cuando termine
    video.onended = () => {

        // salir de fullscreen
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }

        videoContainer.style.display = "none";
        document.querySelector(".letter-scene").style.display = "none";

        document.body.style.overflowY = "auto";

        document.getElementById("mainContent").scrollIntoView({
            behavior: "smooth"
        });

        // audio
        sound.currentTime = 0;
        sound.play().catch(() => {});
    };
}

/* 🏮 LINTERNAS */
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

/* 📍 MAPAS */
function openChurch() {
    window.open("https://maps.app.goo.gl/RpBYg8jtHNT9d7LJ6", "_blank");
}

function openHall() {
    window.open("https://maps.app.goo.gl/eHUzNpaRmyMPycUo6", "_blank");
}

/* ⏳ COUNTDOWN */
const eventDate = new Date("2026-06-20T19:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);

/* 💌 WHATSAPP */
function confirmarAsistencia() {
    const numero = "529988443468";
    const mensaje = "Hola Karina,Confirmo asistencia a tus XV";

    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, "_blank");
}

/* ✨ ANIMACIÓN AL HACER SCROLL */
const sections = document.querySelectorAll('.section-anim');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
