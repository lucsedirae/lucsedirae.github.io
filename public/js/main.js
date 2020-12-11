//* --Global variables--
//* DOM anchors
const contactBtn = $(".contact-btn");
const aboutBtn = $(".about-btn");
const portfolioBtn = $(".portfolio-btn");
const wordsBtn = $(".words-btn");
const homeBtn = $(".home-btn")

//* --Initializes page to prevent irregular loading in browser--
$(document).ready(() => {
  //* Click listeners
  contactBtn.on("click", () => {
    window.location.replace("/contact");
  });
  aboutBtn.on("click", () => {
    window.location.replace("/about");
  });
  portfolioBtn.on("click", () => {
    window.location.replace("/portfolio");
  });
  wordsBtn.on("click", () => {
    window.location.replace("/words");
  });
  homeBtn.on("click", () => {
    window.location.replace("/");
  })
});
