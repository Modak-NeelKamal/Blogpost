document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggleBtn");
  const searchInput = document.getElementById("searchInput");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      content.classList.toggle("hidden");
      button.textContent = content.classList.contains("hidden")
        ? "Read More"
        : "Read Less";
    });
  });

  searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    const posts = document.querySelectorAll(".blog-post");

    posts.forEach((post) => {
      const title = post.querySelector("h2").textContent.toLowerCase();
      post.style.display = title.includes(filter) ? "" : "none";
    });
  });
});
