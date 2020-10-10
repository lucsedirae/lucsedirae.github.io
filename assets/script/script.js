//Global variables
var menuList = ["About", "Portfolio", "Words", "Contact"];
var loopBegan = 0;

//Script begin
Init();

function Init() {
  for (var i = 0; i < menuList.length; i++) {
    $("#menu-list").append(
      $("<li class='menu-item' id='navBtn" + i + "'>" + menuList[i] + "</li>")
    );
  }
  colorChange();
  listeners();
}

function aboutAnimation() {
  anime({
    targets: "#about-jumbo",
    translateX: -1900,
    duration: 2000,
  })
}

function contactAnimation() {
  anime({
    targets: "#contact-jumbo",
    translateY: 1600,
    duration: 2000,
  })
}

function portfolioAnimation() {
  anime({
    targets: "#portfolio-jumbo",
    translateY: 1500,
    duration: 2000,
  })
}

function wordsAnimation() {
  anime({
    targets: "#words-jumbo",
    translateX: -1900,
    duration: 2000,
  })
}

function listeners() {
  $("#navBtn0").click(function () {
    $("#about-jumbo").hide().css({"visibility": "visible", "right": "-100rem"}).fadeIn(200);
    aboutAnimation();
    $("#portfolio-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#contact-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#words-jumbo").css("visibility", "hidden").fadeOut(800);
  });

  $("#navBtn1").click(function () {
    $("#portfolio-jumbo").hide().css({"visibility": "visible", "top": "-100rem"}).fadeIn(200);
    portfolioAnimation();
    $("#about-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#contact-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#words-jumbo").css("visibility", "hidden").fadeOut(800);
  });

  $("#navBtn2").click(function () {
    $("#words-jumbo").hide().css({"visibility": "visible", "right": "-100rem"}).fadeIn(200);
    wordsAnimation();
    $("#portfolio-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#about-jumbo").css("visibility", "hidden").fadeOut(800);
    $("#contact-jumbo").css("visibility", "hidden").fadeOut(800);
  });

  $("#navBtn3").click(function () {
    $("#contact-jumbo").hide().css({"visibility":"visible", "top": "-100rem"}).fadeIn(200);
    contactAnimation();
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
