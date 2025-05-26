const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burgerBtn.classList.toggle("active");


  if (navMenu.classList.contains("active")) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
});


document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-open")) {
    navMenu.classList.remove("active");
    burgerBtn.classList.remove("active");
    document.body.classList.remove("menu-open");
  }
});




