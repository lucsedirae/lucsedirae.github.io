//* --Global variables--
//* DOM anchors
const contactBtn = $("#contact-btn");
const aboutBtn = $("#about-btn");


//* --Initializes page to prevent irregular loading in browser--
$(document).ready(() => {
  //* Click listeners
  contactBtn.on("click", () => {
    window.location.replace("/contact");
  });
  aboutBtn.on("click", () => {
    window.location.replace("/about");
  });
});
