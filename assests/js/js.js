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

function deadCheck() {
    var bottomCharacter=parseInt($("#character").css("bottom"));
    var blockLeft=parseInt($("#blocks").css("left"));

    CharacterMin=$("#character").position().left;
    CharcterMax=$("#character").position().left + 200 ;


    if (
        blockLeft<=CharcterMax && blockLeft >= CharacterMin && blockLeft >= -40 && bottomCharacter <=20
    ){
        $("#blocks").css({
            animation: "none", // stop animation
        });
        counter = 0; // endgame
        $("#scoreSpan").html(counter);
        $("#character").addClass("rotated");
        alive = false; // dino's dead, baby. dino's dead.
        $(document).keydown(function (e) {
            if (e.keyCode == 82) { // press "r" to start again
                location.reload();
            }
        });
    }else if (
        blockLeft != CharcterMax&&
        blockLeft != CharacterMin &&
        bottomCharacter >= 20
    ) {
        counter += 1;
        $("#scoreSpan").html(counter);
    }

}


$(document).ready(function () {
    setInterval(deadCheck, 10); // let's run this function every 10ms
});
