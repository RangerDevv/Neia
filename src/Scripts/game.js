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
//boolean logics
let Prison = true;
let Sewers = false;

playerhealth.innerText = "Health: " + player.health;
playerlevel.innerText = "Level: " + player.level;

window.onload = function PrisonDialogue() {
    textdialogue.innerText = "You have woken up in a dark proson cell. The only thing that helps you see is a dim light bulb that is on the wall.";
    choiceA.innerText = "Continue";
    choiceA.onclick = function() {
        textdialogue.innerText = "You have to get out of here. Find a way out of here.";
            choiceA.innerText = "Look left";
            choiceA.onclick = function() {
            textdialogue.innerText = "You look left, you see nothing but a very old wall with a very tiny window.";
            }
            choiceB.innerText = "Look right";
            choiceB.onclick = function() {
            textdialogue.innerText = "You look right, you see nothing but tiny scratches, looks like they kept a bear in here.";
            }
            choiceC.innerText = "Look forward";
            choiceC.onclick = function() {
            textdialogue.innerText = "You look forward, you see prison bars and a guard, he is asleep, better not to wake him up.";
            }
            choiceD.innerText = "Look behind";
            choiceD.onclick = function() {
            textdialogue.innerText = "You look behind, you see a hole big enough for you to fit in, you assume it leads to the sewers.";
            choiceA.innerText = "Enter the hole";
            choiceB.innerText = "Stay here";
            choiceC.innerText = "";
            choiceD.innerText = "";
            choiceB.onclick = function() {
                textdialogue.innerText = "You can stay in here forever, get out of here.";
            }
            choiceA.onclick = function() {
                textdialogue.innerText = "You enter the hole and you see a a a tiny light. You crawl faster and, you were right! It did lead to the sewers.";
                choiceA.innerText = "Continue";
                choiceB.innerText = "";
                choiceC.innerText = "";
                choiceD.innerText = "";
                // go to SewersDialogue();
                choiceA.onclick = function() {
                 SewersDialogue();
                }
            }
        }
    }
}

function SewersDialogue() {
    textdialogue.innerText = "You enter the sewers, you are greeted with a very bad smell. Now, all you have to do is find a way out.";
    choiceA.innerText = "Keep Going";
    choiceA.onclick = function() {
        textdialogue.innerText = "You keep going until you reach the end of the sewer. You see a small light, it looks like it leads to the outside.";
    }
}