const fire_minion = {
    name: "Fire Minion",
    health: 30,
    maxHealth: 30,
    attack: 20,
}

// get the player
import {player,textdialogue,choiceA,choiceB, playerattack, playerdefend , playerheal, Playerchoice, FightScene, Dialogue , enemyhealth, PrisonDialogue, FightDialogue, playerkick, playerplasma, PlayerStamina1 , PlayerStamina2} from './game.js';

export function fight() {
    FightScene.style.display = "block";
    Dialogue.style.display = "none";
    playerattack.InnerText = "Attack";
    PlayerStamina1.innerText = player.stamina;
    PlayerStamina2.innerText = player.stamina;
    enemyhealth.innerText = fire_minion.health;
    playerheal.InnerText = "Heal";
    playerdefend.InnerText = "Defend";
    textdialogue.InnerText = "You have encountered a " + fire_minion.name + "!";
    playerkick.onclick = function() {
        playerkicks();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = fire_minion.health;
        FightDialogue.innerText = "You kicked the " + fire_minion.name + "!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = player.stamina;
        // wait for 1 second and then call fire_minion_attack
        if (fire_minion.health >= 0) {
            setTimeout(fire_minion_attack, 1000);
            }
    }
    playerplasma.onclick = function() {
        playerplasmas();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = fire_minion.health;
        FightDialogue.innerText = "You have used plasma! -50 energy and 60 damage!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = player.stamina;
        // wait for 1 second and then call fire_minion_attack
        if (fire_minion.health >= 0) {
            setTimeout(fire_minion_attack, 1000);
            }
    }
    playerattack.onclick = function() {
        playerattacks();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = fire_minion.health;
        FightDialogue.innerText = "You attacked the " + fire_minion.name + " for " + player.attack + " damage!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = player.stamina;
        // wait for 1 second and then call fire_minion_attack
        if (fire_minion.health >= 0) {
            setTimeout(fire_minion_attack, 1000);
            }
    }
    playerheal.onclick = function() {
        playerheals();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = fire_minion.health;
        FightDialogue.innerText = "You healed yourself for 15 health and 10 stamina!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = player.stamina;
        // wait for 1 second and then call fire_minion_attack
        if (fire_minion.health >= 0) {
        setTimeout(fire_minion_attack, 1000);
        }
    }
    playerdefend.onclick = function() {
        playerdefends();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = fire_minion.health;
        FightDialogue.innerText = "You defended yourself!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = player.stamina;
        // wait for 1 second and then call fire_minion_attack
        if (fire_minion.health >= 0) {
            setTimeout(fire_minion_attack, 1000);
            }
    }
    function playerattacks() {
        fire_minion.health -= player.attack;
        player.stamina -= 10;
    }
    function playerdefends() {
        player.health -= fire_minion.attack / 2;
        player.stamina -= 5;
    }
    function playerheals() {
        player.health += 15;
        player.stamina += 10;
    }
    function playerplasmas() {
        fire_minion.health -= 60;
        player.stamina -= 50;
        playerplasma.InnerText = "";
    }
    function playerkicks() {
        fire_minion.health -= 10;
        player.stamina -= 5;
    }
    function fire_minion_attack() {
    player.health -= fire_minion.attack;
    Playerchoice.style.display = "block";
    FightDialogue.innerText = "The " + fire_minion.name + " attacked you for " + fire_minion.attack + " damage!";
    }
    function checkplayerdeath() {
        if(player.health <= 0 || player.stamina <= 0) {
            FightScene.style.display = "none";
            Dialogue.style.display = "block";
            player.health = 0;
            textdialogue.InnerText = "You have died, This is most likely because you made a bad choice or you lost the fight or you ran out of stamina. Restart if you want to.";
            choiceA.InnerText = "Restart";
            choiceA.onclick = function() {
                PrisonDialogue();
                player.health = 100;
                player.stamina = 100;
            }
        }
    }
    setInterval(checkplayerdeath, 10);
    setInterval(checkenemydeath, 10);
    function checkenemydeath() {
        if(fire_minion.health <= 0) {
            FightScene.style.display = "none";
            Dialogue.style.display = "block";
            fire_minion.health = 0;
        }
    }
}