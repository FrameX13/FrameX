// MENU

function toggleMenu(){

  document
    .getElementById("menu")
    .classList
    .toggle("active");

}

// PAGE SWITCHING

function openPage(pageId){

  // CLOSE MENU
  document
    .getElementById("menu")
    .classList
    .remove("active");

  // REMOVE ACTIVE
  document
    .querySelectorAll(".page")
    .forEach(page => {
      page.classList.remove("active");
    });

  // OPEN PAGE
  document
    .getElementById(pageId)
    .classList
    .add("active");

}

// CONTACT FORM

document
.querySelector(".contact-form")
.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Message Sent Successfully!");

});