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
  //A list of font-awesome icons representing skills
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
    "<div class='jumbotron' id='about-jumbo'><div class='backboard'>" +
      "<div class='col-md-3'><img src='./assets/images/headshot.jpg' alt='picture of Jon Deavers' id='headshot'></div>" +
      "<div class='col-md-8' id='text-column'><p id='about-text'>" +
      "Jon is a student enrolled in the Full-Stack Web Development boot camp at Univeristy of Richmond. Originally from Orange, VA he has been a Henrico resident since 2011. Currently, Jon is a Realtor and helps Richmonders buy and sell homes. His goals include utilizing his development skills to solve problems for real estate professionals. He brings the customer service focused mindset of a sales expert with 18 years of experience to the field of web development." +
      "</p>" +
      "<hr><div class='row'><h4 class='col-sm-12'>Tool Box</h4></div>" +
      "<div class='row'><ul class='col-sm-12' id='tool-box-list'>" +
      "</ul></div></div></div></div>"
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
    "<div class='jumbotron' id='portfolio-jumbo'><div class='container-fluid backboard' id='portfolio-backboard'>"+
    "</div></div>"

  );

  for (let i = 0; i < portfolioItem.length; i++) {
    $("#portfolio-backboard").append(
      "<a href='"+
      portfolioItem[i].link +
      "'><div class='row portfolio-item' id='portfolio-item-"+
      i +
      "'><div class='col-md-12 portfolio-box'><h4>"+
      portfolioItem[i].name +
      "</h4><hr><p>"+
      portfolioItem[i].description +
      "</p></div></div></a>"
  )
    $("#portfolio-item-"+i).css("background-image", "url("+
    portfolioItem[i].pic +
    ")")
  }

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
