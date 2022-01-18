/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
for (section of sections) {
  const navItem = document.createElement('li');
  const anchor = document.createElement('a');
  navItem.appendChild(anchor);
  anchor.textContent = section.getAttribute('data-nav');
  const sectionId = section.getAttribute('id');
  anchor.setAttribute('href',`#${sectionId}`);
  anchor.classList.add('menu__link');
  fragment.appendChild(navItem);
}
navBar.appendChild(fragment);
const icon = document.createElment('li');
icon.innerHTML = '<a href="javascript:void(0);" class="icon" onclick="navIcon()"><i class="fa fa-bars"></i></a>';
navBar.appendChild(icon);

function navIcon() {
  if (navBar.className === "navbar__list") {
    navBar.className += " responsive";
  }
  else {
    navBar.className = "navbar__list";
  }
}

// Add class 'active' to section when near top of viewport

const navItems = document.querySelectorAll('a');
window.addEventListener('scroll', function toggleActiveState(event) {
  let secPos = section.getBoundingClientRect();
  for (section of sections) {
    if (secPos.top <= 0 && secPos.bottom > 0) {
      section.classList.remove('active');
      section.classList.add('active');
      for (navItem of navItems) {
        navItem.classList.remove('active-link');
        if (navItem.textContent === section.getAttribute('data-nav')) {
          navItem.classList.add('active-link');
        }
        else {
          navItem.classList.remove('active-link');
        }
      }
    }
    else {
      section.classList.remove('active');
    }
  }
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
