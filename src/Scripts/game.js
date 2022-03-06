import * as enemy from './enemy.js';

// Player stats
export var player = {
    name: "",
    health: 100,
    maxHealth: 100,
    level: 1,
    attack: 15,
}
// calling the HTML elements
export const textdialogue = document.getElementById('container');
export const choiceA = document.getElementById('choiceA');
export const choiceB = document.getElementById('choiceB');
export const choiceC = document.getElementById('choiceC');
export const choiceD = document.getElementById('choiceD');
export const playerattack = document.getElementById('Attack');
export const playerheal = document.getElementById('Heal');
export const playerdefend = document.getElementById('Defend');
export const Playerchoice = document.getElementById('PlayerFight');
export const FightScene = document.getElementById('fightscene');
export const enemyhealth = document.getElementById('enemyhealth');
export const FightDialogue = document.getElementById('fightdialogue');
export const Dialogue = document.getElementById('Dialogue');
export let playerhealth = document.getElementById('health');
export let playerlevel = document.getElementById('level');

window.onload = function start() {
    textdialogue.innerText = "Are you ready to begin your journey?";
    choiceA.innerText = "Yes";
    choiceB.innerText = "No";
    choiceA.onclick = function() {
        choiceA.innerText = "";
        choiceB.innerText = "";
        PrisonDialogue();
    }
    choiceB.onclick = function() {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}

function Playerstats() {
    //update the player stats
    playerhealth.innerText = player.health;
    playerlevel.innerText = player.level;
    if (player.health <= 0) {
        player.health = 0;
        playerhealth.innerText = player.health;
        textdialogue.innerText = "You have died, This is most likely because you made a bad choice or you lost the fight. Restart if you want to.";
        choiceA.innerText = "Restart";
        choiceA.onclick = function() {
            PrisonDialogue();
            player.health = 100;
            playerhealth.innerText = player.health;
        }
    }
}

setInterval(Playerstats, 10);

export function PrisonDialogue() {
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
                    //initiate the fight
                    enemy.fight();
                    textdialogue.innerText = "You have defeated the fire minion, you decide its better to go outside. But, you have also leveled up!";
                    choiceA.innerText = "Go outside";
                    choiceB.innerText = "";
                    choiceC.innerText = "";
                    choiceD.innerText = "";
                    choiceA.onclick = function() {
                        outsideWorld();
                    }
                }
                choiceB.onclick = function() {
                    textdialogue.innerText = "You run away, but you are too slow. The fire minion catches up to you and you die.";
                    player.health = 0;
                    choiceA.innerText = "Restart";
                    choiceB.innerText = "";
                    choiceC.innerText = "";
                    choiceD.innerText = "";
                    choiceA.onclick = function() {
                        PrisonDialogue();
                    }
                }
            }
        }
        choiceB.onclick = function() {
            textdialogue.innerText = "You slip through the bars, you see the sunlight for the first time in a long time. ";
        }
    }
}

function outsideWorld() {
    textdialogue.innerText = "You have reached the outside world. Its pretty out here, you can see the sun shining through the trees. You can either go left or right.";
}