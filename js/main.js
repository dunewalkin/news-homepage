const primaryNav = document.querySelector (".primary-navigation");
const navToggle = document.querySelector (".mobile-nav-toggle");
const overlay = document.querySelector ('.overlay');

navToggle.addEventListener('click', ()  => {
   const visibility = primaryNav.getAttribute("data-visible");
   
   if (visibility === "false") {
      primaryNav.setAttribute ("data-visible", true);
      navToggle.setAttribute ("aria-expanded", true);
      overlay.setAttribute ("overlay-visible", true);
   } else if (visibility === "true") {
      primaryNav.setAttribute ("data-visible", false);
      navToggle.setAttribute ("aria-expanded", false);
      overlay.setAttribute ("overlay-visible", false);
   }
});  