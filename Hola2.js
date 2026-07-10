<<<<<<< HEAD
// --- LÓGICA DE LA CUENTA REGRESIVA ---
var eventDate = new Date(2026, 10, 7, 18, 0, 0).getTime();

var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var timeLeft = eventDate - now;

    var dEl = document.getElementById("days");
    var hEl = document.getElementById("hours");
    var mEl = document.getElementById("minutes");
    var sEl = document.getElementById("seconds");

    if (timeLeft < 0) {
        clearInterval(countdownFunction);
        var container = document.querySelector(".countdown");
        if (container) container.innerHTML = "<h2 class='countdown-terminado'>¡Llegó el gran día!</h2>";
        return;
    }

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (dEl) dEl.innerText = days.toString().padStart(2, '0');
    if (hEl) hEl.innerText = hours.toString().padStart(2, '0');
    if (mEl) mEl.innerText = minutes.toString().padStart(2, '0');
    if (sEl) sEl.innerText = seconds.toString().padStart(2, '0');
}, 1000);

// --- LÓGICA INTERACTIVA DEL INTRO ---
document.addEventListener("DOMContentLoaded", function() {
    var introOverlay = document.getElementById("intro-overlay");
    var btnEntrar = document.getElementById("btn-entrar");
    var music = document.getElementById("bg-music");
    var musicBtn = document.getElementById("music-control");

    if (btnEntrar && introOverlay) {
        btnEntrar.addEventListener("click", function() {
            introOverlay.classList.add("fade-out");

            if (music) {
                music.play().then(function() {
                    console.log("Audio funcionando.");
                }).catch(function(error) {
                    console.log("Autoplay bloqueado:", error);
                    if (musicBtn) musicBtn.innerText = "🎵 Reproducir Música";
                });
            }
        });
    }

    if (musicBtn && music) {
        musicBtn.addEventListener("click", function() {
            if (music.paused) {
                music.play();
                musicBtn.innerText = "⏸ Pausar Música";
            } else {
                music.pause();
                musicBtn.innerText = "🎵 Reproducir Música";
            }
        });
    }
});
=======
// --- LÓGICA DE LA CUENTA REGRESIVA ---
var eventDate = new Date(2026, 10, 7, 18, 0, 0).getTime();

var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var timeLeft = eventDate - now;

    var dEl = document.getElementById("days");
    var hEl = document.getElementById("hours");
    var mEl = document.getElementById("minutes");
    var sEl = document.getElementById("seconds");

    if (timeLeft < 0) {
        clearInterval(countdownFunction);
        var container = document.querySelector(".countdown");
        if (container) container.innerHTML = "<h2 class='countdown-terminado'>¡Llegó el gran día!</h2>";
        return;
    }

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (dEl) dEl.innerText = days.toString().padStart(2, '0');
    if (hEl) hEl.innerText = hours.toString().padStart(2, '0');
    if (mEl) mEl.innerText = minutes.toString().padStart(2, '0');
    if (sEl) sEl.innerText = seconds.toString().padStart(2, '0');
}, 1000);

// --- LÓGICA INTERACTIVA DEL INTRO ---
document.addEventListener("DOMContentLoaded", function() {
    var introOverlay = document.getElementById("intro-overlay");
    var btnEntrar = document.getElementById("btn-entrar");
    var music = document.getElementById("bg-music");
    var musicBtn = document.getElementById("music-control");

    if (btnEntrar && introOverlay) {
        btnEntrar.addEventListener("click", function() {
            introOverlay.classList.add("fade-out");

            if (music) {
                music.play().then(function() {
                    console.log("Audio funcionando.");
                }).catch(function(error) {
                    console.log("Autoplay bloqueado:", error);
                    if (musicBtn) musicBtn.innerText = "🎵 Reproducir Música";
                });
            }
        });
    }

    if (musicBtn && music) {
        musicBtn.addEventListener("click", function() {
            if (music.paused) {
                music.play();
                musicBtn.innerText = "⏸ Pausar Música";
            } else {
                music.pause();
                musicBtn.innerText = "🎵 Reproducir Música";
            }
        });
    }
});
>>>>>>> d50725f (Guardando cambios pendientes antes de sincronizar)
