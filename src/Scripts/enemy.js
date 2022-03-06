const fire_minion = {
    name: "Fire Minion",
    health: 30,
    maxHealth: 30,
    attack: 20,
}

// get the player
import {player,textdialogue,choiceA,choiceB, playerattack, playerdefend , playerheal, Playerchoice, FightScene, Dialogue , enemyhealth, PrisonDialogue} from './game.js';

export function fight() {
    FightScene.style.display = "block";
    Dialogue.style.display = "none";
    playerattack.InnerText = "Attack";
    playerheal.InnerText = "Heal";
    playerdefend.InnerText = "Defend";
    textdialogue.InnerText = "You have encountered a " + fire_minion.name + "!";
    playerattack.onclick = function() {
        playerattacks();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = fire_minion.health;
        // wait for 1 second and then call fire_minion_attack
        setTimeout(fire_minion_attack, 1000);
    }
    playerheal.onclick = function() {
        playerheals();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = fire_minion.health;
        // wait for 1 second and then call fire_minion_attack
        setTimeout(fire_minion_attack, 1000);
    }
    playerdefend.onclick = function() {
        playerdefends();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = fire_minion.health;
        // wait for 1 second and then call fire_minion_attack
        setTimeout(fire_minion_attack, 1000);
    }
    function playerattacks() {
        fire_minion.health -= player.attack;
    }
    function playerdefends() {
        player.health -= fire_minion.attack / 2;
    }
    function playerheals() {
        player.health += 15;
    }
    function fire_minion_attack() {
    player.health -= fire_minion.attack;
    Playerchoice.style.display = "block";
    }
    function checkplayerdeath() {
        if(player.health <= 0) {
            FightScene.style.display = "none";
            Dialogue.style.display = "block";
            player.health = 0;
            textdialogue.InnerText = "You have died, This is most likely because you made a bad choice or you lost the fight. Restart if you want to.";
            choiceA.InnerText = "Restart";
            choiceA.onclick = function() {
                PrisonDialogue();
                player.health = 100;
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