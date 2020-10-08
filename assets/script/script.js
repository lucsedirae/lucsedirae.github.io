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

anime.timeline({
  loop: true,
})
.add({
  targets: "#my-name",
  delay: 1000,
  duration: 6000,
  color: "rgb(172, 143, 250)",
})
.add({
  targets: "#my-name",
  delay: 500,
  duration: 8000,
  color: "rgb(255, 255, 255)",
})

anime.timeline({
  loop: true,
})
.add({
  targets: "#navBtn0",
  delay: 3000,
  duration: 2000,
  color: "rgb(240, 230, 140)",
})
.add({
  targets: "#navBtn0",
  delay: 500,
  duration: 3000,
  color: "rgb(255, 255, 255)",
})

anime.timeline({
  loop: true,
})
.add({
  targets: "#navBtn1",
  delay: 5000,
  duration: 3000,
  color: "rgb(216, 112, 147)",
})
.add({
  targets: "#navBtn1",
  delay: 500,
  duration: 5000,
  color: "rgb(255, 255, 255)",
})

anime.timeline({
  loop: true,
})
.add({
  targets: "#navBtn2",
  delay: 6000,
  duration: 3000,
  color: "rgb(135, 206, 235)",
})
.add({
  targets: "#navBtn2",
  delay: 500,
  duration: 2000,
  color: "rgb(255, 255, 255)",
})

anime.timeline({
  loop: true,
})
.add({
  targets: "#navBtn3",
  delay: 4500,
  duration: 3000,
  color: "rgb(152, 251, 152)",
})
.add({
  targets: "#navBtn3",
  delay: 500,
  duration: 5000,
  color: "rgb(255, 255, 255)",
})