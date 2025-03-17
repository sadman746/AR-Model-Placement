document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const startARButton = document.getElementById("start-ar");
    const homeButton = document.getElementById("home-button");
    const scene = document.querySelector("a-scene");
    const animationContainer = document.getElementById("animation-container");

    startARButton.addEventListener("click", () => {
        startARButton.style.display = "none"; // Nasconde il pulsante dopo il clic
        animationContainer.style.display = "block"; // Mostra l'animazione

        // Simula un caricamento di 2 secondi prima di mostrare la scena AR
        setTimeout(() => {
            loadingScreen.style.display = "none"; // Nasconde la schermata di caricamento
            scene.style.visibility = "visible"; // Mostra la scena AR
            homeButton.style.display = "block"; // Mostra il pulsante per tornare alla home
        }, 2000);
    });

    homeButton.addEventListener("click", () => {
        window.location.href = "/"; // Modifica l'URL per tornare alla home
    });
});