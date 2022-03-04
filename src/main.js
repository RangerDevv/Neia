const textdialogue = document.getElementById('container');
const choiceA = document.getElementById('choiceA');
const choiceB = document.getElementById('choiceB');
const choiceC = document.getElementById('choiceC');
const choiceD = document.getElementById('choiceD');

window.onload = function starttext() {
    textdialogue.innerHTML = "there once lived a warrior named Neia. She was a very strong and brave warrior.";
    // wait for the user to click on the screen
    choiceA.innerHTML = "Continue";
    choiceA.onclick = function() {
    textdialogue.innerHTML = "During the time of the battle, no one was able to defeat Neia. She was the only one who brought victory to the kingdom of Tresa.";
    choiceA.innerHTML = "Continue";
    choiceA.onclick = function() {
    textdialogue.innerHTML = "Although she was very strong, she was very soft at heart.";
    choiceA.innerHTML = "Continue";
    choiceA.onclick = function() {
    textdialogue.innerHTML = "She had a younger brother, and whenever she had spare time left, she would go and play with him and would always be happy to see him. She loved him dearly.";
    choiceA.innerHTML = "Continue";
    choiceA.onclick = function() {
    textdialogue.innerHTML = "However, one day, during the time of a battle, she was ruthlessly captured by the wicked magicians of Bantro by the order of their king.";
    choiceA.innerHTML = "Continue";
    choiceA.onclick = function() {
        textdialogue.innerHTML = "Ever since her capture, the kingdom of Tresa has been in a state of chaos.";
        choiceA.innerHTML = "Continue";
        choiceA.onclick = function() {
            textdialogue.innerHTML = "The king of Tresa has become mad and has blamed Neia for all the chaos in the kingdom and has held everyone she knew has prisoners.";
            choiceA.innerHTML = "Continue";
                choiceA.onclick = function() {
                    textdialogue.innerHTML = "Her friends, her cousins, her neighbors, but most importantly YOU, her brother.";
                    choiceA.innerHTML = "Continue";
                    choiceA.onclick = function() {
                        textdialogue.innerHTML = "Thus, it is your duty to save your sister from the hands of the king of Bantro and save the kingdom of Tresa.";
                        choiceA.innerHTML = "Continue";
                        choiceA.onclick = function() {
                            textdialogue.innerHTML = " Are you ready?";
                            choiceA.innerHTML = "Yes";
                            choiceB.innerHTML = "No";
                            choiceB.onclick = function() {
                                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                            }
                            choiceA.onclick = function() {
                                textdialogue.innerHTML = "You are now ready to begin your journey.";
                                choiceB.innerHTML = "";
                                choiceA.innerHTML = "Lets go!";
                                choiceA.onclick = function() {
                                    window.location.href = "game.html";
                                }
                            }

    }
    }
    }
    }
    }
    }
    }
    }
    }
}