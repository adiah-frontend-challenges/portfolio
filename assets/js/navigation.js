const nav = document.getElementById("primary-navigation");
const navToggle = document.getElementById("nav-toggle");
const body = document.querySelector("body");

navToggle.onclick = () => {
  const visibility = nav.dataset.visible;

  if (visibility === "false") {
    nav.dataset.visible = "true";
    navToggle.setAttribute("aria-expanded", true);
    body.classList.add("noscroll");
  } else {
    nav.dataset.visible = "false";
    navToggle.setAttribute("aria-expanded", false);
    body.classList.remove("noscroll");
  }
};
