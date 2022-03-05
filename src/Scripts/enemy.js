const fire_enemy = {
    name: "Fire Enemy",
    health: 30,
    maxHealth: 30,
    attack: 10,
}

// get the player
import {player,textdialogue,choiceA,choiceB} from './game.js';

export function fire_minion() {
    if(player.fight == true) {
        fire_minion_attack();
        player.fight = false;
    }
    else {
        function player() {
            choiceA.innerText = "Attack";
            choiceB.innerText = "Rest";
            choiceA.onclick = function() {
                textdialogue.innerText = "You attack the enemy.";
                player_attack();
            }
            choiceB.onclick = function() {
                player_rest();
            }
            player.fight = true;
        }
    }
    function fire_minion_attack() {
        player.health -= fire_enemy.attack;
        }
    function player_attack() {
        fire_enemy.health -= player.attack;
        }
    function player_rest() {
        player.health += 5;
        }
    }           