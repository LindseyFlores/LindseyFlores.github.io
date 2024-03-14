const usernameInput = document.getElementById('username');
const fetchButton = document.getElementById('fetchRepos');
const repoContainer = document.getElementById('repoContainer');

// Function to fetch repositories for a given GitHub username
function fetchRepositories() {
    const username = usernameInput.value.trim(); // Get the username from the input field
    if (!username) {
        alert("Must enter a GitHub username to searh for their repositories");
        return; 
    }
    
    const apiUrl = `https://api.github.com/users/${username}/repos`; // Construct the GitHub API URL

    fetch(apiUrl) // Make the request to the GitHub API
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json(); // Parse response body as JSON
        })
        .then(data => {
            displayRepositories(data); // array of repositories
        })
        .catch(error => {
            console.error('Fetching failed:', error);
            repoContainer.innerHTML = `<p> Possibly inputted the wrong username, please re-check and re-enter </p>`;
        });
}

//Displaying the found repository's details in HTML container
function displayRepositories(repos) {
    repoContainer.innerHTML = ''; // Clear previous information
    repos.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.className = 'repo';
        repoElement.innerHTML = `
            <div class="repo-header">
                <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
            </div>
            <div class="repo-body">
                <p>${repo.description || 'No description available'}</p>
            </div>
            <div class="repo-footer">
                <span>Created on: ${new Date(repo.created_at).toLocaleDateString()}</span>
                <span>Language: ${repo.language || 'Not specified'}</span>
            </div>
        `;
        repoContainer.appendChild(repoElement);
    });
}


//event listener to fetch repositories on button click
fetchButton.addEventListener('click', fetchRepositories);
