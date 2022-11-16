const url = "https://christerolsen.com/odd-tops/wp-json/wp/v2/posts?include=";

const postContainer = document.querySelector("#post-content");
const changeHtmlTitle = document.querySelector(".changeHtmlTitle");
const changeHeaderImg = document.querySelector("#logoContainer");

const loader = document.querySelector(".loader");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const apiURL = url + id + "&_embed";

async function fetchPost() {
  try {
    const response = await fetch(apiURL);
    const details = await response.json();

    console.log(details);

    createHTML(details);
  } catch (error) {
    console.log(error, "Error fetching API");
    introContainer.innerHTML = "<h1>Error!</h1>";
  }
}

fetchPost();

function createHTML(details) {
  loader.style = "display:none;";
  changeHtmlTitle.innerHTML = `Odd Tops | ${details[0].title.rendered}`;
  changeHeaderImg.style = `background:url(${details[0]._embedded["wp:featuredmedia"][0].source_url}) no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;`;
  postContainer.innerHTML = `<h1>${details[0].title.rendered}</h1>
    <img class="featured-img" src="${details[0]._embedded["wp:featuredmedia"][0].source_url}" alt="${details[0]._embedded["wp:featuredmedia"][0].alt_text}"/>
    ${details[0].content.rendered}`;
}
