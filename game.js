var started = false;
var totalturnsplayed = 0;
var turn = 1;
var gameover = false;
var player1 = "X";
var player2 = "O";
function playsound(name) {
  var randsou = "sounds/" + name + ".mp3";
  var sound = new Audio(randsou);
  sound.play();
}
function fadeout() {
  $(this).addClass("pressed");
  setTimeout(function () {
    $(this).removeClass("pressed");
  }, 100);}
function startover() {
  setTimeout(function () {
    $(".heading").text("Press Any Key To Restart");
    $(".cell").text("");
  }, 1200);
  started = false;
  turn = 1;
  totalturnsplayed = 0;
  $(".cell").off("click");
}
$(document).on("keydown", function () {
  if (!started) {
    started = true;
    gameover=false;
    playsound("wrong");
    $(".heading").text();
    nextgame();
    $(".heading").text("X Turn");
  }
});
function nextgame() {
  $(".cell").on("click", function () {
    var currentbtn=$(this).attr("id");
    $(this).addClass("pressed");
    setTimeout(function () {
      $("#"+currentbtn).removeClass("pressed");
    }, 100);
    if ($(this).text() === "") {
      totalturnsplayed++;
      console.log(totalturnsplayed);
      if (turn == 1) {
        $(this).append(player1);
        checkwin(player1, totalturnsplayed);
        playsound(player1);
        if (!gameover) {
          $(".heading").text("O Turn");
        }
        turn = 0;
      } else {
        $(this).append(player2);
        checkwin(player2, totalturnsplayed);
        playsound(player2);
        if (!gameover) {
          $(".heading").text("X Turn");
        }
        turn = 1;
      }
    }
  });
}
function checkwin(player, turns) {
  //row check
  if (
    $("#one").text() === $("#two").text() &&
    $("#two").text() === $("#three").text() &&
    $("#one").text() !== ""
  ) {
    gameover = true;
    $(".heading").text(player + " Wins🚩");
    startover();
    return;
  } else if (
    $("#four").text() === $("#five").text() &&
    $("#five").text() === $("#six").text() &&
    $("#four").text() !== ""
  ) {
    gameover = true;
    $(".heading").text(player + " Wins🚩");
    startover();
    return;
  } else if (
    $("#seven").text() === $("#eight").text() &&
    $("#eight").text() === $("#nine").text() &&
    $("#seven").text() !== ""
  ) {
    gameover = true;
    $(".heading").text(player + " Wins🚩");
    startover();
    return;
  }
  //diagnol check
  else if (
    $("#one").text() === $("#five").text() &&
    $("#five").text() === $("#nine").text() &&
    $("#one").text() !== ""
  ) {
    gameover = true;
    $(".heading").text(player + " Wins🚩");
    startover();
    return;
  } else if (
    $("#three").text() === $("#five").text() &&
    $("#five").text() === $("#seven").text() &&
    $("#three").text() !== ""
  ) {
    gameover = true;
    $(".heading").text(player + " Wins🚩");
    startover();
    return;
  }
  //column check
  else if (
    $("#one").text() === $("#four").text() &&
    $("#four").text() === $("#seven").text() &&
    $("#one").text() !== ""
  ) {
    gameover = true;
    $(".heading").text(player + " Wins🚩");
    startover();
    return;
  } else if (
    $("#two").text() === $("#five").text() &&
    $("#five").text() === $("#eight").text() &&
    $("#two").text() !== ""
  ) {
    gameover = true;
    $(".heading").text(player + " Wins🚩");
    startover();
    return;
  } else if (
    $("#three").text() === $("#six").text() &&
    $("#six").text() === $("#nine").text() &&
    $("#three").text() !== ""
  ) {
    gameover = true;
    $(".heading").text(player + " Wins🚩");
    startover();
    return;
  } else if (turns === 9 && !gameover) {
    gameover = true;
    $(".heading").text("Draw!");
    startover();
    return;
  }
}
