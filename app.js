const button = document.querySelector("#button");


button.addEventListener("click", ()=>{
const players = getPlayers();
getPodium(players);
})

//Función pintar podium
function getPodium(players){
const stands = document.querySelectorAll(".stand");

for(let i=0; i < players.length && i < stands.length; i ++){
    const stand = stands[i];
    const namePlayer= stand.querySelector(".player-name");
    const score = stand.querySelector(".score");

    namePlayer.textContent = players[i].nombre;
    score.textContent = players[i].puntos;
}

}


//Función fetch
async function getPlayers(){
    const urlApi = "https://score-word-of-the-dat.onrender.com/scores";

    const response = await fetch(urlApi);
    const data = await response.json();

    return data;
}

