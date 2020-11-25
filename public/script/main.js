const menuItems = ["About", "Portfolio", "Words", "Contact"];

$(document).ready(init);

function init() {
  $("main").append(
    $(
      `<div class="row" id="menu-row"><div class="col-md-12" id="menu-list"></div></div>`
    )
  );

  for (var i = 0; i < menuItems.length; i++) {
    $("#nav-menu").append(
      $(`<span class='menu-item' id='navBtn${i}'>${menuItems[i]}</span>`)
    );
  }

  //*activates default nav click listeners
  $("#navBtn0").click(populateAbout);
  $("#navBtn1").click(populatePortfolio);
  //   $("#navBtn2").click(populateWords);
  //   $("#navBtn3").click(populateContact);
}

function populateAbout() {
  const toolsArr = ["fab fa-html5", "fab fa-css3-alt"];

  $("#main-content").empty();
  $("#main-content")
    .append(
      $(`
      
      <div class="row justify-content-center">
      <div class="col-md-12 main-hero">
        <!-- *About header -->
        <div class="row">
          <div class="col-md-3">
            <h1 class="display-6 about-header">Jon Deavers</h1>
            <p class="lead">Full-stack web developer</p>    
          </div>
        </div>
        <!-- *About paragraph -->
        <div class="row">
          <div class="col-md-12">
            <hr class="my-4">
            <p>Jon is a student enrolled in the Full-Stack Web Development boot camp at Univeristy of Richmond. Originally from Orange, VA he has been a Henrico resident since 2011. Currently, <a href="http://jondeavers.com" target="_blank">Jon is a Realtor</a> and helps Richmonders buy and sell homes. His goals include utilizing his development skills to solve problems for real estate professionals. He brings the customer service focused mindset of a sales expert with 18 years of experience to the field of web development.</p>
          </div>
        </div>
        <!-- *About toolbox -->
        <div class="row justify-content-center">
          <div class="col-md-12">
            <hr class="my-4">
            <h1 class="display-6 about-header">Tools</h1>
            <p class="lead">Jon is proficient in or currently studying:</p>
          </div>
          <div class="row">
            <div class="col-md-6">
              <ul id="tool-box-1">
              <li>test</li>
              </ul>
            </div>
            <div class="col-md-6" >
              <ul id="tool-box-2">
                <li>test</li>
              </ul>
            </div>
          </div>
        </div></div></div>
      `)
    )
      for (let i = 0; i < toolsArr; i++) {
        $("#tool-box").append(
          $(`
              <li class="${toolsArr[i]}><i class="${toolsArr[i]}"></i></li>
          `)
        );
    };

}

function populatePortfolio() {}