// script.js

// LOADER

window.addEventListener("load", () => {

  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";

    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 800);

  }, 1800);

});


// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){
      element.classList.add("active");
    }

  });

});


// PARALLAX EFFECT

window.addEventListener("mousemove", (e) => {

  document.querySelectorAll(".floating").forEach((shape, index) => {

    let speed = (index + 1) * 0.01;

    let x = (window.innerWidth - e.pageX * speed) / 100;
    let y = (window.innerHeight - e.pageY * speed) / 100;

    shape.style.transform = `translate(${x}px, ${y}px)`;
  });

});


// CONTACT FORM

document.querySelector(".contact-form")
.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Message Sent Successfully!");

});