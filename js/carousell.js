//Scroll posts on button click

const buttonRight = document.querySelector("button#slideRight");
const buttonLeft = document.querySelector("button#slideLeft");
const latestPosts = document.querySelector(".latestPosts");
const featuredPosts = document.querySelector(".featuredPosts");

buttonRight.onclick = function () {
  latestPosts.scrollLeft += 300;
};

buttonLeft.onclick = function () {
  latestPosts.scrollLeft -= 300;
};
