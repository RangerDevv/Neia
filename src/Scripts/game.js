// Imports:
import { Player } from "./player.js";

// Variables:
let Text = document.getElementById("container");
let Health = document.getElementById("health");
let Level = document.getElementById("level");
let Exp = document.getElementById("Exp");
let Money = document.getElementById("Money");

// Update the player stats:
setInterval(function () {
    Health.innerText = "Health: " + Player.health;
    Level.innerText ="Level: "+ Player.level;
    Exp.innerText = "XP: " + Player.exp;
    Money.innerText = "Money: "+Player.money;
} ,500);

// Functions: Start of the game:
