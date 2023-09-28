const slider = document.querySelector('.slider');
let scrollAmount = 0;

function slide(direction) {
  const boxWidth = slider.getBoundingClientRect().width / 3; // 3 boxes in this example
  scrollAmount += direction * boxWidth;
  slider.style.transform = `translateX(${-scrollAmount}px)`;
}

// Example usage of slide function
document.querySelector('#prev-btn').addEventListener('click', () => slide(1)); // Slide to the previous box
document.querySelector('#next-btn').addEventListener('click', () => slide(-1)); // Slide to the next box
