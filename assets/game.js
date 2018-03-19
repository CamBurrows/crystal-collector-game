var win = 0;
var lose = 0;
var playerscore;
var targetscore;
var gem1;
var gem2;
var gem3;
var gem4;


function logger () {
    console.log ("wins: " + win);
    console.log ("losses: " + lose);
    console.log ("player score: " + playerscore);
    console.log ("target score: " + targetscore);
    console.log (gem1 + ", " + gem2 + ", " + gem3 + ", " + gem4);
    console.log ("-----------------");
}

function restart() {
    $(".player-score").removeClass();
    playerscore = 0;
    targetscore = Math.floor((Math.random() * 182) + 19);
    gem1 = Math.floor((Math.random() * 12) + 1);
    gem2 = Math.floor((Math.random() * 12) + 1);
    gem3 = Math.floor((Math.random() * 12) + 1);
    gem4 = Math.floor((Math.random() * 12) + 1);
    $("#player-score").html("<h2>" + playerscore + "</h2>");
    $(".targetnumber").html("<h2>" + targetscore + "</h2>");
    logger ();
}

$(document).ready(function() {
    restart ();

    //included conditionals inside each click function, I was having trouble getting them to trigger outside of them.
    $("#gem1").on("click",function(){
        playerscore += gem1;
        $("#player-score").html("<h2>" + playerscore + "</h2>");
        logger ();

        if (playerscore === targetscore) {
            win++;
            $("#wins").html("<h2>Wins: " + win + "</h2>");
            $("#player-score").addClass();
            restart();
        }
    
        if (playerscore > targetscore) {
            lose++;
            $("#loss").html("<h2>Losses: " + lose + "</h2>");
            $("#player-score").addClass();
            restart();
        }
    });

    $("#gem2").on("click",function(){
        playerscore += gem2;
        $("#player-score").html("<h2>" + playerscore + "</h2>");
        logger ();

        if (playerscore === targetscore) {
            win++;
            $("#wins").html("<h2>Wins: " + win + "</h2>");
            $("#player-score").addClass();
            restart();
        }
    
        if (playerscore > targetscore) {
            lose++;
            $("#loss").html("<h2>Losses: " + lose + "</h2>");
            $("#player-score").addClass();
            restart();
        }
    });

    $("#gem3").on("click",function(){
        playerscore += gem3;
        $("#player-score").html("<h2>" + playerscore + "</h2>");
        logger ();

        if (playerscore === targetscore) {
            win++;
            $("#wins").html("<h2>Wins: " + win + "</h2>");
            $("#player-score").addClass();
            restart();
        }
    
        if (playerscore > targetscore) {
            lose++;
            $("#loss").html("<h2>Losses: " + lose + "</h2>");
            $("#player-score").addClass();
            restart();
        }
    });

    $("#gem4").on("click",function(){
        playerscore += gem4;
        $("#player-score").html("<h2>" + playerscore + "</h2>");
        logger ();

        if (playerscore === targetscore) {
            win++;
            $("#wins").html("<h2>Wins: " + win + "</h2>");
            $("#player-score").addClass();
            restart();
        }
    
        if (playerscore > targetscore) {
            lose++;
            $("#loss").html("<h2>Losses: " + lose + "</h2>");
            $("#player-score").addClass();
            restart();
        }
    });

});



