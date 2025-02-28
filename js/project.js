const GITHUB_USERNAME = "LindseyFlores";
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;


async function fetchGitHubProjects() {
    try {
        const response = await fetch(API_URL);
        const repositories = await response.json();

        const projectsContainer = document.getElementById("projects-container");
        projectsContainer.innerHTML = "";

        repositories.forEach(repo => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");

            projectCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ? repo.description : "No description available."}</p>
                <p><strong>Language:</strong> ${repo.language || "Not specified"}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;

            projectsContainer.appendChild(projectCard);
        });

    } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
    }
}

fetchGitHubProjects();
