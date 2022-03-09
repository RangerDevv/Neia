export let fire_minion = {
    name: "Fire Minion",
    health: 30,
    maxHealth: 30,
    attack: 20,
}

export let shadow_figure = {
    name: "Shadow Figure",
    health: 40,
    maxHealth: 40,
    attack: 25,
}

export let shadow_goblin = {
    name: "Shadow Goblin",
    health: 200,
    maxHealth: 200,
    attack: 60,
}
// get the player
import {player,textdialogue,choiceA, playerattack, playerdefend, playerheal, Playerchoice, FightScene, Dialogue, enemyhealth, PrisonDialogue, FightDialogue, playerkick, playerplasma, PlayerStamina1 , PlayerStamina2, playerhealth2} from './game.js';


setInterval(() => {
    playerhealth2.innerText = "Health: " + player.health;
    health.innerText = "Health: " + player.health;
    PlayerStamina1.innerText = "Stamina: " + player.stamina;
    PlayerStamina2.innerText = "Stamina: " + player.stamina;
}, 100);


export function fight() {
    // once the enemy is dead reset the fight scene
    player.stamina = 100;
    player.health = 100;
    playerhealth2.innerText = "Health: " + player.health;
    FightScene.style.display = "block";
    Dialogue.style.display = "none";
    playerattack.InnerText = "Attack";
    PlayerStamina1.innerText = player.stamina;
    PlayerStamina2.innerText = "Stamina: " + player.stamina;
    enemyhealth.innerText = "Health: "+fire_minion.health;
    playerheal.InnerText = "Heal";
    playerdefend.InnerText = "Defend";
    textdialogue.InnerText = "You have encountered a " + fire_minion.name + "!";
    playerkick.onclick = function() {
        playerkicks();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + fire_minion.health;
        FightDialogue.innerText = "You kicked the " + fire_minion.name + "!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call fire_minion_attack
        if (fire_minion.health >= 0) {
            setTimeout(fire_minion_attack, 1000);
            }
    }
    playerplasma.onclick = function() {
        playerplasmas();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + fire_minion.health;
        FightDialogue.innerText = "You have used plasma! -50 energy and 60 damage!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call fire_minion_attack
        if (fire_minion.health >= 0) {
            setTimeout(fire_minion_attack, 1000);
            }
    }
    playerattack.onclick = function() {
        playerattacks();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + fire_minion.health;
        FightDialogue.innerText = "You attacked the " + fire_minion.name + " for " + player.attack + " damage!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call fire_minion_attack
        if (fire_minion.health >= 0) {
            setTimeout(fire_minion_attack, 1000);
            }
    }
    playerheal.onclick = function() {
        playerheals();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + fire_minion.health;
        FightDialogue.innerText = "You healed yourself for 15 health and 10 stamina!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call fire_minion_attack
        if (fire_minion.health >= 0) {
        setTimeout(fire_minion_attack, 1000);
        }
    }
    playerdefend.onclick = function() {
        playerdefends();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + fire_minion.health;
        FightDialogue.innerText = "You defended yourself!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call fire_minion_attack
        setTimeout(() => {
            Playerchoice.style.display = "block";
        }, 1000);
    }
    function playerattacks() {
        fire_minion.health -= player.attack;
        player.stamina -= 10;
    }
    function playerdefends() {
        player.health -= fire_minion.attack / 5;
        player.stamina -= 5;
    }
    function playerheals() {
        player.health += 15;
        player.stamina += 10;
    }
    function playerplasmas() {
        fire_minion.health -= 60;
        player.stamina -= 50;
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
export function shadowfigure() {
    shadow_figure.health = 40;
    playerhealth2.innerText = "Health: " + player.health;
    FightScene.style.display = "block";
    Dialogue.style.display = "none";
    playerattack.InnerText = "Attack";
    PlayerStamina1.innerText = player.stamina;
    PlayerStamina2.innerText = "Stamina: " + player.stamina;
    enemyhealth.innerText = "Health: "+shadow_figure.health;
    playerheal.InnerText = "Heal";
    playerdefend.InnerText = "Defend";
    textdialogue.InnerText = "You have encountered a " + shadow_figure.name + "!";
    playerkick.onclick = function() {
        playerkicks();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + shadow_figure.health;
        FightDialogue.innerText = "You kicked the " + shadow_figure.name + "!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call shadow_figure_attack
        if (shadow_figure.health >= 0) {
            setTimeout(shadow_figure_attack, 1000);
            }
    }
    playerplasma.onclick = function() {
        playerplasmas();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + shadow_figure.health;
        FightDialogue.innerText = "You have used plasma! -50 energy and 60 damage!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call shadow_figure_attack
        if (shadow_figure.health >= 0) {
            setTimeout(shadow_figure_attack, 1000);
            }
    }
    playerattack.onclick = function() {
        playerattacks();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + shadow_figure.health;
        FightDialogue.innerText = "You attacked the " + shadow_figure.name + " for " + player.attack + " damage!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call shadow_figure_attack
        if (shadow_figure.health >= 0) {
            setTimeout(shadow_figure_attack, 1000);
            }
    }
    playerheal.onclick = function() {
        playerheals();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + shadow_figure.health;
        FightDialogue.innerText = "You healed yourself for 15 health and 10 stamina!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call shadow_figure_attack
        if (shadow_figure.health >= 0) {
        setTimeout(shadow_figure_attack, 1000);
        }
    }
    playerdefend.onclick = function() {
        playerdefends();
        Playerchoice.style.display = "none";
        enemyhealth.innerText = "Health: " + shadow_figure.health;
        FightDialogue.innerText = "You defended yourself!";
        PlayerStamina1.innerText = player.stamina;
        PlayerStamina2.innerText = "Stamina: " + player.stamina;
        // wait for 1 second and then call shadow_figure_attack
        setTimeout(() => {
            Playerchoice.style.display = "block";
        }, 1000);
    }
    function playerattacks() {
        shadow_figure.health -= player.attack;
        player.stamina -= 10;
    }
    function playerdefends() {
        player.health -= shadow_figure.attack / 5;
        player.stamina -= 5;
    }
    function playerheals() {
        player.health += 15;
        player.stamina += 10;
    }
    function playerplasmas() {
        shadow_figure.health -= 60;
        player.stamina -= 50;
        playerplasma.InnerText = "";
    }
    function playerkicks() {
        shadow_figure.health -= 10;
        player.stamina -= 5;
    }
    function shadow_figure_attack() {
    player.health -= shadow_figure.attack;
    Playerchoice.style.display = "block";
    FightDialogue.innerText = "The " + shadow_figure.name + " attacked you for " + shadow_figure.attack + " damage!";
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
                // exit the function
            }
        }
    }
    setInterval(checkplayerdeath, 10);
    setInterval(checkenemydeath, 10);
    function checkenemydeath() {
        if(shadow_figure.health <= 0) {
            FightScene.style.display = "none";
            Dialogue.style.display = "block";
            shadow_figure.health = 0;
        }

    }
}
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
