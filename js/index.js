/*
 * mouseenter and mouseleave event listeners change text color
 */

 // selector for heading logo
const logo = document.querySelector('.logo-heading');

// event listeners
logo.addEventListener('mouseenter', event => {
  event.target.style.color = "yellow";
});
logo.addEventListener('mouseleave', event => {
  event.target.style.color = "black";
});


/*
 * mouseover event listener to each nav link
 */

// selector for nav links
const link = document.querySelectorAll('.nav-link');

// event listeners
link.forEach(link => {
    link.addEventListener('mouseover', event => {
        event.target.style.color = "yellow";
    });
});

/*
 * keydown event listener stores key pressed in an array
 */

// initalize a new array
const keyArray = [];

// event listener
document.addEventListener('keydown', event => {
  keyArray.push(event.code);
  console.log(keyArray);
});


/*
 * dblclick event listener on bus image makes it change src paths
 */

// selector for bus image
const busImage = document.querySelector('.intro img');

// event listener
busImage.addEventListener('dblclick', event => {
  event.target.src = "img/vw_bus.jpg";
  event.target.setAttribute('alt', "vw bus");
});

// add drag/drop event listener
// add load event listener
// add focus event listener
// add click event listener for button