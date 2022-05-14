var counter = 0;
var alive = true;
var CharacterMin;
var CharcterMax;
var CharcterLeft = 0;

$(document).keydown(function (e) {
    CharacterMin = $("#character").position().left;

    if (e.keyCode == 32 && alive) {
        $("#character").addClass("animate");  // space pressed and jump character
        setTimeout(function () {
            $("#character").removeClass("animate");
        }, 400);
    } else if (e.keyCode == 39 && alive) {
        CharcterLeft += 10;            //right arrow pressed
        $("#character").css({
            left: CharcterLeft + "px",
        });
    } else if (e.keyCode == 37 && alive && CharacterMin >= 0) {        // don't go outside the game border
        CharcterLeft -= 10;
        $("#character").css({         //
            left: CharcterLeft + "px"
        });
    }
});

const character = document.getElementById("character");
const blocks = document.getElementById("blocks");
const score = document.getElementById("scoreSpan");


setInterval(() => {
    const characterTop = parseInt(window.getComputedStyle(character)
        .getPropertyValue('top'));
    const blockLeft = parseInt(window.getComputedStyle(blocks)
        .getPropertyValue('left'));
    score.innerText++;

    if (blockLeft < 0) {
        blocks.style.display = 'none';
    } else {
        blocks.style.display = ''
    }

    if (blockLeft < 50 && blockLeft > 0 && characterTop > 150) {
        alert("You got a score of: " + score.innerText +
            "\n\nPlay again?");
        location.reload();
    }
}, 50);
