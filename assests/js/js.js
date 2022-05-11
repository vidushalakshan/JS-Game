var counter = 0;
var alive = true;
var CharacterMin;
var CharcterMax;
var CharcterLeft = 0;

$(document).keydown(function (e) {
    CharacterMin = $("#character").position().left;

    if (e.keyCode == 32 && alive) {
        $("#character").addClass("animate");
        setTimeout(function () {
            $("#character").removeClass("animate");
        }, 400);
    } else if (e.keyCode == 39 && alive) {
        CharcterLeft += 10;
        $("#character").css({
            left: CharcterLeft + "px",
        });
    } else if (e.keyCode == 37 && alive && CharacterMin >= 0) {
        CharcterLeft -= 10;
        $("#character").css({
            left: CharcterLeft + "px"
        });
    }
});