const container = document.getElementById("blog-container");
const loader = document.getElementById("loader");

let page = 1;
let loading = false;

// Fetch posts (10 per page)
async function fetchPosts() {
  if (loading) return;
  loading = true;
  loader.style.display = "block";

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );
  const posts = await res.json();

  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
    container.appendChild(postEl);
  });

  loader.style.display = "none";
  loading = false;
}

// IntersectionObserver for infinite scroll
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !loading) {
      page++;
      fetchPosts();
    }
  },
  { threshold: 0.1 }
);

observer.observe(loader);

// Initial load
fetchPosts();
