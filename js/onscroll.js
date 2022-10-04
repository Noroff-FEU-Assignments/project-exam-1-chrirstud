//This script is transforming the header to a smaller version on scroll

//const header = document.querySelector(".header-wrapper");
const logo = document.querySelector(".header-logo");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //header.style.textAlign = "left";
    logo.src = "/img/logos/icon_only/odd-tops_logo_color_icon-only.png";
    logo.width = "75";
  } else {
    //header.style.textAlign = "inherit";
    logo.src = "/img/logos/25percent_cropped/odd-tops_logo_color-25.png";
    logo.width = "200";
  }
}
