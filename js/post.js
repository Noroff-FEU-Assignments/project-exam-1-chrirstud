const url = "https://christerolsen.com/odd-tops/wp-json/wp/v2/posts?include=";

const postContainer = document.querySelector("#post-content");
const changeHtmlTitle = document.querySelector(".changeHtmlTitle");

const loader = document.querySelector(".loader");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const apiURL = url + id + "&_embed";

async function fetchPost() {
  try {
    const response = await fetch(apiURL);
    const details = await response.json();

    //console.log(details);

    createHTML(details);
  } catch (error) {
    console.log(error, "Error fetching API");
  }
}

fetchPost();

function createHTML(details) {
  loader.style = "display:none;";
  changeHtmlTitle.innerHTML = `Odd Tops | ${details[0].title.rendered}`;
  postContainer.innerHTML = `<h1>${details[0].title.rendered}</h1>${details[0].content.rendered}`;

  //console.log(details[0].content.rendered);
}

//<img class="featured-img" src="${details[0]._embedded["wp:featuredmedia"][0].source_url}" alt="${details[0]._embedded["wp:featuredmedia"][0].alt_text}"/>
