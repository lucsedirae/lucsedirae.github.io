//Global variables
var menuList = ["About", "Portfolio", "Words", "Contact"];
var loopBegan = 0;

//Script begin
$(document).ready(Init);

function Init() {
  for (var i = 0; i < menuList.length; i++) {
    $("#menu-list").append(
      $("<li class='menu-item' id='navBtn" + i + "'>" + menuList[i] + "</li>")
    );
  }
  colorChange();
  // The below activates listeners for the nav menu
  $("#navBtn0").click(populateAbout);
  $("#navBtn1").click(populatePortfolio);
  $("#navBtn2").click(populateWords);
  $("#navBtn3").click(populateContact);
  $("#my-name").click(function () {
    $("#contact-jumbo").fadeOut(500);
    $("#portfolio-jumbo").fadeOut(500);
    $("#about-jumbo").fadeOut(500);
    $("#words-jumbo").fadeOut(500);
  });
}

function populateAbout() {
  const toolIconList = [
    "fab fa-html5 fa-4x",
    "fab fa-css3-alt fa-4x",
    "fab fa-bootstrap fa-4x",
    "fab fa-js-square fa-4x",
    "fab fa-react fa-4x",
    "fab fa-node-js fa-4x",
  ];

  $("main").empty();
  $("main").append(
    "<div class='jumbotron' id='about-jumbo'><div class='row'><div class ='col-lg-10 backboard'><div class='row'><div class='col-md-3'>" +
      "<img src='./assets/images/headshot.jpg' alt='picture of Jon Deavers' id='headshot'></div>" +
      "<div class='col-md-8' id='text-column'><div class='row'><p>" +
      "Jon is a student enrolled in the Full-Stack Web Development boot camp at Univeristy of Richmond. Originally from Orange, VA he has been a Henrico resident since 2011. Currently, Jon is a Realtor and helps Richmonders buy and sell homes. His goals include utilizing his development skills to solve problems for real estate professionals. He brings the customer service focused mindset of a sales expert with 18 years of experience to the field of web development." +
      "</p></div>" +
      "<hr><div class='row'><h4 class='col-sm-12'>Tool Box</h4></div>" +
      "<div class='row'><ul class='col-sm-12' id='tool-box-list'>" +
      "</ul></div></div></div></div></div></div>"
  );
  toolIconList.forEach(function (item) {
    $("#tool-box-list").append("<li class='" + item + "'></li>");
  });
  $("#about-jumbo")
    .hide()
    .css({ visibility: "visible", right: "-100rem" })
    .fadeIn(200);
  aboutAnimation();
}

function populateContact() {
  $("main").empty();
  $("main").append(
    "<div class='jumbotron' id='contact-jumbo'><div class='row'><div class='col-lg-10 backboard' id='contact-backboard'>" +
      "<div class='row'><div class='col-md-4'><span id='contact-me'>Contact me at: <a href='mailto:jondeavers@gmail.com'>jondeavers@gmail.com</a></span></div>" +
      "<div class='col-md-6' id='social-array'>" +
      "<a href='https://twitter.com/jondeavers'><i class='fab fa-twitter fa-4x' alt='Twitter icon'></i></a>" +
      "<a href='https://github.com/lucsedirae'><i class='fab fa-github fa-4x' alt='GitHub icon'></i></a>" +
      "<a href='https://www.linkedin.com/in/jondeavers/'><i class='fab fa-linkedin-in fa-4x' alt='LinkedIn icon'></i></a>" +
      "</div></div></div></div>"
  );
  $("#contact-jumbo")
    .hide()
    .css({ visibility: "visible", top: "-100rem" })
    .fadeIn(200);
  contactAnimation();
}

function populatePortfolio() {
  $("main").empty();
  $("main").append(
    "<div class='jumbotron' id='portfolio-jumbo'><div id='carouselExampleIndicators' class='carousel slide' data-ride='carousel'>" +
      "<ol class='carousel-indicators'><li data-target='#carouselExampleIndicators' data-slide-to='0' class='active'></li>" +
      "<li data-target='#carouselExampleIndicators' data-slide-to='1'></li></ol>" +
      //additional slides can be added here as li's using same format as above. Iterate data-slide-to value
      //move closing /ol tag to end of new li
      "<div class='carousel-inner'>" +
      "<div class='carousel-item active'><div class='row backboard'><div class='card-deck'>" +
      "<div class='card'>" +
      "<a href='https://lucsedirae.github.io/day-planner/'><img src='./assets/images/dayplanner-screenshot.jpg' class='card-img-bottom' alt='screenshot of a day planner app'></a>" +
      "<div class='card-body'><h5 class='card-title'>Day Planner App</h5>" +
      "<p class='card-text'>This lightweight Day Planner allows you to store appointments locally and return to the app to retrieve your stored list. It utilizes moment.js to track which hour of the day it is currently and color code the appointment list accordingly. It also accesses the user's location and returns the local weather via openweathermap.org open API.</p></div></div>" +
      "<div class='card'>" +
      "<a href='https://lucsedirae.github.io/deep-cuts/'><img src='./assets/images/pitch-screenshot.jpg' class='card-img-bottom' alt='screenshot of music app Pitch'></a>" +
      "<div class='card-body'><h5 class='card-title'>Pitch</h5>" +
      "<p class='card-text'>This app was a group project. It allows music enthusiasts to research and track artists they haven't heard before but want explore their body of work. Pitch offers an array of features drawing from three API's: musicbrainz, bandsintown, and Google's YouTube.</p></div></div>" +
      "<div class='card'>" +
      "<a href='https://lucsedirae.github.io/coding-quiz/'><img src='./assets/images/jsquiz-screenshot.jpg' class='card-img-bottom' alt='screenshot of music app Pitch'></a>" +
      "<div class='card-body'><h5 class='card-title'>JavaScript Quiz</h5>" +
      "<p class='card-text'>This application asks the user a series of questions. Based on the user's answers, questions are marked correct or incorrect and points are awarded or subtracted from a running total. The user will be able to store their name and high scores locally and reference them upon future quizz sessions.</p></div></div>" +
      "</div></div></div>" +
      //begin second card deck slide
      "<div class='carousel-item'><div class='row backboard'><div class='card-deck'>" +
      "<div class='card'>" +
      "<a href='https://lucsedirae.github.io/password-generator/'><img src='./assets/images/pwordgen-screenshot.jpg' class='card-img-bottom' alt='screenshot of a day planner app'></a>" +
      "<div class='card-body'><h5 class='card-title'>Password Generator App</h5>" +
      "<p class='card-text'>This is a random password generator. It allows the user to specify the length of a password and select any of the following types of characters to use; upper case letters, lower case letters, numberic characters, and special characters. It features copy to clipboard functionality as well as a list of links to helpful security focused websites.</p></div></div>" +
      "<div class='card'>" +
      "<a href='https://lucsedirae.github.io/weather-dashboard/'><img src='./assets/images/weather-screenshot.jpg' class='card-img-bottom' alt='screenshot of a day planner app'></a>" +
      "<div class='card-body'><h5 class='card-title'>Touch of Grey Weather Dashboard</h5>" +
      "<p class='card-text'>A Grateful Dead themed weather dashboard. This app allows users to search for a city and display that city's current weather data as well as a 5-day forecast. The list of previously searched cities is persistent and will be saved locally to user's machine allowing for easy reference to prior searches on app load.</p></div></div>" +
      "<div class='card'>" +
      "<img src='./assets/images/underconstruction.jpg' class='card-img-bottom' alt='under construction placeholder image'>" +
      "<div class='card-body'><h5 class='card-title'>New Project Underway</h5>" +
      "<p class='card-text'>This project is under construction. Check back soon to see what Jon has been up to.</p></div></div>" +

      "</div></div></div></div></div>" +
      "<a class='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>" +
      "<span class='fas fa-arrow-circle-left fa-3x left-arrow' aria-hidden='true'></span><span class='sr-only'>Previous</span></a>" +
      "<a class='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>" +
      "<span class='fas fa-arrow-circle-right fa-3x right-arrow' aria-hidden='true'></span><span class='sr-only'>Next</span></a>" +
      //following closing div tag closes out carousel inner
      "</div></div></div>"
  );
  $("#portfolio-jumbo")
    .hide()
    .css({ visibility: "visible", top: "-100rem" })
    .fadeIn(200);
  portfolioAnimation();
}

function populateWords() {
  $("main").empty();
  $("main").append(
    "<div class='jumbotron' id='words-jumbo'><div class='col-md-10'><div class='row'><div class='col-lg-12 backboard'>" +
      "<div class='row'><div class='col-md-2'><a href='https://dev.to/lucsedirae/overthinking-web-development-as-a-beginner-jp0'><i class='fab fa-dev fa-5x words-icon' alt='Dev.to icon'></i></a></div>" +
      "<div class='col-md-8'><span class='words-description'><strong>dev.to</strong> - Overthinking Web Development As A Beginner</span></div></div><hr>" +
      "<div class='row'><div class='col-md-2'><a href='https://dev.to/lucsedirae/keeping-a-portfolio-page-current-while-learning-1bcn'><i class='fab fa-dev fa-5x words-icon' alt='Dev.to icon'></i></a></div>" +
      "<div class='col-md-8'><span class='words-description'><strong>dev.to</strong> - Keeping A Portfolio Page Current While Learning</span></div></div><hr>" +
      "<div class='row'><div class='col-md-2'><a href='https://dev.to/lucsedirae/things-i-learned-working-in-a-group-2abo'><i class='fab fa-dev fa-5x words-icon' alt='Dev.to icon'></i></a></div>" +
      "<div class='col-md-8'><span class='words-description'><strong>dev.to</strong> - Things I Learned While Working In A Group</span></div></div>" +
      "</div></div></div></div>"
  );
  $("#words-jumbo")
    .hide()
    .css({ visibility: "visible", right: "-100rem" })
    .fadeIn(200);
  wordsAnimation();
}