// LOADER

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 2200);

});

// MENU

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () => {
  menuOverlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menuOverlay.classList.remove("active");
});

// PAGE SWITCHING

const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll("[data-section]");

function openPage(id){

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  menuOverlay.classList.remove("active");
}

navLinks.forEach(link => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    const target = link.dataset.section;

    openPage(target);

  });

});

// BACK HOME

document.querySelectorAll(".back-home").forEach(btn => {

  btn.addEventListener("click", () => {

    openPage("home");

  });

});

// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

// PARALLAX EFFECT

document.addEventListener("mousemove", (e) => {

  const x = (window.innerWidth / 2 - e.pageX) / 50;
  const y = (window.innerHeight / 2 - e.pageY) / 50;

  document.querySelectorAll(".bg-orb").forEach(orb => {

    orb.style.transform = `translate(${x}px, ${y}px)`;

  });

});

// FORM

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message Sent!");

});