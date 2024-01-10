const prev = document.getElementById("dot-1");
const next = document.getElementById("dot-3");
const slideshow = document.getElementById("slideshow-container");

prev.addEventListener("click", () => {
  slideshow.scrollLeft;
});

next.addEventListener("click", () => {
  slideshow.scrollLeft;
});

prev.onclick = () => {
  document.getElementById("slideshow-container").scrollLeft += 20;
};
