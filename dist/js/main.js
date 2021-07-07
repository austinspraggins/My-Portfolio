const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}
document.write(new Date().getTime());

  // Create a JavaScript Date object for the current date and time, and set the desired options.
  var date = new Date(),
      options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };

  // Convert to locale string and add a locale and the options
  date = date.toLocaleString( "en-US", options );

  // Output the date to the above HTML element
  document.getElementById("msg").innerHTML = date;
