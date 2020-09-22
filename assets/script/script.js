//Global variables
var menuList = ["About", "Portfolio", "Contact"]

//Script begin
Init();

function Init() {


    for (var i = 0; i < menuList.length; i++){
        $("#menu-list").append($("<li class='menu-item' id='navBtn"+i+"'>"+ menuList[i] +"</li>"));
        };
    listeners();
    }

function listeners() {

    $("#navBtn0").click(function(){
        $("#about-jumbo").hide().css("visibility", "visible").fadeIn(800);
        $("#portfolio-jumbo").css("visibility", "hidden").fadeOut(800);
        $("#contact-jumbo").css("visibility", "hidden").fadeOut(800);
      });

      $("#navBtn1").click(function(){
        $("#portfolio-jumbo").hide().css("visibility", "visible").fadeIn(800);
        $("#about-jumbo").css("visibility", "hidden");
        $("#contact-jumbo").css("visibility", "hidden");
      });

      $("#navBtn2").click(function(){
        $("#contact-jumbo").hide().css("visibility", "visible").fadeIn(800);
        $("#portfolio-jumbo").css("visibility", "hidden");
        $("#about-jumbo").css("visibility", "hidden");
      });

      $("#my-name").click(function(){
        $("#contact-jumbo").fadeOut(500);
        $("#portfolio-jumbo").fadeOut(500);
        $("#about-jumbo").fadeOut(500);
      });
};    