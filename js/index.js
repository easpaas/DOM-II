// selector for heading logo
const logo = document.querySelector('.logo-heading');

// mouseenter and mouseleave event listeners change color 
logo.addEventListener('mouseenter', event => {
  event.target.style.color = "yellow";
});
logo.addEventListener('mouseleave', event => {
  event.target.style.color = "black";
});

// selector for nav links
const link = document.querySelectorAll('.nav-link');

// add mouseover event listener to each nav link
link.forEach(link => {
    link.addEventListener('mouseover', event => {
        event.target.style.color = "yellow";
    });
});

