//Global variables
var menuList = ["About", "Portfolio", "Words", "Contact"];

//Script begin
Init();

function Init() {
  for (var i = 0; i < menuList.length; i++) {
    $("#menu-list").append(
      $("<li class='menu-item' id='navBtn" + i + "'>" + menuList[i] + "</li>")
    );
  }
  listeners();
}

function listeners() {
  $("#navBtn0").click(function () {
    $("#about-jumbo").hide().css("visibility", "visible").fadeIn(800);
    $("#portfolio-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#contact-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#words-jumbo").css("visibility", "hidden").fadeOut(800);
  });

  $("#navBtn1").click(function () {
    $("#portfolio-jumbo").hide().css("visibility", "visible").fadeIn(800);
    $("#about-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#contact-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#words-jumbo").css("visibility", "hidden").fadeOut(800);
  });

  $("#navBtn2").click(function () {
    $("#words-jumbo").hide().css("visibility", "visible").fadeIn(800);
    $("#portfolio-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#about-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#contact-jumbo").css("visibility", "hidden").fadeOut(800);
  });

  $("#navBtn3").click(function () {
    $("#contact-jumbo").hide().css("visibility", "visible").fadeIn(800);
    $("#portfolio-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#about-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#words-jumbo").css("visibility", "hidden").fadeOut(800);
  });

  $("#my-name").click(function () {
    $("#contact-jumbo").fadeOut(500);
    $("#portfolio-jumbo").fadeOut(500);
    $("#about-jumbo").fadeOut(500);
    $("#words-jumbo").fadeOut(500);
  });
}
