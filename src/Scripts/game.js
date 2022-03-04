// Player stats
var player = {
    name: "",
    health: 100,
    maxHealth: 100,
    level: 1,
}
// calling the HTML elements
const textdialogue = document.getElementById('container');
const choiceA = document.getElementById('choiceA');
const choiceB = document.getElementById('choiceB');
const choiceC = document.getElementById('choiceC');
const choiceD = document.getElementById('choiceD');
const playerhealth = document.getElementById('health');
const playerlevel = document.getElementById('level');

playerhealth.innerText = "Health: " + player.health;
playerlevel.innerText = "Level: " + player.level;