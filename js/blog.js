const url =
  "https://christerolsen.com/odd-tops/wp-json/wp/v2/posts?per_page=100&_embed";

const blogList = document.querySelector("#blogList");

async function getResults() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    blogList.innerHTML = "";

    console.log(result);

    for (let i = 0; i < result.length; i++) {
      console.log(result[i]._embedded["wp:featuredmedia"][0].source_url);
      console.log(result[i].title.rendered);
      console.log(result[i].tags.length);

      if (i === 5) {
        break;
      }

      blogList.innerHTML += `
      <a href="/pages/post.html?id=${result[i].id}">
        <div 
          class="blogPost"
          style="background-image:
            url(${result[i]._embedded["wp:featuredmedia"][0].source_url})" 
          alt="${result[i]._embedded["wp:featuredmedia"][0].alt_text}">
          <div class="postTitle">
            <h3>${result[i].title.rendered}</h3>
          </div>
        </div>
      </a>`;
    }
  } catch (error) {
    console.log(error, "Error fetching API");
  }
}

getResults();
