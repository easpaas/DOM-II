// .logo-heading selector
const logo = document.querySelector('.logo-heading');

// mouseenter and mouseleave event listeners change color 
logo.addEventListener('mouseenter', event => {
  event.target.style.color = "yellow";
});
logo.addEventListener('mouseleave', event => {
  event.target.style.color = "black";
});


