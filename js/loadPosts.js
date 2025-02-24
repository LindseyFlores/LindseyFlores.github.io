document.addEventListener("DOMContentLoaded", function () {
    fetch("https://lindseyflores.github.io/data/posts.json")
        .then(response => response.json())
        .then(posts => {
            const blogContainer = document.getElementById("blog-posts");

            posts.forEach(post => {
                const postHTML = `
                    <div>
                        <div class="card">
                            <img src="${post.image}" alt="${post.title}">
                            <div class="card-body">
                                <h5 class="card-title">${post.title}</h5>
                                <p class="card-date"> ${post.date}</p>
                                <p class="card-description">${post.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                blogContainer.innerHTML += postHTML;
            });
        })
        .catch(error => console.error("Error loading blog posts:", error));
});
