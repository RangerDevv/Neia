export var shadow_goblin = {
    name: "Shadow Goblin",
    health: 200,
    maxHealth: 200,
    attack: 60,
}

import {player,textdialogue,choiceA, playerattack, playerdefend, playerheal, Playerchoice, FightScene, Dialogue, enemyhealth, PrisonDialogue, FightDialogue, playerkick, playerplasma, PlayerStamina1 , PlayerStamina2, playerhealth2} from '../game.js';

export function shadowgoblin() {
    shadow_goblin.health = 200;
    playerhealth2.innerText = "Health: " + player.health;
    FightScene.style.display = "block";
    Dialogue.style.display = "none";
    playerattack.InnerText = "Attack";
    PlayerStamina1.innerText = player.stamina;
    PlayerStamina2.innerText = "Stamina: " + player.stamina;
    enemyhealth.innerText = "Health: "+shadow_goblin.health;
    playerheal.InnerText = "Heal";
    playerdefend.InnerText = "Defend";
    textdialogue.InnerText = "You have encountered a " + shadow_goblin.name + "!";
    playerkick.onclick = function() {
        playerkicks();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + shadow_goblin.health;
        FightDialogue.innerText = "You kicked the " + shadow_goblin.name + "!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call shadow_goblin_attack
        if (shadow_goblin.health >= 0) {
            setTimeout(shadow_goblin_attack, 1000);
            }
    }
    playerplasma.onclick = function() {
        playerplasmas();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + shadow_goblin.health;
        FightDialogue.innerText = "You have used plasma! -50 energy and 60 damage!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call shadow_goblin_attack
        if (shadow_goblin.health >= 0) {
            setTimeout(shadow_goblin_attack, 1000);
            }
    }
    playerattack.onclick = function() {
        playerattacks();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + shadow_goblin.health;
        FightDialogue.innerText = "You attacked the " + shadow_goblin.name + " for " + player.attack + " damage!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call shadow_goblin_attack
        if (shadow_goblin.health >= 0) {
            setTimeout(shadow_goblin_attack, 1000);
            }
    }
    playerheal.onclick = function() {
        playerheals();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + shadow_goblin.health;
        FightDialogue.innerText = "You healed yourself for 15 health and 10 stamina!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call shadow_goblin_attack
        if (shadow_goblin.health >= 0) {
        setTimeout(shadow_goblin_attack, 1000);
        }
    }
    playerdefend.onclick = function() {
        playerdefends();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + shadow_goblin.health;
        FightDialogue.innerText = "You defended yourself!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call shadow_goblin_attack
        setTimeout(() => {
            Playerchoice.style.display = "block";
        }, 1000);
    }
    function playerattacks() {
        shadow_goblin.health -= player.attack;
        player.stamina -= 10;
    }
    function playerdefends() {
        player.health -= shadow_goblin.attack / 5;
        player.stamina -= 5;
    }
    function playerheals() {
        player.health += 15;
        player.stamina += 10;
    }
    function playerplasmas() {
        shadow_goblin.health -= 60;
        player.stamina -= 50;
        playerplasma.InnerText = "";
    }
    function playerkicks() {
        shadow_goblin.health -= 10;
        player.stamina -= 5;
    }
    function shadow_goblin_attack() {
    player.health -= shadow_goblin.attack;
    Playerchoice.style.display = "block";
    FightDialogue.innerText = "The " + shadow_goblin.name + " attacked you for " + shadow_goblin.attack + " damage!";
    }
    function checkplayerdeath() {
        if(player.health <= 0 || player.stamina <= 0) {
            FightScene.style.display = "none";
            Dialogue.style.display = "block";
            player.health = 0;
            textdialogue.InnerText = "You have died, This is most likely because you made a bad choice or you lost the fight or you ran out of stamina. Restart if you want to.";
            choiceA.InnerText = "Continue";
        }
    }
    setInterval(checkplayerdeath, 10);
    setInterval(checkenemydeath, 10);
    function checkenemydeath() {
        if(shadow_goblin.health <= 0) {
            FightScene.style.display = "none";
            Dialogue.style.display = "block";
            shadow_goblin.health = 0;
        }
    }
}