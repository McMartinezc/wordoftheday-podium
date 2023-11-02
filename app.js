const button = document.querySelector("#button");

button.addEventListener("click", async () => {
    const players = await getPlayers();
    getPodium(players);
});

// Función pintar podium
function getPodium(players) {
    for (let i = 0; i < players.length && i < 3; i++) {
        const podiumElement = document.querySelectorAll(".stand")[i];
        podiumElement.querySelector(".player-name").textContent = players[i].nombre;
        podiumElement.querySelector(".score").textContent = players[i].puntos + " palabras adivinadas";
    }
}

// Función fetch
async function getPlayers() {
    const urlApi = "https://score-word-of-the-dat.onrender.com/scores";

    const response = await fetch(urlApi);
    const data = await response.json();
    console.log(data);
    return data;
}

