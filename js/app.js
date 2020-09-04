const showNav = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".nav-list");

  burger.addEventListener("click", () => {
    navList.classList.toggle("nav-show");
    console.log("Been clicked");
  });
};

showNav();

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  const position = window.pageYOffset;

  if (position > 600) nav.classList.add("black");
  else nav.classList.remove("black");
});
