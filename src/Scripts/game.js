import * as enemy from './enemy.js';

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
        textdialogue.innerText = "You keep going until you reach the end of the sewer. You see a small light, it looks like it leads to the outside. You can slip right through the bars and get out, or you can explore the sewer.";
        choiceA.innerText = "Explore the sewer";
        choiceB.innerHTML = "Slip through the bars";
        choiceA.onclick = function() {
            textdialogue.innerText = "You walk the opposite direction, then you take a left and find yourself in a 2 paths leading in 2 different directions. Path 1 has a cold air coming from it. The other path has hot air coming from it. You can either go left or right.";
            choiceA.innerText = "Go left";
            choiceB.innerText = "Go right";
            choiceA.onclick = function() {
                textdialogue.innerText = "You go left, its a long walk but you finally reach the end of the sewer. You see a small light, it looks like it leads to the outside. You can slip right through the bars and get out, or you can explore the sewer by going back to the intersection and going right.";
                choiceA.innerText = "get out";
            }
            choiceB.onclick = function() {
                textdialogue.innerText = "You go right, a very short walk after you reach a dead end. Suddenly you hear a loud noise. You turn around and see a fire minion. That explains the hot air. You have no other choice but to fight it.";
                choiceA.innerText = "Fight";
                choiceB.innerText = "Run";
                choiceA.onclick = function() {
                }
                choiceB.onclick = function() {
                    textdialogue.innerText = "You run away, but you are too fast. The fire minion catches up to you and you die.";
                }
            }
        }
        choiceB.onclick = function() {
        }
    }
}