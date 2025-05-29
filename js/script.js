// const burger = document.getElementById("burgerBtn");
// const navMenu = document.getElementById("navMenu");

// burger.addEventListener("click", () => {
//   burger.classList.toggle("active");
//   navMenu.classList.toggle("active");
//   document.body.classList.toggle("menu-open");
// });

// document.addEventListener("click", (e) => {
//   if (!navMenu.contains(e.target) && !burger.contains(e.target)) {
//     burger.classList.remove("active");
//     navMenu.classList.remove("active");
//     document.body.classList.remove("menu-open");
//   }
// });

const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mobileNav");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });