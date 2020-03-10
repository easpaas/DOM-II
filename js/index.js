/*
 * mouseenter event listeners change text color to yellow
 */

 // selector for heading logo
const logo = document.querySelector('.logo-heading');

// event listener
logo.addEventListener('mouseenter', event => {
  event.target.style.color = "yellow";
});


/*
 * mouseleave event listeners change text color to black
 */

// event listener
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


/*
 * wheel event listener scales bus image
 */

// event listener
busImage.addEventListener('wheel', event => {
  let scale = 1;
  scale += event.deltaY * -0.01;
  // restrict scale
  scale = Math.min(Math.max(.125, scale), 4);
  // apply scale transform
  busImage.style.transform = `scale(${scale})`;
})


/*
 *  event listener
 */

// add load event listener
// add focus event listener
// add click event listener for button