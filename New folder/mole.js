let currMoleTile;



window.onload = function() {
    setGame();

}

function setGame() {
    for(let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);


    }
    setInterval(setMole, 2000):
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    let mole = document.createElement("img");
    mole.src = "./clown.png";

    let num = getRandomTile();
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);

}