import * as enemy from './enemy.js';

// Player stats
export var player = {
    name: "",
    health: 100,
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    level: 1,
    attack: 15,
    Money: 0,
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
export const playerkick = document.getElementById('Kick');
export const playerhealth2 = document.getElementById('health2');
export const playerplasma = document.getElementById('Plasma');
export const Playerchoice = document.getElementById('PlayerFight');
export const PlayerStamina1 = document.getElementById('Stamina1');
export const PlayerStamina2 = document.getElementById('Stamina2');
export const playermoney = document.getElementById('Money');
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
    playerhealth.innerText = "Health: " + player.health;
    playerlevel.innerText = "Level: " + player.level;
    PlayerStamina1.innerText = "Stamina: " + player.stamina;
    playermoney.innerText = "Money: " + player.Money;
    if (player.health <= 0) {
        player.health = 0;
        playerhealth.innerText = player.health;
        textdialogue.innerText = "You have died, This is most likely because you made a bad choice or you lost the fight. Restart if you want to.";
        choiceA.innerText = "Restart";
        choiceB.innerText = "";
        choiceC.innerText = "";
        choiceD.innerText = "";
        choiceA.onclick = function() {
            PrisonDialogue();
            player.health = 100;
            playerhealth.innerText = player.health;
        }
    }
}

setInterval(Playerstats, 10);

export function PrisonDialogue() {
    textdialogue.innerText = "You have woken up in a dark prison cell. The only thing that helps you see is a dim light bulb that is on the wall.";
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
                textdialogue.innerText = "You enter the hole and you see a tiny light. You crawl faster and, you were right! It did lead to the sewers.";
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
        choiceB.onclick = function() {
            outsideWorld();
        }
        choiceA.onclick = function() {
            textdialogue.innerText = "You walk the opposite direction, then you take a left and find yourself in a 2 paths leading in 2 different directions. Path 1 has a cold air coming from it. The other path has hot air coming from it. You can either go left or right.";
            choiceA.innerText = "Go left";
            choiceB.innerText = "Go right";
            choiceA.onclick = function() {
                textdialogue.innerText = "You go left, its a long walk but you finally reach the end of the sewer. You see a small light, it looks like it leads to the outside. You can slip right through the bars and get out, or you can explore the sewer by going back to the intersection and going right.";
                choiceA.innerText = "get out";
                choiceA.onclick = function() {
                    outsideWorld();
                }
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
            choiceA.innerText = "Continue";
            choiceB.innerText = "";
            choiceC.innerText = "";
            choiceD.innerText = "";
            choiceA.onclick = function() {
                outsideWorld();
            }
        }
    }
}

function outsideWorld() {
    textdialogue.innerText = "You have reached the outside world. Its pretty out here, you can see the sun shining through the trees.";
    choiceA.innerText = "Continue";
    choiceB.innerText = "";
    choiceC.innerText = "";
    choiceD.innerText = "";
    choiceA.onclick = function() {
        textdialogue.innerText = "You continue walking, you see people walking around, You smell sweet fragrance of cinnamon rolls. Too bad you dont have any money.";
        choiceA.innerText = "Continue";
        choiceA.onclick = function() {
            textdialogue.innerText = "Suddenly, you find a $10 bill on the ground. What should you do, take it or leave it?";
            choiceA.innerText = "Take it";
            choiceB.innerText = "Leave it";
            choiceB.onclick = function() {
                textdialogue.innerText = "You leave the $10 bill on the ground, you continue walking.";
                choiceA.innerText = "Continue";
                choiceB.innerText = "";
                choiceA.onclick = function() {
                    outsidebattle();
                }
            }
            choiceA.onclick = function() {
                textdialogue.innerText = "You take the money and now you have some money to buy some food.";
                player.Money = player.Money + 10;
                choiceA.innerText = "Continue";
                choiceB.innerText = "";
                choiceA.onclick = function() {
                    textdialogue.innerText = "You can either use the money to buy some food or you can save it for later.";
                    choiceA.innerText = "Buy food";
                    choiceB.innerText = "Save it";
                    choiceC.innerText = "";
                    choiceD.innerText = "";
                    choiceB.onclick = function() {
                        textdialogue.innerText = "You save the money for later.";
                        choiceA.innerText = "Continue";
                        choiceB.innerText = "";
                        choiceA.onclick = function() {
                            outsidebattle();
                        }
                    }
                    choiceA.onclick = function() {
                        textdialogue.innerText = "You have $10 to spend, you can buy a sandwich, a salad, or a cup of coffee.";
                        choiceA.innerText = "Sandwich: $4";
                        choiceB.innerText = "Salad: $8";
                        choiceC.innerText = "Coffee: $10";
                        choiceA.onclick = function() {
                            player.Money = player.Money - 4;
                            textdialogue.innerText = "You buy a sandwich, you are full and you can go outside. You have gained 10 health.";
                            player.health = player.health + 10;
                            choiceA.innerText = "Go outside";
                            choiceB.innerText = "";
                            choiceC.innerText = "";
                            choiceD.innerText = "";
                            choiceA.onclick = function() {
                                outsidebattle();
                            }
                            }
                            choiceB.onclick = function() {
                                player.Money = player.Money - 8;
                                textdialogue.innerText = "You buy a salad, you are full and you can go outside. You have gained 20 stamina.";
                                player.stamina = player.stamina + 20;
                                choiceA.innerText = "Go outside";
                                choiceB.innerText = "";
                                choiceC.innerText = "";
                                choiceD.innerText = "";
                                choiceA.onclick = function() {
                                    outsidebattle();
                                }
                                }
                                }
                            choiceC.onclick = function() {
                                    player.Money = player.Money - 10;
                                    textdialogue.innerText = "You buy a cup of coffee, you are full and you can go outside. You have gained 10 health and stamina.";
                                    player.health = player.health + 10;
                                    player.stamina = player.stamina + 10;
                                    choiceA.innerText = "Go outside";
                                    choiceB.innerText = "";
                                    choiceC.innerText = "";
                                    choiceD.innerText = "";
                                    choiceA.onclick = function() {
                                        outsidebattle();
                                    }
                                    }
                                    }
                            }
            }
        }
    }

function outsidebattle() {
    textdialogue.innerText = "Now that you are outside, you are full of energy and are ready to fight any enemy you encounter.";
    choiceA.innerText = "Continue";
    choiceB.innerText = "";
    choiceC.innerText = "";
    choiceD.innerText = "";
    choiceA.onclick = function() {
        textdialogue.innerText = "You now started to question why you were in the prison. You remember a solder shouting 'capture him!' right before you fainted.";
        choiceA.innerText = "Continue";
        choiceB.innerText = "";
        choiceC.innerText = "";
        choiceD.innerText = "";
        choiceA.onclick = function() {
            textdialogue.innerText = "Your eyes suddenly saw a black shadow in the distance. You were in a dark alleyway. You were not sure if you were being watched.";
            choiceA.innerText = "Continue";
            choiceB.innerText = "";
            choiceA.onclick = function() {
                textdialogue.innerText = "The shadow made eye contact with you. The shadow prepares to attack you.";
                choiceA.innerText = "Fight";
                choiceB.innerText = "Run";
                choiceA.onclick = function() {
                    textdialogue.innerText = "You fight the shadow. You are able to kill it.";
                    choiceA.innerText = "Continue";
                    choiceB.innerText = "";
                    enemy.shadowfigure();
                    choiceA.onclick = function() {
                        textdialogue.innerText = "You run away not bothering to look who the shadow was. You exit the alleyway and continue on your way.";
                        choiceA.innerText = "Continue";
                        choiceB.innerText = "";
                        choiceA.onclick = function() {
                            hotel();
                        }
                    }
                }
                choiceB.onclick = function() {
                    textdialogue.innerText = "You run away but you are slow and you are dead.";
                    player.health = 0;
                }
            }
        }
    }
}

function hotel() {
    textdialogue.innerText = "Its night time. You decide it would be best to stay in the hotel. You are tired and you are hungry. Sadly you dont have enough money to afford the food at the hotel.";
}