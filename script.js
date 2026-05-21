// LOADER

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {

    loader.classList.add("hide");

  }, 1800);

});

// MENU

const menuBtn = document.getElementById("menuBtn");

const floatingMenu = document.getElementById("floatingMenu");

menuBtn.addEventListener("click", () => {

  floatingMenu.classList.toggle("active");

  menuBtn.classList.toggle("active");

});

// PAGE SWITCHING

const pages = document.querySelectorAll(".page");

const navLinks = document.querySelectorAll("[data-section]");

function openPage(id){

  pages.forEach(page => {

    page.classList.remove("active");

  });

  document.getElementById(id).classList.add("active");

  floatingMenu.classList.remove("active");

  menuBtn.classList.remove("active");

}

navLinks.forEach(link => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    const target = link.dataset.section;

    openPage(target);

  });

});

// BACK HOME BUTTON

document.querySelectorAll(".back-home").forEach(btn => {

  btn.addEventListener("click", () => {

    openPage("home");

  });

});

// CURSOR

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";

  cursor.style.top = e.clientY + "px";

});

// PARALLAX EFFECT

document.addEventListener("mousemove", (e) => {

  const x = (window.innerWidth / 2 - e.pageX) / 60;

  const y = (window.innerHeight / 2 - e.pageY) / 60;

  document.querySelectorAll(".bg-orb").forEach(orb => {

    orb.style.transform =
    `translate(${x}px, ${y}px)`;

  });

});

// CONTACT FORM

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Message Sent!");

});