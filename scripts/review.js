const reviewCount = localStorage.getItem('reviewCount') || 0;
localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);

const count = Number(reviewCount) || 0;
const newCount = count + 1;

localStorage.setItem("reviewCount", newCount);

const reviewDisplay = document.querySelector("#reviewCount");
reviewDisplay.textContent = newCount;