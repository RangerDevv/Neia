const fire_enemy = {
    name: "Fire Enemy",
    health: 30,
    maxHealth: 30,
    attack: 10,
}

export function fire_minion() {
    if(player.Boolean == true) {
        player.health = player.health - fire_enemy.attack;
        textdialogue.innerText = "The minion attacks you.";
        player.Boolean = false;
    }
    else {
    textdialogue.innerText = "You fight the fire minion, what is your move?";
    choiceA.innerText = "Rest";
    choiceB.innerText = "Attack";
    choiceA.onclick = function() {
        textdialogue.innerText = "You rest and regain some health.";
        player.health = player.health + 10;
    }
    choiceB.onclick = function() {
        textdialogue.innerText = "You attack the minion.";
        fire_enemy.health = fire_enemy.health - player.attack;
    }
    }
    if(fire_enemy.health <= 0) {
        textdialogue.innerText = "You killed the fire minion. you advance to level 2.";
        player.level = player.level + 1;
        choiceA.innerText = "Continue";
        choiceA.onclick = function() {
            textdialogue.innerText = "You continue on your way.";
        }
    }
    if(player.health <= 0) {
        textdialogue.innerText = "You died.";
    }
}
                