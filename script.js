var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;

function jump() {
    if (character.classList !== "animate") {
        character.classList.add("animate");
    }

    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}

var checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Game Over! Score: " + Math.floor(score/100));
        score = 0;
    } else {
        score++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(score/100);
    }
}, 10);
