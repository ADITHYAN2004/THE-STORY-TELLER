const container = document.getElementById('card-container');
const leftArrow = document.getElementById('scroll-left');
const rightArrow = document.getElementById('scroll-right');

// Scroll to the left when the user clicks on the left arrow
leftArrow.addEventListener('click', () => {
  container.scrollBy({
    left: -200, // Adjust this value to control the amount of scroll
    behavior: 'smooth'
  });
});

// Scroll to the right when the user clicks on the right arrow
rightArrow.addEventListener('click', () => {
  container.scrollBy({
    left: 200, // Adjust this value to control the amount of scroll
    behavior: 'smooth'
  });
});
